import type { Scene } from '@graphlearning/flow'

// §01. Nesting, because the account IS the container: four unrelated services share one resource,
// one set of keys, one firewall and one redundancy setting. That sharing is the whole reason this
// section exists — people create one account for everything and then cannot separate any of it.
export const insideAStorageAccount: Scene = {
  id: 'inside-a-storage-account',
  title: 'One resource. Four services.',
  nodes: [
    {
      id: 'sa',
      label: 'Storage account · stcheckoutprod',
      sub: 'one name, one firewall, one redundancy setting, two keys',
      pattern: 'group',
      icon: 'storage',
      cols: 2,
      children: [
        { id: 'blob', label: 'Blob', sub: 'objects — the one you will use', pattern: 'storage', icon: 'blob' },
        { id: 'file', label: 'Files', sub: 'an SMB share, mountable', pattern: 'storage', icon: 'files' },
        { id: 'queue', label: 'Queue', sub: 'simple messages, no frills', pattern: 'network', icon: 'queue' },
        { id: 'table', label: 'Table', sub: 'key-value, superseded by Cosmos', pattern: 'network', icon: 'storagetable' },
      ],
    },
  ],
  edges: [],
}
