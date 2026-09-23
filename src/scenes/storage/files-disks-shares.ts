import type { Scene } from '@graphlearning/flow'

// §05. Four ways to give a machine a filesystem, separated by the question that actually decides it:
// how many machines may write at once. A table, because that answer is one cell per row and the
// alternative — four boxes with feature lists — hides it.
export const filesDisksShares: Scene = {
  id: 'files-disks-shares',
  title: 'How many machines may write to it?',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'storage',
      label: 'Filesystem storage',
      sub: 'shared access is the discriminator',
      headers: ['Service', 'Attached to', 'Reach for it when'],
      values: [
        ['Managed disk', 'one VM', 'an OS or a database volume'],
        ['Azure Files', 'many, over SMB', 'a lift-and-shift file share'],
        ['NetApp Files', 'many, NFS or SMB', 'enterprise NAS, sub-ms, expensive'],
        ['Blob + NFS 3.0', 'many, over NFS', 'analytics reading objects as files'],
      ],
    },
  ],
  edges: [],
}
