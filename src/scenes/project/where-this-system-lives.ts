import type { Scene } from '@graphlearning/flow'

// §02. Not the generic enterprise-scale diagram — the cut of it THIS system needs, which is three
// subscriptions and two policies. The third pile is the point: the residency rule from the brief is
// one policy assignment at the root, not a convention people are asked to remember.
export const whereThisSystemLives: Scene = {
  id: 'where-this-system-lives',
  title: 'Three subscriptions, and two rules above them',
  cols: 2,
  nodes: [
    {
      id: 'platform',
      label: 'Platform',
      sub: 'built once, by us',
      pattern: 'group',
      icon: 'managementgroup',
      children: [
        { id: 'conn', label: 'Connectivity', sub: 'the hub and the firewall', pattern: 'network', icon: 'vnet' },
        { id: 'mgmt', label: 'Management', sub: 'the one workspace', pattern: 'service', icon: 'loganalytics' },
      ],
    },
    {
      id: 'lz',
      label: 'Landing zones',
      sub: 'where the system runs',
      pattern: 'group',
      icon: 'managementgroup',
      children: [
        { id: 'prod', label: 'orders-prod', sub: 'the only real data', pattern: 'service', icon: 'subscription' },
        { id: 'np', label: 'orders-nonprod', sub: 'dev and test together', pattern: 'service', icon: 'subscription' },
      ],
    },
    {
      id: 'baseline',
      label: 'The baseline',
      sub: 'one assignment, at the root',
      pattern: 'group',
      icon: 'policy',
      children: [
        { id: 'eu', label: 'EU regions only', sub: 'the residency row, enforced', pattern: 'warn', icon: 'compliance' },
        { id: 'diag', label: 'Diagnostics on', sub: 'deployIfNotExists', pattern: 'service', icon: 'monitor' },
      ],
    },
  ],
  edges: [],
}
