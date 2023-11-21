// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/re_types/definitions/rerun/testing/datatypes/fuzzy.fbs".

#pragma once

#include "affix_fuzzer4.hpp"

#include <cstdint>
#include <memory>
#include <optional>
#include <rerun/result.hpp>
#include <utility>

namespace arrow {
    class DataType;
    class StructBuilder;
} // namespace arrow

namespace rerun::datatypes {
    struct AffixFuzzer5 {
        std::optional<rerun::datatypes::AffixFuzzer4> single_optional_union;

      public:
        AffixFuzzer5() = default;

        AffixFuzzer5(std::optional<rerun::datatypes::AffixFuzzer4> single_optional_union_)
            : single_optional_union(std::move(single_optional_union_)) {}

        AffixFuzzer5& operator=(std::optional<rerun::datatypes::AffixFuzzer4> single_optional_union_
        ) {
            single_optional_union = std::move(single_optional_union_);
            return *this;
        }

        /// Returns the arrow data type this type corresponds to.
        static const std::shared_ptr<arrow::DataType>& arrow_datatype();

        /// Fills an arrow array builder with an array of this type.
        static rerun::Error fill_arrow_array_builder(
            arrow::StructBuilder* builder, const AffixFuzzer5* elements, size_t num_elements
        );
    };
} // namespace rerun::datatypes
