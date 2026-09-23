import type { Scene } from '@graphlearning/flow'

// §01. The trade, drawn as two piles. Left: what leaves your building the day you move. Right: what
// arrives in its place — the four resource kinds every later course is a variation on. Edgeless on
// purpose: these are simultaneous, not a sequence, and an arrow between the piles would claim a
// mechanism that is really just a purchase order.
export const whatYouRent: Scene = {
  id: 'what-you-rent',
  title: 'You stop buying capacity. You start renting it.',
  cols: 2,
  nodes: [
    {
      id: 'before',
      label: 'What you stop owning',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'racks', label: 'Racks', sub: 'and the room', pattern: 'warn', variant: 'tile', icon: 'server' },
        { id: 'power', label: 'Power', sub: 'and cooling', pattern: 'warn', variant: 'tile', icon: 'zap' },
        { id: 'guess', label: 'Capacity guess', sub: 'three years out', pattern: 'warn', variant: 'tile', icon: 'calendar' },
        { id: 'refresh', label: 'Refresh cycle', sub: 'hardware, again', pattern: 'warn', variant: 'tile', icon: 'repeat' },
      ],
    },
    {
      id: 'after',
      label: 'What you rent instead',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'compute', label: 'Compute', sub: 'per second', variant: 'tile', icon: 'vm' },
        { id: 'store', label: 'Storage', sub: 'per GB', pattern: 'storage', variant: 'tile', icon: 'storage' },
        { id: 'net', label: 'Networking', sub: 'per GB out', pattern: 'network', variant: 'tile', icon: 'vnet' },
        { id: 'ident', label: 'Identity', sub: 'per user', pattern: 'user', variant: 'tile', icon: 'users' },
      ],
    },
  ],
  edges: [],
}
