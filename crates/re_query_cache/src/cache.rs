use std::{
    collections::{BTreeMap, VecDeque},
    ops::{Range, RangeInclusive},
    sync::{atomic::AtomicBool, Arc},
};

use ahash::HashMap;
use itertools::{Either, Itertools};
use nohash_hasher::IntMap;
use once_cell::sync::Lazy;
use parking_lot::{RwLock, RwLockWriteGuard};

use re_arrow_store::{
    LatestAtQuery, RangeQuery, StoreDiff, StoreEvent, StoreSubscriber, StoreSubscriberHandle,
    TimeRange,
};
use re_log::trace;
use re_log_types::{EntityPath, RowId, StoreId, TimeInt, Timeline};
use re_query::ArchetypeView;
use re_types_core::{
    components::InstanceKey, Archetype, ArchetypeName, Component, ComponentName, SizeBytes,
};

use crate::FlatVecDeque;

// TODO: naaah, pointcache should be latestcache, let's be real

// ---

#[derive(Debug, Clone, PartialEq, Eq, Hash)]
pub enum AnyQuery {
    RangeQuery(RangeQuery),
    LatestAtQuery(LatestAtQuery),
}

impl From<RangeQuery> for AnyQuery {
    fn from(query: RangeQuery) -> Self {
        Self::RangeQuery(query)
    }
}

impl From<LatestAtQuery> for AnyQuery {
    fn from(query: LatestAtQuery) -> Self {
        Self::LatestAtQuery(query)
    }
}

// ---

// TODO: definitely have to test with text logs with many entries at the same timestamp
// we cant -> so move to independent crate

// TODO:
// - build on top of re_query and re-use its tests and benchmarks!

// TODO:
// - invalidation (store events)
// - global scope LRU + memlimit
// - OOO inserts

// TODO: how does LRU behave when you only look at part of the range?

// --- TODO

// TODO: this should be in the `Caches` thing in ViewContext, I think>
// TODO: create issue to unify all queries behind a single configurable one
// TODO: we need to bypass all of those: query, deser, join
pub static CACHES: Lazy<StoreSubscriberHandle> =
    Lazy::new(|| re_arrow_store::DataStore::register_subscriber(Box::<Caches>::default()));

static CACHING_ENABLED: AtomicBool = AtomicBool::new(true);

// TODO: do keep in mind that right now we're caching components from different queries into the
// same entry.
// Since query have this notion of primary PoV, could this have an impact on caching? yeah actually
// this definitely plays a role since the joins are driven by the primary!
// We need the primary/driving component (or even the archetype itself?).

// TODO: tests:
// - same latest query from different archetypes
// - range query with sub-timestamp precision
// - range query resulting in a merge

// TODO: are we even exposing that primary row id in the results right now? we def need to

// TODO: RangeQuery cannot be the key, but we gotta merge ranges that overlap then
// TODO: Arc so we can unlock main datastructure asap
// TODO: the time is the start of the range
// TODO: need a timeless version for both of those (use special name?)
#[derive(Default)]
pub struct Caches {
    point: RwLock<HashMap<CacheKey, Arc<RwLock<PointCache>>>>,
    range: RwLock<HashMap<CacheKey, Arc<RwLock<RangeCache>>>>,
}

// TODO: need simple end-to-end benchmark single-plot single-series fwd/bwd/random additions and GCs.

impl StoreSubscriber for Caches {
    fn name(&self) -> String {
        "rerun.store_subscribers.QueryCache".into()
    }

    fn as_any(&self) -> &dyn std::any::Any {
        self
    }
    fn as_any_mut(&mut self) -> &mut dyn std::any::Any {
        self
    }

    fn on_events(&mut self, events: &[StoreEvent]) {
        re_tracing::profile_function!();

        #[derive(Default, Debug)]
        struct CompactedEvents(HashMap<CacheKey, Vec<TimeInt>>);

        // TODO: the fact that additions aren't batched right now sucks. we should make it
        // manually triger-able to that StoreDb can batch em.
        // but need to add benchmarks first
        let mut compacted = CompactedEvents::default();

        for event in events {
            let StoreEvent {
                store_id,
                store_generation: _,
                event_id: _,
                diff,
            } = event;

            let StoreDiff {
                kind: _,
                row_id: _,
                timepoint,
                entity_path,
                cells,
            } = diff;

            // let key = CacheKey::new(store_id, entity_path, timeline, archetype_name);

            // TODO: use runtime registry to figure this out in a sane way
            let archetype_names: Vec<ArchetypeName> = cells
                .keys()
                .filter_map(|component_name| {
                    component_name
                        .indicator_component_archetype()
                        .map(|name| format!("rerun.archetypes.{name}").into())
                })
                .collect();

            // TODO: explain why we don't care what kind of event it is.

            for (&timeline, &time) in timepoint {
                for archetype_name in &archetype_names {
                    // TODO: make it so we can use a CacheKeyRef
                    let key = CacheKey::new(
                        store_id.clone(),
                        entity_path.clone(),
                        timeline,
                        *archetype_name,
                    );

                    compacted.0.entry(key).or_default().push(time);
                }
            }
        }

        let mut point = self.point.write();
        let mut range = self.range.write();

        // TODO: cachekeyref once we have benchmarks
        for (key, mut times) in compacted.0 {
            times.sort();

            // TODO: fix the mess with point time
            if let Some(cache) = point.get_mut(&key) {}

            if let Some(range) = range.get_mut(&key) {
                range.write().wipe(key.timeline, &times);
            }
        }
    }
}

