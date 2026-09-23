import type { Scene } from '@graphlearning/flow'

// §06. The nesting carries the section's one correction: LOGS live in a workspace, as tables you can
// join; METRICS do not — they are a separate numeric store, and they only appear in the workspace if
// you route them there. Drawing the metric store OUTSIDE the box is the whole point of the frame.
export const oneWorkspaceManyTables: Scene = {
  id: 'one-workspace-many-tables',
  title: 'Logs land in tables. Metrics live somewhere else.',
  nodes: [
    { id: 'metrics', label: 'The metric store', sub: 'numeric, cheap, 93 days', pattern: 'external', icon: 'metrics' },
    {
      id: 'law',
      label: 'Log Analytics workspace · one per estate',
      sub: 'schema per table, KQL across all of them, retention set here',
      pattern: 'group',
      icon: 'loganalytics',
      cols: 2,
      children: [
        { id: 'act', label: 'AzureActivity', sub: 'who changed what', pattern: 'storage', icon: 'storagetable' },
        { id: 'diag', label: 'Diagnostics', sub: 'what each resource did', pattern: 'storage', icon: 'storagetable' },
        { id: 'signin', label: 'SigninLogs', sub: 'who signed in', pattern: 'storage', icon: 'storagetable' },
        { id: 'perf', label: 'Heartbeat, Perf', sub: 'from the agent', pattern: 'storage', icon: 'storagetable' },
      ],
    },
  ],
  edges: [{ source: 'metrics', target: 'law', label: 'only if routed' }],
}
