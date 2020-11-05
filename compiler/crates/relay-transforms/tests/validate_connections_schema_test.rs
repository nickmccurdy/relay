// @generated SignedSource<<09329a806f49f5773c23ce987bc69a36>>
// Generated by $ cargo run -p fixture-tests -- oss/crates/relay-transforms/tests/validate_connections_schema

mod validate_connections_schema;

use validate_connections_schema::transform_fixture;
use fixture_tests::test_fixture;

#[test]
fn connection_invalid_edge_type_invalid() {
    let input = include_str!("validate_connections_schema/fixtures/connection-invalid-edge-type.invalid.graphql");
    let expected = include_str!("validate_connections_schema/fixtures/connection-invalid-edge-type.invalid.expected");
    test_fixture(transform_fixture, "connection-invalid-edge-type.invalid.graphql", "validate_connections_schema/fixtures/connection-invalid-edge-type.invalid.expected", input, expected);
}

#[test]
fn connection_invalid_edges_field_invalid() {
    let input = include_str!("validate_connections_schema/fixtures/connection-invalid-edges-field.invalid.graphql");
    let expected = include_str!("validate_connections_schema/fixtures/connection-invalid-edges-field.invalid.expected");
    test_fixture(transform_fixture, "connection-invalid-edges-field.invalid.graphql", "validate_connections_schema/fixtures/connection-invalid-edges-field.invalid.expected", input, expected);
}

#[test]
fn connection_invalid_edges_list_type_invalid() {
    let input = include_str!("validate_connections_schema/fixtures/connection-invalid-edges-list-type.invalid.graphql");
    let expected = include_str!("validate_connections_schema/fixtures/connection-invalid-edges-list-type.invalid.expected");
    test_fixture(transform_fixture, "connection-invalid-edges-list-type.invalid.graphql", "validate_connections_schema/fixtures/connection-invalid-edges-list-type.invalid.expected", input, expected);
}

#[test]
fn connection_invalid_no_page_info_invalid() {
    let input = include_str!("validate_connections_schema/fixtures/connection-invalid-no-page-info.invalid.graphql");
    let expected = include_str!("validate_connections_schema/fixtures/connection-invalid-no-page-info.invalid.expected");
    test_fixture(transform_fixture, "connection-invalid-no-page-info.invalid.graphql", "validate_connections_schema/fixtures/connection-invalid-no-page-info.invalid.expected", input, expected);
}

#[test]
fn connection_invalid_page_info_invalid() {
    let input = include_str!("validate_connections_schema/fixtures/connection-invalid-page-info.invalid.graphql");
    let expected = include_str!("validate_connections_schema/fixtures/connection-invalid-page-info.invalid.expected");
    test_fixture(transform_fixture, "connection-invalid-page-info.invalid.graphql", "validate_connections_schema/fixtures/connection-invalid-page-info.invalid.expected", input, expected);
}