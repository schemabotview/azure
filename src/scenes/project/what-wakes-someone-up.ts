import type { Scene } from '@graphlearning/flow'

// §08. The fork is the argument. One branch reaches a person and the other does not, and almost
// every observability failure is something put on the wrong branch — a query that should have been
// a weekly workbook wired to a pager, or an alert nobody agreed to answer. Four rules is a target,
// not a coincidence: with two engineers, the fifth alert is what makes the first four ignorable.
export const whatWakesSomeoneUp: Scene = {
  id: 'what-wakes-someone-up',
  title: 'One branch reaches a person. The other does not.',
  nodes: [
    { id: 'law', label: 'One workspace', sub: 'West Europe, 90 days', pattern: 'service', icon: 'loganalytics' },
    { id: 'rules', label: 'Four alert rules', sub: 'and deliberately no more', pattern: 'warn', icon: 'alerts' },
    { id: 'wb', label: 'A workbook', sub: 'opened on purpose, weekly', pattern: 'service', icon: 'workbook' },
    { id: 'ag', label: 'One action group', sub: 'the rota, in one place', pattern: 'service', icon: 'workflow' },
    { id: 'us', label: 'Two engineers', sub: 'who can actually act', pattern: 'user', icon: 'users' },
  ],
  edges: [
    { source: 'law', target: 'rules', label: 'evaluated' },
    { source: 'law', target: 'wb', label: 'read, not pushed' },
    { source: 'rules', target: 'ag' },
    { source: 'ag', target: 'us', label: 'at 3am, if it must' },
  ],
}
