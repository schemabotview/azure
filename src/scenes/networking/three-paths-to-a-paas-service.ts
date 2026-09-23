import type { Scene } from '@graphlearning/flow'

// §09. The same three options storage met from its own side, stated here as a network decision and
// with the DNS column included — because DNS is what actually breaks, and the table is the only
// place to put it where a reader will meet it before the outage rather than during it.
export const threePathsToAPaasService: Scene = {
  id: 'three-paths-to-a-paas-service',
  title: 'Reaching a PaaS service without crossing the internet',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'network',
      label: 'Paths to a PaaS endpoint',
      sub: 'the DNS column is what breaks',
      headers: ['', 'Traffic goes to', 'DNS resolves to', 'Reaches'],
      values: [
        ['Public', 'the public endpoint', 'a public IP', 'anyone, if allowed'],
        ['Service endpoint', 'the public endpoint', 'a public IP', 'your subnet only'],
        ['Private endpoint', 'a NIC in your subnet', 'a private IP', 'your network, and peers'],
      ],
    },
  ],
  edges: [],
}
