import type { Scene } from '@graphlearning/flow'

// §08. Four services that all "balance traffic" and operate at different layers of the stack. A
// board rather than a table, because the grouping IS the answer: two of these are global and two
// are regional, and picking across that line is the mistake, not picking within it.
export const whichFrontDoor: Scene = {
  id: 'which-front-door',
  title: 'Global or regional. Decide that first.',
  cols: 2,
  nodes: [
    {
      id: 'global',
      label: 'Global — before the request reaches a region',
      sub: 'one entry point for users anywhere',
      pattern: 'group',
      children: [
        { id: 'fd', label: 'Front Door', sub: 'L7 · caching, WAF, failover', pattern: 'service', icon: 'frontdoor' },
        { id: 'tm', label: 'Traffic Manager', sub: 'DNS only — it sees no traffic', pattern: 'external', icon: 'trafficmanager' },
      ],
    },
    {
      id: 'regional',
      label: 'Regional — inside one region',
      sub: 'in front of your instances',
      pattern: 'group',
      children: [
        { id: 'agw', label: 'Application Gateway', sub: 'L7 · paths, cookies, WAF', pattern: 'service', icon: 'appgateway' },
        { id: 'lb', label: 'Load Balancer', sub: 'L4 · fast, protocol-agnostic', pattern: 'network', icon: 'loadbalancer' },
      ],
    },
  ],
  edges: [],
}
