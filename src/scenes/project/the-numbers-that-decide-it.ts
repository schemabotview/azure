import type { Scene } from '@graphlearning/flow'

// §01. The whole capstone hangs on this table, so it is deliberately the first frame: six rows, each
// a number somebody outside the team agreed to, and a third column saying what that number FORCES.
// Every section after this points back at a row here — which is the only thing that stops a capstone
// becoming a tour of services somebody liked the look of.
export const theNumbersThatDecideIt: Scene = {
  id: 'the-numbers-that-decide-it',
  title: 'Six numbers, and what each one forces',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'service',
      label: 'The order platform · the non-negotiables',
      sub: 'agreed with the business before a single resource exists',
      headers: ['Requirement', 'The number', 'What it forces'],
      values: [
        ['Orders a day', '40,000, 6× on promo', 'level it, do not scale it'],
        ['Availability', '99.9% monthly', 'zones, not two regions'],
        ['RPO / RTO', '15 min / 4 hours', 'a geo-replica, then restore'],
        ['Card data', 'never stored', 'a token from the PSP'],
        ['Personal data', 'stays in the EU', 'two EU regions, by policy'],
        ['The team', 'two engineers', 'managed beats self-run'],
      ],
    },
  ],
  edges: [],
}
