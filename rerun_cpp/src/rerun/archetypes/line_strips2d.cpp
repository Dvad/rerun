// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/re_types/definitions/rerun/archetypes/line_strips2d.fbs".

#include "line_strips2d.hpp"

#include "../collection_adapter_builtins.hpp"

namespace rerun::archetypes {
    const char LineStrips2D::INDICATOR_COMPONENT_NAME[] = "rerun.components.LineStrips2DIndicator";
}

namespace rerun {

    Result<std::vector<SerializedComponentBatch>> AsComponents<archetypes::LineStrips2D>::serialize(
        const archetypes::LineStrips2D& archetype
    ) {
        using namespace archetypes;
        std::vector<SerializedComponentBatch> cells;
        cells.reserve(7);

        {
            const size_t size = archetype.strips.size();
            auto result = rerun::components::LineStrip2D::to_data_cell(
                archetype.strips.data(),
                archetype.strips.size()
            );
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value), size);
        }
        if (archetype.radii.has_value()) {
            const size_t size = archetype.radii.value().size();
            auto result =
                rerun::components::Radius::to_data_cell(archetype.radii.value().data(), size);
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value), size);
        }
        if (archetype.colors.has_value()) {
            const size_t size = archetype.colors.value().size();
            auto result =
                rerun::components::Color::to_data_cell(archetype.colors.value().data(), size);
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value), size);
        }
        if (archetype.labels.has_value()) {
            const size_t size = archetype.labels.value().size();
            auto result =
                rerun::components::Text::to_data_cell(archetype.labels.value().data(), size);
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
        if (archetype.class_ids.has_value()) {
            const size_t size = archetype.class_ids.value().size();
            auto result =
                rerun::components::ClassId::to_data_cell(archetype.class_ids.value().data(), size);
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value), size);
        }
        if (archetype.instance_keys.has_value()) {
            const size_t size = archetype.instance_keys.value().size();
            auto result = rerun::components::InstanceKey::to_data_cell(
                archetype.instance_keys.value().data(),
                size
            );
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value), size);
        }
        {
            auto indicator = LineStrips2D::IndicatorComponent();
            auto result = LineStrips2D::IndicatorComponent::to_data_cell(&indicator, 1);
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value), 1);
        }

        return cells;
    }
} // namespace rerun
