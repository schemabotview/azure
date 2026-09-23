import type { Scene } from '@graphlearning/flow'

// §03. Identity as commands rather than a diagram, because the whole design IS the scope on the end
// of each line. Three blocks — humans, workloads, break-glass — and the thing worth noticing is that
// the human block grants Reader and nothing else: with two engineers there is no rota to approve a
// standing Contributor, so it is PIM or it is nobody.
export const whoMayActAndWhere: Scene = {
  id: 'who-may-act-and-where',
  title: 'The design is the scope on the end of each line',
  nodes: [
    {
      id: 'rbac',
      kind: 'code',
      filename: 'the whole identity design, as role assignments',
      minCols: 76,
      label: [
        '# HUMANS — Reader standing, and nothing else, anywhere in prod',
        'az role assignment create --assignee platform-engineers \\',
        '     --role "Reader"  --scope /subscriptions/orders-prod',
        '#  Contributor is PIM-ELIGIBLE only: requested, justified, 4 hours,',
        '#  and with two of us, approval is the other one.',
        '',
        '# WORKLOADS — one identity per component, at the narrowest scope',
        'az role assignment create --assignee $api_mi \\',
        '     --role "Key Vault Secrets User"          --scope $vault',
        'az role assignment create --assignee $worker_mi \\',
        '     --role "Azure Service Bus Data Receiver" --scope $queue',
        'az role assignment create --assignee $etl_mi \\',
        '     --role "Storage Blob Data Contributor"   --scope $lake/bronze',
        '#  note the scope is the CONTAINER, not the account: the ETL identity',
        '#  cannot read gold, and nothing here can read the vault but the API.',
        '',
        '# BREAK-GLASS — two accounts, excluded from Conditional Access so a',
        '# broken policy cannot lock us out. Credentials in a safe. Tested.',
        '# One alert rule fires on any sign-in by either of them.',
      ].join('\n'),
    },
  ],
  edges: [],
}
