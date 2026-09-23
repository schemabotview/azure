import type { Scene } from '@graphlearning/flow'

// §06. A dedicated SQL pool is an MPP machine, and the ONE thing that decides whether it is fast is
// how each table is spread across the sixty distributions. A table, because the choice is three
// options against the same three questions — and because the cost column is what gets forgotten.
export const howAPoolSpreadsATable: Scene = {
  id: 'how-a-pool-spreads-a-table',
  title: 'Sixty distributions, and one choice per table',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'storage',
      label: 'Dedicated SQL pool · table distribution',
      sub: 'get this wrong and no amount of DWU helps',
      headers: ['Distribution', 'Rows land', 'Use it for', 'What it costs'],
      values: [
        ['Hash', 'by one column', 'large fact tables', 'skew, if the key is poor'],
        ['Round-robin', 'evenly, blindly', 'staging and loads', 'every join shuffles'],
        ['Replicated', 'a copy per node', 'small dimensions', 'a write rebuilds them'],
      ],
    },
  ],
  edges: [],
}
