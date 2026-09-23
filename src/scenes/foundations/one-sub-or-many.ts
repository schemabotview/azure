import type { Scene } from '@graphlearning/flow'

// §05. A table, because the whole section is a comparison against five fixed criteria and a
// diagram of two boxes would carry none of them. Data mode: the criteria are the rows, so the eye
// reads down one column to see what a choice costs.
export const oneSubOrMany: Scene = {
  id: 'one-sub-or-many',
  title: 'When one subscription stops being enough',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'network',
      label: 'Subscription as a boundary',
      sub: 'the five things it separates',
      headers: ['What it bounds', 'One subscription', 'A subscription per team'],
      values: [
        ['Billing', 'one invoice, split by tag', 'one invoice per team'],
        ['Quotas', 'shared — first team wins', 'per team, raised per team'],
        ['Policy', 'one baseline for all', 'a baseline per team'],
        ['Blast radius', 'a bad rule hits everything', 'contained to one team'],
        ['Overhead', 'almost none', 'network + identity now cross it'],
      ],
    },
  ],
  edges: [],
}
