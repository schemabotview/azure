import type { Scene } from '@graphlearning/flow'

// §05. Fabric's one genuinely new idea is the storage layer, so the scene is the containment: every
// item in every workspace writes Delta Parquet into ONE lake. The shortcut hangs outside because
// that is the point of it — data that is read in place and never copied in.
export const oneLakeManyItems: Scene = {
  id: 'one-lake-many-items',
  title: 'One lake per tenant, and everything writes Delta into it',
  nodes: [
    {
      id: 'onelake',
      label: 'OneLake · one per tenant, created for you',
      sub: 'every Fabric item stores its data here, as Delta Parquet — one copy, one format',
      pattern: 'group',
      icon: 'boxes',
      children: [
        {
          id: 'ws',
          label: 'Workspace · analytics',
          sub: 'the unit of access, and what a capacity is assigned to',
          pattern: 'group',
          icon: 'folder',
          cols: 2,
          children: [
            { id: 'lh', label: 'Lakehouse', sub: 'files + Delta tables', pattern: 'storage', icon: 'adls' },
            { id: 'wh', label: 'Warehouse', sub: 'T-SQL, and it writes', pattern: 'storage', icon: 'azuresql' },
          ],
        },
      ],
    },
    {
      id: 'ext',
      label: 'A shortcut',
      sub: 'ADLS or S3, read in place',
      pattern: 'external',
      icon: 'link',
    },
  ],
  edges: [{ source: 'ext', target: 'onelake', label: 'never copied' }],
}
