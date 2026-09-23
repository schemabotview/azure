import type { Scene } from '@graphlearning/flow'

// §03. Five tiers against the two questions that decide between them — what it costs to sit there,
// and what it does under load. A table because the choice is a scan down one column; the bottom row
// is included specifically so the "cheap" option is visible as a latency decision, not a price one.
export const diskTiers: Scene = {
  id: 'disk-tiers',
  title: 'Disks: you are buying latency',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'storage',
      label: 'Managed disk tiers',
      sub: 'billed on provisioned size, not usage',
      headers: ['Tier', 'Latency', 'Reach for it when'],
      values: [
        ['Ultra', 'sub-ms', 'SAP HANA, top-tier OLTP'],
        ['Premium SSD v2', 'sub-ms', 'the modern default for prod'],
        ['Premium SSD', 'low ms', 'prod, and required for some SLAs'],
        ['Standard SSD', 'ms', 'dev, test, light web'],
        ['Standard HDD', 'tens of ms', 'backup targets, cold data'],
      ],
    },
  ],
  edges: [],
}
