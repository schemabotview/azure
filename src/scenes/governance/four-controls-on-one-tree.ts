import type { Scene } from '@graphlearning/flow'

// §01. The frame the course hangs on: four controls, each answering a different question, and every
// one of them attaching to a level of the scope tree taught in `foundations`. A board of four at
// cols 2 — each pile STACKS its two cards, because piles laid out two-across turn the whole board
// into a letterbox and it renders at half this type size.
export const fourControlsOnOneTree: Scene = {
  id: 'four-controls-on-one-tree',
  title: 'Four controls, four questions, one tree',
  cols: 2,
  nodes: [
    {
      id: 'policy',
      label: 'Policy',
      sub: 'what may exist',
      pattern: 'group',
      icon: 'policy',
      children: [
        { id: 'deny', label: 'Deny', sub: 'refused at creation', pattern: 'warn', icon: 'ban' },
        { id: 'audit', label: 'Audit', sub: 'and what already slipped', pattern: 'service', icon: 'compliance' },
      ],
    },
    {
      id: 'tags',
      label: 'Tags',
      sub: 'whose is it',
      pattern: 'group',
      icon: 'tags',
      children: [
        { id: 'owner', label: 'An owner', sub: 'a person, not a team', pattern: 'user', icon: 'users' },
        { id: 'cc', label: 'A cost centre', sub: 'so the bill splits', pattern: 'service', icon: 'receipt' },
      ],
    },
    {
      id: 'budget',
      label: 'Budgets',
      sub: 'what it may cost',
      pattern: 'group',
      icon: 'costbudgets',
      children: [
        { id: 'thresh', label: 'A threshold', sub: 'on the forecast', pattern: 'service', icon: 'metrics' },
        { id: 'notify', label: 'An action group', sub: 'that reaches a person', pattern: 'user', icon: 'alerts' },
      ],
    },
    {
      id: 'locks',
      label: 'Locks',
      sub: 'what may be deleted',
      pattern: 'group',
      icon: 'lock',
      children: [
        { id: 'cnd', label: 'CanNotDelete', sub: 'the usual one', pattern: 'storage', icon: 'lock' },
        { id: 'ro', label: 'ReadOnly', sub: 'stronger than it sounds', pattern: 'warn', icon: 'circleslash' },
      ],
    },
  ],
  edges: [],
}