// TODO
// TODO: explain why for each of those -- some are obvious, some very much not.
#[derive(Debug, Clone, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct CacheKey {
    pub store_id: StoreId,
    pub entity_path: EntityPath,
    pub timeline: Timeline,
    pub archetype_name: ArchetypeName,
}

impl CacheKey {
    #[inline]
    pub fn new(
        store_id: impl Into<StoreId>,
        entity_path: impl Into<EntityPath>,
        timeline: impl Into<Timeline>,
        archetype_name: impl Into<ArchetypeName>,
    ) -> Self {
        Self {
            store_id: store_id.into(),
            entity_path: entity_path.into(),
            timeline: timeline.into(),
            archetype_name: archetype_name.into(),
        }
    }
}

// TODO: think carefully about the public surface of this API.

// TODO: move stats to dedicated mod

#[derive(Default, Debug, Clone)]
pub struct CachesStats {
    pub point: BTreeMap<CacheKey, CacheStats>,
    pub range: BTreeMap<CacheKey, CacheStats>,
}

#[derive(Default, Debug, Clone)]
pub struct CacheStats {
    pub total_size_bytes_per_bucket: BTreeMap<TimeInt, Option<TimeRange>>,
}

impl std::fmt::Display for CachesStats {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        if !self.point.is_empty() {
            f.write_str("Point cache\n")?;
            f.write_str("-----------\n")?;
            for (key, stats) in &self.point {
                let CacheKey {
                    store_id,
                    entity_path,
                    timeline,
                    archetype_name,
                } = key;
                f.write_fmt(format_args!(
                    "{entity_path:?} in {store_id} on {} for {archetype_name:?}:\n",
                    timeline.name(),
                ))?;
                for &time in stats.total_size_bytes_per_bucket.keys() {
                    f.write_fmt(format_args!(" -> {}\n", timeline.format_time_utc(time)))?;
                }
            }

            if !self.range.is_empty() {
                f.write_str("\n")?;
            }
        }

        if !self.range.is_empty() {
            f.write_str("Range cache\n")?;
            f.write_str("-----------\n")?;
            for (key, stats) in &self.range {
                let CacheKey {
                    store_id,
                    entity_path,
                    timeline,
                    archetype_name,
                } = key;
                f.write_fmt(format_args!(
                    "{entity_path:?} in {store_id} on {:?} for {archetype_name:?}:\n",
                    timeline.name(),
                ))?;
                for (&time, range) in &stats.total_size_bytes_per_bucket {
                    f.write_fmt(format_args!(
                        " {} -> {}\n",
                        timeline.format_time_utc(time),
                        timeline.format_time_range_utc(&range.unwrap()), // TODO
                    ))?;
                }
            }
        }

        Ok(())
    }
}

/// Caches a point-in-time's worth of data.
// TODO: document what this TimeInt identifies: the time of the query, _not_ the time of the data!
// btw, dropping data cancels ALL queries beyond that data, right?
#[derive(Default)]
pub struct PointCache(BTreeMap<TimeInt, CachedQueryResult>);

impl std::ops::Deref for PointCache {
    type Target = BTreeMap<TimeInt, CachedQueryResult>;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

impl std::ops::DerefMut for PointCache {
    fn deref_mut(&mut self) -> &mut Self::Target {
        &mut self.0
    }
}

impl PointCache {
    pub fn bucket_time(&self, query_time: TimeInt) -> Option<TimeInt> {
        let mut buckets = self.range(..=query_time).rev();
        buckets.next().map(|(time, _)| *time)
    }

