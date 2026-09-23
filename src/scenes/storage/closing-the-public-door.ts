import type { Scene } from '@graphlearning/flow'

// §08. Nesting plus one edge, because the point is topological. The child edge's label is two words
// because the pill rides the midpoint of a short gap between two sibling cards — the first cut said
// "private DNS resolves the name here" and painted straight across both of them.
// the private endpoint is a NIC that
// lives INSIDE your subnet and carries the account's name, so the traffic never reaches the public
// endpoint at all. The warn card is what the figure is really arguing against.
export const closingThePublicDoor: Scene = {
  id: 'closing-the-public-door',
  title: 'Put the storage account inside your network',
  nodes: [
    {
      id: 'vnet',
      label: 'VNet · 10.0.0.0/16',
      sub: 'your address space',
      pattern: 'group',
      icon: 'vnet',
      cols: 2,
      children: [
        { id: 'app', label: 'App subnet', sub: 'the workload', pattern: 'network', icon: 'subnet' },
        { id: 'pe', label: 'Private endpoint', sub: 'a NIC at 10.0.2.4', pattern: 'network', icon: 'privateendpoint' },
      ],
      edges: [{ source: 'app', target: 'pe', label: 'private DNS', dir: 'LR' }],
      flow: 'LR',
    },
    { id: 'sa', label: 'Storage account', sub: 'public network access: disabled', pattern: 'storage', icon: 'storage' },
    { id: 'internet', label: 'The public endpoint', sub: 'still exists, now refuses everyone', pattern: 'warn', icon: 'globe' },
  ],
  edges: [
    { source: 'pe', target: 'sa', label: 'over the Microsoft backbone' },
    { source: 'internet', target: 'sa', label: 'blocked' },
  ],
}
