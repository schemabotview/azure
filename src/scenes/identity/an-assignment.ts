import type { Scene } from '@graphlearning/flow'

// §06. The three-part rule, drawn against the tree it attaches to. Nesting rather than a flow: the
// question an author needs the reader to answer is "which box is this assignment pinned to, and what
// therefore inherits it" — and inheritance is containment, not a sequence of steps.
export const anAssignment: Scene = {
  id: 'an-assignment',
  title: 'Principal + role + scope. That is the whole rule.',
  cols: 2,
  nodes: [
    {
      id: 'parts',
      label: 'A role assignment',
      sub: 'three fields, no more',
      pattern: 'group',
      children: [
        { id: 'who', label: 'Principal', sub: 'user, group, app, identity', pattern: 'user', icon: 'users' },
        { id: 'what', label: 'Role', sub: 'a list of allowed actions', pattern: 'user', icon: 'roles' },
        { id: 'where', label: 'Scope', sub: 'a level of the tree', pattern: 'user', icon: 'managementgroup' },
      ],
    },
    {
      id: 'mg',
      label: 'Management group',
      sub: 'assign here and it reaches everything',
      pattern: 'group',
      icon: 'managementgroup',
      children: [
        {
          id: 'sub',
          label: 'Subscription',
          sub: 'the usual over-grant',
          pattern: 'group',
          icon: 'subscription',
          children: [
            {
              id: 'rg',
              label: 'Resource group · rg-web',
              sub: 'where this one belongs',
              pattern: 'network',
              icon: 'resourcegroup',
              cols: 2,
              children: [
                { id: 'vm', label: 'VM', sub: 'inherits it', icon: 'vm' },
                { id: 'sa', label: 'Storage', sub: 'inherits it', pattern: 'storage', icon: 'storage' },
              ],
            },
          ],
        },
      ],
    },
  ],
  edges: [],
}
