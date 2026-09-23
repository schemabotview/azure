import type { Scene } from '@graphlearning/flow'

// §02. Nesting, not a flow: a geography CONTAINS regions, a region CONTAINS zones. The one edge in
// the scene is the pair — it is a relationship between two regions, not a step between them, which
// is why it is the only thing drawn as a line.
export const globalInfrastructure: Scene = {
  id: 'global-infrastructure',
  title: 'Geography ⊃ region ⊃ availability zone',
  nodes: [
    {
      id: 'geo',
      label: 'Geography · United States',
      sub: 'a data-residency boundary',
      pattern: 'group',
      children: [
        {
          id: 'eastus',
          label: 'Region · East US',
          sub: 'what you actually deploy to',
          pattern: 'network',
          cols: 3,
          children: [
            { id: 'az1', label: 'Zone 1', sub: 'own power', variant: 'tile', icon: 'building' },
            { id: 'az2', label: 'Zone 2', sub: 'own cooling', variant: 'tile', icon: 'building' },
            { id: 'az3', label: 'Zone 3', sub: 'own network', variant: 'tile', icon: 'building' },
          ],
        },
        {
          id: 'westus',
          label: 'Region · West US',
          sub: 'hundreds of miles away',
          pattern: 'network',
          cols: 3,
          children: [
            { id: 'w1', label: 'Zone 1', sub: 'own power', variant: 'tile', icon: 'building' },
            { id: 'w2', label: 'Zone 2', sub: 'own cooling', variant: 'tile', icon: 'building' },
            { id: 'w3', label: 'Zone 3', sub: 'own network', variant: 'tile', icon: 'building' },
          ],
        },
      ],
      edges: [{ source: 'eastus', target: 'westus', label: 'region pair', bidirectional: true }],
    },
  ],
  edges: [],
}
