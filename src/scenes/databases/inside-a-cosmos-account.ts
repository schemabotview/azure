import type { Scene } from '@graphlearning/flow'

// §05. Nesting, because the hierarchy is where throughput is actually bought: RU/s sit on the
// CONTAINER (or shared at the database), and every later argument about cost and partitions is an
// argument about that one line. The API is a property of the account and cannot be changed after.
export const insideACosmosAccount: Scene = {
  id: 'inside-a-cosmos-account',
  title: 'Account, database, container — and the container is where you pay',
  nodes: [
    {
      id: 'acct',
      label: 'Cosmos account · API chosen at creation',
      sub: 'NoSQL · Mongo · Cassandra · Gremlin · Table — and never changed after',
      pattern: 'group',
      icon: 'cosmos',
      children: [
        {
          id: 'db',
          label: 'Database · shop',
          sub: 'a namespace; can hold shared throughput',
          pattern: 'group',
          icon: 'storage',
          cols: 2,
          children: [
            { id: 'c1', label: 'Container · orders', sub: 'partition key /customerId', pattern: 'storage', icon: 'storagetable' },
            { id: 'c2', label: 'Container · sessions', sub: 'TTL 20 minutes', pattern: 'storage', icon: 'storagetable' },
          ],
        },
      ],
    },
    {
      id: 'rus',
      label: 'Request units',
      sub: 'the whole bill, per second',
      pattern: 'user',
      icon: 'metrics',
    },
  ],
  edges: [{ source: 'rus', target: 'acct', label: 'bought per container' }],
}
