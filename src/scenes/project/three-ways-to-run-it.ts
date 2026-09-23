import type { Scene } from '@graphlearning/flow'

// §05. The justification, not the choice. Three real options against four questions, and the last
// row is the one that decides it — because "fits two engineers" is a line in the brief, not a
// preference. AKS wins the third row outright and loses anyway, which is the honest shape of most
// compute decisions and the reason this is a table rather than an announcement.
export const threeWaysToRunIt: Scene = {
  id: 'three-ways-to-run-it',
  title: 'Three real options, and the row that decides it',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'service',
      label: 'The order API and its worker',
      sub: 'the last row is in the brief, not a preference',
      headers: ['', 'App Service', 'Container Apps', 'AKS'],
      values: [
        ['Scales to zero', 'no', 'yes', 'not really'],
        ['Ops per week', 'near zero', 'near zero', 'about a day'],
        ['The 6× spike', 'CPU rules', 'queue depth', 'anything'],
        ['Two engineers', 'yes', 'yes', 'no'],
      ],
    },
  ],
  edges: [],
}