    pub fn next_bucket_time(&self, query_time: TimeInt) -> Option<TimeInt> {
        let mut buckets = self.range(TimeInt::from(query_time.as_i64().saturating_add(1))..);
        buckets.next().map(|(time, _)| *time)
    }
}

/// Caches a time span's worth of data.
// TODO: document what this TimeInt identifies: the time of the query, _not_ the time of the data!
// btw, dropping data cancels ALL queries beyond that data, right?
#[derive(Default)]
pub struct RangeCache(pub(crate) BTreeMap<TimeInt, CachedQueryResult>);

impl std::ops::Deref for RangeCache {
    type Target = BTreeMap<TimeInt, CachedQueryResult>;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

impl std::ops::DerefMut for RangeCache {
    fn deref_mut(&mut self) -> &mut Self::Target {
        &mut self.0
    }
}

impl RangeCache {
    // TODO: times must be sorted and non-empty
    pub fn wipe(&mut self, timeline: Timeline, times: &[TimeInt]) {
        debug_assert!(!times.is_empty());
        debug_assert!(!times.windows(2).any(|t| t[0] > t[1]));

        let mut ranges = Vec::new();
        let mut acc = TimeRange::new(times[0], times[0]);

        for &time in times {
            if time.as_i64() > acc.max.as_i64().saturating_add(1) {
                ranges.push(acc);
                acc = TimeRange::new(time, time);
            } else {
                acc.max = time;
            }
        }

        ranges.push(acc);

        for range in ranges {
            // TODO: removing empty buckets
            for (bucket_time, bucket) in self.range_mut(range.min..=range.max) {
                bucket.wipe(timeline, range);
            }
        }
    }
}

// TODO: keep in mind we are free to drop OOO data and recache it later
// -> what are the exact implications of that?

// TODO: if the cache contains any data at all for a given timestamp, then we consider it up to
// date -> invalidation will take charge of removing those values when needed

impl RangeCache {
    // TODO
    pub fn compute_left_query(&self, query: &RangeQuery) -> Option<RangeQuery> {
        // TODO: a bucket has been picked, now we need to query the hole on the left

        let query_time = query.range.min;
        let bucket_time = self.bucket_time(query_time);
        let next_bucket_time = self.next_bucket_time(query_time);

        // dbg!((query_time, bucket_time, next_bucket_time));

        let mut reduced_query = query.clone();

        if let Some(bucket) = bucket_time.as_ref().and_then(|time| self.get(time)) {
            // TODO: flatten if
            if let Some(bucket_time_range) = bucket.time_range() {
                reduced_query.range.min = TimeInt::max(
                    reduced_query.range.min,
                    bucket_time_range.max.as_i64().saturating_add(1).into(),
                );
            }
        }

        if let Some(next_time) = next_bucket_time {
            reduced_query.range.max = TimeInt::min(
                reduced_query.range.max,
                next_time.as_i64().saturating_sub(1).into(),
            );
        }

        // TODO: should that logically happen though?
        if reduced_query.range.max < reduced_query.range.min {
            trace!("reduced (left, early 1): None",);
            return None;
        }

        trace!(
            "reduced (left): {}",
            reduced_query
                .timeline
                .format_time_range_utc(&reduced_query.range)
        );

        return Some(reduced_query);

        // TODO: what about anything earlier though?
        let Some(cache) = self.get(&query_time) else {
            if let Some(next_time) = next_bucket_time {
                reduced_query.range.max = TimeInt::min(
                    reduced_query.range.max,
                    next_time.as_i64().saturating_sub(1).into(),
                );
            }
            trace!(
                "reduced (left, early 1): {}",
                reduced_query
                    .timeline
                    .format_time_range_utc(&reduced_query.range)
            );
            // TODO: explain
            return Some(reduced_query);
        };

        let Some(cached_time_range) = cache.time_range() else {
            if let Some(next_time) = next_bucket_time {
                reduced_query.range.max = TimeInt::min(
                    reduced_query.range.max,
                    next_time.as_i64().saturating_sub(1).into(),
                );
            }
            trace!(
                "reduced (left, early 2): {}",
                reduced_query
                    .timeline
                    .format_time_range_utc(&reduced_query.range)
            );
            // TODO: explain
            return Some(reduced_query);
        };

        trace!(
            "cached (left): {} in bucket {}",
            query.timeline.format_time_range_utc(&cached_time_range),
            query.timeline.format_time_utc(query_time),
        );

        // TODO: how do we differentiate a single tick of data missing vs. full coverage?

        // reduced_query.range.min = TimeInt::max(reduced_query.range.min, cached_time_range.min);
        // reduced_query.range.max = TimeInt::min(reduced_query.range.max, cached_time_range.min);

        // TODO: how do we detect them?
        // TODO: tests for each of those.

        // Situation #1: cache already contains some of the requested data on the right-end of the range.
        //
        // cached:
        // [                               -------]
        // queried:
        // [--------------------------------------]
        // reduced:
        // [+++++++++++++++++++++++++++++++       ]
        if cached_time_range.min > query.range.min {
            reduced_query.range.max = cached_time_range.min.as_i64().saturating_sub(1).into();
        }

        // Situation #2: cache already contains some of the requested data on the left-end of the range.
        //
        // cached:
        // [--------                              ]
        // queried:
        // [--------------------------------------]
        // reduced:
        // [                                      ]
        if cached_time_range.min == query.range.min {
            return None;
        }

        // Situation #3: cache already contains some of the requested data somewhere within the range.
        //
        // cached:
        // [                       -------        ]
        // queried:
        // [--------------------------------------]
        // reduced:
        // [+++++++++++++++++++++++               ]
        if cached_time_range.min > query.range.min {
            reduced_query.range.max = cached_time_range.min.as_i64().saturating_sub(1).into();
        }

        // Situation #4: cache already contains all of the requested data.
        //
        // cached:
        // [--------------------------------------]
        // queried:
        // [--------------------------------------]
        // reduced:
        // [                                      ]
        if cached_time_range == query.range {
            return None;
        }

        // TODO: this applies no matter what!
        // TODO: explain
        if let Some(next_time) = next_bucket_time {
            reduced_query.range.max = TimeInt::min(
                reduced_query.range.max,
                next_time.as_i64().saturating_sub(1).into(),
            );
        }

        if reduced_query.range.max < reduced_query.range.min {
            return None;
        }

        trace!(
            "reduced (left): {}",
            reduced_query
                .timeline
                .format_time_range_utc(&reduced_query.range)
        );

        Some(reduced_query)
    }

