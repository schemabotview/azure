import type { Scene } from '@graphlearning/flow'

// §10. The reference topology, assembled from everything the course built — and the closing figure
// of the shippable prefix. Nesting plus peering edges: the hub owns the shared things precisely
// because a spoke is a lifecycle boundary, which is the resource-group argument one level up.
export const theHubAndSpoke: Scene = {
  id: 'the-hub-and-spoke',
  title: 'What all of it assembles into',
  nodes: [
    {
      id: 'hub',
      label: 'Hub VNet · shared, owned by the platform team',
      sub: 'built once; every spoke peers with it',
      pattern: 'group',
      icon: 'vnet',
      cols: 3,
      children: [
        { id: 'fw', label: 'Azure Firewall', sub: 'egress and inspection', pattern: 'network', icon: 'firewall' },
        { id: 'gw', label: 'Gateway', sub: 'VPN or ExpressRoute', pattern: 'network', icon: 'vnetgateway' },
        { id: 'dns', label: 'Private DNS', sub: 'resolves private endpoints', pattern: 'network', icon: 'dns' },
      ],
    },
    {
      id: 'spoke1',
      label: 'Spoke · checkout',
      sub: 'one workload, one lifecycle',
      pattern: 'group',
      icon: 'vnet',
      cols: 2,
      children: [
        { id: 's1a', label: 'App subnet', sub: 'the workload', pattern: 'network', icon: 'subnet' },
        { id: 's1b', label: 'Data subnet', sub: 'private endpoints', pattern: 'network', icon: 'privateendpoint' },
      ],
    },
    {
      id: 'spoke2',
      label: 'Spoke · analytics',
      sub: 'a different team, a different blast radius',
      pattern: 'group',
      icon: 'vnet',
      cols: 2,
      children: [
        { id: 's2a', label: 'Compute subnet', sub: 'clusters', pattern: 'network', icon: 'subnet' },
        { id: 's2b', label: 'Data subnet', sub: 'the lake, privately', pattern: 'network', icon: 'privateendpoint' },
      ],
    },
  ],
  edges: [
    { source: 'hub', target: 'spoke1', label: 'peering' },
    { source: 'hub', target: 'spoke2', label: 'peering' },
  ],
}
