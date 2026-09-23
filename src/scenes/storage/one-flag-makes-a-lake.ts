import type { Scene } from '@graphlearning/flow'

// §06. The hierarchical namespace is invisible in the portal and changes the engine underneath, so
// the scene shows what it changes: the same path, renamed two ways. The az line is real and the
// caveat under it is the one that turns a data platform into a migration project.
export const oneFlagMakesALake: Scene = {
  id: 'one-flag-makes-a-lake',
  title: 'The flag that turns blob storage into a lake',
  nodes: [
    {
      id: 'hns',
      kind: 'code',
      filename: 'hierarchical namespace, on or off',
      minCols: 76,
      label: [
        'az storage account create -n stlakeprod -g rg-data \\',
        '    --sku Standard_ZRS --hns true          # <- this is the whole decision',
        '',
        '# WITHOUT it — flat. A "folder" is a prefix in the name, nothing more.',
        '  bronze/orders/2026/09/23/part-0001.parquet     <- one long key',
        '  renaming "bronze/orders" = copy every blob, then delete every blob',
        '',
        '# WITH it — real directories, with atomic operations on them.',
        '  rename a directory      -> one metadata operation',
        '  POSIX ACLs per folder   -> beyond the container-level RBAC',
        '  the ABFS driver         -> what Spark, Databricks and Fabric expect',
        '',
        '# it can only be set AT CREATION. Turning it on later means a new account,',
        '# a copy of every byte, and every consumer repointed.',
      ].join('\n'),
    },
  ],
  edges: [],
}
