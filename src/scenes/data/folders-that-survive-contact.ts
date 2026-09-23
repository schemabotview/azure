import type { Scene } from '@graphlearning/flow'

// §02. A lake IS its folder layout, so the scene is the paths — a diagram of three coloured boxes
// labelled bronze/silver/gold teaches nothing you could act on. The four rules underneath are the
// ones that decide whether a query engine can prune, and whether the estate is recoverable.
export const foldersThatSurviveContact: Scene = {
  id: 'folders-that-survive-contact',
  title: 'The lake is its folder layout',
  nodes: [
    {
      id: 'tree',
      kind: 'code',
      filename: 'abfss://lake@stlakeprod.dfs.core.windows.net/',
      minCols: 76,
      label: [
        'bronze/                    # raw, exactly as it arrived. Nobody edits it.',
        '  erp/orders/ingest_date=2026-09-23/part-0000.parquet',
        '  web/clicks/ingest_date=2026-09-23/hour=14/part-0000.json',
        '',
        'silver/                    # cleaned, typed, deduplicated. One row per thing.',
        '  orders/order_date=2026-09-01/part-0000.parquet',
        '  customers/part-0000.parquet',
        '',
        'gold/                      # shaped for a question. A star, or one wide table.',
        '  finance/daily_revenue/month=2026-09/part-0000.parquet',
        '',
        '# four rules that survive contact with a real estate:',
        '#',
        '#  1. PARTITION BY WHAT YOU FILTER ON — nearly always a date — and put it',
        '#     in the PATH as key=value. Every engine then prunes without being told.',
        '#  2. One dataset per folder. A folder IS a table; mixed schemas are not.',
        '#  3. Aim for 128 MB to 1 GB per file. Ten thousand small files is the',
        '#     classic way to make a fast engine slow.',
        '#  4. bronze is APPEND-ONLY. If silver is wrong you rebuild it from bronze.',
        '#     If bronze is wrong, the evidence is gone.',
      ].join('\n'),
    },
  ],
  edges: [],
}