    pub fn compute_right_query(&self, query: &RangeQuery) -> Option<RangeQuery> {
        // TODO: a bucket has been picked, now we need to query the hole on the left

        let query_time = query.range.max;
        let bucket_time = self.bucket_time(query_time);
        let next_bucket_time = self.next_bucket_time(query_time);

        // dbg!((query_time, bucket_time, next_bucket_time));

        let mut reduced_query = query.clone();

        if let Some(bucket) = bucket_time.as_ref().and_then(|time| self.get(time)) {
            // TODO: flatten if
            if let Some(bucket_time_range) = bucket.time_range() {
                reduced_query.range.min = TimeInt::max(
                    reduced_query.range.min,
                    bucket_time_range.max.as_i64().saturating_add(1).into(),
                );
            }
        }

        if let Some(next_time) = next_bucket_time {
            reduced_query.range.max = TimeInt::min(
                reduced_query.range.max,
                next_time.as_i64().saturating_sub(1).into(),
            );
        }

        // TODO: should that logically happen though?
        if reduced_query.range.max < reduced_query.range.min {
            trace!("reduced (right, early 1): None",);
            return None;
        }

        trace!(
            "reduced (right): {}",
            reduced_query
                .timeline
                .format_time_range_utc(&reduced_query.range)
        );

        return Some(reduced_query);

        let bucket_time = query.range.min;
        let next_bucket_time = self.next_bucket_time(bucket_time);

        let Some(cache) = self.get(&bucket_time) else {
            trace!("reduced (right, early 1): None",);
            // TODO: explain
            return None; // TODO: already handled by left
        };

        let Some(cached_time_range) = cache.time_range() else {
            trace!("reduced (right, early 2): None",);
            // TODO: explain
            return None; // TODO: already handled by left
        };

        trace!(
            "cached (right): {} in bucket {}",
            query.timeline.format_time_range_utc(&cached_time_range),
            query.timeline.format_time_utc(bucket_time),
        );

        // TODO: how do we differentiate a single tick of data missing vs. full coverage?

        let mut reduced_query = query.clone();

        // reduced_query.range.min = TimeInt::max(reduced_query.range.min, cached_time_range.min);
        // reduced_query.range.max = TimeInt::min(reduced_query.range.max, cached_time_range.min);

        // TODO: how do we detect them?
        // TODO: tests for each of those.

        // TODO: we're probably missing some is why everything is going to shit

        // Situation #1: cache already contains some of the requested data on the right-end of the range.
        //
        // cached:
        // [                               -------]
        // queried:
        // [--------------------------------------]
        // reduced:
        // [-------------------------------       ]
        if cached_time_range.min <= query.range.max {
            return None;
            // TODO
            // reduced_query.range.max = cached_time_range.min.as_i64().saturating_sub(1).into();
        }

        // Situation #2: cache already contains some of the requested data on the left-end of the range.
        //
        // cached:
        // [--------                              ]
        // queried:
        // [--------------------------------------]
        // reduced:
        // [        ++++++++++++++++++++++++++++++]
        if query.range.max >= cached_time_range.max {
            reduced_query.range.min = cached_time_range.max.as_i64().saturating_add(1).into();
        }

        // Situation #3: cache already contains some of the requested data somewhere within the range.
        //
        // cached:
        // [                       -------        ]
        // queried:
        // [--------------------------------------]
        // reduced:
        // [                              ++++++++]
        if cached_time_range.max <= query.range.min {
            reduced_query.range.min = cached_time_range.max.as_i64().saturating_add(1).into();
        }

        // Situation #4: cache already contains all of the requested data.
        //
        // cached:
        // [--------------------------------------]
        // queried:
        // [--------------------------------------]
        // reduced:
        // [                                      ]
        if cached_time_range == query.range {
            trace!("reduced (right, early 3): None",);
            return None;
        }

        // TODO: this applies no matter what!
        // TODO: explain
        if let Some(next_time) = next_bucket_time {
            reduced_query.range.max = TimeInt::min(
                reduced_query.range.max,
                next_time.as_i64().saturating_sub(1).into(),
            );
        }

        if reduced_query.range.max < reduced_query.range.min {
            trace!(
                "reduced (right, early 4): {}",
                reduced_query
                    .timeline
                    .format_time_range_utc(&reduced_query.range)
            );
            return None;
        }

        trace!(
            "reduced (right): {}",
            reduced_query
                .timeline
                .format_time_range_utc(&reduced_query.range)
        );

        Some(reduced_query)
    }

    pub fn bucket_time(&self, query_time: TimeInt) -> Option<TimeInt> {
        let mut buckets = self.range(..=query_time).rev();
        buckets.next().map(|(time, _)| *time)
    }

