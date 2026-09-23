import type { Scene } from '@graphlearning/flow'

// §06. Nesting, because the two objects people conflate are at different levels: a PARTITION is
// inside the hub and is where order and parallelism come from, while a CONSUMER GROUP is outside it
// and is its own cursor over the same data. Drawing the cursors as separate cards below the hub is
// what makes "independent readers" visible rather than asserted.
export const partitionsAndReaders: Scene = {
  id: 'partitions-and-readers',
  title: 'Partitions give you order. Consumer groups give you readers.',
  nodes: [
    {
      id: 'ns',
      label: 'Event Hubs namespace · throughput units',
      sub: 'the billing and capacity boundary — ingress and egress are metered here',
      pattern: 'group',
      icon: 'eventhubs',
      children: [
        {
          id: 'hub',
          label: 'Event hub · telemetry',
          sub: 'retained 7 days, whether anybody read it or not',
          pattern: 'group',
          icon: 'streamanalytics',
          cols: 3,
          children: [
            { id: 'p0', label: 'Partition 0', sub: 'ordered, append-only', pattern: 'storage', icon: 'layers' },
            { id: 'p1', label: 'Partition 1', sub: 'ordered, append-only', pattern: 'storage', icon: 'layers' },
            { id: 'p2', label: 'Partition 2', sub: 'ordered, append-only', pattern: 'storage', icon: 'layers' },
          ],
        },
      ],
    },
    { id: 'cg1', label: 'Realtime reader', sub: 'at the live end', pattern: 'service', icon: 'functions' },
    { id: 'cg2', label: 'Archive reader', sub: 'an hour behind', pattern: 'service', icon: 'blob' },
  ],
  edges: [
    { source: 'hub', target: 'cg1', label: 'its own offset' },
    { source: 'hub', target: 'cg2', label: 'its own offset' },
  ],
}
