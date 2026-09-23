import type { Scene } from '@graphlearning/flow'

// §09. The closing card is arithmetic, not opinion: at some volume the network stops being the
// answer and a physical appliance is faster. The commands are real, and the sum underneath is the
// part people skip before starting a copy that will not finish.
export const movingBytes: Scene = {
  id: 'moving-bytes',
  title: 'At some point, a lorry is faster',
  nodes: [
    {
      id: 'move',
      kind: 'code',
      filename: 'getting data in and out',
      minCols: 76,
      label: [
        '# the workhorse — parallel, resumable, and it authenticates with your identity',
        'azcopy login --identity',
        'azcopy copy "/data/exports/*" \\',
        '  "https://stlakeprod.blob.core.windows.net/bronze/orders/" --recursive',
        '',
        '# server-to-server: no bytes touch your machine at all',
        'azcopy copy "https://old.blob.core.windows.net/raw?<SAS>" \\',
        '            "https://new.blob.core.windows.net/raw?<SAS>" --recursive',
        '',
        '# do this sum BEFORE you start',
        '#   100 TB over a saturated 1 Gbps link = ~9 days, at best',
        '#   the same 100 TB on a Data Box       = ship it, ~1 week, no link at all',
        '#',
        '# Storage Mover  — lift an on-prem NAS, with a resumable migration project',
        '# Data Box       — Microsoft posts you an appliance; you post it back',
      ].join('\n'),
    },
  ],
  edges: [],
}
