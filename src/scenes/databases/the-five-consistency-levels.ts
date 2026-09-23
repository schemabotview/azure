import type { Scene } from '@graphlearning/flow'

// §07. Five levels is a table, not a flow — they are a dial, and what the reader needs is the two
// columns nobody prints together: what a reader may observe, and what it costs. The RU column is
// the honest one: strong is not just slower, it bills double on every read.
export const theFiveConsistencyLevels: Scene = {
  id: 'the-five-consistency-levels',
  title: 'One dial, five stops',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'storage',
      label: 'Cosmos DB consistency levels',
      sub: 'strongest at the top; the default is the third',
      headers: ['Level', 'A reader may see', 'Read latency', 'Read RU'],
      values: [
        ['Strong', 'only the latest write', 'highest', '2×'],
        ['Bounded staleness', 'K writes or T seconds behind', 'high', '2×'],
        ['Session', 'its own writes, always', 'low', '1×'],
        ['Consistent prefix', 'writes in order, never gaps', 'low', '1×'],
        ['Eventual', 'anything, in any order', 'lowest', '1×'],
      ],
    },
  ],
  edges: [],
}
