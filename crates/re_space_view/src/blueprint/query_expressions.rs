// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/rust/api.rs
// Based on "crates/re_types/definitions/rerun/blueprint/query_expressions.fbs".

#![allow(trivial_numeric_casts)]
#![allow(unused_imports)]
#![allow(unused_parens)]
#![allow(clippy::clone_on_copy)]
#![allow(clippy::iter_on_single_items)]
#![allow(clippy::map_flatten)]
#![allow(clippy::match_wildcard_for_single_variants)]
#![allow(clippy::needless_question_mark)]
#![allow(clippy::new_without_default)]
#![allow(clippy::redundant_closure)]
#![allow(clippy::too_many_arguments)]
#![allow(clippy::too_many_lines)]
#![allow(clippy::unnecessary_cast)]

use ::re_types_core::external::arrow2;
use ::re_types_core::ComponentName;
use ::re_types_core::SerializationResult;
use ::re_types_core::{ComponentBatch, MaybeOwnedComponentBatch};
use ::re_types_core::{DeserializationError, DeserializationResult};

/// **Blueprint**: A set of expressions used for a `DataQueryBlueprint`.
///
/// Unstable. Used for the ongoing blueprint experimentations.
#[derive(Clone, Debug, PartialEq, Eq)]
pub struct QueryExpressions {
    /// A set of strings that can be parsed as `EntityPathExpression`s.
    pub expressions: Vec<::re_types_core::ArrowString>,
}

impl From<Vec<::re_types_core::ArrowString>> for QueryExpressions {
    #[inline]
    fn from(expressions: Vec<::re_types_core::ArrowString>) -> Self {
        Self { expressions }
    }
}

impl From<QueryExpressions> for Vec<::re_types_core::ArrowString> {
    #[inline]
    fn from(value: QueryExpressions) -> Self {
        value.expressions
    }
}

::re_types_core::macros::impl_into_cow!(QueryExpressions);

impl ::re_types_core::Loggable for QueryExpressions {
    type Name = ::re_types_core::ComponentName;

    #[inline]
    fn name() -> Self::Name {
        "rerun.blueprint.QueryExpressions".into()
    }

    #[allow(clippy::wildcard_imports)]
    #[inline]
    fn arrow_datatype() -> arrow2::datatypes::DataType {
        use arrow2::datatypes::*;
        DataType::Struct(vec![Field {
            name: "expressions".to_owned(),
            data_type: DataType::List(Box::new(Field {
                name: "item".to_owned(),
                data_type: DataType::Utf8,
                is_nullable: false,
                metadata: [].into(),
            })),
            is_nullable: false,
            metadata: [].into(),
        }])
    }

