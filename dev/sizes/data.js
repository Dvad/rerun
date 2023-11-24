window.BENCHMARK_DATA = {
  "lastUpdate": 1700051316643,
  "repoUrl": "https://github.com/rerun-io/rerun",
  "entries": {
    "Sizes": [
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
          "id": "c62c6a3892a26e6389f91ef31fe5dfa62a853e9a",
          "message": "Improve rerun_cpp readme & CMakeLists.txt (#4126)\n\n### What\r\n\r\n* Fixes #4117\r\n* overhauled Readme.md for rerun_cpp\r\n* everything except is now part of rerun_cpp zip bundle\r\n* made rerun_cpp CMakeLists.txt smaller by splitting out the from-source\r\nrerun_c and the from-source arrow builds out\r\n* rerun_c is now built as a built action, meaning it's part of the\r\nbuildgraph of whatever generator you use - e.g. Ninja will build it now\r\nin parallel to your C files 🥳\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4126) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4126)\r\n- [Docs\r\npreview](https://rerun.io/preview/1f68439ed4731c219b116fd41e15638015b9d68b/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/1f68439ed4731c219b116fd41e15638015b9d68b/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)",
          "timestamp": "2023-11-03T16:44:57+01:00",
          "tree_id": "cde2c202898ba6a16c763cedc76b468cf3198a3e",
          "url": "https://github.com/rerun-io/rerun/commit/c62c6a3892a26e6389f91ef31fe5dfa62a853e9a"
        },
        "date": 1699028425614,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.5",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
          "id": "ce2493cfcc25ddc6f01ee9d8f40a365d7a6f6623",
          "message": "Improve Visible History to support more general time queries (#4123)\n\n### What\r\n\r\n* Fixes #3933\r\n\r\n<img width=\"1971\" alt=\"image\"\r\nsrc=\"https://github.com/rerun-io/rerun/assets/49431240/8d51f828-cab8-4940-9a2a-a35841fb7fe2\">\r\n\r\n\r\n#### Scope\r\n- Improve the \"Visible History\" feature to build more general time\r\nqueries:\r\n  - Control both start/end time boundaries\r\n  - relative/absolute/full mode for each boundaries\r\n  - explicit active/inactive state/checkbox\r\n- Improve usability:\r\n  - Proper scaling and bounds for the 'DragValue` widgets \r\n- Proper cascading behaviour from data group(s) to entity: a child's\r\n\"visible history\" settings will override the parent's if the feature is\r\nactive.\r\n  - Do not display Visible History UI in places where it's not supported\r\n\r\n#### Out-of-scope\r\n- Add support for Visible History to space views other than 2D/3D\r\n- Add Visible History UI to 3D/2D space view themselves (for consistency\r\nwith what precedes and to address some corner cases)\r\n- Add (read-only) shading in the time panel\r\n- Fix the numerous issues/missing features listed in:\r\n  - #4107\r\n\r\n#### TODO\r\n- [x] fine-tune the UI layout\r\n- [x] discuss/implement heuristics to decide whether or not to display\r\nthe UI\r\n- [x] add information notices (e.g. \"this applies to ALL sequence\r\ntimelines\")\r\n\r\n### Checklist\r\n* [x] I have read and agree to [Contributor\r\nGuide](https://github.com/rerun-io/rerun/blob/main/CONTRIBUTING.md) and\r\nthe [Code of\r\nConduct](https://github.com/rerun-io/rerun/blob/main/CODE_OF_CONDUCT.md)\r\n* [x] I've included a screenshot or gif (if applicable)\r\n* [x] I have tested [demo.rerun.io](https://demo.rerun.io/pr/4123) (if\r\napplicable)\r\n* [x] The PR title and labels are set such as to maximize their\r\nusefulness for the next release's CHANGELOG\r\n\r\n- [PR Build Summary](https://build.rerun.io/pr/4123)\r\n- [Docs\r\npreview](https://rerun.io/preview/6bc0ba72dc79b5af782d73cbabb09b670c59b7e3/docs)\r\n<!--DOCS-PREVIEW-->\r\n- [Examples\r\npreview](https://rerun.io/preview/6bc0ba72dc79b5af782d73cbabb09b670c59b7e3/examples)\r\n<!--EXAMPLES-PREVIEW-->\r\n- [Recent benchmark results](https://ref.rerun.io/dev/bench/)\r\n- [Wasm size tracking](https://ref.rerun.io/dev/sizes/)\r\n\r\n---------\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>",
          "timestamp": "2023-11-06T15:56:31+01:00",
          "tree_id": "53a7516bcda786b560b0dd7aaf60734b6bb897ea",
          "url": "https://github.com/rerun-io/rerun/commit/ce2493cfcc25ddc6f01ee9d8f40a365d7a6f6623"
        },
        "date": 1699284695996,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.51",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.39",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1699298379661,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.51",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1699345398729,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.51",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1699349784122,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.5",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1699352578014,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.5",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.39",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1699360312420,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.49",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1699364019726,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.49",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1699376698997,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.49",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.39",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1699432489656,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.49",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1699468932510,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.48",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1699522824799,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.51",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1699527428876,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.51",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.39",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1699550339864,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.51",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.39",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1699616626358,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.51",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.39",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1699620678026,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.53",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.39",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1699649096921,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.53",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.39",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1699873189431,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.53",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1699878511319,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.53",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.39",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1699888853724,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.54",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1699891604236,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.54",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1699899905377,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.54",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1699964341713,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.54",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1699993223024,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.59",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1700037651967,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.59",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1700042946949,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.62",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.39",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1700045986134,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.62",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1700047383187,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.64",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1700048782183,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.64",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.38",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
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
        "date": 1700051300676,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Wasm",
            "value": "15.64",
            "unit": "MiB"
          },
          {
            "name": "JS",
            "value": "113.32",
            "unit": "kiB"
          },
          {
            "name": "arkit_scenes.rrd",
            "value": "40.39",
            "unit": "MiB"
          },
          {
            "name": "detect_and_track_objects.rrd",
            "value": "55.21",
            "unit": "MiB"
          },
          {
            "name": "dicom_mri.rrd",
            "value": "63.36",
            "unit": "MiB"
          },
          {
            "name": "dna.rrd",
            "value": "0.62",
            "unit": "MiB"
          },
          {
            "name": "human_pose_tracking.rrd",
            "value": "54.43",
            "unit": "MiB"
          },
          {
            "name": "plots.rrd",
            "value": "0.19",
            "unit": "MiB"
          },
          {
            "name": "structure_from_motion.rrd",
            "value": "6.85",
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}