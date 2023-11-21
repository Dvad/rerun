// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/re_types/definitions/rerun/components/text_log_level.fbs".

#include "text_log_level.hpp"

#include "../datatypes/utf8.hpp"

#include <arrow/builder.h>
#include <arrow/type_fwd.h>

namespace rerun::components {
    const char TextLogLevel::NAME[] = "rerun.components.TextLogLevel";

    const std::shared_ptr<arrow::DataType>& TextLogLevel::arrow_datatype() {
        static const auto datatype = rerun::datatypes::Utf8::arrow_datatype();
        return datatype;
    }

    rerun::Error TextLogLevel::fill_arrow_array_builder(
        arrow::StringBuilder* builder, const TextLogLevel* elements, size_t num_elements
    ) {
        static_assert(sizeof(rerun::datatypes::Utf8) == sizeof(TextLogLevel));
        RR_RETURN_NOT_OK(rerun::datatypes::Utf8::fill_arrow_array_builder(
            builder,
            reinterpret_cast<const rerun::datatypes::Utf8*>(elements),
            num_elements
        ));

        return Error::ok();
    }

    Result<rerun::DataCell> TextLogLevel::to_data_cell(
        const TextLogLevel* instances, size_t num_instances
    ) {
        // TODO(andreas): Allow configuring the memory pool.
        arrow::MemoryPool* pool = arrow::default_memory_pool();

        ARROW_ASSIGN_OR_RAISE(auto builder, arrow::MakeBuilder(arrow_datatype(), pool))
        if (instances && num_instances > 0) {
            RR_RETURN_NOT_OK(TextLogLevel::fill_arrow_array_builder(
                static_cast<arrow::StringBuilder*>(builder.get()),
                instances,
                num_instances
            ));
        }
        std::shared_ptr<arrow::Array> array;
        ARROW_RETURN_NOT_OK(builder->Finish(&array));

        DataCell cell;
        cell.num_instances = num_instances;
        cell.component_name = TextLogLevel::NAME;
        cell.array = std::move(array);
        return cell;
    }
} // namespace rerun::components
