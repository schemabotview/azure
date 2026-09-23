import type { Scene } from '@graphlearning/flow'

// §02. The plan is the one decision that cannot be undone cheaply, and cold start is the column
// people discover in production rather than choosing. A table so the four are read against the
// same four questions — the last one being the reason Premium exists at all.
export const whereAFunctionRuns: Scene = {
  id: 'where-a-function-runs',
  title: 'The plan decides cold start, network and bill',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'service',
      label: 'Azure Functions hosting plans',
      sub: 'scale to zero at the top; always paid at the bottom',
      headers: ['Plan', 'Cold start', 'VNet', 'You pay for'],
      values: [
        ['Consumption', 'yes, seconds', 'no', 'executions + GB-s'],
        ['Flex Consumption', 'rare', 'yes', 'executions + GB-s'],
        ['Premium', 'none, pre-warmed', 'yes', 'the instances, always'],
        ['Dedicated', 'none', 'yes', 'the App Service plan'],
      ],
    },
  ],
  edges: [],
}
