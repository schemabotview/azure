import type { Section } from '../types'

export const eventHubs: Section = {
  id: 'event-hubs',
  title: 'Event Hubs',
  scene: 'partitions-and-readers',
  slide: `## Partitions give order. Consumer groups give readers.

Event Hubs is an append-only log for high-throughput ingest — millions of events a second, retained for days whether anybody reads them or not. It is **Kafka-compatible**: an existing Kafka client can point at it.

### A partition is inside the hub
Events are appended to one of N partitions, chosen by a **partition key** or round-robin. **Order is guaranteed within a partition and nowhere else**, and parallelism is capped by the partition count — so key by the thing whose order matters (a device id, an account), never randomly.

### A consumer group is outside it
Each consumer group is an independent **cursor** over the same data. Realtime processing and hourly archiving read the same events without touching each other, and a new reader can start from the beginning.

> Partition count is set at creation and is awkward to change. Throughput units are the dial you actually turn.`,
  narration:
    "Event Hubs is the ingest end of the platform, and the mental model to hold is not a queue — it is an append-only log. Producers append events. The events sit there for a retention period, typically a day or several, whether anybody has read them or not. Consumers read by position, and reading does not consume: the event stays, and a second consumer can read the same event, and you can go back and read it again next week if the retention allows. That is a fundamentally different shape from a queue, and it is why Event Hubs is the right answer for telemetry, clickstreams, device data and logs, and the wrong answer for work items. It is also Kafka-compatible on the wire, which matters more than it sounds: if you have an application already speaking Kafka, you can point it at an Event Hubs namespace by changing a connection string, and skip running a Kafka cluster entirely. Now, the two objects people conflate, because they sound related and are at different levels. A partition is inside the hub. The hub is split into some number of partitions, and every event is appended to exactly one of them, chosen either round-robin or by a partition key that you supply. Two consequences follow, and they are the whole design. First: order is guaranteed within a partition, and nowhere else. If you need a device's readings processed in order, all of that device's readings must land on the same partition, which means the device id is your partition key. If you let events go round-robin, you have global throughput and no ordering at all. Second: your parallelism is capped by the partition count, because a partition is read by one consumer at a time within a consumer group. Thirty-two partitions means at most thirty-two parallel readers. A consumer group, by contrast, is outside the hub. It is an independent cursor over the same data. So your realtime alerting reads the stream at the live end, your archiving job writes the same events to the lake an hour behind, and a new analytics job can start from the oldest retained event — three readers, three positions, no interference, one copy of the data. Each reader is responsible for recording where it got to, which is called checkpointing, and if it does not checkpoint it will re-read after a restart. Two things to get right up front. Partition count is set when you create the hub and is awkward to change afterwards, so do not create four and hope. And capacity is bought in throughput units, which is the dial you actually turn day to day — that one is easy to change, and can autoscale.",
}
