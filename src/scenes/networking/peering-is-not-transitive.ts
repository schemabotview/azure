import type { Scene } from '@graphlearning/flow'

// §05. The whole section is one negative fact, and a diagram is the only way to make a negative
// obvious: two edges exist, the third does not, and no amount of configuration on the spokes
// creates it. Drawn as three peers with the missing link stated on the warn card.
export const peeringIsNotTransitive: Scene = {
  id: 'peering-is-not-transitive',
  title: 'A peers with B. B peers with C. A cannot reach C.',
  nodes: [
    { id: 'hub', label: 'Hub · 10.0.0.0/16', sub: 'peered with both', pattern: 'network', icon: 'vnet' },
    { id: 'spoke1', label: 'Spoke A · 10.1.0.0/16', sub: 'peered with the hub', pattern: 'network', icon: 'vnet' },
    { id: 'spoke2', label: 'Spoke B · 10.2.0.0/16', sub: 'peered with the hub', pattern: 'network', icon: 'vnet' },
    { id: 'gap', label: 'A ↔ B', sub: 'needs its own peering, or a route through the hub', pattern: 'warn', icon: 'ban' },
  ],
  edges: [
    { source: 'spoke1', target: 'hub', label: 'peering', bidirectional: true },
    { source: 'hub', target: 'spoke2', label: 'peering', bidirectional: true },
    { source: 'spoke1', target: 'gap', label: 'does not exist' },
  ],
}
