import type { Scene } from '@graphlearning/flow'

// §02. A table, because the three object types differ along exactly the axes that decide how you
// use them — and the column that surprises people is the third: you FETCH a secret, but you never
// fetch a key, you ask the vault to operate with it. Cells kept to a phrase so the table stays
// narrow and the type stays large; the two access models are an argument, so they live on the slide.
export const threeThingsOneVault: Scene = {
  id: 'three-things-one-vault',
  title: 'Three object types, and only one of them leaves',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'storage',
      label: 'Key Vault · what it holds',
      sub: 'the third column is the one that surprises people',
      headers: ['Object', 'What it is', 'The app gets', 'Rotation'],
      values: [
        ['Secret', 'any string', 'the value itself', 'a new version'],
        ['Key', 'never exportable', 'an operation', 'a new version'],
        ['Certificate', 'a key plus a chain', 'both halves', 'automatic'],
      ],
    },
  ],
  edges: [],
}