    pub fn next_bucket_time(&self, query_time: TimeInt) -> Option<TimeInt> {
        let mut buckets = self.range(TimeInt::from(query_time.as_i64().saturating_add(1))..);
        buckets.next().map(|(time, _)| *time)
    }
}

impl Caches {
    fn with_global<F: FnMut(&Caches) -> R, R>(f: F) -> R {
        re_arrow_store::DataStore::with_subscriber(*CACHES, f).unwrap()
    }

    pub fn stats() -> CachesStats {
        Self::with_global(|caches| {
            let point = {
                let mut point_stats = BTreeMap::default();

                let point_caches = caches.point.read();
                for (key, point_cache) in &*point_caches {
                    let stats: &mut CacheStats = point_stats.entry(key.clone()).or_default();
                    let point_cache = point_cache.read();
                    for &time in point_cache.keys() {
                        // TODO: size_bytes
                        *stats.total_size_bytes_per_bucket.entry(time).or_default() = None;
                    }
                }

                point_stats
            };

            let range = {
                let mut range_stats = BTreeMap::default();

                let range_caches = caches.range.read();
                for (key, range_cache) in &*range_caches {
                    let stats: &mut CacheStats = range_stats.entry(key.clone()).or_default();
                    let range_cache = range_cache.read();
                    for (&time, cached) in range_cache.iter() {
                        // TODO: size_bytes
                        *stats.total_size_bytes_per_bucket.entry(time).or_default() =
                            cached.time_range();
                    }
                }

                range_stats
            };

            CachesStats { point, range }
        })
    }

