import type { Scene } from '@graphlearning/flow'

// §03. Nesting, because the object people miss is the one on the OUTSIDE: a pipeline is a list of
// activities, but the integration runtime is the compute that actually moves the bytes, and it is
// the thing that has to be able to reach the source. Most ADF tickets are runtime tickets.
export const aPipelineAndItsRuntime: Scene = {
  id: 'a-pipeline-and-its-runtime',
  title: 'A pipeline is a list of activities. The runtime is what moves the bytes.',
  nodes: [
    {
      id: 'adf',
      label: 'Data Factory · the orchestrator',
      sub: 'it moves things, and it calls things. It is not a transformation engine.',
      pattern: 'group',
      icon: 'datafactory',
      children: [
        {
          id: 'pipe',
          label: 'Pipeline · load_orders',
          sub: 'parameterised, with dependencies between the activities',
          pattern: 'group',
          icon: 'workflow',
          cols: 3,
          children: [
            { id: 'copy', label: 'Copy', sub: 'ERP to bronze', pattern: 'storage', icon: 'datafactory' },
            { id: 'nb', label: 'Notebook', sub: 'calls Databricks', pattern: 'service', icon: 'databricks' },
            { id: 'cond', label: 'If condition', sub: 'branch on a count', pattern: 'service', icon: 'gitbranch' },
          ],
        },
      ],
    },
    {
      id: 'ir',
      label: 'Integration runtime',
      sub: 'the compute that moves bytes',
      pattern: 'service',
      icon: 'network',
    },
  ],
  edges: [{ source: 'ir', target: 'adf', label: 'three flavours' }],
}
