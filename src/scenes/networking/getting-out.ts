import type { Scene } from '@graphlearning/flow'

// §04. Outbound is the direction nobody designs and everybody eventually debugs. A board rather
// than a flow — all three paths exist simultaneously and a subnet picks one; drawing it as a
// sequence would also have put two flows back to back with the peering section that follows.
// The warn pile is the default Azure is retiring, which is what most existing subnets still use.
export const gettingOut: Scene = {
  id: 'getting-out',
  title: 'Three ways out. One of them is going away.',
  cols: 3,
  nodes: [
    {
      id: 'default',
      label: 'Default outbound',
      sub: 'what you get by doing nothing',
      pattern: 'group',
      children: [
        { id: 'd1', label: 'An address Azure picks', sub: 'and can change', pattern: 'warn', icon: 'repeat' },
        { id: 'd2', label: 'Retiring', sub: 'new subnets lose it', pattern: 'warn', icon: 'ban' },
      ],
    },
    {
      id: 'nat',
      label: 'NAT Gateway',
      sub: 'the simple answer',
      pattern: 'group',
      children: [
        { id: 'n1', label: 'Your own addresses', sub: 'static, allow-listable', pattern: 'network', icon: 'natgateway' },
        { id: 'n2', label: 'No port exhaustion', sub: 'at any sane scale', pattern: 'network', icon: 'circlecheck' },
      ],
    },
    {
      id: 'fw',
      label: 'Azure Firewall',
      sub: 'when egress must be controlled',
      pattern: 'group',
      children: [
        { id: 'f1', label: 'Inspects and logs', sub: 'by FQDN, not just IP', pattern: 'service', icon: 'firewall' },
        { id: 'f2', label: 'Costs real money', sub: 'and needs a UDR', pattern: 'warn', icon: 'costanalysis' },
      ],
    },
  ],
  edges: [],
}
