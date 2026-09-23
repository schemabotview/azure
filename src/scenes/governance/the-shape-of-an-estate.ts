import type { Scene } from '@graphlearning/flow'

// §04. A landing zone is not a product, it is a SHAPE — so the scene is the shape, and the whole
// argument is the split between Platform (shared, run once, by one team) and Landing zones (where
// applications go). Sandbox and Decommissioned are on the frame because they are the two management
// groups everyone omits and then needs: one for work that must escape the policy baseline, one for
// subscriptions that are finished but cannot be deleted yet.
export const theShapeOfAnEstate: Scene = {
  id: 'the-shape-of-an-estate',
  title: 'The management-group shape every estate converges on',
  nodes: [
    {
      id: 'root',
      label: 'Tenant Root · the policy baseline goes here',
      sub: 'one assignment, inherited by everything below it',
      pattern: 'group',
      icon: 'tenant',
      cols: 2,
      children: [
        {
          id: 'platform',
          label: 'Platform',
          sub: 'shared, and run once',
          pattern: 'group',
          icon: 'managementgroup',
          children: [
            { id: 'ident', label: 'Identity', sub: 'directory, domain services', pattern: 'user', icon: 'tenant' },
            { id: 'conn', label: 'Connectivity', sub: 'the hub VNet, the firewall', pattern: 'network', icon: 'vnet' },
            { id: 'mgmt', label: 'Management', sub: 'the one workspace', pattern: 'service', icon: 'loganalytics' },
          ],
        },
        {
          id: 'lz',
          label: 'Landing zones',
          sub: 'where applications live',
          pattern: 'group',
          icon: 'managementgroup',
          children: [
            { id: 'corp', label: 'Corp', sub: 'internal, no public inbound', pattern: 'service', icon: 'subscription' },
            { id: 'online', label: 'Online', sub: 'public-facing, by design', pattern: 'service', icon: 'subscription' },
          ],
        },
        { id: 'sandbox', label: 'Sandbox', sub: 'no baseline, no peering', pattern: 'warn', icon: 'building' },
        { id: 'decom', label: 'Decommissioned', sub: 'cancelled, kept for audit', pattern: 'external', icon: 'history' },
      ],
    },
  ],
  edges: [],
}
