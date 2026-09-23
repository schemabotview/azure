import type { Scene } from '@graphlearning/flow'

// §07. KQL is not a language you learn, it is five operators and a pipe — so the frame is one real
// query (who deleted things last week) and then the five, named. The `where TimeGenerated` first
// line is deliberate: it is the habit that decides whether a query returns in a second or scans a
// month of data to answer the same question.
export const fiveOperatorsAndAPipe: Scene = {
  id: 'five-operators-and-a-pipe',
  title: 'A table, a pipe, and five operators',
  nodes: [
    {
      id: 'kql',
      kind: 'code',
      filename: 'who deleted something in the last week, and how often',
      minCols: 76,
      label: [
        'AzureActivity',
        '| where TimeGenerated > ago(7d)          // time FIRST, always',
        '| where OperationNameValue endswith "DELETE"',
        '| where ActivityStatusValue == "Success"',
        '| summarize deletions = count() by Caller, ResourceGroup',
        '| order by deletions desc',
        '| take 20',
        '',
        '-- a table name, then a pipeline. Every query you will read is this shape.',
        '',
        '--   where      filter rows. Cheapest filter first, and time is cheapest',
        '--   project    choose columns. Early, because it is what you carry on',
        '--   summarize  aggregate. `by` is the grouping; count(), avg(), make_set()',
        '--   order by   sort, nearly always on what summarize just produced',
        '--   take       stop. Use it the whole time you are still exploring',
        '',
        '-- and one more: `| render timechart` turns the result into a graph, which',
        '-- is the fastest way to see whether a number is a spike or a step.',
      ].join('\n'),
    },
  ],
  edges: [],
}
