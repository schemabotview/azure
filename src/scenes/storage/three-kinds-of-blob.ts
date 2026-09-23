import type { Scene } from '@graphlearning/flow'

// §02. Three blob types that look identical in the portal and behave nothing alike. A table because
// the discriminator is a property per row — what a write does to it — and getting that wrong is a
// silent performance problem rather than an error.
export const threeKindsOfBlob: Scene = {
  id: 'three-kinds-of-blob',
  title: 'Three blob types, one looking glass',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'storage',
      label: 'Blob types',
      sub: 'chosen at write time, not changeable after',
      headers: ['Type', 'A write', 'What it is for'],
      values: [
        ['Block', 'uploads blocks, then commits', 'files, images, backups, parquet'],
        ['Append', 'only ever adds to the end', 'logs, audit trails'],
        ['Page', 'random 512-byte writes', 'VHDs — managed disks use these'],
      ],
    },
  ],
  edges: [],
}
