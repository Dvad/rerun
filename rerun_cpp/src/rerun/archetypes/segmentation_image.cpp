// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/re_types/definitions/rerun/archetypes/segmentation_image.fbs".

#include "segmentation_image.hpp"

#include "../collection_adapter_builtins.hpp"

namespace rerun::archetypes {
    const char SegmentationImage::INDICATOR_COMPONENT_NAME[] =
        "rerun.components.SegmentationImageIndicator";
}

namespace rerun {

    Result<std::vector<SerializedComponentBatch>> AsComponents<
        archetypes::SegmentationImage>::serialize(const archetypes::SegmentationImage& archetype) {
        using namespace archetypes;
        std::vector<SerializedComponentBatch> cells;
        cells.reserve(2);

        {
            const size_t size = 1;
            auto result = rerun::components::TensorData::to_data_cell(&archetype.data, size);
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value), size);
        }
        if (archetype.draw_order.has_value()) {
            const size_t size = 1;
            auto result =
                rerun::components::DrawOrder::to_data_cell(&archetype.draw_order.value(), size);
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value), size);
        }
        {
            auto indicator = SegmentationImage::IndicatorComponent();
            auto result = SegmentationImage::IndicatorComponent::to_data_cell(&indicator, 1);
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value), 1);
        }

        return cells;
    }
} // namespace rerun
