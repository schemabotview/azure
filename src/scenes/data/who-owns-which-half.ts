import type { Scene } from '@graphlearning/flow'

// §07. Databricks on Azure is one product with a split down the middle, and almost every surprise —
// a bill, a network rule, a support boundary — comes from not knowing which side a thing is on. A
// board of three piles at cols 2 — and each pile stacks its own two cards (cols 1), because with
// them side by side the whole composition was ~670x250 and rendered at half the legible type size.
// Stacked, it is ~520x620: close to the square left pane, and full size.
export const whoOwnsWhichHalf: Scene = {
  id: 'who-owns-which-half',
  title: 'One product, and a line down the middle of it',
  cols: 2,
  nodes: [
    {
      id: 'dbx',
      label: 'Databricks runs',
      sub: 'the control plane',
      pattern: 'group',
      cols: 1,
      children: [
        { id: 'ui', label: 'The workspace', sub: 'notebooks and jobs', pattern: 'external', icon: 'databricks' },
        { id: 'sched', label: 'The scheduler', sub: 'and the metastore', pattern: 'external', icon: 'clock' },
      ],
    },
    {
      id: 'you',
      label: 'You run',
      sub: 'in your own subscription',
      pattern: 'group',
      cols: 1,
      children: [
        { id: 'cl', label: 'Clusters of VMs', sub: 'your quota, your bill', pattern: 'service', icon: 'vm' },
        { id: 'vn', label: 'Your own VNet', sub: 'optional, and worth it', pattern: 'network', icon: 'vnet' },
      ],
    },
    {
      id: 'az',
      label: 'Azure supplies',
      sub: 'this is a first-party service',
      pattern: 'group',
      cols: 1,
      children: [
        { id: 'aad', label: 'Entra sign-in', sub: 'no second directory', pattern: 'user', icon: 'managedidentity' },
        { id: 'uc', label: 'Data in ADLS', sub: 'governed by Unity', pattern: 'storage', icon: 'adls' },
      ],
    },
  ],
  edges: [],
}
