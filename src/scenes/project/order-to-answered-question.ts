import type { Scene } from '@graphlearning/flow'

// §06. The analytics path, kept deliberately boring: one nightly copy out of the system of record
// into a lake, and two things served from gold. No streaming, because nothing in the brief asks a
// question that a nightly number cannot answer — and the discipline of NOT building the interesting
// version is most of what a capstone is for.
export const orderToAnsweredQuestion: Scene = {
  id: 'order-to-answered-question',
  title: 'One copy a night, and two questions served from it',
  nodes: [
    { id: 'sql', label: 'Azure SQL', sub: 'the system of record', pattern: 'storage', icon: 'azuresql' },
    { id: 'adf', label: 'Data Factory', sub: 'one copy activity, 02:00', pattern: 'service', icon: 'datafactory' },
    { id: 'lake', label: 'ADLS Gen2', sub: 'bronze, silver, gold', pattern: 'storage', icon: 'adls' },
    { id: 'pbi', label: 'Power BI', sub: 'the finance reconciliation', pattern: 'user', icon: 'powerbi' },
    { id: 'ep', label: 'A SQL endpoint', sub: 'customer service lookups', pattern: 'storage', icon: 'azuresql' },
  ],
  edges: [
    { source: 'sql', target: 'adf', label: 'read replica' },
    { source: 'adf', target: 'lake', label: 'landed as it arrived' },
    { source: 'lake', target: 'pbi', label: 'from gold' },
    { source: 'lake', target: 'ep', label: 'from gold' },
  ],
}
