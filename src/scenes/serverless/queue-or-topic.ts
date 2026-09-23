import type { Scene } from '@graphlearning/flow'

// §07. A comparison read ACROSS a row: the two Service Bus shapes are the same broker with one
// difference — how many consumers get the message — and every other row follows from that. The
// dead-letter row is here because it is the operational half nobody configures until the first
// silent failure.
export const queueOrTopic: Scene = {
  id: 'queue-or-topic',
  title: 'One broker, two shapes',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'network',
      label: 'Service Bus: queue vs topic',
      sub: 'they differ on one row; the rest follows',
      headers: ['', 'Queue', 'Topic + subscriptions'],
      values: [
        ['Consumers', 'one takes it', 'each gets a copy'],
        ['Filtering', 'none', 'a rule per subscription'],
        ['Order', 'FIFO, with sessions', 'FIFO, with sessions'],
        ['On failure', 'retry, then dead-letter', 'per subscription'],
        ['Reach for it', 'work to be done', 'one fact, several reactions'],
      ],
    },
  ],
  edges: [],
}
