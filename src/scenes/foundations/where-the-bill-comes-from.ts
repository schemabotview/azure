import type { Scene } from '@graphlearning/flow'

// §08. A genuine mechanism, so a genuine flow: a resource emits usage, a meter counts it, a rate
// card prices it, and an invoice arrives a month later. The levers container hangs off the meter
// because every one of them changes the RATE, not the usage — which is the point of the section.
export const whereTheBillComesFrom: Scene = {
  id: 'where-the-bill-comes-from',
  title: 'A bill is metered usage times a rate',
  nodes: [
    { id: 'res', label: 'A running VM', sub: 'billed by the hour', icon: 'vm' },
    { id: 'meter', label: 'Meter', sub: 'counts units of usage', pattern: 'network', icon: 'metrics' },
    { id: 'rate', label: 'Rate card', sub: 'price per unit, per region', pattern: 'network', icon: 'cost' },
    { id: 'bill', label: 'Invoice', sub: 'monthly, per subscription', pattern: 'storage', icon: 'costanalysis' },
    {
      id: 'levers',
      label: 'The four ways to pay less per unit',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'payg', label: 'Pay-as-you-go', sub: 'no commitment', pattern: 'user', variant: 'tile', icon: 'receipt' },
        { id: 'ri', label: 'Reservation', sub: '1 or 3 years', pattern: 'user', variant: 'tile', icon: 'reservations' },
        { id: 'sp', label: 'Savings plan', sub: 'hourly spend', pattern: 'user', variant: 'tile', icon: 'costbudgets' },
        { id: 'spot', label: 'Spot', sub: 'evictable capacity', pattern: 'user', variant: 'tile', icon: 'power' },
      ],
    },
  ],
  edges: [
    { source: 'res', target: 'meter', label: 'emits usage' },
    { source: 'meter', target: 'rate', label: 'units' },
    { source: 'rate', target: 'bill', label: 'units × price' },
    { source: 'levers', target: 'rate' },
  ],
}
