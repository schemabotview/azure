import type { Scene } from '@graphlearning/flow'

// §06. The one decision in Cosmos that cannot be undone, so the card shows the arithmetic rather
// than asserting a rule. Two keys over the same data: one spreads, one does not — and the RU maths
// underneath is what turns "hot partition" from jargon into a number.
export const thePartitionKey: Scene = {
  id: 'the-partition-key',
  title: 'The choice you cannot take back',
  nodes: [
    {
      id: 'pk',
      kind: 'code',
      filename: 'the same orders, two partition keys',
      minCols: 76,
      label: [
        '{ "id": "9f31", "customerId": "c-8842", "country": "IN",',
        '  "status": "shipped", "total": 42.10 }',
        '',
        '# /country        -> 4 distinct values, 50 GB of orders',
        '#   IN  ############################  hot. one logical partition, 20 GB ceiling.',
        '#   US  ############',
        '#   DE  ###',
        '#   SG  #',
        '',
        '# /customerId     -> 2.1 M distinct values',
        '#   even spread, no ceiling in sight, and the common query',
        '#   ("this customer\'s orders") stays inside ONE partition.',
        '',
        '# a cross-partition query fans out to every partition and pays for each.',
        '# 400 RU/s over 10 partitions is 40 RU/s each — not 400 wherever you need it.',
      ].join('\n'),
    },
  ],
  edges: [],
}
