import type { Scene } from '@graphlearning/flow'

// §04. Read ACROSS a row: the two columns are the same five questions asked of a pipeline activity
// and of a real engine, and the interesting rows are the last three — version control, testing and
// the shape of the bill are what actually decide this, not capability.
export const orchestrateOrTransform: Scene = {
  id: 'orchestrate-or-transform',
  title: 'Both can do it. Only one should.',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'service',
      label: 'Orchestrate, or transform',
      sub: 'the last three rows are the real decision',
      headers: ['', 'A pipeline activity', 'Spark or SQL'],
      values: [
        ['Moving bytes', 'yes — that is the job', 'not its job'],
        ['Joins, windows', 'only via Data Flow', 'natively, and fast'],
        ['Lives in git as', 'workflow JSON', 'code you can read'],
        ['Tested by', 'running the pipeline', 'a unit test'],
        ['Billed by', 'the activity run', 'the cluster-minute'],
      ],
    },
  ],
  edges: [],
}
