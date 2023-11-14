// DO NOT EDIT! This file was auto-generated by crates/re_types_builder/src/codegen/cpp/mod.rs
// Based on "crates/re_types/definitions/rerun/archetypes/mesh3d.fbs".

#pragma once

#include "../collection.hpp"
#include "../components/class_id.hpp"
#include "../components/color.hpp"
#include "../components/instance_key.hpp"
#include "../components/material.hpp"
#include "../components/mesh_properties.hpp"
#include "../components/position3d.hpp"
#include "../components/vector3d.hpp"
#include "../data_cell.hpp"
#include "../indicator_component.hpp"
#include "../result.hpp"
#include "../serialized_component_batch.hpp"
#include "../warning_macros.hpp"

#include <cstdint>
#include <optional>
#include <utility>
#include <vector>

namespace rerun::archetypes {
    /// **Archetype**: A 3D triangle mesh as specified by its per-mesh and per-vertex properties.
    ///
    /// ## Example
    ///
    /// ### Simple indexed 3D mesh
    /// ![image](https://static.rerun.io/mesh3d_simple/e1e5fd97265daf0d0bc7b782d862f19086fd6975/full.png)
    ///
    /// ```cpp
    /// #include <rerun.hpp>
    ///
    /// #include <vector>
    ///
    /// int main() {
    ///     const auto rec = rerun::RecordingStream("rerun_example_mesh3d_indexed");
    ///     rec.spawn().exit_on_failure();
    ///
    ///     const rerun::Position3D vertex_positions[3] = {
    ///         {0.0f, 1.0f, 0.0f},
    ///         {1.0f, 0.0f, 0.0f},
    ///         {0.0f, 0.0f, 0.0f},
    ///     };
    ///     const rerun::Color vertex_colors[3] = {
    ///         {0, 0, 255},
    ///         {0, 255, 0},
    ///         {255, 0, 0},
    ///     };
    ///     const std::vector<uint32_t> indices = {2, 1, 0};
    ///
    ///     rec.log(
    ///         "triangle",
    ///         rerun::Mesh3D(vertex_positions)
    ///             .with_vertex_normals({{0.0, 0.0, 1.0}})
    ///             .with_vertex_colors(vertex_colors)
    ///             .with_mesh_properties(rerun::components::MeshProperties::from_triangle_indices(indices))
    ///             .with_mesh_material(rerun::components::Material::from_albedo_factor(0xCC00CCFF))
    ///     );
    /// }
    /// ```
    struct Mesh3D {
        /// The positions of each vertex.
        ///
        /// If no `indices` are specified, then each triplet of positions is interpreted as a triangle.
        Collection<rerun::components::Position3D> vertex_positions;

        /// Optional properties for the mesh as a whole (including indexed drawing).
        std::optional<rerun::components::MeshProperties> mesh_properties;

        /// An optional normal for each vertex.
        ///
        /// If specified, this must have as many elements as `vertex_positions`.
        std::optional<Collection<rerun::components::Vector3D>> vertex_normals;

        /// An optional color for each vertex.
        std::optional<Collection<rerun::components::Color>> vertex_colors;

        /// Optional material properties for the mesh as a whole.
        std::optional<rerun::components::Material> mesh_material;

        /// Optional class Ids for the vertices.
        ///
        /// The class ID provides colors and labels if not specified explicitly.
        std::optional<Collection<rerun::components::ClassId>> class_ids;

        /// Unique identifiers for each individual vertex in the mesh.
        std::optional<Collection<rerun::components::InstanceKey>> instance_keys;

        /// Name of the indicator component, used to identify the archetype when converting to a list of components.
        static const char INDICATOR_COMPONENT_NAME[];
        /// Indicator component, used to identify the archetype when converting to a list of components.
        using IndicatorComponent = components::IndicatorComponent<INDICATOR_COMPONENT_NAME>;

      public:
        Mesh3D() = default;
        Mesh3D(Mesh3D&& other) = default;

        explicit Mesh3D(Collection<rerun::components::Position3D> _vertex_positions)
            : vertex_positions(std::move(_vertex_positions)) {}

        /// Optional properties for the mesh as a whole (including indexed drawing).
        Mesh3D with_mesh_properties(rerun::components::MeshProperties _mesh_properties) && {
            mesh_properties = std::move(_mesh_properties);
            // See: https://github.com/rerun-io/rerun/issues/4027
            WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
        }

        /// An optional normal for each vertex.
        ///
        /// If specified, this must have as many elements as `vertex_positions`.
        Mesh3D with_vertex_normals(Collection<rerun::components::Vector3D> _vertex_normals) && {
            vertex_normals = std::move(_vertex_normals);
            // See: https://github.com/rerun-io/rerun/issues/4027
            WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
        }

        /// An optional color for each vertex.
        Mesh3D with_vertex_colors(Collection<rerun::components::Color> _vertex_colors) && {
            vertex_colors = std::move(_vertex_colors);
            // See: https://github.com/rerun-io/rerun/issues/4027
            WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
        }

        /// Optional material properties for the mesh as a whole.
        Mesh3D with_mesh_material(rerun::components::Material _mesh_material) && {
            mesh_material = std::move(_mesh_material);
            // See: https://github.com/rerun-io/rerun/issues/4027
            WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
        }

        /// Optional class Ids for the vertices.
        ///
        /// The class ID provides colors and labels if not specified explicitly.
        Mesh3D with_class_ids(Collection<rerun::components::ClassId> _class_ids) && {
            class_ids = std::move(_class_ids);
            // See: https://github.com/rerun-io/rerun/issues/4027
            WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
        }

        /// Unique identifiers for each individual vertex in the mesh.
        Mesh3D with_instance_keys(Collection<rerun::components::InstanceKey> _instance_keys) && {
            instance_keys = std::move(_instance_keys);
            // See: https://github.com/rerun-io/rerun/issues/4027
            WITH_MAYBE_UNINITIALIZED_DISABLED(return std::move(*this);)
        }

        /// Returns the number of primary instances of this archetype.
        size_t num_instances() const {
            return vertex_positions.size();
        }
    };

} // namespace rerun::archetypes

namespace rerun {
    /// \private
    template <typename T>
    struct AsComponents;

    /// \private
    template <>
    struct AsComponents<archetypes::Mesh3D> {
        /// Serialize all set component batches.
        static Result<std::vector<SerializedComponentBatch>> serialize(
            const archetypes::Mesh3D& archetype
        );
    };
} // namespace rerun
