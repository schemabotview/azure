import type { Scene } from '@graphlearning/flow'

// §07. A flow, because a load balancer really is a sequence of decisions on one packet — and
// because the health probe is the part that matters and the part that is drawn last in every other
// explanation. Here it is the node that decides which backends exist at all.
export const howALoadBalancerDecides: Scene = {
  id: 'how-a-load-balancer-decides',
  title: 'Four objects, one packet',
  nodes: [
    { id: 'client', label: 'A client', sub: 'connects to one address', pattern: 'user', icon: 'users' },
    { id: 'fe', label: 'Frontend IP', sub: 'public, or internal to the VNet', pattern: 'network', icon: 'publicip' },
    { id: 'rule', label: 'Rule', sub: 'port 443 → port 8443', pattern: 'network', icon: 'loadbalancer' },
    { id: 'probe', label: 'Health probe', sub: 'decides who is in the pool', pattern: 'service', icon: 'circlecheck' },
    { id: 'pool', label: 'Backend pool', sub: 'the healthy instances only', icon: 'vmss' },
  ],
  edges: [
    { source: 'client', target: 'fe', label: 'one address' },
    { source: 'fe', target: 'rule', label: 'matched' },
    // no label: this edge crosses the frontend→rule edge, and two pills at the same height
    // painted over each other. The arrow from the probe is self-evident.
    { source: 'probe', target: 'pool' },
    { source: 'rule', target: 'pool', label: 'forwarded' },
  ],
}
