﻿function MetadataContext($resource) {
    return $resource(
        'api/metadata/metadata/:Name',
        { Name: '@Name' },
        { update: { method: 'PUT' } });
}

function FieldContext($resource) {
    return $resource(
        'api/metadata/field/:Name',
        { Name: '@Name' },
        { update: { method: 'PUT' } });
}

function GenerateContext($resource) {
    return $resource(
        'api/metadata/Generation/:Name',
        { Name: '@Name' },
        { update: { method: 'PUT' } });
}

function UserViewContext($resource) {
    return $resource(
        'api/metadata/UserView/:Name:Id',
        { Name: '@Name' },
        { Id: '@Id' },
        { update: { method: 'PUT' } });
}