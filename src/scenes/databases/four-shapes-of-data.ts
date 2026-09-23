import type { Scene } from '@graphlearning/flow'

// §01. Four data shapes, drawn as a board because they are simultaneous — a real system uses
// several at once, and the mistake is not picking the wrong one but assuming one must serve every
// access pattern. Each sub is the question the shape answers, not its feature list.
export const fourShapesOfData: Scene = {
  id: 'four-shapes-of-data',
  title: 'Pick by the shape of the question, not the brand',
  cols: 2,
  nodes: [
    {
      id: 'rel',
      label: 'Relational',
      sub: 'joins, constraints, one truth',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'sqldb', label: 'Azure SQL', sub: 'the default', pattern: 'storage', variant: 'tile', icon: 'azuresql' },
        { id: 'pg', label: 'PostgreSQL', sub: 'the OSS lane', pattern: 'storage', variant: 'tile', icon: 'postgres' },
      ],
    },
    {
      id: 'doc',
      label: 'Document & key-value',
      sub: 'one key, one whole object',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'cosmos', label: 'Cosmos DB', sub: 'global, per-ms', pattern: 'storage', variant: 'tile', icon: 'cosmos' },
        { id: 'kv', label: 'Table storage', sub: 'key-value, cheap', pattern: 'storage', variant: 'tile', icon: 'storagetable' },
      ],
    },
    {
      id: 'cache',
      label: 'Cache',
      sub: 'the same answer, again',
      pattern: 'group',
      children: [
        { id: 'redis', label: 'Redis', sub: 'in front of the others', pattern: 'network', variant: 'tile', icon: 'redis' },
      ],
    },
    {
      id: 'analytic',
      label: 'Analytic',
      sub: 'every row, one column',
      pattern: 'group',
      children: [
        { id: 'lake', label: 'The lake', sub: 'a course of its own', pattern: 'external', variant: 'tile', icon: 'adls' },
      ],
    },
  ],
  edges: [],
}
