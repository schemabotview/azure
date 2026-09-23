import type { Scene } from '@graphlearning/flow'

// §03. Four kinds of principal, drawn as a board because they are simultaneous — a directory holds
// all four at once and nothing flows between them. The right-hand pile is the one that matters
// operationally: a group is how an assignment survives people joining and leaving.
export const whoIsInTheDirectory: Scene = {
  id: 'who-is-in-the-directory',
  title: 'Four things a directory holds',
  cols: 2,
  nodes: [
    {
      id: 'people',
      label: 'People',
      sub: 'they sign in',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'member', label: 'Member', sub: 'your employee', pattern: 'user', variant: 'tile', icon: 'users' },
        { id: 'guest', label: 'Guest', sub: 'invited, external', pattern: 'external', variant: 'tile', icon: 'externalidentities' },
      ],
    },
    {
      id: 'code',
      label: 'Code',
      sub: 'it signs in too',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'sp', label: 'Service principal', sub: 'an app, here', variant: 'tile', icon: 'enterpriseapps' },
        { id: 'mi', label: 'Managed identity', sub: 'no secret at all', variant: 'tile', icon: 'managedidentity' },
      ],
    },
    {
      id: 'groups',
      label: 'Groups — how you assign at scale',
      sub: 'assign to the group, not the person',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'assigned', label: 'Assigned', sub: 'you add members', pattern: 'network', variant: 'tile', icon: 'groups' },
        { id: 'dynamic', label: 'Dynamic', sub: 'a rule adds them', pattern: 'network', variant: 'tile', icon: 'adminunits' },
      ],
    },
  ],
  edges: [],
}
