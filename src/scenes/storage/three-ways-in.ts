import type { Scene } from '@graphlearning/flow'

// §07. Three doors into the same data, drawn as a flow because the request really does arrive and
// get judged — and because the figure has to make the asymmetry visible: two doors are bearer
// secrets that the audit log cannot attribute to a person, and one is an identity.
export const threeWaysIn: Scene = {
  id: 'three-ways-in',
  title: 'Three doors. Only one of them has a name on it.',
  nodes: [
    { id: 'req', label: 'A request for a blob', sub: 'GET /orders/2026-09.parquet', pattern: 'user', icon: 'users' },
    { id: 'key', label: 'Account key', sub: 'one string, total control', pattern: 'warn', icon: 'key' },
    { id: 'sas', label: 'SAS token', sub: 'scoped and time-boxed', pattern: 'network', icon: 'link' },
    { id: 'rbac', label: 'Entra identity', sub: 'a role assignment, and a name in the log', pattern: 'storage', icon: 'managedidentity' },
    { id: 'data', label: 'The blob', sub: 'returned either way', pattern: 'storage', icon: 'blob' },
  ],
  edges: [
    { source: 'req', target: 'key', label: 'anyone holding it' },
    { source: 'req', target: 'sas', label: 'anyone holding it' },
    { source: 'req', target: 'rbac', label: 'a principal' },
    { source: 'key', target: 'data' },
    { source: 'sas', target: 'data' },
    { source: 'rbac', target: 'data' },
  ],
}
