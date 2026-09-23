import type { Scene } from '@graphlearning/flow'

// §10. The finale, and the test of whether the previous nine sections were a design or a shopping
// list: each pillar names ONE decision made in this system and the row of the brief it came from.
// Five piles of one card at cols 2 — the fifth centres underneath, and each pile keeps its card
// stacked so the board stays square rather than becoming a letterbox.
export const fivePillarsOneSystem: Scene = {
  id: 'five-pillars-one-system',
  title: 'Five pillars, and the one decision each made here',
  cols: 2,
  nodes: [
    {
      id: 'rel',
      label: 'Reliability',
      sub: 'from the RPO row',
      pattern: 'group',
      icon: 'shieldcheck',
      children: [{ id: 'relc', label: 'Zone-redundant', sub: 'and a restore we ran', pattern: 'storage', icon: 'azuresql' }],
    },
    {
      id: 'sec',
      label: 'Security',
      sub: 'from the card row',
      pattern: 'group',
      icon: 'lock',
      children: [{ id: 'secc', label: 'No credential', sub: 'anywhere in the deploy', pattern: 'user', icon: 'managedidentity' }],
    },
    {
      id: 'cost',
      label: 'Cost',
      sub: 'the largest line',
      pattern: 'group',
      icon: 'costanalysis',
      children: [{ id: 'costc', label: 'One tier, high', sub: 'oversized on purpose', pattern: 'service', icon: 'receipt' }],
    },
    {
      id: 'ops',
      label: 'Operations',
      sub: 'from the team row',
      pattern: 'group',
      icon: 'workflow',
      children: [{ id: 'opsc', label: 'Bicep, 4 alerts', sub: 'and nothing else to run', pattern: 'service', icon: 'braces' }],
    },
    {
      id: 'perf',
      label: 'Performance',
      sub: 'from the 6× row',
      pattern: 'group',
      icon: 'metrics',
      children: [{ id: 'perfc', label: 'A queue', sub: 'levelled, not scaled', pattern: 'network', icon: 'servicebus' }],
    },
  ],
  edges: [],
}