    pub fn with_latest<A, F, R>(
        store_id: StoreId,
        entity_path: EntityPath,
        query: &LatestAtQuery,
        mut f: F,
    ) -> R
    where
        A: Archetype,
        F: FnMut(RwLockWriteGuard<'_, PointCache>) -> R,
    {
        // TODO: having to clone params is dumb...
        Self::with_global(move |caches| {
            let key = CacheKey::new(
                store_id.clone(),
                entity_path.clone(),
                query.timeline,
                A::name(),
            );

            let cache = {
                let mut caches = caches.point.write();
                let cache = caches.entry(key).or_default();
                Arc::clone(cache)
            };

            f(cache.write())
        })
    }

    pub fn with_range<A, F, R>(
        store_id: StoreId,
        entity_path: EntityPath,
        query: &RangeQuery,
        mut f: F,
    ) -> R
    where
        A: Archetype,
        F: FnMut(RwLockWriteGuard<'_, RangeCache>) -> R,
    {
        // TODO: having to clone params is dumb...
        Self::with_global(move |caches| {
            let key = CacheKey::new(
                store_id.clone(),
                entity_path.clone(),
                query.timeline,
                A::name(),
            );

            let cache = {
                let mut caches = caches.range.write();
                let range_cache = caches.entry(key).or_default();
                Arc::clone(range_cache)
            };

            f(cache.write())
        })
    }
}

// TODO: this has to be implement StoreSubscriber btw

// TODO: we're going to have to bucketize to make OOO cheaper :(

// TODO: The `A: Archetype` seems to just be an annoyance and nothing else?

// TODO: let's start by not invalidating anything
// TODO: check out VecDeque contiguous-ness rules
#[derive(Default, Debug)]
pub struct CachedQueryResult {
    // row_ids: VecDeque<RowId>,
    // TODO: explain RowId
    pub(crate) times: VecDeque<(TimeInt, RowId)>,

    pub(crate) instance_keys: FlatVecDeque<InstanceKey>,

    // TODO: pre-deserialized, pre-joined
    // TODO: maybe in some cases we want to keep it arrow all the way...
    // TODO: intmap??
    pub(crate) components: BTreeMap<ComponentName, Box<dyn std::any::Any + Send + Sync>>, // FlatVecDeque

    // TODO: something less shitty
    // TODO: intmap??
    pub(crate) components_total_size_bytes: BTreeMap<ComponentName, u64>,
    //
    // TODO: String should be ViewSytemName
    // TODO: no mutex
    // derived: Mutex<BTreeMap<String, Box<dyn std::any::Any + Send + Sync>>>,
}

// TODO: merge is an awful name if it only handles appends

// TODO: type alias for this freaking map
// TODO: unwraps everywhere
fn merge_component<C: Component + Send + Sync + 'static>(
    lhs_components: &mut BTreeMap<ComponentName, Box<dyn std::any::Any + Send + Sync>>,
    rhs_components: &mut BTreeMap<ComponentName, Box<dyn std::any::Any + Send + Sync>>,
) {
    let lhs_component = lhs_components
        .get_mut(&C::name())
        .map(|v| v.downcast_mut::<FlatVecDeque<C>>().unwrap());
    let rhs_component = rhs_components
        .remove(&C::name())
        .map(|v| v.downcast::<FlatVecDeque<C>>().unwrap());

    match (lhs_component, rhs_component) {
        (None, None) => {}
        (None, Some(rhs)) => {
            lhs_components.insert(C::name(), rhs);
        }
        (Some(_), None) => {}
        (Some(lhs), Some(rhs)) => lhs.extend_back_with(*rhs),
    };
}

fn merge_component_opt<C: Component + Send + Sync + 'static>(
    lhs_components: &mut BTreeMap<ComponentName, Box<dyn std::any::Any + Send + Sync>>,
    rhs_components: &mut BTreeMap<ComponentName, Box<dyn std::any::Any + Send + Sync>>,
) {
    let lhs_component = lhs_components
        .get_mut(&C::name())
        // TODO: downcast fails? wot
        .map(|v| v.downcast_mut::<FlatVecDeque<Option<C>>>().unwrap());
    let rhs_component = rhs_components
        .remove(&C::name())
        .map(|v| v.downcast::<FlatVecDeque<Option<C>>>().unwrap());

    match (lhs_component, rhs_component) {
        (None, None) => {}
        (None, Some(rhs)) => {
            lhs_components.insert(C::name(), rhs);
        }
        (Some(_), None) => {}
        (Some(lhs), Some(rhs)) => lhs.extend_back_with(*rhs),
    };
}

macro_rules! impl_merge_rNoM {
    (impl $name:ident with required=[$($r:ident)+] optional=[$($o:ident)*]) => {
        pub fn $name<A, $($r,)+ $($o),*>(&mut self, rhs: Self)
        where
            A: Archetype,
            $($r: Component + Send + Sync + 'static,)+
            $($o: Component + Send + Sync + 'static,)*
        {
            // TODO: we assume rhs is greater than self
            // assert!(!self.overlaps(&rhs) && self.connects_to(&rhs));

            re_tracing::profile_function!();

            let Self {
                times: lhs_times,
                instance_keys: lhs_instance_keys,
                components: lhs_components,
                components_total_size_bytes: lhs_components_total_size_bytes,
            } = self;
            let Self {
                times: rhs_times,
                instance_keys: rhs_instance_keys,
                components: mut rhs_components,
                components_total_size_bytes: rhs_components_total_size_bytes,
            } = rhs;

            // TODO: if insertion forbids overlaps, then this is safe, right?

            lhs_times.extend(rhs_times);
            lhs_times.make_contiguous();
            lhs_instance_keys.extend_back_with(rhs_instance_keys);

            $(merge_component::<$r>(lhs_components, &mut rhs_components);)+

            $(merge_component_opt::<$o>(lhs_components, &mut rhs_components);)*
        }
    };
    (impl $name:ident with required=[$($r:ident)+]) => {
        impl_merge_rNoM!(impl $name with required=[$($r)+] optional=[]);
    };
}

impl CachedQueryResult {
    impl_merge_rNoM!(impl merge_r1   with required=[R1]);
    impl_merge_rNoM!(impl merge_r1o1 with required=[R1] optional=[O1]);
    impl_merge_rNoM!(impl merge_r1o2 with required=[R1] optional=[O1 O2]);
    impl_merge_rNoM!(impl merge_r1o3 with required=[R1] optional=[O1 O2 O3]);
    impl_merge_rNoM!(impl merge_r1o4 with required=[R1] optional=[O1 O2 O3 O4]);
    impl_merge_rNoM!(impl merge_r1o5 with required=[R1] optional=[O1 O2 O3 O4 O5]);
    impl_merge_rNoM!(impl merge_r1o6 with required=[R1] optional=[O1 O2 O3 O4 O5 O6]);
    impl_merge_rNoM!(impl merge_r1o7 with required=[R1] optional=[O1 O2 O3 O4 O5 O6 O7]);
    impl_merge_rNoM!(impl merge_r1o8 with required=[R1] optional=[O1 O2 O3 O4 O5 O6 O7 O8]);
    impl_merge_rNoM!(impl merge_r1o9 with required=[R1] optional=[O1 O2 O3 O4 O5 O6 O7 O8 O9]);

    /// Returns `true` if the time ranges overlap in any way.
    pub fn overlaps(&self, rhs: &Self) -> bool {
        let Some(lhs_range) = self.range() else {
            return false;
        };
        let Some(rhs_range) = rhs.range() else {
            return false;
        };

        // E.g. b1=1..=3 b2=0..=2
        let min_bound_overlaps =
            || lhs_range.start() <= rhs_range.start() && lhs_range.end() >= rhs_range.start();

        // E.g. b1=1..=3 b2=2..=3
        let max_bound_overlaps =
            || lhs_range.start() <= rhs_range.end() && lhs_range.end() >= rhs_range.end();

        min_bound_overlaps() || max_bound_overlaps()
    }

    /// Returns `true` if the time range of `self` ends where rhs' starts.
    pub fn connects_to(&self, rhs: &Self) -> bool {
        let Some(lhs_range) = self.time_range() else {
            return false;
        };
        let Some(rhs_range) = rhs.time_range() else {
            return false;
        };
        lhs_range.max.as_i64().saturating_add(1) == rhs_range.min.as_i64()
    }

    pub fn wipe(&mut self, timeline: Timeline, time_range: TimeRange) {
        // TODO: the whole range vs time_range is pretty messy right now
        let mut range = self.find_iter_range(time_range);
        if range.start >= self.times.len() {
            return;
        }
        range.end = usize::min(range.end, self.times.len() - 1);

        let wiped = TimeRange::new(self.times[range.start].0, self.times[range.end].0);
        eprintln!(
            "wiping range {:?} ({}) from bucket {} because {} has been added/removed",
            range,
            timeline.format_time_range_utc(&wiped),
            timeline.format_time_utc(self.time_range().unwrap().min),
            timeline.format_time_range_utc(&time_range),
        );

        // TODO: why the actual thing
    }
}

impl SizeBytes for CachedQueryResult {
    fn heap_size_bytes(&self) -> u64 {
        let Self {
            times,
            instance_keys,
            components: _,
            components_total_size_bytes,
        } = self;

        // It's all on the heap!
        times.total_size_bytes()
            + instance_keys.total_size_bytes()
            + components_total_size_bytes.values().copied().sum::<u64>()
    }
}

// // TODO: cannot derive due to proc-macro's implicit Default bound on `A`
// impl Default for QueryCache {
//     fn default() -> Self {
//         Self {
//             times: Default::default(),
//             instance_keys: Default::default(),
//             components: Default::default(),
//         }
//
//         // Self::DEFAULT
//     }
// }

// TODO: start easy: just wipe everything from T to +inf and T is OOO

macro_rules! impl_add_rNoM {
    (impl $name:ident with required=[$($r:ident)+] optional=[$($o:ident)*]) => {
        // TODO: everything that does not require template metaprog needs to go out of here
        pub fn $name<A, $($r,)+ $($o),*>(&mut self, time: TimeInt, arch_view: &ArchetypeView<A>)
        where
            A: Archetype,
            $($r: Component + Send + Sync + 'static,)+
            $($o: Component + Send + Sync + 'static,)*
        {
            re_tracing::profile_scope!("CachedQueryResult::add_rNoM", A::name());

            let Self {
                times,
                instance_keys,
                components: _,
                components_total_size_bytes: _,
            } = self;

            let row_id = arch_view.primary_row_id();

            // TODO: always sorted as long as we don't introduce OOO inserts
            // TODO: we can have many entries per time!!!!!!!!

            let index = match times.binary_search(&(time, row_id)) {
                Ok(index) => index,
                Err(index) => {
                    if index == 0 || index == times.len() {
                        index
                    } else {
                        dbg!(index) // TODO
                        // // TODO: what does OOO actually mean in this instance??
                        // dbg!((index, times.len(), time, times.back()));
                        // unimplemented!("OOO inserts")
                    }
                }
            };

            times.insert(index, (time, row_id));
            times.make_contiguous();

            instance_keys.extend_at(index, arch_view.iter_instance_keys());

            $(self.add_component_at::<A, $r>(index, arch_view);)+

            $(self.add_component_opt_at::<A, $o>(index, arch_view);)*
        }
    };
    (impl $name:ident with required=[$($r:ident)+]) => {
        impl_add_rNoM!(impl $name with required=[$($r)+] optional=[]);
    };
}

impl CachedQueryResult {
    impl_add_rNoM!(impl add_r1   with required=[R1]);
    impl_add_rNoM!(impl add_r1o1 with required=[R1] optional=[O1]);
    impl_add_rNoM!(impl add_r1o2 with required=[R1] optional=[O1 O2]);
    impl_add_rNoM!(impl add_r1o3 with required=[R1] optional=[O1 O2 O3]);
    impl_add_rNoM!(impl add_r1o4 with required=[R1] optional=[O1 O2 O3 O4]);
    impl_add_rNoM!(impl add_r1o5 with required=[R1] optional=[O1 O2 O3 O4 O5]);
    impl_add_rNoM!(impl add_r1o6 with required=[R1] optional=[O1 O2 O3 O4 O5 O6]);
    impl_add_rNoM!(impl add_r1o7 with required=[R1] optional=[O1 O2 O3 O4 O5 O6 O7]);
    impl_add_rNoM!(impl add_r1o8 with required=[R1] optional=[O1 O2 O3 O4 O5 O6 O7 O8]);
    impl_add_rNoM!(impl add_r1o9 with required=[R1] optional=[O1 O2 O3 O4 O5 O6 O7 O8 O9]);

    #[inline]
    fn add_component_at<A: Archetype, C: Component + Send + Sync + 'static>(
        &mut self,
        at: usize,
        arch_view: &ArchetypeView<A>,
    ) {
        re_tracing::profile_function!();

        let data = self
            .components
            .entry(C::name())
            .or_insert_with(|| Box::new(FlatVecDeque::<C>::new()));

        let data = data.downcast_mut::<FlatVecDeque<C>>().unwrap(); // TODO
        data.extend_at(at, arch_view.iter_required_component::<C>().unwrap()); // TODO

        // TODO: oh shit we need all components to implement SizeBytes??!
        // let total_size_bytes = self
        //     .components_total_size_bytes
        //     .entry(C::name())
        //     .or_default();
        // *total_size_bytes = data.total_size_bytes();
    }

    #[inline]
    fn add_component_opt_at<A: Archetype, C: Component + Send + Sync + 'static>(
        &mut self,
        at: usize,
        arch_view: &ArchetypeView<A>,
    ) {
        re_tracing::profile_function!();

        let data = self
            .components
            .entry(C::name())
            .or_insert_with(|| Box::new(FlatVecDeque::<Option<C>>::new()));

        let data = data.downcast_mut::<FlatVecDeque<Option<C>>>().unwrap(); // TODO
        data.extend_at(at, arch_view.iter_optional_component::<C>().unwrap()); // TODO
    }

    #[inline]
    pub fn iter_times(&self) -> impl Iterator<Item = &(TimeInt, RowId)> {
        self.times.iter()
    }

    #[inline]
    pub fn iter_instance_keys(&self) -> impl Iterator<Item = &[InstanceKey]> {
        self.instance_keys.iter()
    }

    #[inline]
    pub fn iter_component<C: Component + Send + Sync + 'static>(
        &self,
    ) -> impl Iterator<Item = &[C]> {
        let data = self
            .components
            .get(&C::name())
            .map(|data| data.downcast_ref::<FlatVecDeque<C>>().unwrap()); // TODO

        let Some(data) = data else {
            return Either::Left(std::iter::empty());
        };

        Either::Right(data.iter())
    }

    #[inline]
    pub fn iter_component_opt<C: Component + Send + Sync + 'static>(
        &self,
    ) -> impl Iterator<Item = &[Option<C>]> {
        let data = self
            .components
            .get(&C::name())
            .map(|data| data.downcast_ref::<FlatVecDeque<Option<C>>>().unwrap()); // TODO

        let Some(data) = data else {
            return Either::Left(std::iter::empty());
        };

        Either::Right(data.iter())
    }

    fn find_iter_range(&self, range: TimeRange) -> Range<usize> {
        debug_assert!({
            let (times, &[]) = self.times.as_slices() else {
                panic!("TODO");
            };
            !times.windows(2).any(|p| p[0] > p[1])
        });

        let (times, &[]) = self.times.as_slices() else {
            panic!("TODO");
        };

        // TODO: gotta think
        let from = match times.binary_search_by(|(time, _)| time.cmp(&range.min)) {
            Ok(index) | Err(index) => index,
        };

        // TODO: gotta think
        let to = match times.binary_search_by(|(time, _)| time.cmp(&range.max)) {
            Ok(index) | Err(index) => index,
        };

        // TODO: no idea if it's inclusive or not at this point
        from..to
    }

    #[inline]
    pub fn range_times(&self, range: TimeRange) -> impl Iterator<Item = &(TimeInt, RowId)> {
        let (times, &[]) = self.times.as_slices() else {
            panic!("TODO");
        };
        times[self.find_iter_range(range)].iter()
    }

    #[inline]
    pub fn range_instance_keys(&self, range: TimeRange) -> impl Iterator<Item = &[InstanceKey]> {
        self.instance_keys.range(self.find_iter_range(range))
    }

    #[inline]
    pub fn range_component<C: Component + Send + Sync + 'static>(
        &self,
        range: TimeRange,
    ) -> impl Iterator<Item = &[C]> {
        let data = self
            .components
            .get(&C::name())
            .map(|data| data.downcast_ref::<FlatVecDeque<C>>().unwrap()); // TODO

        let Some(data) = data else {
            return Either::Left(std::iter::empty());
        };

        Either::Right(data.range(self.find_iter_range(range)))
    }