    #[allow(clippy::wildcard_imports)]
    fn to_arrow_opt<'a>(
        data: impl IntoIterator<Item = Option<impl Into<::std::borrow::Cow<'a, Self>>>>,
    ) -> SerializationResult<Box<dyn arrow2::array::Array>>
    where
        Self: Clone + 'a,
    {
        re_tracing::profile_function!();
        use ::re_types_core::{Loggable as _, ResultExt as _};
        use arrow2::{array::*, datatypes::*};
        Ok({
            let (somes, data): (Vec<_>, Vec<_>) = data
                .into_iter()
                .map(|datum| {
                    let datum: Option<::std::borrow::Cow<'a, Self>> = datum.map(Into::into);
                    (datum.is_some(), datum)
                })
                .unzip();
            let bitmap: Option<arrow2::bitmap::Bitmap> = {
                let any_nones = somes.iter().any(|some| !*some);
                any_nones.then(|| somes.into())
            };
            StructArray::new(
                <crate::blueprint::QueryExpressions>::arrow_datatype(),
                vec![{
                    let (somes, expressions): (Vec<_>, Vec<_>) = data
                        .iter()
                        .map(|datum| {
                            let datum = datum.as_ref().map(|datum| {
                                let Self { expressions, .. } = &**datum;
                                expressions.clone()
                            });
                            (datum.is_some(), datum)
                        })
                        .unzip();
                    let expressions_bitmap: Option<arrow2::bitmap::Bitmap> = {
                        let any_nones = somes.iter().any(|some| !*some);
                        any_nones.then(|| somes.into())
                    };
                    {
                        use arrow2::{buffer::Buffer, offset::OffsetsBuffer};
                        let expressions_inner_data: Vec<_> = expressions
                            .iter()
                            .flatten()
                            .flatten()
                            .cloned()
                            .map(Some)
                            .collect();
                        let expressions_inner_bitmap: Option<arrow2::bitmap::Bitmap> = None;
                        let offsets = arrow2::offset::Offsets::<i32>::try_from_lengths(
                            expressions.iter().map(|opt| {
                                opt.as_ref().map(|datum| datum.len()).unwrap_or_default()
                            }),
                        )
                        .unwrap()
                        .into();
                        ListArray::new(
                            DataType::List(Box::new(Field {
                                name: "item".to_owned(),
                                data_type: DataType::Utf8,
                                is_nullable: false,
                                metadata: [].into(),
                            })),
                            offsets,
                            {
                                let inner_data: arrow2::buffer::Buffer<u8> = expressions_inner_data
                                    .iter()
                                    .flatten()
                                    .flat_map(|s| s.0.clone())
                                    .collect();
                                let offsets = arrow2::offset::Offsets::<i32>::try_from_lengths(
                                    expressions_inner_data.iter().map(|opt| {
                                        opt.as_ref().map(|datum| datum.0.len()).unwrap_or_default()
                                    }),
                                )
                                .unwrap()
                                .into();
                                #[allow(unsafe_code, clippy::undocumented_unsafe_blocks)]
                                unsafe {
                                    Utf8Array::<i32>::new_unchecked(
                                        DataType::Utf8,
                                        offsets,
                                        inner_data,
                                        expressions_inner_bitmap,
                                    )
                                }
                                .boxed()
                            },
                            expressions_bitmap,
                        )
                        .boxed()
                    }
                }],
                bitmap,
            )
            .boxed()
        })
    }

    #[allow(clippy::wildcard_imports)]
    fn from_arrow_opt(
        arrow_data: &dyn arrow2::array::Array,
    ) -> DeserializationResult<Vec<Option<Self>>>
    where
        Self: Sized,
    {
        re_tracing::profile_function!();
        use ::re_types_core::{Loggable as _, ResultExt as _};
        use arrow2::{array::*, buffer::*, datatypes::*};
        Ok({
            let arrow_data = arrow_data
                .as_any()
                .downcast_ref::<arrow2::array::StructArray>()
                .ok_or_else(|| {
                    DeserializationError::datatype_mismatch(
                        DataType::Struct(vec![Field {
                            name: "expressions".to_owned(),
                            data_type: DataType::List(Box::new(Field {
                                name: "item".to_owned(),
                                data_type: DataType::Utf8,
                                is_nullable: false,
                                metadata: [].into(),
                            })),
                            is_nullable: false,
                            metadata: [].into(),
                        }]),
                        arrow_data.data_type().clone(),
                    )
                })
                .with_context("rerun.blueprint.QueryExpressions")?;
            if arrow_data.is_empty() {
                Vec::new()
            } else {
                let (arrow_data_fields, arrow_data_arrays) =
                    (arrow_data.fields(), arrow_data.values());
                let arrays_by_name: ::std::collections::HashMap<_, _> = arrow_data_fields
                    .iter()
                    .map(|field| field.name.as_str())
                    .zip(arrow_data_arrays)
                    .collect();
                let expressions = {
                    if !arrays_by_name.contains_key("expressions") {
                        return Err(DeserializationError::missing_struct_field(
                            Self::arrow_datatype(),
                            "expressions",
                        ))
                        .with_context("rerun.blueprint.QueryExpressions");
                    }
                    let arrow_data = &**arrays_by_name["expressions"];
                    {
                        let arrow_data = arrow_data
                            .as_any()
                            .downcast_ref::<arrow2::array::ListArray<i32>>()
                            .ok_or_else(|| {
                                DeserializationError::datatype_mismatch(
                                    DataType::List(Box::new(Field {
                                        name: "item".to_owned(),
                                        data_type: DataType::Utf8,
                                        is_nullable: false,
                                        metadata: [].into(),
                                    })),
                                    arrow_data.data_type().clone(),
                                )
                            })
                            .with_context("rerun.blueprint.QueryExpressions#expressions")?;
                        if arrow_data.is_empty() {
                            Vec::new()
                        } else {
                            let arrow_data_inner = {
                                let arrow_data_inner = &**arrow_data.values();
                                {
                                    let arrow_data_inner = arrow_data_inner
                                        .as_any()
                                        .downcast_ref::<arrow2::array::Utf8Array<i32>>()
                                        .ok_or_else(|| {
                                            DeserializationError::datatype_mismatch(
                                                DataType::Utf8,
                                                arrow_data_inner.data_type().clone(),
                                            )
                                        })
                                        .with_context(
                                            "rerun.blueprint.QueryExpressions#expressions",
                                        )?;
                                    let arrow_data_inner_buf = arrow_data_inner.values();
                                    let offsets = arrow_data_inner.offsets();
                                    arrow2::bitmap::utils::ZipValidity::new_with_validity(
                                        offsets.iter().zip(offsets.lengths()),
                                        arrow_data_inner.validity(),
                                    )
                                    .map(|elem| {
                                        elem.map(|(start, len)| {
                                            let start = *start as usize;
                                            let end = start + len;
                                            if end as usize > arrow_data_inner_buf.len() {
                                                return Err(
                                                    DeserializationError::offset_slice_oob(
                                                        (start, end),
                                                        arrow_data_inner_buf.len(),
                                                    ),
                                                );
                                            }

                                            #[allow(
                                                unsafe_code,
                                                clippy::undocumented_unsafe_blocks
                                            )]
                                            let data = unsafe {
                                                arrow_data_inner_buf
                                                    .clone()
                                                    .sliced_unchecked(start, len)
                                            };
                                            Ok(data)
                                        })
                                        .transpose()
                                    })
                                    .map(|res_or_opt| {
                                        res_or_opt.map(|res_or_opt| {
                                            res_or_opt.map(|v| ::re_types_core::ArrowString(v))
                                        })
                                    })
                                    .collect::<DeserializationResult<Vec<Option<_>>>>()
                                    .with_context("rerun.blueprint.QueryExpressions#expressions")?
                                    .into_iter()
                                }
                                .collect::<Vec<_>>()
                            };
                            let offsets = arrow_data.offsets();
                            arrow2::bitmap::utils::ZipValidity::new_with_validity(
                                offsets.iter().zip(offsets.lengths()),
                                arrow_data.validity(),
                            )
                            .map(|elem| {
                                elem.map(|(start, len)| {
                                    let start = *start as usize;
                                    let end = start + len;
                                    if end as usize > arrow_data_inner.len() {
                                        return Err(DeserializationError::offset_slice_oob(
                                            (start, end),
                                            arrow_data_inner.len(),
                                        ));
                                    }

                                    #[allow(unsafe_code, clippy::undocumented_unsafe_blocks)]
                                    let data = unsafe {
                                        arrow_data_inner.get_unchecked(start as usize..end as usize)
                                    };
                                    let data = data
                                        .iter()
                                        .cloned()
                                        .map(Option::unwrap_or_default)
                                        .collect();
                                    Ok(data)
                                })
                                .transpose()
                            })
                            .collect::<DeserializationResult<Vec<Option<_>>>>()?
                        }
                        .into_iter()
                    }
                };
                arrow2::bitmap::utils::ZipValidity::new_with_validity(
                    ::itertools::izip!(expressions),
                    arrow_data.validity(),
                )
                .map(|opt| {
                    opt.map(|(expressions)| {
                        Ok(Self {
                            expressions: expressions
                                .ok_or_else(DeserializationError::missing_data)
                                .with_context("rerun.blueprint.QueryExpressions#expressions")?,
                        })
                    })
                    .transpose()
                })
                .collect::<DeserializationResult<Vec<_>>>()
                .with_context("rerun.blueprint.QueryExpressions")?
            }
        })
    }
}
