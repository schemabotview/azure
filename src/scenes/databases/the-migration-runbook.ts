import type { Scene } from '@graphlearning/flow'

// §09. The closing card is a runbook, because a migration is a sequence of real commands and the
// order is the teaching. Two things it makes visible that a diagram cannot: the target is CHOSEN
// from measurement rather than guessed, and cutover is its own deliberate command.
export const theMigrationRunbook: Scene = {
  id: 'the-migration-runbook',
  title: 'Measure, migrate, then cut over — as three separate decisions',
  nodes: [
    {
      id: 'run',
      kind: 'code',
      filename: 'moving a SQL Server estate, in the order it actually happens',
      minCols: 76,
      label: [
        '# 1 · measure the source. The target SKU is a finding, not a guess.',
        'az datamigration performance-data-collection \\',
        '  --connection-string "Data Source=SQLPROD;Integrated Security=True" \\',
        '  --output-folder ./perf --perf-query-interval 30',
        '',
        'az datamigration get-sku-recommendation \\',
        '  --data-folder ./perf --target-platform AzureSqlManagedInstance \\',
        '  --target-percentile 95 --display-result true',
        '',
        '# 2 · start an ONLINE migration: it restores, then keeps up with the log.',
        '#     Production stays up. Nothing has moved yet.',
        'az datamigration sql-managed-instance create \\',
        '  --resource-group rg-data --managed-instance-name mi-prod \\',
        '  --target-db-name SalesDB --migration-service dms-prod \\',
        '  --source-sql-connection data-source=SQLPROD,authentication=SqlAuthentication \\',
        '  --backup-configuration @backup.json',
        '',
        '# 3 · cutover is a separate command, run when YOU are ready.',
        'az datamigration sql-managed-instance cutover \\',
        '  --resource-group rg-data --managed-instance-name mi-prod \\',
        '  --target-db-name SalesDB --migration-operation-id "$OP_ID"',
        '',
        '# the rollback nobody writes down: the old server IS the rollback, and only',
        '# while it is still running and still writable. Keep it for a week.',
      ].join('\n'),
    },
  ],
  edges: [],
}
