import type { Scene } from '@graphlearning/flow'

// §04. The same four letters people quote without knowing what they buy, drawn as three piles by
// what kills the data. The read-access variant is included on the third pile because that is the
// distinction that decides whether a regional outage is a drill or a disaster.
export const whatRedundancySurvives: Scene = {
  id: 'what-redundancy-survives',
  title: 'Three copies is not the interesting part. Where they are, is.',
  cols: 3,
  nodes: [
    {
      id: 'lrs',
      label: 'LRS',
      sub: 'three copies, one datacentre',
      pattern: 'group',
      children: [
        { id: 'l1', label: 'Survives', sub: 'a disk, a rack', pattern: 'network', icon: 'circlecheck' },
        { id: 'l2', label: 'Loses everything', sub: 'if the building goes', pattern: 'warn', icon: 'ban' },
      ],
    },
    {
      id: 'zrs',
      label: 'ZRS',
      sub: 'three copies, three zones',
      pattern: 'group',
      children: [
        { id: 'z1', label: 'Survives', sub: 'a whole datacentre', pattern: 'network', icon: 'circlecheck' },
        { id: 'z2', label: 'Loses everything', sub: 'if the region goes', pattern: 'warn', icon: 'ban' },
      ],
    },
    {
      id: 'grs',
      label: 'GRS · RA-GRS',
      sub: 'plus a copy in the paired region',
      pattern: 'group',
      children: [
        { id: 'g1', label: 'Survives', sub: 'the region', pattern: 'storage', icon: 'circlecheck' },
        { id: 'g2', label: 'GRS', sub: 'unreadable until failover', pattern: 'warn', icon: 'lock' },
        { id: 'g3', label: 'RA-GRS', sub: 'readable right now', pattern: 'storage', icon: 'dooropen' },
      ],
    },
  ],
  edges: [],
}
