import type { Section } from '../types'

export const serviceBus: Section = {
  id: 'service-bus',
  title: 'Service Bus',
  scene: 'queue-or-topic',
  slide: `## The broker for work that must not be lost

Service Bus carries **messages** — instructions with an owner. It is the one to reach for when losing the thing would mean losing money.

### Queue or topic
A **queue** has one logical consumer: one worker takes the message and it is gone. A **topic** has **subscriptions**, each getting its own copy, each with its own filter rule. Same broker, same guarantees.

### The four features you are paying for
- **Peek-lock** — a message is locked, not deleted, until the worker completes it
- **Dead-letter queue** — poison messages move aside after N attempts, and are still there to look at
- **Sessions** — FIFO for a related group of messages, without serialising everything
- **Scheduled**, **deferred** and **duplicate detection** delivery

> Drain the dead-letter queue as a routine. It is a queue that nothing reads by default, and a silent backlog there is a backlog of real customer problems.`,
  narration:
    "Service Bus is the enterprise broker, and the reason to reach for it over a storage queue or an event service is guarantees. This is where you put work that must not be lost: the payment to capture, the order to fulfil, the document to countersign. If losing the thing means losing money or trust, it belongs here. Two shapes, and they differ on exactly one thing: how many consumers get the message. A queue has one logical consumer. Many workers can be competing to read it, but each message goes to exactly one of them and is then gone. That is the pattern for work to be done — a backlog, distributed across however many workers you are running. A topic looks the same from the sending side, but consumers create subscriptions against it, and each subscription gets its own copy of every message that matches its rule. So one fact — an order was placed — can go to a fulfilment subscription, a finance subscription and an analytics subscription, each filtered to just what it cares about, each with its own backlog and its own dead-letter queue. Same broker, same guarantees, just a fan-out. Now the four features that are the actual product. First, peek-lock. When a worker receives a message, the message is not deleted, it is locked — invisible to other workers for a lock duration. The worker does its job and then completes the message, which deletes it. If the worker crashes, the lock expires and the message comes back. That is how at-least-once delivery is implemented, and it is why your handler must be idempotent. Second, the dead-letter queue. A message that keeps failing — bad data, a bug, a downstream service that is gone — is retried a set number of times and then moved to a dead-letter queue attached to the same entity. This is the single best operational feature in the service: your poison message is out of the way so the backlog drains, and it is still there for you to inspect, fix and resubmit. Third, sessions. Ordinary queues give no ordering across competing workers. A session groups related messages by a session id and guarantees they are processed in order by one worker at a time, while unrelated sessions still run in parallel. That is how you get per-customer ordering without serialising your whole system. Fourth, the delivery controls: scheduled messages for later, deferred messages for out-of-order arrival, and duplicate detection over a time window. And one operational habit. Put an alert on dead-letter queue depth. Nothing reads that queue by default, so a backlog there is silent — and every message in it is a customer whose order did not happen.",
}
