import type { Scene } from '@graphlearning/flow'

// §02. A policy definition IS this JSON, and showing it removes the mystery in one frame: a
// condition over resource fields, and an effect. The comment block underneath is the part that
// decides how a policy behaves in practice — the effect, and the scope it is assigned at.
export const ifThenEffect: Scene = {
  id: 'if-then-effect',
  title: 'Every policy is a condition and an effect',
  nodes: [
    {
      id: 'def',
      kind: 'code',
      filename: 'a policy definition: storage accounts must require HTTPS',
      minCols: 76,
      label: [
        '"policyRule": {',
        '  "if": {',
        '    "allOf": [',
        '      { "field": "type",',
        '        "equals": "Microsoft.Storage/storageAccounts" },',
        '      { "field": "Microsoft.Storage/.../supportsHttpsTrafficOnly",',
        '        "equals": "false" }',
        '    ]',
        '  },',
        '  "then": { "effect": "[parameters(\'effect\')]" }',
        '}',
        '',
        '// the EFFECT is the whole behaviour, and it is a parameter for a reason:',
        '//   audit              it exists and is wrong. A compliance row, nothing blocked',
        '//   deny               ARM refuses the write. The deployment fails, loudly',
        '//   deployIfNotExists  it creates the missing thing, using a managed identity',
        '//   modify             it edits the request on the way through — this is how',
        '//                      a tag gets inherited from the resource group',
        '',
        '// an INITIATIVE is a bundle of definitions assigned as ONE, at a scope on the',
        '// tree, and it inherits downward. Assign at the management group.',
      ].join('\n'),
    },
  ],
  edges: [],
}
