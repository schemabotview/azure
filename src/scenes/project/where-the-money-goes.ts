import type { Scene } from '@graphlearning/flow'

// §09. Shares rather than currency, on purpose: the absolute numbers go stale and the SHAPE does
// not, and the shape is the teaching. The database is nearly half the bill because of one row in
// the brief — the fifteen-minute RPO — which is the whole point of having written the brief down
// first. A cost review that cannot trace its largest line to a requirement is a complaint.
export const whereTheMoneyGoes: Scene = {
  id: 'where-the-money-goes',
  title: 'Nearly half the bill is one row of the brief',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'service',
      label: 'The monthly bill, by share',
      sub: 'shares last; the absolute numbers do not',
      headers: ['Line', 'What drives it', 'Share'],
      values: [
        ['Azure SQL', 'the tier, not the queries', '~45%'],
        ['Container Apps', 'requests, and the idle floor', '~15%'],
        ['Front Door, WAF', 'a fixed base, then egress', '~12%'],
        ['Log Analytics', 'gigabytes ingested', '~10%'],
        ['Storage, ADLS', 'what is kept, not written', '~8%'],
        ['Everything else', 'Service Bus, vault, DNS', '~10%'],
      ],
    },
  ],
  edges: [],
}
