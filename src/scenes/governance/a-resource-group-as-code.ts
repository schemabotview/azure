import type { Scene } from '@graphlearning/flow'

// §10. The close, and a file rather than an argument. Bicep is the shortest honest demonstration
// that infrastructure-as-code on Azure is not a new object model — it is the SAME resource, the same
// api-version and the same properties the portal writes, with the JSON punctuation removed. The
// trailing comment is the only real decision in the section, and it is Bicep against Terraform.
export const aResourceGroupAsCode: Scene = {
  id: 'a-resource-group-as-code',
  title: 'The same resource, with the punctuation removed',
  nodes: [
    {
      id: 'bicep',
      kind: 'code',
      filename: 'storage.bicep — deployed against a resource group',
      minCols: 76,
      label: [
        "param location string = resourceGroup().location",
        "param env string",
        '',
        "resource sa 'Microsoft.Storage/storageAccounts@2023-01-01' = {",
        "  name: 'storders${env}${uniqueString(resourceGroup().id)}'",
        '  location: location',
        "  sku:  { name: 'Standard_LRS' }",
        "  kind: 'StorageV2'",
        '  properties: {',
        '    supportsHttpsTrafficOnly: true   // the policy in the second section',
        '    allowBlobPublicAccess:    false  // would have DENIED this without it',
        '  }',
        "  tags: { env: env, owner: 'platform' }",
        '}',
        '',
        'output blobEndpoint string = sa.properties.primaryEndpoints.blob',
        '',
        '// ARM JSON is what Azure actually accepts; Bicep COMPILES to it. Same object',
        '// model, so anything ARM can express Bicep can, and it decompiles back.',
        '// Terraform is the other real answer: one language across clouds, and a STATE',
        '// FILE to look after. Bicep has no state — it asks ARM what is already there.',
      ].join('\n'),
    },
  ],
  edges: [],
}
