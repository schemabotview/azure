import type { Scene } from '@graphlearning/flow'

// §02. A size name is a specification in eight characters, and nobody is taught to read it. The card
// decomposes one, then lists the families by what they are FOR — the only useful axis, since the
// numbers change every generation and the letters do not.
export const readingASizeName: Scene = {
  id: 'reading-a-size-name',
  title: 'The name is the spec',
  nodes: [
    {
      id: 'size',
      kind: 'code',
      filename: 'Standard_D4as_v5',
      minCols: 76,
      label: [
        'Standard_D 4 a s _v5',
        '         │ │ │ │   │',
        '         │ │ │ │   └── generation — v5 is newer silicon at a similar price',
        '         │ │ │ └────── s = premium storage capable (you want this)',
        '         │ │ └──────── a = AMD processor (d = Intel, p = Arm)',
        '         │ └────────── 4 vCPUs — memory follows the family ratio',
        '         └──────────── family: D = general purpose',
        '',
        '# the families you will actually pick from',
        'B   burstable     — banks credits while idle. Dev boxes. Never a steady load.',
        'D   general       — 4 GB per vCPU. The default answer.',
        'E   memory        — 8 GB per vCPU. Databases, caches, in-memory analytics.',
        'F   compute       — 2 GB per vCPU, fastest clocks. Batch, build agents.',
        'L   storage       — local NVMe, huge and fast. Big data nodes.',
        'N   GPU           — training and inference. Quota is requested, not assumed.',
      ].join('\n'),
    },
  ],
  edges: [],
}
