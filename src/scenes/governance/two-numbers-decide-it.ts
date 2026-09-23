import type { Scene } from '@graphlearning/flow'

// §09. Read ACROSS a row. Backup and Site Recovery get confused for each other constantly, and the
// table separates them on the only axis that matters — what each one is FOR — before the two numbers
// that a business actually has to state. The last row is there because the cost shapes differ
// completely: one is storage you consume, the other is a replica running whether you need it or not.
export const twoNumbersDecideIt: Scene = {
  id: 'two-numbers-decide-it',
  title: 'Two services, two different disasters',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'storage',
      label: 'Backup, or Site Recovery',
      sub: 'they are not alternatives — most estates need both',
      headers: ['', 'Azure Backup', 'Site Recovery'],
      values: [
        ['Saves you from', 'deletion, corruption', 'losing a region'],
        ['Granularity', 'a file, a disk, a DB', 'the whole machine'],
        ['RPO', 'the last backup ran', 'seconds to minutes'],
        ['RTO', 'a restore, in hours', 'a failover, in minutes'],
        ['Billed as', 'storage per GB', 'a replica, always on'],
      ],
    },
  ],
  edges: [],
}
