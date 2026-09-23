import type { Scene } from '@graphlearning/flow'

// §04. Three arrangements of the same two VMs, and the only honest way to compare them is by what
// kills them. Glyphs are a plain tick and cross rather than service tiles: the first cut used the
// region globe for "survives a datacentre" and a lucide globe for "does not survive the region",
// which put two globes in one column meaning opposite things. A board: each pile carries the failure it survives, the one it does not, and the SLA
// Microsoft will actually put in writing — which is the number that ends most of these arguments.
export const whatEachSurvives: Scene = {
  id: 'what-each-survives',
  title: 'Availability is a question about what kills you',
  cols: 3,
  nodes: [
    {
      id: 'single',
      label: 'One VM',
      sub: '99.9% — and only on premium disks',
      pattern: 'group',
      children: [
        { id: 'a1', label: 'Survives', sub: 'nothing at all', pattern: 'warn', icon: 'circleslash' },
        { id: 'a2', label: 'Host patch', sub: 'reboots you', pattern: 'warn', icon: 'repeat' },
      ],
    },
    {
      id: 'set',
      label: 'Availability set',
      sub: '99.95% — inside one datacentre',
      pattern: 'group',
      children: [
        { id: 'b1', label: 'Survives', sub: 'a rack, a host patch', pattern: 'network', icon: 'circlecheck' },
        { id: 'b2', label: 'Does not survive', sub: 'the building', pattern: 'warn', icon: 'ban' },
      ],
    },
    {
      id: 'zones',
      label: 'Availability zones',
      sub: '99.99% — the cheap real answer',
      pattern: 'group',
      children: [
        { id: 'c1', label: 'Survives', sub: 'a whole datacentre', pattern: 'storage', icon: 'circlecheck' },
        { id: 'c2', label: 'Does not survive', sub: 'the region', pattern: 'warn', icon: 'ban' },
      ],
    },
  ],
  edges: [],
}
