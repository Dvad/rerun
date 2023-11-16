// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/re_types/definitions/rerun/datatypes/entity_path.fbs".

#include "entity_path.hpp"

#include <arrow/builder.h>
#include <arrow/type_fwd.h>

namespace rerun::datatypes {
    const std::shared_ptr<arrow::DataType>& EntityPath::arrow_datatype() {
        static const auto datatype = arrow::utf8();
        return datatype;
    }

    rerun::Error EntityPath::fill_arrow_array_builder(
        arrow::StringBuilder* builder, const EntityPath* elements, size_t num_elements
    ) {
        if (builder == nullptr) {
            return rerun::Error(ErrorCode::UnexpectedNullArgument, "Passed array builder is null.");
        }
        if (elements == nullptr) {
            return rerun::Error(
                ErrorCode::UnexpectedNullArgument,
                "Cannot serialize null pointer to arrow array."
            );
        }

        ARROW_RETURN_NOT_OK(builder->Reserve(static_cast<int64_t>(num_elements)));
        for (size_t elem_idx = 0; elem_idx < num_elements; elem_idx += 1) {
            ARROW_RETURN_NOT_OK(builder->Append(elements[elem_idx].path));
        }

        return Error::ok();
    }
} // namespace rerun::datatypes
