window.BENCHMARK_DATA = {
  "lastUpdate": 1700050068800,
  "repoUrl": "https://github.com/rerun-io/rerun",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49431240+abey79@users.noreply.github.com",
            "name": "Antoine Beyeler",
            "username": "abey79"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ce2493cfcc25ddc6f01ee9d8f40a365d7a6f6623",
          "message": "Improve Visible History to support more general time queries (#4123)\n\n### What\r\n\r\n* Fixes #3933\r\n\r\n<img width=\"1971\" alt=\"image\"\r\nsrc=\"https://github.com/rerun-io/rerun/assets/49431240/8d51f828-cab8-4940-9a2a-a35841fb7fe2\">\r\n\r\n\r\n#### Scope\r\n- Improve the \"Visible History\" feature to build more general time\r\nqueries:\r\n  - Control both start/end time boundaries\r\n  - relative/absolute/full mode for each boundaries\r\n  - explicit active/inactive state/checkbox\r\n- Improve usability:\r\n  - Proper scaling and bounds for the 'DragValue` widgets \r\n- Proper cascading behaviour from data group(s) to entity: a child's\r\n\"visible history\" settings will override the parent's if the feature is\r\nactive.\r\n  - Do not display Visible History UI in places where it's not supported\r\n\r\n#### Out-of-scope\r\n- Add support for Visible History to space views other than 2D/3D\r\n- Add Visible History UI to 3D/2D space view themselves (for consistency\r\nwith what precedes and to address some corner cases)\r\n- Add (read-only) shading in the time panel\r\n- Fix the numerous issues/missing features listed in:\r\n  - #4107\r\n\r\n#### TODO\r\n- [x] fine-tune the UI layout\r\n- [x] discuss/implement heuristics to decide whether or not to display\r\nthe UI\r\n- [x] add information notices (e.g. \"this applies to ALL sequence\r\ntimelines\")\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4123) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4123)\r\n- [Docs\r\npreview](https://rerun.io/preview/6bc0ba72dc79b5af782d73cbabb09b670c59b7e3/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/6bc0ba72dc79b5af782d73cbabb09b670c59b7e3/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)\r\n\r\n---------\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>",
          "timestamp": "2023-11-06T15:56:31+01:00",
          "tree_id": "53a7516bcda786b560b0dd7aaf60734b6bb897ea",
          "url": "https://github.com/rerun-io/rerun/commit/ce2493cfcc25ddc6f01ee9d8f40a365d7a6f6623"
        },
        "date": 1699283383821,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3048882,
            "range": "± 19348",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 396,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 314,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 428,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3097905,
            "range": "± 15378",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1884679,
            "range": "± 22364",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20449893,
            "range": "± 991531",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 140601485,
            "range": "± 2029796",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 178027785,
            "range": "± 681972",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 332944773,
            "range": "± 2001949",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 216976904,
            "range": "± 2252989",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 68506721,
            "range": "± 1789693",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 289235715,
            "range": "± 2636616",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14458600,
            "range": "± 277614",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4457920,
            "range": "± 56247",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 511623,
            "range": "± 2296",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20865868,
            "range": "± 616421",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 431735,
            "range": "± 1336",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8332633,
            "range": "± 465565",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8815790,
            "range": "± 26261",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 134097,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5247,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89084,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 240690,
            "range": "± 593",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37666,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2629,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42208,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1915299504,
            "range": "± 7539578",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1292388,
            "range": "± 6421",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1942117701,
            "range": "± 6766678",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1346076,
            "range": "± 4683",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1265224,
            "range": "± 3069",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3813,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1265945,
            "range": "± 5016",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29175,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 320,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 108,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2968,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 598,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8a9741679d2c0075b2012b430d112138b584c589",
          "message": "Make on TextLogLevel PascalCase (instead of SCREAMING CASE) to avoid clashes with preprocessor defines (#4152)\n\n### What\r\n\r\nConsidered also just using lower case on these (nobody would do `#define\r\ndebug`, ... RIGHT?). But they are _enum - like_ constants so all-caps\r\nfelt appropriate.\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4152) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4152)\r\n- [Docs\r\npreview](https://rerun.io/preview/ff8b29947f85102e649b7cb2ed651228888d3bf1/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/ff8b29947f85102e649b7cb2ed651228888d3bf1/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-11-06T19:43:46+01:00",
          "tree_id": "13c14e8fd0f79d87dfa89276eb47e8df60f3f187",
          "url": "https://github.com/rerun-io/rerun/commit/8a9741679d2c0075b2012b430d112138b584c589"
        },
        "date": 1699297113571,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3132970,
            "range": "± 85444",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 387,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 308,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 428,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3253180,
            "range": "± 142347",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1881843,
            "range": "± 18467",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 23248529,
            "range": "± 2229297",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 148352325,
            "range": "± 2019300",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 181097901,
            "range": "± 686463",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 352626591,
            "range": "± 5583243",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 217033033,
            "range": "± 2729021",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 74798676,
            "range": "± 828317",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 292842006,
            "range": "± 3818207",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16182040,
            "range": "± 1342538",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4560798,
            "range": "± 104586",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 491792,
            "range": "± 2025",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 24410416,
            "range": "± 1255665",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 417971,
            "range": "± 1872",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8697403,
            "range": "± 371543",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8874278,
            "range": "± 164466",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 136075,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5201,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 90321,
            "range": "± 403",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 240713,
            "range": "± 1621",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37994,
            "range": "± 1639",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2621,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 43278,
            "range": "± 314",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1850421906,
            "range": "± 37635654",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1284975,
            "range": "± 7960",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1907878253,
            "range": "± 2736861",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1356934,
            "range": "± 4676",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1188525,
            "range": "± 7116",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3805,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1204469,
            "range": "± 7025",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29710,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 320,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 109,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 3007,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 635,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "86eec25fd1ad8454d44e8a1b02fa35a7e582355c",
          "message": "Implement complete test suite for (pending) clear logic (#4144)",
          "timestamp": "2023-11-07T08:38:01+01:00",
          "tree_id": "0adbb78e3470e3316a613787b7b0922a7fce0311",
          "url": "https://github.com/rerun-io/rerun/commit/86eec25fd1ad8454d44e8a1b02fa35a7e582355c"
        },
        "date": 1699343620909,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3075818,
            "range": "± 20397",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 409,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 305,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 425,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3115797,
            "range": "± 9231",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1879910,
            "range": "± 12114",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 22616200,
            "range": "± 627180",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136433240,
            "range": "± 1277380",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 180235208,
            "range": "± 2596615",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 338697241,
            "range": "± 3987340",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 216052926,
            "range": "± 2045321",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 64864206,
            "range": "± 1771332",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 285784870,
            "range": "± 7150698",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14688295,
            "range": "± 191298",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4356588,
            "range": "± 34056",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 485955,
            "range": "± 1040",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20670445,
            "range": "± 347820",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 419247,
            "range": "± 1082",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8175024,
            "range": "± 13603",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8619779,
            "range": "± 33029",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 134503,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5321,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 90697,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 239244,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37893,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2603,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42250,
            "range": "± 3565",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1782079706,
            "range": "± 19386690",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1284857,
            "range": "± 17440",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1797138958,
            "range": "± 21311758",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1369873,
            "range": "± 5564",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1191356,
            "range": "± 10439",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3843,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1212888,
            "range": "± 34500",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29235,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 320,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 109,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2948,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 603,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "316bdddde11c0869401e07754297c001473cb59e",
          "message": "Reduce rerun_c library size (by depending on fewer unnecessary crates) (#4147)\n\n### What\r\n\r\n* Fix #2905 \r\n   * reduces Rerun C size from 41.0MiB to 34.2MiB (MacOS aarch64)\r\n* feels like there's more we should be able to do, but this PR stops the\r\nbleed of having it become larger as we add new types!\r\n* note that since this is a static library, typically the actual\r\nstripping occurs when linking the final binary, so while it's great that\r\nour library gets smaller for many reasons, it's not _critical_\r\n* `re_log_types` no longer depends on `re_types`\r\n* `re_sdk` no longer depends on `re_memory`\r\n* `re_sdk` no longer depends on `re_types`\r\n   * things only come together now on `rerun` crate\r\n\r\n\r\nDependency graph before:\r\n\r\n![deps-old](https://github.com/rerun-io/rerun/assets/1220815/8013eccc-6c8b-406e-a821-756d8dab31d7)\r\n\r\nDependency graph now:\r\n\r\n![deps-new](https://github.com/rerun-io/rerun/assets/1220815/b1fc5aae-8329-49d5-a059-1c93f39addd5)\r\n\r\nGraphs via: `cargo depgraph --all-deps --workspace-only --all-features\r\n--dedup-transitive-deps | dot -Tpng > deps.png`\r\nRerun C checks via: `cargo build -p rerun_c --release && ls -l\r\ntarget/release/librerun_c.a`\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4147) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4147)\r\n- [Docs\r\npreview](https://rerun.io/preview/8f3291ee534b1ca6eb4a3e3f4dd968ec44998336/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/8f3291ee534b1ca6eb4a3e3f4dd968ec44998336/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-11-07T09:51:01+01:00",
          "tree_id": "1d38558a27ebf5b418d49ba9f18c409ae4b89c27",
          "url": "https://github.com/rerun-io/rerun/commit/316bdddde11c0869401e07754297c001473cb59e"
        },
        "date": 1699348006806,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3042634,
            "range": "± 6211",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 386,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 307,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 423,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3079574,
            "range": "± 7036",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1843305,
            "range": "± 21637",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20017262,
            "range": "± 1608771",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135922919,
            "range": "± 1602408",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 172233332,
            "range": "± 1196766",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 324580796,
            "range": "± 1877532",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 212101569,
            "range": "± 2203227",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 62143828,
            "range": "± 1808426",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 282469158,
            "range": "± 3542507",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14758320,
            "range": "± 93876",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4462729,
            "range": "± 374529",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 473458,
            "range": "± 6242",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21056202,
            "range": "± 292263",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 406912,
            "range": "± 1018",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8307636,
            "range": "± 12548",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8730725,
            "range": "± 18750",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 135200,
            "range": "± 1105",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5341,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 91160,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 239872,
            "range": "± 709",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 39053,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2607,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 43952,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1837303271,
            "range": "± 11738865",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1244010,
            "range": "± 3779",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1860058101,
            "range": "± 5108291",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1348894,
            "range": "± 8703",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1162571,
            "range": "± 8278",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3645,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1183612,
            "range": "± 9816",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29229,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 332,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 112,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2855,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 609,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1665677+jprochazk@users.noreply.github.com",
            "name": "Jan Procházka",
            "username": "jprochazk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2969b83048439226f8e4858b9a1e42bfa7573bd4",
          "message": "Automatically sync assets on release (#4163)\n\n### What\r\n\r\nThe release assets are now synced automatically on the `release` event\r\nwith type `released`\r\n\r\n\r\nhttps://docs.github.com/en/webhooks/webhook-events-and-payloads?actionType=released#release\r\n\r\n> A release was published, or a pre-release was changed to a release.\r\n\r\nFixes https://github.com/rerun-io/rerun/issues/4133 (no longer needed)\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4163) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4163)\r\n- [Docs\r\npreview](https://rerun.io/preview/517970c00aec905c9ee2de6dcc977e456d289802/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/517970c00aec905c9ee2de6dcc977e456d289802/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-11-07T10:47:57+01:00",
          "tree_id": "550e716a28e754ca59def66bc596750ff0b6defe",
          "url": "https://github.com/rerun-io/rerun/commit/2969b83048439226f8e4858b9a1e42bfa7573bd4"
        },
        "date": 1699351336033,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3049959,
            "range": "± 4504",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 385,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 305,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 426,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3094383,
            "range": "± 6434",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1850993,
            "range": "± 8582",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 19030273,
            "range": "± 202056",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 133208817,
            "range": "± 879752",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 172015981,
            "range": "± 717942",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 328193062,
            "range": "± 1785666",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 210327601,
            "range": "± 733808",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 61635706,
            "range": "± 550863",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 281542056,
            "range": "± 2602349",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14609481,
            "range": "± 43419",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4421657,
            "range": "± 11510",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 469459,
            "range": "± 6381",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20511420,
            "range": "± 159570",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 406689,
            "range": "± 907",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8308436,
            "range": "± 10112",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8748156,
            "range": "± 12192",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 135889,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5245,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 90412,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 239955,
            "range": "± 388",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38825,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2616,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 43441,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1830395350,
            "range": "± 10657656",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1262528,
            "range": "± 8559",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1867030193,
            "range": "± 5416014",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1367593,
            "range": "± 4324",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1191376,
            "range": "± 5541",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3614,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1211584,
            "range": "± 3428",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29239,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 325,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 112,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2845,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 629,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1665677+jprochazk@users.noreply.github.com",
            "name": "Jan Procházka",
            "username": "jprochazk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8a96b545ace5e32d4d89ec6f6bafb24bf32c0b76",
          "message": "Add command to copy direct link to fully qualified URL (#4165)\n\n### What\r\n\r\nWhen on web, the command pallete now lists a command to copy a direct\r\nlink to the \"fully qualified\" URL, which is `location.origin` +\r\n`query[\"url\"]`.\r\n\r\nFixes https://github.com/rerun-io/rerun/issues/4122\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4165) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4165)\r\n- [Docs\r\npreview](https://rerun.io/preview/511ef39edb815811050aa3d325ff517314cc082e/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/511ef39edb815811050aa3d325ff517314cc082e/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-11-07T12:56:46+01:00",
          "tree_id": "765305f4296d7056a32a5ee77c4eee23087110bd",
          "url": "https://github.com/rerun-io/rerun/commit/8a96b545ace5e32d4d89ec6f6bafb24bf32c0b76"
        },
        "date": 1699359093656,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3058441,
            "range": "± 18782",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 394,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 310,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 436,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3076692,
            "range": "± 6428",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1836857,
            "range": "± 7584",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 18940993,
            "range": "± 162261",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 133126312,
            "range": "± 8424847",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 170282919,
            "range": "± 742481",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 320174805,
            "range": "± 1064242",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 210129352,
            "range": "± 484878",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 61291090,
            "range": "± 554862",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 275967810,
            "range": "± 2009002",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14809129,
            "range": "± 38662",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4427762,
            "range": "± 21582",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 479190,
            "range": "± 5216",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20787668,
            "range": "± 143702",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 423573,
            "range": "± 2495",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8157653,
            "range": "± 63759",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8578503,
            "range": "± 40442",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 135275,
            "range": "± 1493",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5235,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 90724,
            "range": "± 1530",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 241549,
            "range": "± 2511",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 39008,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2677,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42307,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1795091316,
            "range": "± 8637420",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1266341,
            "range": "± 14621",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1849942199,
            "range": "± 6454933",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1355941,
            "range": "± 14564",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1167941,
            "range": "± 8074",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3633,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1175364,
            "range": "± 5974",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29628,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 320,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 111,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 3053,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 614,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3279714fdd7bc064b89e466003f8e9b378c0fdb1",
          "message": "Fix unnecessary includes in code generated headers (#4132)\n\n### What\r\n\r\n* Fixes #3991\r\n* Allow several _ext -> header copy blocks\r\n* no longer automatically add all includes from _ext file to header\r\n* detect includes in copy to header blocks and add them to the header\r\nlist\r\n* rename `util.hpp` to `warning_macros.hpp`\r\n* change copy-to-codegen markers to an xml like syntax, shortening it a\r\nbit and making it easier to read\r\n\r\nOh and every _ext file I touched a bit more I cleaned up to use a less\r\nautocomplete friendly but easier to understand way of handling the\r\nextension code. Let's prefer this going forward (there's no functional\r\ndifference though).\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4132) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4132)\r\n- [Docs\r\npreview](https://rerun.io/preview/2799f8838b5920d4343011d09b6a75ce47666355/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/2799f8838b5920d4343011d09b6a75ce47666355/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)\r\n\r\n---------\r\n\r\nCo-authored-by: Jeremy Leibs <jeremy@rerun.io>",
          "timestamp": "2023-11-07T13:50:45+01:00",
          "tree_id": "42065c4bf0e98dc46566496311e04b3b73e73604",
          "url": "https://github.com/rerun-io/rerun/commit/3279714fdd7bc064b89e466003f8e9b378c0fdb1"
        },
        "date": 1699362348192,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3061561,
            "range": "± 16633",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 386,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 309,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 428,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3094940,
            "range": "± 27546",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1847981,
            "range": "± 9633",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 21609017,
            "range": "± 295270",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 140843803,
            "range": "± 13854893",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 189718583,
            "range": "± 10724040",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 363499676,
            "range": "± 25394443",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 222128126,
            "range": "± 12598323",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 65495157,
            "range": "± 7976454",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 303878352,
            "range": "± 19574736",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 15018501,
            "range": "± 95293",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4449857,
            "range": "± 33930",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 476286,
            "range": "± 9535",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21334347,
            "range": "± 388868",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 407516,
            "range": "± 2236",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8390877,
            "range": "± 36695",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8795804,
            "range": "± 32539",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 136221,
            "range": "± 1281",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5386,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 91119,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 242191,
            "range": "± 739",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38976,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2744,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 43819,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 2060322649,
            "range": "± 59478389",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1257180,
            "range": "± 5493",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 2087543895,
            "range": "± 63740836",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1358408,
            "range": "± 5594",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1174501,
            "range": "± 8247",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3624,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1195132,
            "range": "± 9408",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29725,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 337,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 112,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2843,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 694,
            "range": "± 4",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "01bbdbce8224c6ee7c5006b2892986f236b86fa7",
          "message": "Python: remove legacy APIs (#4037)\n\n- Fixes #3916 \r\n\r\nI've also added `AnnotationInfo` & `ClassDescription` at the root-level\r\ninit.",
          "timestamp": "2023-11-07T17:31:18+01:00",
          "tree_id": "ebc7f6bf711d8458e21b8eb1c46ef6f239d2acea",
          "url": "https://github.com/rerun-io/rerun/commit/01bbdbce8224c6ee7c5006b2892986f236b86fa7"
        },
        "date": 1699375479523,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3036587,
            "range": "± 137962",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 393,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 307,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 431,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3039599,
            "range": "± 4777",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1838391,
            "range": "± 9096",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 19194438,
            "range": "± 414762",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136351531,
            "range": "± 1030809",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 172434956,
            "range": "± 1898913",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 328970268,
            "range": "± 1768311",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 212310608,
            "range": "± 1758701",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 61273599,
            "range": "± 751914",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 279990042,
            "range": "± 1596298",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 15269890,
            "range": "± 22764",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4435364,
            "range": "± 35148",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 480683,
            "range": "± 3921",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21182818,
            "range": "± 112166",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 420630,
            "range": "± 734",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8098457,
            "range": "± 31415",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8539747,
            "range": "± 29996",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 136341,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5230,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 90462,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 238720,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38632,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2604,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 43039,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1878957244,
            "range": "± 18006995",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1246344,
            "range": "± 34276",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1904783706,
            "range": "± 8492098",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1341766,
            "range": "± 4785",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1242190,
            "range": "± 6842",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3687,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1220949,
            "range": "± 9703",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29688,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 322,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 113,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2850,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 606,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49431240+abey79@users.noreply.github.com",
            "name": "Antoine Beyeler",
            "username": "abey79"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a586ae4d6bf0cceef7781decc6f6453509f916d0",
          "message": "Fix markdown heading size (#4178)\n\n### What\r\n\r\n- Take advantage of\r\nhttps://github.com/lampsitter/egui_commonmark/pull/20 to use \"correct\"\r\nheadings in in-app quick start guides.\r\n- Bump egui_commonmark to 0.9.2 which includes the PR above\r\n- Fixes #3612\r\n\r\n<img width=\"1305\" alt=\"image\"\r\nsrc=\"https://github.com/rerun-io/rerun/assets/49431240/a4befe22-2675-4a8f-a5ca-38cec3141b13\">\r\n\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4178) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4178)\r\n- [Docs\r\npreview](https://rerun.io/preview/85986f760b9d674ecb58917f1b77693f43d3c3bf/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/85986f760b9d674ecb58917f1b77693f43d3c3bf/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-11-08T08:49:36+01:00",
          "tree_id": "732fb43d7686bc1b0d2f6aa6f9d1039df5d5090b",
          "url": "https://github.com/rerun-io/rerun/commit/a586ae4d6bf0cceef7781decc6f6453509f916d0"
        },
        "date": 1699430636917,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3095746,
            "range": "± 18391",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 391,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 306,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 425,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3147635,
            "range": "± 111695",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1840899,
            "range": "± 11854",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20910508,
            "range": "± 1487491",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138581636,
            "range": "± 2624955",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 176655668,
            "range": "± 929739",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 332155644,
            "range": "± 2180682",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 213732612,
            "range": "± 2091215",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 68277712,
            "range": "± 2130644",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 292815099,
            "range": "± 3863420",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14606080,
            "range": "± 338554",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4432448,
            "range": "± 51610",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 507014,
            "range": "± 2312",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21086725,
            "range": "± 575486",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 421454,
            "range": "± 849",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8199989,
            "range": "± 314661",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8677534,
            "range": "± 50014",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 135913,
            "range": "± 421",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5234,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89699,
            "range": "± 449",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 240124,
            "range": "± 788",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37839,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2629,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42383,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1838356582,
            "range": "± 8219092",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1278503,
            "range": "± 17701",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1851887785,
            "range": "± 4409085",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1350430,
            "range": "± 5575",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1171432,
            "range": "± 8013",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3636,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1199419,
            "range": "± 10290",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 30842,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 323,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 113,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2949,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 601,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7bf7ccb78aa7e51b49c6b4238b2f8364a811bb7a",
          "message": "Do not use `RowId::ZERO` in query benchmarks (illegal RowId duplicates) (#4187)\n\nBenchmarks failed to run once I merge the `RowId` stuff, because they\r\nonly run on `main` :(",
          "timestamp": "2023-11-08T19:07:10+01:00",
          "tree_id": "ab9ea3b95458a659ad2fa06b839d8200db50f007",
          "url": "https://github.com/rerun-io/rerun/commit/7bf7ccb78aa7e51b49c6b4238b2f8364a811bb7a"
        },
        "date": 1699467779450,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3033403,
            "range": "± 44689",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 385,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 297,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 412,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2990907,
            "range": "± 64296",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1839657,
            "range": "± 38351",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 18608222,
            "range": "± 726691",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 132992871,
            "range": "± 1676165",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 171809929,
            "range": "± 2709986",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 321507745,
            "range": "± 3302887",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 205657080,
            "range": "± 2578774",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 60917941,
            "range": "± 1350474",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 270508776,
            "range": "± 3192221",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14637881,
            "range": "± 379815",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4381893,
            "range": "± 101945",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 431880,
            "range": "± 17732",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20249854,
            "range": "± 512081",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 392989,
            "range": "± 13096",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7827639,
            "range": "± 193187",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8298580,
            "range": "± 186875",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 130610,
            "range": "± 2834",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4932,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 85608,
            "range": "± 1965",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 228547,
            "range": "± 6522",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38479,
            "range": "± 1195",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2603,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 41791,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 2047181985,
            "range": "± 10301670",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1299282,
            "range": "± 10275",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 2050312805,
            "range": "± 14991781",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1382258,
            "range": "± 8563",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1300403,
            "range": "± 7142",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3864,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1273198,
            "range": "± 10630",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29270,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 319,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 112,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2898,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 604,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b8ea6af02ca21fdf90a9880c915bd395130a348e",
          "message": "Implement recording/last-modified-at aware garbage collection (#4183)\n\n**Commit by commit, there's renaming involved!**\r\n\r\nGC will now focus on the oldest-modified recording first.\r\nTried a lot of fancy things, but a lot of stress testing has shown that\r\nnothing worked as well as doing this the dumb way.\r\n\r\nSpeaking of stress testing, the scripts I've used are now committed in\r\nthe repository. Make sure to try them out when modifying the GC code\r\n:grimacing:.\r\n\r\nIn general, the GC supports stress much better than I thought/hoped:\r\n- `many_medium_sized_single_row_recordings.py`,\r\n`many_medium_sized_many_rows_recordings.py` &\r\n`many_large_many_rows_recordings.py` all behave pretty nicely, something\r\nlike this:\r\n\r\n\r\nhttps://github.com/rerun-io/rerun/assets/2910679/26f67d69-de0e-4002-8936-2ac32c451cc3\r\n\r\n\r\n- `many_large_single_row_recordings.py` on the other hand is _still_ a\r\ndisaster (watch til the end, this slowly devolves into a blackhole):\r\n\r\n\r\nhttps://github.com/rerun-io/rerun/assets/2910679/673ee10c-2eca-4e3e-b285-77714e5c3d61\r\n\r\n\r\n\r\nThis is not a new problem (not to me at least :grimacing:), large\r\nrecordings with very few rows have always been a nightmare on the GC\r\n(not specifically the DataStore GC, the GC as a whole through the entire\r\napp).\r\nI've never had time to investigate why, but now we have an issue for it\r\nat least:\r\n- #4185 \r\n\r\n---\r\n\r\n- Fixes #1904",
          "timestamp": "2023-11-09T09:57:33+01:00",
          "tree_id": "1e3c572e41976a2cb9614669f7ab8d712605ba42",
          "url": "https://github.com/rerun-io/rerun/commit/b8ea6af02ca21fdf90a9880c915bd395130a348e"
        },
        "date": 1699521233727,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3051363,
            "range": "± 22227",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 382,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 298,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 420,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3101437,
            "range": "± 7686",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1873845,
            "range": "± 11350",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 18630096,
            "range": "± 129608",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134639465,
            "range": "± 812735",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 170883451,
            "range": "± 1012758",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 323780732,
            "range": "± 1185559",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 210465955,
            "range": "± 797446",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 62509331,
            "range": "± 614237",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 281610226,
            "range": "± 1056885",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14335380,
            "range": "± 31553",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4444214,
            "range": "± 22553",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 482940,
            "range": "± 4769",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20296549,
            "range": "± 122555",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 409451,
            "range": "± 692",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8238182,
            "range": "± 11963",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8650340,
            "range": "± 13475",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 135401,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5195,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89681,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 240428,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37851,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2685,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 43200,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1994026400,
            "range": "± 9140689",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1269529,
            "range": "± 23137",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 2041189250,
            "range": "± 6486470",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1340344,
            "range": "± 9196",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1230070,
            "range": "± 8106",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3842,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1245583,
            "range": "± 10596",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 30829,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 327,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 111,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2844,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 617,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1aa220a680186e991531ece335aeac36f42c4e13",
          "message": "Simple logging benchmarks for C++ & Rust (#4181)\n\n### What\r\n\r\n* Part of #4100\r\n\r\nImplements SDK sided logging benchmark for C++ & Rust.\r\nKept as simple as possible, meant for whole-process profiling so we\r\ncapture all sideeffects. This makes tthe data generation ('prepare')\r\ninside the benchmark apps ofc quite tricky as it has to be as fast as\r\npossible.\r\nAdditionally, both Rust & Cpp app expose a way to get more fine grained\r\nlogging. Cpp does this via a simple profiler scope, Rust via\r\nPuffin/re_tracing.\r\n\r\nLogging always happens to a memory recording.\r\nData is currently never passed in in the Rerun format\r\n\r\nContains the tree initial benchmarks we wanted to have:\r\n* points3d_large_batch\r\n* Single batch of 50mio points (color, position, radius, single label)\r\n* points3d_many_individual\r\n* 1mio individual points with different time stamp each (color,\r\nposition, radius)\r\n* image\r\n   * log 4 different 16k x 16k RGBA8 images (4GiB of memory!)\r\n\r\nRunning instructions in `main.rs` & `main.cpp`!\r\n\r\n\r\nTimings on my M1 Max in seconds\r\n(tests are not perfectly comparable, they do not do the exact same\r\nthing. Prepare times are also slightly different and most significant in\r\nthe _large_batch test)\r\n\r\n* points3d_large_batch\r\n   * C++:  0.94s\r\n   * Rust: 1.34s\r\n* points3d_many_individual\r\n* C++: 16.86s (⚠️ there's almost certainly some involuntary allocation\r\ngoing on there)\r\n   * Rust: 2.75s\r\n* image\r\n   * C++: 3.11s\r\n   * Rust: 1.10s\r\n\r\n\r\nMissing\r\n* Python version\r\n* utility script for building, running and publishing data\r\n\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4181) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4181)\r\n- [Docs\r\npreview](https://rerun.io/preview/73a3736ac3c0be33fa8d6e6b40a2af243c4aa2d9/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/73a3736ac3c0be33fa8d6e6b40a2af243c4aa2d9/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-11-09T11:14:50+01:00",
          "tree_id": "e3fab677d92f58e826f47c275ce1f73de1195950",
          "url": "https://github.com/rerun-io/rerun/commit/1aa220a680186e991531ece335aeac36f42c4e13"
        },
        "date": 1699525772066,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3026815,
            "range": "± 10197",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 403,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 311,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 426,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3081915,
            "range": "± 25591",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1857563,
            "range": "± 68615",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20081725,
            "range": "± 1202342",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 133269492,
            "range": "± 1569975",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 172568264,
            "range": "± 954197",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 326076750,
            "range": "± 3697813",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 208528188,
            "range": "± 1431780",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 62239294,
            "range": "± 1857286",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 275170646,
            "range": "± 2203619",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14458248,
            "range": "± 644177",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4406227,
            "range": "± 159957",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 508778,
            "range": "± 1537",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20595133,
            "range": "± 284303",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 407031,
            "range": "± 1329",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8256309,
            "range": "± 14322",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8608168,
            "range": "± 15269",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 135573,
            "range": "± 631",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5311,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89731,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 240273,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38628,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2687,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42158,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1983977940,
            "range": "± 6960809",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1281390,
            "range": "± 13165",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 2001076384,
            "range": "± 35806165",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1361428,
            "range": "± 5105",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1246208,
            "range": "± 10583",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3773,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1253023,
            "range": "± 10692",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29738,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 325,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 112,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2946,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 602,
            "range": "± 23",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "46b3cbfbc1afc9e838b6d62d48648d4bbcba3720",
          "message": "Scope the defaultFormatter override to python (#4177)\n\n### What\r\nWithout this, vs code stopped running rust-analyzer on my project.\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4177) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4177)\r\n- [Docs\r\npreview](https://rerun.io/preview/bda06c132a491981b33dc4a08c3776916e5b8a11/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/bda06c132a491981b33dc4a08c3776916e5b8a11/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-11-09T17:45:38+01:00",
          "tree_id": "08dccd14554003d2e287a80a41197dc7a1260f91",
          "url": "https://github.com/rerun-io/rerun/commit/46b3cbfbc1afc9e838b6d62d48648d4bbcba3720"
        },
        "date": 1699549127106,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3042263,
            "range": "± 50036",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 378,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 297,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 433,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3101050,
            "range": "± 49285",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1866610,
            "range": "± 29757",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 18977999,
            "range": "± 421368",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135404237,
            "range": "± 1056374",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 171106703,
            "range": "± 1732449",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 324981938,
            "range": "± 1236059",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 207784221,
            "range": "± 1564094",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 59920189,
            "range": "± 447548",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 273879097,
            "range": "± 2162432",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14721803,
            "range": "± 273093",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4429901,
            "range": "± 65970",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 478167,
            "range": "± 8641",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20481597,
            "range": "± 425379",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 419792,
            "range": "± 3101",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8108629,
            "range": "± 98651",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8532203,
            "range": "± 149287",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 136087,
            "range": "± 1616",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5252,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89488,
            "range": "± 1697",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 238870,
            "range": "± 1857",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37616,
            "range": "± 453",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2594,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42058,
            "range": "± 555",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1986598528,
            "range": "± 5704105",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1252073,
            "range": "± 14261",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 2020254938,
            "range": "± 10243310",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1336024,
            "range": "± 29343",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1237503,
            "range": "± 26796",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3878,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1249703,
            "range": "± 20462",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29693,
            "range": "± 455",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 329,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 111,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2863,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 617,
            "range": "± 7",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8bff99701b878822a7d2e4be07d078d09be616d8",
          "message": "C++ Doxygen documentation & many doc improvements (#4191)\n\n### What\r\n\r\n**Try it yourself:**\r\nhttps://wumpf.github.io/rerun-cpp-doc-test/\r\n(yes I sacrificed a repo for this ;))\r\nOr to get a perfect up to date version now and in the future just run\r\n`pixi run cpp-docs`, the docs appear then in\r\n`rerun_cpp/docs/html/index.html`\r\n\r\n* fixes _almost_ #3974\r\n* Missing are:\r\n   * process to upload it to landing and link it up in our docs\r\n   * more thorough pass to improve docs overall\r\n* lots of stuff is undocumented. We should consider making this an error\r\nin doxygen (I disabled it for the time being!)\r\n\r\nAfter some back and forth I landed with a pure doxygen documentation\r\nusing the impressively good\r\nhttps://jothepro.github.io/doxygen-awesome-css/ css.\r\nTo avoid submoduling and make customization easy, the theme is embedded\r\nin our repo.\r\n\r\nOtherwise tons of improvements on our doc strings. Started a guide on\r\nhow to write docs similar to what we have for python.\r\n\r\nQuite happy with it as-is already. Some of the doc improvements to be\r\ndone are also related to smaller code refactors I want to do :)\r\n\r\nReview tip: The first commit contains the default doxygen file, if you\r\nwant to know what I changed about it just exclude it.\r\n\r\nBunch of screenshots for the lazy:\r\n\r\n![image](https://github.com/rerun-io/rerun/assets/1220815/e603c1a4-07a9-4695-b9c7-d2980bb314fb)\r\n\r\n![image](https://github.com/rerun-io/rerun/assets/1220815/ffe825ca-5d4a-499d-a6ae-e4dc50ac761f)\r\n\r\n![image](https://github.com/rerun-io/rerun/assets/1220815/783846b1-e7cb-4a9a-8491-c5ab98499bd2)\r\n\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4191) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4191)\r\n- [Docs\r\npreview](https://rerun.io/preview/aa7c49ed49fe8fee18be914ccf604662143c7833/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/aa7c49ed49fe8fee18be914ccf604662143c7833/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-11-10T12:09:22+01:00",
          "tree_id": "aa5aaf38ad6a4f693c41b74c9c8ebc0c66d8256d",
          "url": "https://github.com/rerun-io/rerun/commit/8bff99701b878822a7d2e4be07d078d09be616d8"
        },
        "date": 1699615445313,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3024780,
            "range": "± 11061",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 377,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 299,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 422,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3060606,
            "range": "± 47654",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1857103,
            "range": "± 12910",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 22648350,
            "range": "± 1727143",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137815305,
            "range": "± 2342927",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 175834024,
            "range": "± 1153466",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 332969676,
            "range": "± 3082747",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 210987880,
            "range": "± 1066309",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 65640136,
            "range": "± 2393064",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 282527598,
            "range": "± 1891763",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14738470,
            "range": "± 333917",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4600285,
            "range": "± 70679",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 508749,
            "range": "± 6127",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 23118645,
            "range": "± 377064",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 421794,
            "range": "± 828",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8191754,
            "range": "± 40787",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8591280,
            "range": "± 36632",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 136853,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5211,
            "range": "± 934",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89678,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 238697,
            "range": "± 539",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37767,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2603,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 43433,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1983775980,
            "range": "± 6172267",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1265334,
            "range": "± 12465",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 2060703923,
            "range": "± 8296877",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1379926,
            "range": "± 59332",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1250198,
            "range": "± 9909",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3790,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1257958,
            "range": "± 5513",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29269,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 332,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 114,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2901,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 621,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49431240+abey79@users.noreply.github.com",
            "name": "Antoine Beyeler",
            "username": "abey79"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a4cf64490fbbc948bd1921fc32cb2b467ac5b1a8",
          "message": "Add support for Visible History to time series space views (#4179)\n\n### What\r\n\r\n- Add support for Visible History to Timeseries space views\r\n- Needed to introduce `DataStore::entity_min_time()` to maintain the\r\nconsistent \"beginning of x axis\" behaviour.\r\n- Changes the way the Visible History feature is organised:\r\n- Now all space view (blueprint) contain a \"root entity properties\"\r\nstructure that is cascaded to the enclosed groups and entities.\r\n- The visible history part of that root entity props is editable for all\r\nsupported space view classes (now 2d, 3d, and timeseries).\r\n- The rest is unchanged: this means that contrary to the plan it's also\r\npossible to edit the visible history on a per-entity basis in timeseries\r\nspace views as well.\r\n\r\n-  Closes #2547\r\n\r\n#### Known limitations\r\n- default value for `EntityProperty` is not ideal for entities in\r\ntimeseries space view (2x `Relative(0)`)\r\n- https://github.com/rerun-io/rerun/issues/4192\r\n\r\n#### TODO\r\n\r\n- [x] freeze the plot display bounds while the time cursor is dragged\r\n- [x] setting must be serialised to blueprint\r\n\r\n\r\nhttps://github.com/rerun-io/rerun/assets/49431240/5bc6033d-54d4-4376-845b-81189f3c5bb7\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4179) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4179)\r\n- [Docs\r\npreview](https://rerun.io/preview/8c2be673a26cff49e76942bf99b06c4b76957774/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/8c2be673a26cff49e76942bf99b06c4b76957774/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-11-10T13:06:52+01:00",
          "tree_id": "eaf3095a759259bfad5f65b66b75390f2b3e5fe0",
          "url": "https://github.com/rerun-io/rerun/commit/a4cf64490fbbc948bd1921fc32cb2b467ac5b1a8"
        },
        "date": 1699618895693,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3036782,
            "range": "± 13464",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 379,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 301,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 418,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3056450,
            "range": "± 112287",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1845122,
            "range": "± 13708",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 18710574,
            "range": "± 248516",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 130275101,
            "range": "± 807233",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 169768584,
            "range": "± 1034750",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 316473127,
            "range": "± 1059046",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 206091427,
            "range": "± 502072",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 58824118,
            "range": "± 400034",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 272843329,
            "range": "± 1938097",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14443934,
            "range": "± 37341",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4423594,
            "range": "± 7893",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 506326,
            "range": "± 6316",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20330199,
            "range": "± 155343",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 421263,
            "range": "± 2630",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8108200,
            "range": "± 32144",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8548401,
            "range": "± 10010",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 136563,
            "range": "± 375",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5224,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 91424,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 237111,
            "range": "± 446",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38750,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2615,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 43136,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1933566066,
            "range": "± 7371008",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1248577,
            "range": "± 12433",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1963607389,
            "range": "± 6393636",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1337515,
            "range": "± 21356",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1239282,
            "range": "± 5792",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3793,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1250319,
            "range": "± 6684",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 30696,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 323,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 111,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2869,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 605,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9b9f80041b0f5845aefa6bc944161dea8356dcb2",
          "message": "New debug option to show the blueprint in the streams view (#4189)\n\n### What\r\nIt's much easier to debug the blueprint if we can see what's going on.\r\nSince the blueprint is just another store, we already have decent\r\ninspection tools for this.\r\n\r\nThis just adds a toggle to show the blueprint in the time panel and a\r\nbit of extra handling to resolve blueprint entity paths in the\r\nselection-panel.\r\n\r\nThis doesn't handle entity-path-collisions gracefully, but as a\r\ndebug-only tool that seems like an acceptable trade-off. Eventually we\r\nare going to need to track the originating store as part of the\r\nselection anyways so this constraint should get resolved at that point.\r\n\r\nThis will become even more valuable as we migrate from serde-style to\r\narrow-style blueprint components as the data UI will become much more\r\nuseful.\r\n\r\n\r\n![image](https://github.com/rerun-io/rerun/assets/3312232/eb24fe2b-607e-4bff-b101-54cb5d0fd83f)\r\n\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4189) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4189)\r\n- [Docs\r\npreview](https://rerun.io/preview/9489a45868312d757373e8de23f933b74b331bcb/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/9489a45868312d757373e8de23f933b74b331bcb/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-11-10T21:09:05+01:00",
          "tree_id": "0789ec7accc6b75acd7cd90a1534d2f04ede099f",
          "url": "https://github.com/rerun-io/rerun/commit/9b9f80041b0f5845aefa6bc944161dea8356dcb2"
        },
        "date": 1699647833057,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3171842,
            "range": "± 285869",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 382,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 305,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 443,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3143184,
            "range": "± 268461",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1879197,
            "range": "± 9064",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 24249449,
            "range": "± 3101736",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 141074797,
            "range": "± 3526361",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 177755209,
            "range": "± 1703250",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 340734915,
            "range": "± 4168623",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 216562941,
            "range": "± 3160670",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70038311,
            "range": "± 3744406",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 292710013,
            "range": "± 5948532",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 15364071,
            "range": "± 3016161",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4443438,
            "range": "± 591198",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 472063,
            "range": "± 5825",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21631671,
            "range": "± 2981096",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 409000,
            "range": "± 3659",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8566862,
            "range": "± 578974",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 9278835,
            "range": "± 509724",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 135685,
            "range": "± 637",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5312,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 90546,
            "range": "± 983",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 240326,
            "range": "± 2188",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37920,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2641,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42328,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 2017445470,
            "range": "± 14634075",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1250611,
            "range": "± 8609",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 2058325560,
            "range": "± 13663039",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1355728,
            "range": "± 13588",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1233632,
            "range": "± 23657",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3792,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1246412,
            "range": "± 7649",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29218,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 320,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 116,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 3058,
            "range": "± 314",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 601,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe293f595aa9dde4897a757b291177952463104b",
          "message": "Use built-in wgsl type aliases instead of our own, remove zero/one wgsl constants (#4200)\n\n### What\r\n\r\nStumbled over the existence of those while working on another thing.\r\nZero/one constants seem to be pointless given how easily the values are\r\ninitialized - default ctor for all types is defined to be zero :)\r\n\r\n_commit by commit_\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4200) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4200)\r\n- [Docs\r\npreview](https://rerun.io/preview/c329bdcdfc69278bbcc19a00113274087f24dabf/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/c329bdcdfc69278bbcc19a00113274087f24dabf/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-11-13T11:25:36+01:00",
          "tree_id": "4643d3df02a0d19ba0a16f3ec352da98844bb0f2",
          "url": "https://github.com/rerun-io/rerun/commit/fe293f595aa9dde4897a757b291177952463104b"
        },
        "date": 1699871937583,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3050064,
            "range": "± 172105",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 384,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 298,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 433,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3078353,
            "range": "± 130064",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1866703,
            "range": "± 13041",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20337049,
            "range": "± 2193894",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134609544,
            "range": "± 3274262",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 176050758,
            "range": "± 2501065",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 331677857,
            "range": "± 5143410",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 214789058,
            "range": "± 3302512",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 68761263,
            "range": "± 4341525",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 284816502,
            "range": "± 6765582",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16774928,
            "range": "± 1420304",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4447869,
            "range": "± 322257",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 494039,
            "range": "± 12629",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21879918,
            "range": "± 1839347",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 410786,
            "range": "± 1570",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8116014,
            "range": "± 553411",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8564002,
            "range": "± 57463",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 135813,
            "range": "± 448",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5169,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 88603,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 239831,
            "range": "± 1169",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38786,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2621,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 43458,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1997735452,
            "range": "± 12203336",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1305529,
            "range": "± 9401",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 2057516777,
            "range": "± 9370154",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1357327,
            "range": "± 10368",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1260689,
            "range": "± 5869",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3873,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1314781,
            "range": "± 4597",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29667,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 322,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 111,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2901,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 629,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dcdde90f6d14c88031f72791ef0982e5d9b7d56c",
          "message": "C++ use nested namespaces for less right shift (#4213)\n\n### What\r\n\r\nChanges codegen to use C++17 [nested\r\nnamespaces](https://en.cppreference.com/w/cpp/language/namespace).\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4213) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4213)\r\n- [Docs\r\npreview](https://rerun.io/preview/81288b0897c92c019187ad36de00df5d0764747a/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/81288b0897c92c019187ad36de00df5d0764747a/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-11-13T12:53:35+01:00",
          "tree_id": "8869f3d530ec0c303564004e99b99873cca9f4f2",
          "url": "https://github.com/rerun-io/rerun/commit/dcdde90f6d14c88031f72791ef0982e5d9b7d56c"
        },
        "date": 1699877292265,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3096417,
            "range": "± 23022",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 383,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 301,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 421,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3133059,
            "range": "± 22988",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1888364,
            "range": "± 16305",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 21622132,
            "range": "± 1339925",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 141343654,
            "range": "± 2306238",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 177938492,
            "range": "± 512309",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 336116703,
            "range": "± 1421901",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 212662177,
            "range": "± 1663168",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 67117500,
            "range": "± 2126768",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 285028625,
            "range": "± 3264266",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 16534861,
            "range": "± 1609177",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4658533,
            "range": "± 275613",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 469910,
            "range": "± 14167",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21318906,
            "range": "± 1114434",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 407800,
            "range": "± 1490",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8153053,
            "range": "± 91618",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8581787,
            "range": "± 137228",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 136787,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5282,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 91828,
            "range": "± 333",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 240607,
            "range": "± 1068",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38016,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2577,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42422,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1997176533,
            "range": "± 7967103",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1290060,
            "range": "± 9564",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 2063942399,
            "range": "± 6010434",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1351780,
            "range": "± 10389",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1237434,
            "range": "± 3673",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3834,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1244702,
            "range": "± 6718",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 30816,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 332,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 113,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2922,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 618,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ee3c6af9a02170b2f02a1a7031b4d95883e9707",
          "message": "Fix line & points (& depth clouds points) radii being unaffected by scale & projection via Pinhole (#4199)\n\n### What\r\nLongstanding issue!\r\n\r\n* Fixes #1223\r\n* Fixes #1219\r\n* Fixes #2494\r\n* Replaces #4196\r\n\r\nShader only fix, in the future the scale factor shouldn't be extracted\r\non the fly for every vertex out of the transform and instead passed in,\r\nbut I wanted to keep the change minimal. The added vertex shading cost\r\nis unlikely to matter all that much _short term_.\r\n(also was very nice iterating on this and get before/after screenshots\r\n;))\r\n\r\nThrow-away test script for this:\r\n```py\r\nimport numpy as np\r\nimport rerun as rr\r\n\r\nrr.init(\"scale fix test!!!\", spawn=True)\r\n\r\n#############################\r\n# #2494 & #1219\r\n#############################\r\nrr.log(\"world/camera\", rr.ViewCoordinates.RDF, timeless=True)\r\nrr.log(\r\n    \"world/camera/image\",\r\n    rr.Pinhole(\r\n        image_from_camera=np.array([[500, 0, 250], [0, 500, 250], [0, 0, 1]]),\r\n        width=500,\r\n        height=500,\r\n    ),\r\n)\r\nrr.log(\"world/camera/image/rgb\", rr.Image(np.ones((500, 500, 3))))\r\nrr.log(\r\n    \"world/camera/image/points\",\r\n    rr.Points2D(np.random.uniform(0, 500, (30, 2)), radii=1),\r\n)\r\n\r\n#############################\r\n# #1223\r\n#############################\r\nrr.log(\r\n    \"scaling_stuff/points_unscaled\",\r\n    rr.Points3D(\r\n        np.random.uniform(0, 1, (30, 3)),\r\n        radii=0.1,\r\n    ),\r\n)\r\nrr.log(\r\n    \"scaling_stuff/points_scaled\",\r\n    rr.Points3D(\r\n        np.random.uniform(0, 1, (30, 3)),\r\n        radii=0.1,\r\n    ),\r\n    rr.Transform3D(scale=2.0, translation=[2, 2, 2]),\r\n)\r\n\r\n\r\nrr.log(\r\n    \"scaling_stuff/lines_unscaled\",\r\n    rr.LineStrips3D([[0, 1, 0], [0, 1, 1], [0, 0, 3]], radii=0.1),\r\n)\r\nrr.log(\r\n    \"scaling_stuff/lines_scaled\",\r\n    rr.LineStrips3D([[0, 1, 0], [0, 1, 1], [0, 0, 3]], radii=0.1),\r\n    rr.Transform3D(scale=2.0, translation=[2, 2, 2]),\r\n)\r\n```\r\n\r\nResult:\r\n\r\nBefore:\r\n\r\n![image](https://github.com/rerun-io/rerun/assets/1220815/29d8f98a-c2f9-4503-84c7-83fc7a8814ff)\r\n\r\nAfter:\r\n\r\n![image](https://github.com/rerun-io/rerun/assets/1220815/3d555ad9-790f-446f-a3c0-d72904db7a84)\r\n\r\n\r\nThis not only fixes issues with 2D->3D but also with 3D->2D.\r\nHere we add the 3D points to the 2D camera and set a world space size\r\nfor the points:\r\n\r\nBefore:\r\n\r\n![image](https://github.com/rerun-io/rerun/assets/1220815/038c6826-d6ee-4e00-93f4-2a964bc56abe)\r\n\r\nAfter:\r\n\r\n![image](https://github.com/rerun-io/rerun/assets/1220815/132ba0d6-9906-4f22-b4f6-c6ced82e3748)\r\n\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4199) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4199)\r\n- [Docs\r\npreview](https://rerun.io/preview/7465b1650dd9be5c712c994827ced405c142edad/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/7465b1650dd9be5c712c994827ced405c142edad/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-11-13T15:47:07+01:00",
          "tree_id": "57289920e881ec63dbc0bb91a6fc56e407635777",
          "url": "https://github.com/rerun-io/rerun/commit/6ee3c6af9a02170b2f02a1a7031b4d95883e9707"
        },
        "date": 1699887669753,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3055276,
            "range": "± 4658",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 383,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 305,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 428,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3096410,
            "range": "± 5275",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1871127,
            "range": "± 14328",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 19114565,
            "range": "± 201402",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 131634459,
            "range": "± 772786",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 170224636,
            "range": "± 1368926",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 317972664,
            "range": "± 1124204",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 207518656,
            "range": "± 463485",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 60204711,
            "range": "± 423499",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 275099148,
            "range": "± 2844497",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 15039530,
            "range": "± 30167",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4451905,
            "range": "± 9887",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 485697,
            "range": "± 2864",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20902571,
            "range": "± 139725",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 406451,
            "range": "± 807",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8161811,
            "range": "± 11529",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8605477,
            "range": "± 47543",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 136650,
            "range": "± 329",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5222,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89734,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 238932,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37578,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2618,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 43879,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1977600322,
            "range": "± 4811574",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1251805,
            "range": "± 10840",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1973991576,
            "range": "± 2576394",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1348338,
            "range": "± 20120",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1225307,
            "range": "± 6704",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3796,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1243117,
            "range": "± 6349",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29629,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 330,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 112,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2967,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 601,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23a15b595c4183e3866116dbf158ce4cfe26dfff",
          "message": "C++ Doc improvements (#4212)\n\n### What\r\n\r\n* Almost fixe_s #3974\r\n* Follow-up of #4191\r\n\r\nA few remaining items & polish for the C++ docs. Now uploaded to\r\ngh-pages as well on push to main (🤞 it works.......)\r\n\r\nCommit by commit!\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4212) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4212)\r\n- [Docs\r\npreview](https://rerun.io/preview/4d098307e728ccea06f408df01f700dda18739c1/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/4d098307e728ccea06f408df01f700dda18739c1/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-11-13T16:31:00+01:00",
          "tree_id": "40339ecb9df99be90494e4eef895854cce35afca",
          "url": "https://github.com/rerun-io/rerun/commit/23a15b595c4183e3866116dbf158ce4cfe26dfff"
        },
        "date": 1699890357838,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3010484,
            "range": "± 7632",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 382,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 299,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 435,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3062877,
            "range": "± 33389",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1859922,
            "range": "± 11659",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 19306791,
            "range": "± 649132",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134665020,
            "range": "± 1368624",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 175441219,
            "range": "± 1284984",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 333042925,
            "range": "± 2605615",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 214700081,
            "range": "± 2102176",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 72738695,
            "range": "± 4223355",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 282350635,
            "range": "± 2561396",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14874863,
            "range": "± 592954",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4425105,
            "range": "± 55832",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 496355,
            "range": "± 3787",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21027748,
            "range": "± 740225",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 423609,
            "range": "± 756",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8237970,
            "range": "± 41843",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8679465,
            "range": "± 20507",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 136210,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5320,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 90332,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 240164,
            "range": "± 546",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38719,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2612,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 41912,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 2040838191,
            "range": "± 9848988",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1272693,
            "range": "± 7140",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 2075805780,
            "range": "± 9077209",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1329748,
            "range": "± 8421",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1233499,
            "range": "± 4324",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3802,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1243797,
            "range": "± 54105",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 30724,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 324,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 112,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2942,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 604,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aea4ecc1bb321c9413d3fbf9d3b22d4e44b2fe01",
          "message": "Merge all doc deploy jobs into a single one to avoid race conditions (#4216)\n\n### What\r\n\r\n.. at least we think this might help with things!\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4216) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4216)\r\n- [Docs\r\npreview](https://rerun.io/preview/e160b5f694e86e071ca6714825dda581ff4a77ac/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/e160b5f694e86e071ca6714825dda581ff4a77ac/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-11-13T18:50:32+01:00",
          "tree_id": "da87bcb859a8c91df7f9ccaaa1413c21b63c2ec4",
          "url": "https://github.com/rerun-io/rerun/commit/aea4ecc1bb321c9413d3fbf9d3b22d4e44b2fe01"
        },
        "date": 1699898697101,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3273079,
            "range": "± 21924",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 381,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 302,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 425,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3139022,
            "range": "± 13519",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1866919,
            "range": "± 25853",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 19646291,
            "range": "± 1365592",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 131935477,
            "range": "± 2413820",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 173839657,
            "range": "± 1235145",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 325106065,
            "range": "± 2408031",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 208233878,
            "range": "± 2042822",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 62359855,
            "range": "± 2230217",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 274640989,
            "range": "± 3191335",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14439265,
            "range": "± 177070",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4502064,
            "range": "± 91664",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 485243,
            "range": "± 39982",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21020240,
            "range": "± 722368",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 421624,
            "range": "± 1236",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8158287,
            "range": "± 26114",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8543154,
            "range": "± 22662",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 136255,
            "range": "± 460",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5230,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89590,
            "range": "± 560",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 239163,
            "range": "± 1720",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37515,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2593,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 43327,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1972693552,
            "range": "± 4610139",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1250066,
            "range": "± 4418",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 2009377407,
            "range": "± 8702360",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1348057,
            "range": "± 10102",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1237272,
            "range": "± 9507",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3783,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1265542,
            "range": "± 10902",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29658,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 320,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 113,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2890,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 608,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1665677+jprochazk@users.noreply.github.com",
            "name": "Jan Procházka",
            "username": "jprochazk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "923588f11aa0b590d8a18340f556c5103ebaee7f",
          "message": "Local-first guidelines (#4218)\n\n### What\r\n\r\nCloses https://github.com/rerun-io/rerun/issues/4153\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/{{\r\npr.number }}) (if applicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/{{ pr.number }})\r\n- [Docs preview](https://rerun.io/preview/{{ pr.commit }}/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples preview](https://rerun.io/preview/{{ pr.commit }}/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-11-14T12:44:41+01:00",
          "tree_id": "699f8fd549c14660b702f8af4da4cbae879c10f0",
          "url": "https://github.com/rerun-io/rerun/commit/923588f11aa0b590d8a18340f556c5103ebaee7f"
        },
        "date": 1699963157758,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3066095,
            "range": "± 49041",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 375,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 299,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 421,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3124185,
            "range": "± 36253",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1862069,
            "range": "± 17788",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 25135089,
            "range": "± 1436094",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 143880146,
            "range": "± 1586919",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 176865989,
            "range": "± 959270",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 332366091,
            "range": "± 1701342",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 214997571,
            "range": "± 1032758",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71688626,
            "range": "± 870328",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 290906727,
            "range": "± 1575413",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 15401229,
            "range": "± 814904",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4569034,
            "range": "± 89178",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 511131,
            "range": "± 2309",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 22061275,
            "range": "± 1248528",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 408218,
            "range": "± 1551",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8262401,
            "range": "± 147400",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8725080,
            "range": "± 313170",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 136246,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5183,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89376,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 239305,
            "range": "± 1153",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37746,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2694,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42132,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 2013649819,
            "range": "± 3149184",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1325662,
            "range": "± 12187",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 2060194582,
            "range": "± 3911961",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1349671,
            "range": "± 21889",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1230782,
            "range": "± 11486",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3874,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1250981,
            "range": "± 10593",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29735,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 322,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 113,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2832,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 615,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a96d0dd4403b407611702d872f1bf3cf6bd41c5",
          "message": "Fix inaccessible entities being incorrectly added to space view (#4226)\n\n### What\r\n- Resolves: https://github.com/rerun-io/rerun/issues/4221\r\n\r\nAlthough `is_reachable_by_transform` correctly accounts for disconnected\r\nspaces, `visit_descendants_with_reachable_transform` was never modified\r\nto account for disconnected spaces correctly. The inconsistency leads to\r\ncreating a space with unreachable content in it.\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4226) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4226)\r\n- [Docs\r\npreview](https://rerun.io/preview/4a7b44068f90198b8a27ecdb1ff17a85af5bd383/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/4a7b44068f90198b8a27ecdb1ff17a85af5bd383/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-11-14T18:08:12+01:00",
          "tree_id": "b286aa10983e616eabc52f211f436355ec8783b7",
          "url": "https://github.com/rerun-io/rerun/commit/6a96d0dd4403b407611702d872f1bf3cf6bd41c5"
        },
        "date": 1699982556259,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3057657,
            "range": "± 8852",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 374,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 298,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 422,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3088645,
            "range": "± 7596",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1871806,
            "range": "± 7132",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 18867236,
            "range": "± 380372",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 129656572,
            "range": "± 730806",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 170492438,
            "range": "± 608811",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 320899255,
            "range": "± 911294",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 207136427,
            "range": "± 658745",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 58948877,
            "range": "± 524734",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 270564114,
            "range": "± 1183310",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14412445,
            "range": "± 44004",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4472802,
            "range": "± 19787",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 506089,
            "range": "± 2105",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20332796,
            "range": "± 146927",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 423091,
            "range": "± 686",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8136571,
            "range": "± 11758",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8571468,
            "range": "± 15165",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 136240,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5248,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89449,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 238398,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37582,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2571,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42897,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1936581229,
            "range": "± 4175374",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1262225,
            "range": "± 20891",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1973067265,
            "range": "± 5117711",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1332012,
            "range": "± 8908",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1224671,
            "range": "± 14569",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3820,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1240272,
            "range": "± 11615",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 30747,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 324,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 113,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2902,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 621,
            "range": "± 15",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f7e9726ba2398eb49ca7c069d267b87e18bd4691",
          "message": "Introduce new DataQuery trait and direct storage of EntityProperties (#4193)\n\n### What\r\n- This is the first chunk of:\r\nhttps://github.com/rerun-io/rerun/issues/4128\r\n\r\nIt makes some fairly significant structural changes without too\r\nsignificantly changing the behavior.\r\n\r\nThere are three big changes included in this PR:\r\n1. Introduce a new `DataQuery` interface.\r\n- This includes APIs for querying / resolving all of the data from a\r\nquery.\r\n- An initial implementation of `DataQuery` is built on top of the\r\nprevious `SpaceViewContents` for backwards compatibility until we create\r\na query-builder / editor.\r\n2. Introduction of a new `DataResult` as part of the the `DataQuery`\r\ninterface.\r\n- `DataResult` now acts as a sort of self-contained reference to the\r\ndata. The idea is that `DataResult` contains all of the context\r\nnecessary to work with the data. This includes both the resolved\r\nproperties as well as a path to a location where we can store overrides\r\nfor the future.\r\n3. Refactor the `EntityProperty` system to use standalone components\r\nstored directly in the blueprint hierarchy.\r\n- All of the `EntityProperty` details are removed from the legacy\r\nSpaceViewContents / DataGroups.\r\n- The properties are now resolved hierarchically while executing /\r\nresolving a query.\r\n- The auto-heuristics are fed in as the initial base layer that we\r\naggregate on top of which preserves the historical heuristic behavior.\r\n- The `EntityProperties` are then updated by issuing a direct write to\r\nthe BlueprintStore from the UI elements that modify the properties.\r\n**Note:** this ends up being a very nice win from a borrow-checker\r\nperspective in some places and eliminates the first big chunk of data\r\nstructure diff-checking in the Blueprint.\r\n\r\n### Profiling\r\nUsing the OPF example with --no-frames, which was our previous\r\ncomplex-scene stress-test, the query-representation building adds about\r\n1ms to the existing SpaceViewContents:\r\n\r\n![image](https://github.com/rerun-io/rerun/assets/3312232/dcfcb82c-b38d-422e-aea3-e5abe2ce39fd)\r\n\r\nCompare to ~10ms for the previous heuristic evaluation that was already\r\nhappening:\r\n\r\n![image](https://github.com/rerun-io/rerun/assets/3312232/1a589008-23f0-4b3a-830f-c3f1537e79bf)\r\n\r\nAdditionally in a non-stress-test scene like SFM, this conversation is\r\naround 60 us:\r\n\r\n![image](https://github.com/rerun-io/rerun/assets/3312232/b2859d53-f5fc-43af-ac15-4de84ac62506)\r\n\r\n### Known Issues\r\n- This currently does not distinguish between \"group\" and \"entity\" when\r\nthe two are the same. This creates issues in cases such as\r\n\"world/image/keypoints\" where you can no longer hide image in isolation\r\nwithout hiding keypoints.\r\n- Need to introduce some additional logic to differentiate between a\r\n\"set recursive\" and \"set individual.\"\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4193) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4193)\r\n- [Docs\r\npreview](https://rerun.io/preview/26ddaadbec456d5ad41ecb05cd6ea12b14a784c8/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/26ddaadbec456d5ad41ecb05cd6ea12b14a784c8/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-11-14T20:35:42+01:00",
          "tree_id": "38b3ecd530cce61545dceb90b59bc135183d53bd",
          "url": "https://github.com/rerun-io/rerun/commit/f7e9726ba2398eb49ca7c069d267b87e18bd4691"
        },
        "date": 1699991518975,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 2871844,
            "range": "± 54476",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 374,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 291,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 402,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 2895790,
            "range": "± 67885",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1726630,
            "range": "± 24621",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 17622604,
            "range": "± 635588",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 128613265,
            "range": "± 1725710",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166890508,
            "range": "± 1836745",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 315850348,
            "range": "± 3184670",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 199980952,
            "range": "± 3325695",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 58383403,
            "range": "± 639890",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 263654730,
            "range": "± 3145921",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 13484354,
            "range": "± 218056",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4121934,
            "range": "± 92792",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 448421,
            "range": "± 14588",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 18744777,
            "range": "± 367854",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 398712,
            "range": "± 9118",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 7633351,
            "range": "± 185067",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8037178,
            "range": "± 119660",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 128041,
            "range": "± 2916",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 4975,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 83425,
            "range": "± 1787",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 223389,
            "range": "± 3930",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 36325,
            "range": "± 1125",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2450,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 40572,
            "range": "± 788",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1929913930,
            "range": "± 12961823",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1181749,
            "range": "± 34759",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1964833912,
            "range": "± 11087309",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1245485,
            "range": "± 23227",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1161951,
            "range": "± 25849",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3602,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1179345,
            "range": "± 18947",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 27704,
            "range": "± 582",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 327,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 105,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2779,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 565,
            "range": "± 10",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0be6185dbd510359d2cc0369e9951c8da581fd89",
          "message": "Add minimal examples in readme C++ api docs (#4217)\n\n### What\r\n\r\n* Another piece in the series of #3974 \r\n\r\nUses doxygen /snippet magic - this allows us to pick code out of a file\r\nthat we're otherwise compiling as part of the tests 🥳\r\n\r\n\r\n![image](https://github.com/rerun-io/rerun/assets/1220815/1e369eb5-9e2d-42a1-9fc9-deb48b5dc572)\r\n\r\n\r\nAlso a few unrelated C++ doc fixes\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4217) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4217)\r\n- [Docs\r\npreview](https://rerun.io/preview/04031671437f20feca904ffa815dace6d7fd73f7/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/04031671437f20feca904ffa815dace6d7fd73f7/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-11-15T09:04:41+01:00",
          "tree_id": "d9b79801fbe81b50b9ce7b7f8b6295936a0fad92",
          "url": "https://github.com/rerun-io/rerun/commit/0be6185dbd510359d2cc0369e9951c8da581fd89"
        },
        "date": 1700036351265,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3072267,
            "range": "± 52790",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 391,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 298,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 420,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3134208,
            "range": "± 64344",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1870864,
            "range": "± 15353",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 23651930,
            "range": "± 2029913",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138985444,
            "range": "± 1937215",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 173368517,
            "range": "± 429548",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 329581283,
            "range": "± 1606051",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 212261044,
            "range": "± 1402792",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 67122664,
            "range": "± 1575426",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 281294786,
            "range": "± 2576630",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 15506560,
            "range": "± 917115",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4523962,
            "range": "± 139724",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 486825,
            "range": "± 1790",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 23884583,
            "range": "± 1148685",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 408022,
            "range": "± 1519",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8307188,
            "range": "± 270055",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8714879,
            "range": "± 139448",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 135590,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5209,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 89557,
            "range": "± 539",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 241569,
            "range": "± 9799",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37991,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2565,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42465,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 1966413657,
            "range": "± 8635178",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1235835,
            "range": "± 9328",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 1982567456,
            "range": "± 6930605",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1330892,
            "range": "± 7544",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1228434,
            "range": "± 5466",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3770,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1244321,
            "range": "± 11847",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 30681,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 323,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 112,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2892,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 641,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8263309ac57260ff9ded2ed774511e5b595fe8d5",
          "message": "`DataStore` changelog 2: introduce `StoreEvent`s (#4203)\n\nIntroduces `StoreEvent`, an event that describes the atomic unit of\r\nchange in the Rerun `DataStore`: a row has been added to or removed from\r\nthe store.\r\n\r\n`StoreEvent`s are fired on both the insertion and garbage collection\r\npaths, enabling listeners to build arbitrary, always up-to-date views &\r\ntrigger systems.\r\n\r\n```rust\r\n/// The atomic unit of change in the Rerun [`DataStore`].\r\n///\r\n/// A [`StoreEvent`] describes the changes caused by the addition or deletion of a\r\n/// [`re_log_types::DataRow`] in the store.\r\n///\r\n/// Methods that mutate the [`DataStore`], such as [`DataStore::insert_row`] and [`DataStore::gc`],\r\n/// return [`StoreEvent`]s that describe the changes.\r\n///\r\n/// Refer to field-level documentation for more details and check out [`StoreDiff`] for a precise\r\n/// definition of what an event involves.\r\n#[derive(Debug, Clone, PartialEq)]\r\npub struct StoreEvent {\r\n    /// Which [`DataStore`] sent this event?\r\n    pub store_id: StoreId,\r\n\r\n    /// What was the store's generation when it sent that event?\r\n    pub store_generation: StoreGeneration,\r\n\r\n    /// Monotonically increasing ID of the event.\r\n    ///\r\n    /// This is on a per-store basis.\r\n    ///\r\n    /// When handling a [`StoreEvent`], if this is the first time you process this [`StoreId`] and\r\n    /// the associated `event_id` is not `1`, it means you registered late and missed some updates.\r\n    pub event_id: u64,\r\n\r\n    /// What actually changed?\r\n    ///\r\n    /// Refer to [`StoreDiff`] for more information.\r\n    pub diff: StoreDiff,\r\n}\r\n\r\n/// Describes an atomic change in the Rerun [`DataStore`]: a row has been added or deleted.\r\n///\r\n/// From a query model standpoint, the [`DataStore`] _always_ operates one row at a time:\r\n/// - The contents of a row (i.e. its columns) are immutable past insertion, by virtue of\r\n///   [`RowId`]s being unique and non-reusable.\r\n/// - Similarly, garbage collection always removes _all the data_ associated with a row in one go:\r\n///   there cannot be orphaned columns. When a row is gone, all data associated with it is gone too.\r\n///\r\n/// Refer to field-level documentation for more information.\r\n#[derive(Debug, Clone, PartialEq)]\r\npub struct StoreDiff {\r\n    /// Addition or deletion?\r\n    ///\r\n    /// The store's internals are opaque and don't necessarily reflect the query model (e.g. there\r\n    /// might be data in the store that cannot by reached by any query).\r\n    ///\r\n    /// A [`StoreDiff`] answers a logical question: \"does there exist a query path which can return\r\n    /// data from that row?\".\r\n    pub kind: StoreDiffKind,\r\n\r\n    /// What's the row's [`RowId`]?\r\n    ///\r\n    /// [`RowId`]s are guaranteed to be unique within a single [`DataStore`].\r\n    ///\r\n    /// Put another way, the same [`RowId`] can only appear twice in a [`StoreDiff`] event:\r\n    /// one addition and (optionally) one deletion (in that order!).\r\n    pub row_id: RowId,\r\n\r\n    /// The [`TimePoint`] associated with that row.\r\n    ///\r\n    /// Since insertions and deletions both work on a row-level basis, this is guaranteed to be the\r\n    /// same value for both the insertion and deletion events (if any).\r\n    pub timepoint: TimePoint,\r\n\r\n    /// The [`EntityPath`] associated with that row.\r\n    ///\r\n    /// Since insertions and deletions both work on a row-level basis, this is guaranteed to be the\r\n    /// same value for both the insertion and deletion events (if any).\r\n    pub entity_path: EntityPath,\r\n\r\n    /// All the [`DataCell`]s associated with that row.\r\n    ///\r\n    /// Since insertions and deletions both work on a row-level basis, this is guaranteed to be the\r\n    /// same set of values for both the insertion and deletion events (if any).\r\n    pub cells: IntMap<ComponentName, DataCell>,\r\n}\r\n```\r\n\r\n\r\n---\r\n\r\n`DataStore` changelog PR series:\r\n- #4202\r\n- #4203\r\n- #4205\r\n- #4206\r\n- #4208\r\n- #4209",
          "timestamp": "2023-11-15T10:23:45+01:00",
          "tree_id": "4f3c5c53844c6819bb507691942fa3b177c8c6f9",
          "url": "https://github.com/rerun-io/rerun/commit/8263309ac57260ff9ded2ed774511e5b595fe8d5"
        },
        "date": 1700041144085,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3409458,
            "range": "± 26693",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 384,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 304,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 432,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3485135,
            "range": "± 24264",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1969729,
            "range": "± 8711",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 20981060,
            "range": "± 1091101",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138849698,
            "range": "± 1730428",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 178350194,
            "range": "± 644508",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 339524145,
            "range": "± 2046928",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 215637101,
            "range": "± 1538785",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 68517751,
            "range": "± 1357021",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 286454278,
            "range": "± 2398346",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14984544,
            "range": "± 701093",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4439560,
            "range": "± 80666",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 473822,
            "range": "± 1442",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21162710,
            "range": "± 617033",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 409902,
            "range": "± 1254",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8256849,
            "range": "± 165456",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8690546,
            "range": "± 42732",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 136411,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5250,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 90054,
            "range": "± 3069",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 239158,
            "range": "± 607",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38742,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2583,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 43298,
            "range": "± 565",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 2456274243,
            "range": "± 6020977",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1248289,
            "range": "± 8036",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 2529475251,
            "range": "± 8749539",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1356195,
            "range": "± 4613",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1574266,
            "range": "± 6633",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3754,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1608494,
            "range": "± 14770",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29536,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 322,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 111,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2914,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 633,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edab7820ca91a952ccb3760a7505bcef766e24f6",
          "message": "`DataStore` changelog 5: event-driven time histograms (#4208)\n\nThis is mostly preliminary work for #4209, which makes this PR a bit\r\nweird. Basically just trying to offload complexity from #4209.\r\n\r\n`TimesPerTimeline` as well as `TimeHistogramPerTimeline` are now living\r\non their own and are maintained as `StoreView`s, i.e. they react to\r\nchanges to the `DataStore` rather than constructing alternate truths.\r\n\r\nThis is the first step towards turning the `EntityTree` giga-structure\r\ninto an event-driven view in the next PR.\r\n\r\n---\r\n\r\n`DataStore` changelog PR series:\r\n- #4202\r\n- #4203\r\n- #4205\r\n- #4206\r\n- #4208\r\n- #4209",
          "timestamp": "2023-11-15T11:18:05+01:00",
          "tree_id": "049f63ea9dd67b17b6b5550ed03f9065d6afbecb",
          "url": "https://github.com/rerun-io/rerun/commit/edab7820ca91a952ccb3760a7505bcef766e24f6"
        },
        "date": 1700044307155,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3588851,
            "range": "± 53144",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 390,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 313,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 433,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3567408,
            "range": "± 9482",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1921048,
            "range": "± 4282",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 22423690,
            "range": "± 1827673",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136892550,
            "range": "± 2269700",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 178607225,
            "range": "± 4057053",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 330282552,
            "range": "± 1575648",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 215095843,
            "range": "± 3445856",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 65612129,
            "range": "± 2956295",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 284533483,
            "range": "± 9154988",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14457135,
            "range": "± 855458",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4390050,
            "range": "± 22451",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 483717,
            "range": "± 5481",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 21836454,
            "range": "± 692085",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 408693,
            "range": "± 1113",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8165620,
            "range": "± 70500",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8598791,
            "range": "± 46071",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 136450,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5210,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 92340,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 240300,
            "range": "± 5392",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 39119,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2578,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 43699,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 2600936696,
            "range": "± 10037677",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1289311,
            "range": "± 6812",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 2614139980,
            "range": "± 3758176",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1466589,
            "range": "± 5954",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1701481,
            "range": "± 6011",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3872,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1724307,
            "range": "± 9081",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 30842,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 341,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 127,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2902,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 640,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "176c08b3cd657136629cdbf1793c7fd18d0214d9",
          "message": "`DataStore` changelog 6: event-driven `EntityTree` (#4209)\n\nTurns the `EntityTree` giga-datastructure into a `StoreView`, meaning it\r\nnow reacts to `StoreEvent`s rather than creating alternate truths.\r\n\r\nThis introduces the notion of cascading side-effects, and more\r\nspecifically `ClearCascade`s.\r\nWhen the `EntityTree` reacts to changes in the store, this might cause\r\ncascading effects (e.g. pending clears), that in turn need to write back\r\nto the store, which in turn sends more events to react to!\r\nThe cycle is guaranteed finite because \"clears don't get cleared\"!\r\n\r\nCascading side-effects have an interesting requirement: they need to log\r\ntheir cascaded data using a `RowId` _similar_ to the one used in the\r\noriginal event that caused the cascade (so they get GC'd at roughly the\r\nsame pace).\r\n\"Similar\" in this cases means that their `TUID` shares the same\r\ntimestamp and that the new `RowId` is strictly greater than the old one.\r\n\r\n`PathOp` has finally been annihilated.\r\n\r\nAccording to our new \"Clears\" & \"Time Histograms\" test suites, this\r\nbehaves exactly like the `main` branch.\r\n\r\n\r\n---\r\n\r\n`DataStore` changelog PR series:\r\n- #4202\r\n- #4203\r\n- #4205\r\n- #4206\r\n- #4208\r\n- #4209",
          "timestamp": "2023-11-15T11:48:14+01:00",
          "tree_id": "02f81766c3462d29a7f176f6e12d87bea066cc84",
          "url": "https://github.com/rerun-io/rerun/commit/176c08b3cd657136629cdbf1793c7fd18d0214d9"
        },
        "date": 1700046212518,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3777563,
            "range": "± 141180",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 397,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 314,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 430,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3811254,
            "range": "± 196139",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1925905,
            "range": "± 9897",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 28918156,
            "range": "± 1326427",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 144479028,
            "range": "± 5464938",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 181350842,
            "range": "± 798788",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 340790370,
            "range": "± 5916082",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 225530041,
            "range": "± 2258217",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 75953674,
            "range": "± 868477",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 304524739,
            "range": "± 1697524",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 19524748,
            "range": "± 1666811",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4839180,
            "range": "± 193829",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 490876,
            "range": "± 1985",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 25805847,
            "range": "± 1432553",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 410346,
            "range": "± 1594",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8316720,
            "range": "± 391120",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 9061377,
            "range": "± 258878",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 137363,
            "range": "± 3410",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5248,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 90716,
            "range": "± 470",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 240833,
            "range": "± 1168",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 39574,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2641,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 44351,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 2629098482,
            "range": "± 9164338",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1284483,
            "range": "± 9548",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 2623538999,
            "range": "± 16151302",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1362441,
            "range": "± 4963",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1667331,
            "range": "± 9003",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3876,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1701249,
            "range": "± 6290",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 30852,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 326,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 112,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2923,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 603,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1665677+jprochazk@users.noreply.github.com",
            "name": "Jan Procházka",
            "username": "jprochazk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc57a99df93a448769488e88956050e5ebc256e9",
          "message": "Don't install python in docs deploy job (#4229)\n\n### What\r\n\r\nRelated to\r\nhttps://github.com/rerun-io/rerun/actions/runs/6875330324/job/18699311307\r\n\r\nWe've had issues with this in the past. May be worth looking into _why_\r\n`setup-python` fails when used in a job that's running off of\r\n`ci_docker`. Here's a bandaid fix, at least!\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4229) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4229)\r\n- [Docs\r\npreview](https://rerun.io/preview/ea8378d5a88da2873f04c2f87319c093ebe6c8e6/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/ea8378d5a88da2873f04c2f87319c093ebe6c8e6/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-11-15T12:14:06+01:00",
          "tree_id": "262be33b630c0716d4baf59032a4de7c0ad0cb15",
          "url": "https://github.com/rerun-io/rerun/commit/fc57a99df93a448769488e88956050e5ebc256e9"
        },
        "date": 1700047731953,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3472508,
            "range": "± 7283",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 402,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 309,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 434,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3491642,
            "range": "± 9978",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1915620,
            "range": "± 7240",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 19010638,
            "range": "± 685096",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 132954007,
            "range": "± 1406480",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 173103457,
            "range": "± 760836",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 322499338,
            "range": "± 1300083",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 209458981,
            "range": "± 1022045",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 63158649,
            "range": "± 2246153",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 277513730,
            "range": "± 1843725",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14515998,
            "range": "± 93006",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4433616,
            "range": "± 19147",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 481269,
            "range": "± 2991",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20620537,
            "range": "± 308550",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 406619,
            "range": "± 1021",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8136082,
            "range": "± 16457",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8572997,
            "range": "± 16101",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 136440,
            "range": "± 662",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5254,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 90528,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 240734,
            "range": "± 579",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 38642,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2583,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42442,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 2489252991,
            "range": "± 8010139",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1265449,
            "range": "± 10233",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 2503825118,
            "range": "± 8265016",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1346551,
            "range": "± 4826",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1618912,
            "range": "± 13990",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3849,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1643648,
            "range": "± 4131",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29454,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 325,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 141,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 3312,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 654,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1665677+jprochazk@users.noreply.github.com",
            "name": "Jan Procházka",
            "username": "jprochazk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f30ffe4d7904f4d6d3a0945a8960e29b5d735c58",
          "message": "Run deploy docs jobs serially (#4232)\n\n### What\r\n\r\nThis does the same thing as https://github.com/rerun-io/rerun/pull/4216,\r\nbut instead of merging them, just has them run serially by putting\r\ndependencies between them.\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/{{\r\npr.number }}) (if applicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/{{ pr.number }})\r\n- [Docs preview](https://rerun.io/preview/{{ pr.commit }}/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples preview](https://rerun.io/preview/{{ pr.commit }}/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-11-15T12:52:42+01:00",
          "tree_id": "f001fb8cb85568ba8e4e8a56463b6a44121a8652",
          "url": "https://github.com/rerun-io/rerun/commit/f30ffe4d7904f4d6d3a0945a8960e29b5d735c58"
        },
        "date": 1700050056524,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/insert/default",
            "value": 3451789,
            "range": "± 6631",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at/default",
            "value": 398,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/primary/default",
            "value": 310,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/latest_at_missing/secondaries/default",
            "value": 432,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/packed=false/range/default",
            "value": 3504669,
            "range": "± 5722",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/num_rows=1000/num_instances=1000/gc/default",
            "value": 1928685,
            "range": "± 17866",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 18885391,
            "range": "± 154605",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 130568403,
            "range": "± 927083",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 175617407,
            "range": "± 565139",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 325691444,
            "range": "± 6117960",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 206394465,
            "range": "± 3298524",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 60369390,
            "range": "± 522373",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 273198169,
            "range": "± 1140196",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_message_bundles",
            "value": 14629999,
            "range": "± 31790",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/generate_messages",
            "value": 4420513,
            "range": "± 12967",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_log_msg",
            "value": 508486,
            "range": "± 1414",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/encode_total",
            "value": 20637940,
            "range": "± 125526",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_log_msg",
            "value": 406853,
            "range": "± 991",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_message_bundles",
            "value": 8167339,
            "range": "± 14013",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow_batched/decode_total",
            "value": 8612688,
            "range": "± 16104",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 136070,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5303,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 91744,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 240715,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 37903,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2644,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 42274,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/insert",
            "value": 2562503159,
            "range": "± 9293856",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points2/query",
            "value": 1255230,
            "range": "± 36782",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/insert",
            "value": 2581687608,
            "range": "± 8987360",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_strings2/query",
            "value": 1367475,
            "range": "± 19400",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/insert",
            "value": 1662288,
            "range": "± 6043",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points2/query",
            "value": 3818,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/insert",
            "value": 1680576,
            "range": "± 4036",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_strings2/query",
            "value": 29509,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 32,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1/arrow2",
            "value": 320,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1/arrow2",
            "value": 111,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/serialize/elem_count=1000/arrow2",
            "value": 2852,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "arrow/deserialize/elem_count=1000/arrow2",
            "value": 626,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}