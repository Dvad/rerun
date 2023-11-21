// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/re_types/definitions/rerun/archetypes/mesh3d.fbs".

#include "mesh3d.hpp"

#include "../collection_adapter_builtins.hpp"

namespace rerun::archetypes {
    const char Mesh3D::INDICATOR_COMPONENT_NAME[] = "rerun.components.Mesh3DIndicator";
}

namespace rerun {

    Result<std::vector<DataCell>> AsComponents<archetypes::Mesh3D>::serialize(
        const archetypes::Mesh3D& archetype
    ) {
        using namespace archetypes;
        std::vector<DataCell> cells;
        cells.reserve(8);

        {
            auto result = rerun::components::Position3D::to_data_cell(
                archetype.vertex_positions.data(),
                archetype.vertex_positions.size()
            );
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value));
        }
        if (archetype.mesh_properties.has_value()) {
            auto result = rerun::components::MeshProperties::to_data_cell(
                &archetype.mesh_properties.value(),
                1
            );
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value));
        }
        if (archetype.vertex_normals.has_value()) {
            auto result = rerun::components::Vector3D::to_data_cell(
                archetype.vertex_normals.value().data(),
                archetype.vertex_normals.value().size()
            );
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value));
        }
        if (archetype.vertex_colors.has_value()) {
            auto result = rerun::components::Color::to_data_cell(
                archetype.vertex_colors.value().data(),
                archetype.vertex_colors.value().size()
            );
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value));
        }
        if (archetype.mesh_material.has_value()) {
            auto result =
                rerun::components::Material::to_data_cell(&archetype.mesh_material.value(), 1);
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value));
        }
        if (archetype.class_ids.has_value()) {
            auto result = rerun::components::ClassId::to_data_cell(
                archetype.class_ids.value().data(),
                archetype.class_ids.value().size()
            );
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value));
        }
        if (archetype.instance_keys.has_value()) {
            auto result = rerun::components::InstanceKey::to_data_cell(
                archetype.instance_keys.value().data(),
                archetype.instance_keys.value().size()
            );
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value));
        }
        {
            auto indicator = Mesh3D::IndicatorComponent();
            auto result = Mesh3D::IndicatorComponent::to_data_cell(&indicator, 1);
            RR_RETURN_NOT_OK(result.error);
            cells.emplace_back(std::move(result.value));
        }

        return cells;
    }
} // namespace rerun
