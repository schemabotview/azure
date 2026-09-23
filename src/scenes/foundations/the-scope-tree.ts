import type { Scene } from '@graphlearning/flow'

// §03. The tree every later course hangs off. Drawn as NESTING rather than a four-card flow,
// because that is what it is: a resource lives INSIDE a resource group, which lives inside a
// subscription. The right-hand column is the payoff — the same three things attach at every level,
// and they inherit downward. That claim is what makes the figure worth a section of its own.
export const theScopeTree: Scene = {
  id: 'the-scope-tree',
  title: 'One tree. Everything hangs off a level of it.',
  cols: 2,
  nodes: [
    {
      id: 'mg',
      label: 'Management group',
      sub: 'policy for the whole estate',
      pattern: 'group',
      icon: 'managementgroup',
      children: [
        {
          id: 'sub',
          label: 'Subscription',
          sub: 'billing · quota · policy',
          pattern: 'group',
          icon: 'subscription',
          children: [
            {
              id: 'rg',
              label: 'Resource group',
              sub: 'one lifecycle',
              pattern: 'group',
              icon: 'resourcegroup',
              cols: 2,
              children: [
                { id: 'vm', label: 'VM', sub: 'a resource', icon: 'vm' },
                { id: 'sa', label: 'Storage', sub: 'a resource', pattern: 'storage', icon: 'storage' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'attaches',
      label: 'Attaches at every level',
      sub: 'and inherits downward',
      pattern: 'group',
      children: [
        { id: 'rbac', label: 'RBAC', sub: 'who may act', pattern: 'user', icon: 'roles' },
        { id: 'pol', label: 'Policy', sub: 'what may exist', pattern: 'user', icon: 'policy' },
        { id: 'tagc', label: 'Tags + cost', sub: 'who pays', pattern: 'user', icon: 'tags' },
      ],
    },
  ],
  edges: [],
}
