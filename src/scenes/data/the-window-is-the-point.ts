import type { Scene } from '@graphlearning/flow'

// §08. A Stream Analytics job IS a query, so the scene is the query — and the two lines that decide
// whether it is correct are TIMESTAMP BY and the window. Both are lines people leave out, and
// leaving them out fails quietly: the job runs, and the numbers are wrong.
export const theWindowIsThePoint: Scene = {
  id: 'the-window-is-the-point',
  title: 'The whole job is a query. The window is the point.',
  nodes: [
    {
      id: 'asa',
      kind: 'code',
      filename: 'a Stream Analytics job: one Event Hub in, two sinks out',
      minCols: 76,
      label: [
        'SELECT',
        '    DeviceId,',
        '    System.Timestamp()  AS window_end,',
        '    AVG(Temperature)    AS avg_temp,',
        '    COUNT(*)            AS readings',
        'INTO     [live-dashboard]                      -- a Power BI dataset',
        'FROM     [telemetry-hub]',
        '         TIMESTAMP BY ReadingTime               -- EVENT time, not arrival',
        'GROUP BY DeviceId, TumblingWindow(minute, 5)',
        'HAVING   AVG(Temperature) > 80',
        '',
        '-- the windows, and choosing between them IS the design:',
        '--   TumblingWindow(minute, 5)      every 5 min, no overlap. The default.',
        '--   HoppingWindow(minute, 5, 1)    a 5-min window, emitted every 1',
        '--   SlidingWindow(minute, 5)       emits only when the set changes',
        '--   SessionWindow(minute, 5, 60)   a burst of activity, with a timeout',
        '',
        '-- TIMESTAMP BY is the line that gets left out. Without it the window uses',
        '-- ARRIVAL time, so a late or replayed batch lands in the wrong bucket and',
        '-- every number is quietly, unrecoverably wrong.',
      ].join('\n'),
    },
  ],
  edges: [],
}
