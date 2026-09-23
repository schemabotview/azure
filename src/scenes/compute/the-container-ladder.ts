import type { Scene } from '@graphlearning/flow'

// §07. Four services that all "run containers", drawn as a board with one honest sentence each —
// the registry first, because every one of the other three pulls from it. The sub on each card is
// the question it answers, not its feature list: what a reader needs is the discriminator.
export const theContainerLadder: Scene = {
  id: 'the-container-ladder',
  title: 'Four ways to run the same image',
  cols: 2,
  nodes: [
    {
      id: 'reg',
      label: 'Where the image lives',
      sub: 'all three below pull from here',
      pattern: 'group',
      children: [
        { id: 'acr', label: 'Container Registry', sub: 'private, scanned, geo-replicated', pattern: 'storage', icon: 'acr' },
      ],
    },
    {
      id: 'run',
      label: 'Where it runs',
      sub: 'in increasing order of what you own',
      pattern: 'group',
      children: [
        { id: 'aci', label: 'Container Instances', sub: 'one container, seconds, no cluster', icon: 'aci' },
        { id: 'aca', label: 'Container Apps', sub: 'scales to zero, HTTP or events', icon: 'containerapps' },
        { id: 'aks', label: 'Kubernetes Service', sub: 'a real cluster, and its upkeep', icon: 'aks' },
      ],
    },
  ],
  edges: [],
}
