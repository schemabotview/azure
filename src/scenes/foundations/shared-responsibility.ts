import type { Scene } from '@graphlearning/flow'

// §07. The line that moves. A table rather than three stacked bands, because the content is one
// column per model read top to bottom — and because the interesting cell is the one that CHANGES
// between neighbouring columns, which a reader finds by scanning a row.
export const sharedResponsibility: Scene = {
  id: 'shared-responsibility',
  title: 'The line moves. It never disappears.',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'user',
      label: 'Who owns which layer',
      sub: 'on-prem → IaaS → PaaS → SaaS',
      headers: ['Layer', 'On-prem', 'IaaS', 'PaaS', 'SaaS'],
      values: [
        ['Data + access', 'you', 'you', 'you', 'you'],
        ['Identities', 'you', 'you', 'you', 'you'],
        ['Application', 'you', 'you', 'you', 'Azure'],
        ['Runtime', 'you', 'you', 'Azure', 'Azure'],
        ['OS + patching', 'you', 'you', 'Azure', 'Azure'],
        ['Virtualisation', 'you', 'Azure', 'Azure', 'Azure'],
        ['Physical host', 'you', 'Azure', 'Azure', 'Azure'],
      ],
    },
  ],
  edges: [],
}
