import type { Scene } from '@graphlearning/flow'

// §08. A flow, because the point of a cache tier is the ORDER of the two stops — the application
// asks the cache first and the database only on a miss. Drawn as a chain rather than a loop: the
// write-back is narrated, because closing the line would make it a cycle the layout cannot rank.
export const theCacheInFront: Scene = {
  id: 'the-cache-in-front',
  title: 'Two stops, and the far one is optional',
  nodes: [
    { id: 'req', label: 'A read', sub: 'the same list, all day', pattern: 'user', icon: 'users' },
    { id: 'app', label: 'The application', sub: 'one read path', pattern: 'service', icon: 'appservice' },
    { id: 'cache', label: 'Redis cache', sub: 'in memory, microseconds', pattern: 'network', icon: 'redis' },
    { id: 'pg', label: 'Postgres', sub: 'Flexible Server', pattern: 'storage', icon: 'postgres' },
  ],
  edges: [
    { source: 'req', target: 'app' },
    { source: 'app', target: 'cache', label: 'asked first' },
    { source: 'cache', target: 'pg', label: 'only on a miss' },
  ],
}
