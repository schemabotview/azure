import type { Scene } from '@graphlearning/flow'

// §03. A migration argument is won or lost on a list of features, so the card IS the list — the
// things a 2014 application assumes exist, which Azure SQL Database does not have. The last block is
// the honest cost, because MI is chosen far more often than its price and deploy time justify.
export const whatOnlyMiHas: Scene = {
  id: 'what-only-mi-has',
  title: 'The features a lift-and-shift assumes',
  nodes: [
    {
      id: 'mi',
      kind: 'code',
      filename: 'why the application will not move to a single database',
      minCols: 76,
      label: [
        '-- these work on SQL Managed Instance, and NOT on Azure SQL Database',
        'SELECT * FROM SalesDB.dbo.Orders o                -- cross-DATABASE query',
        '  JOIN ArchiveDB.dbo.OrdersOld a ON a.id = o.id;',
        '',
        'EXEC msdb.dbo.sp_add_job @job_name = N\'NightlyRollup\';   -- SQL Agent',
        'EXEC sp_addlinkedserver @server = N\'LEGACY-ERP\';         -- linked servers',
        'BEGIN DISTRIBUTED TRANSACTION;                            -- MSDTC',
        '',
        '-- plus: Service Broker, CLR, Database Mail, native backup/restore of',
        '--       a .bak file, and instance-scoped DMVs and logins.',
        '',
        '-- the cost: MI is priced per vCore with an 8-core floor, deploys into',
        '-- YOUR subnet (a delegated one), and takes hours to create or scale.',
      ].join('\n'),
    },
  ],
  edges: [],
}
