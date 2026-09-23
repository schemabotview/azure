import type { Scene } from '@graphlearning/flow'

// §02. The purchasing model is the decision people make blind and then live inside, so the table is
// the section. Columns are what you actually buy, how it scales and where it bites — the last one
// being the reason serverless and elastic pools exist at all.
export const howAzureSqlIsPriced: Scene = {
  id: 'how-azure-sql-is-priced',
  title: 'What you are actually buying',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'storage',
      label: 'Azure SQL Database purchasing models',
      sub: 'compute is the bill; storage is small',
      headers: ['Model', 'You buy', 'Good for', 'The catch'],
      values: [
        ['DTU', 'a blended unit', 'small, steady apps', 'you cannot see what is short'],
        ['vCore', 'cores + memory', 'everything else', 'you must size it'],
        ['Serverless', 'per-second vCores', 'spiky, idle at night', 'a cold start after a pause'],
        ['Elastic pool', 'one budget, many DBs', 'many small tenants', 'one noisy DB hurts all'],
        ['Hyperscale', 'the same, to 100 TB', 'large, growing', 'not every feature applies'],
      ],
    },
  ],
  edges: [],
}