    #[inline]
    pub fn range_component_opt<C: Component + Send + Sync + 'static>(
        &self,
        range: TimeRange,
    ) -> impl Iterator<Item = &[Option<C>]> {
        let data = self
            .components
            .get(&C::name())
            .map(|data| data.downcast_ref::<FlatVecDeque<Option<C>>>().unwrap()); // TODO

        let Some(data) = data else {
            return Either::Left(std::iter::empty());
        };

        Either::Right(data.range(self.find_iter_range(range)))
    }

    #[inline]
    pub fn time_range(&self) -> Option<TimeRange> {
        let (Some((min, _)), Some((max, _))) = (self.times.front(), self.times.back()) else {
            return None;
        };

        Some(TimeRange::new(*min, *max))
    }

    #[inline]
    pub fn range(&self) -> Option<RangeInclusive<TimeInt>> {
        self.time_range()
            .map(|time_range| time_range.min..=time_range.max)
    }

    // #[inline]
    // pub fn time_range(&self) -> TimeRange {
    //     TimeRange::new(
    //         self.times.front().map_or(TimeInt::MIN, |(time, _)| *time),
    //         self.times.back().map_or(TimeInt::MAX, |(time, _)| *time),
    //     )
    // }
    //
    // #[inline]
    // pub fn range(&self) -> RangeInclusive<TimeInt> {
    //     let time_range = self.time_range();
    //     time_range.min..=time_range.max
    // }

    #[inline]
    pub fn len(&self) -> usize {
        self.times.len()
    }

    #[inline]
    pub fn is_empty(&self) -> bool {
        self.len() == 0
    }
}
