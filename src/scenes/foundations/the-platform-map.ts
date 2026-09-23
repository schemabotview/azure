import type { Scene } from '@graphlearning/flow'

// §10. The course arc as a figure. Grouped by the layer of the mental model each course teaches,
// not by Azure's own portal categories — the grouping IS the ordering, and it is the last thing a
// learner sees before the next course starts.
export const thePlatformMap: Scene = {
  id: 'the-platform-map',
  title: 'What we build, in the order we build it',
  cols: 2,
  nodes: [
    {
      id: 'ground',
      label: 'Ground',
      sub: 'scope, identity, access',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'g1', label: 'Scope tree', sub: 'this course', variant: 'tile', icon: 'managementgroup' },
        { id: 'g2', label: 'Entra + RBAC', sub: 'next', pattern: 'user', variant: 'tile', icon: 'roles' },
      ],
    },
    {
      id: 'run',
      label: 'Run and store',
      sub: 'the workload itself',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'r1', label: 'Compute', sub: 'VM → AKS', variant: 'tile', icon: 'vm' },
        { id: 'r2', label: 'Storage', sub: 'blob, files', pattern: 'storage', variant: 'tile', icon: 'storage' },
        { id: 'r3', label: 'Databases', sub: 'SQL, Cosmos', pattern: 'storage', variant: 'tile', icon: 'azuresql' },
      ],
    },
    {
      id: 'connect',
      label: 'Connect',
      sub: 'the path in and out',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'c1', label: 'Networking', sub: 'VNet → Front Door', pattern: 'network', variant: 'tile', icon: 'vnet' },
        { id: 'c2', label: 'Integration', sub: 'events, queues', pattern: 'network', variant: 'tile', icon: 'servicebus' },
      ],
    },
    {
      id: 'analyse',
      label: 'Analyse',
      sub: 'data, at rest and moving',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'a1', label: 'The lake', sub: 'ADLS', pattern: 'storage', variant: 'tile', icon: 'adls' },
        { id: 'a2', label: 'Pipelines', sub: 'ADF, Fabric', pattern: 'storage', variant: 'tile', icon: 'datafactory' },
      ],
    },
    {
      id: 'protect',
      label: 'Protect',
      sub: 'secrets, posture, detection',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'p1', label: 'Key Vault', sub: 'no secrets in code', variant: 'tile', icon: 'keyvault' },
        { id: 'p2', label: 'Defender', sub: 'posture', variant: 'tile', icon: 'defender' },
      ],
    },
    {
      id: 'operate',
      label: 'Operate',
      sub: 'run it on purpose',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'o1', label: 'Monitor', sub: 'metrics, logs, KQL', pattern: 'network', variant: 'tile', icon: 'monitor' },
        { id: 'o2', label: 'Policy + cost', sub: 'guardrails', pattern: 'network', variant: 'tile', icon: 'policy' },
      ],
    },
  ],
  edges: [],
}
