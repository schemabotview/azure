import type { Scene } from '@graphlearning/flow'

// §06. Three ways to reach a datacentre you already own, separated by the question that decides it:
// does this traffic go over the public internet or not. A table, because the deciding columns are
// bandwidth, latency guarantee and lead time — and lead time is the one that surprises projects.
export const hybridOptions: Scene = {
  id: 'hybrid-options',
  title: 'Reaching the datacentre you already have',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'network',
      label: 'Hybrid connectivity',
      sub: 'the last column decides most projects',
      headers: ['Option', 'Path', 'Bandwidth', 'Ready in'],
      values: [
        ['Site-to-site VPN', 'public internet, encrypted', 'up to ~10 Gbps', 'an afternoon'],
        ['ExpressRoute', 'a private circuit', '50 Mbps – 100 Gbps', 'weeks to months'],
        ['Virtual WAN', 'either, managed as a hub', 'as the underlay allows', 'days'],
      ],
    },
  ],
  edges: [],
}
