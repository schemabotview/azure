import type { Scene } from '@graphlearning/flow'

// §07. Four built-in roles against the four questions people actually ask about them. A table,
// because the interesting cell is the one that differs by a single row — Contributor and Owner
// separate on exactly one line, and that line is the reason Owner is handed out too often.
export const theFourRoles: Scene = {
  id: 'the-four-roles',
  title: 'The four you will use every day',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'user',
      label: 'Built-in roles',
      sub: 'they differ on two columns, not five',
      headers: ['Role', 'Read', 'Create / delete', 'Grant access'],
      values: [
        ['Reader', 'yes', 'no', 'no'],
        ['Contributor', 'yes', 'yes', 'no'],
        ['User Access Admin', 'yes', 'no', 'yes'],
        ['Owner', 'yes', 'yes', 'yes'],
      ],
    },
  ],
  edges: [],
}
