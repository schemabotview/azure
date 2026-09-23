import type { Section } from '../types'

export const eventGrid: Section = {
  id: 'event-grid',
  title: 'Event Grid',
  scene: 'event-message-stream',
  slide: `## An event is not a message

An **event** is a small, past-tense fact — *this blob was created* — published by something that does not know or care who listens. A **message** is an instruction with an owner, which someone must act on. A **stream** is a high-rate series read by position.

### What Event Grid does
It **routes** events. A publisher sends to a **topic**; each **subscription** declares a filter and a destination, and Event Grid pushes to it. One event, many independent handlers, no coupling between them.

- **System topics** — Azure itself publishes: blob created, VM deallocated, resource deleted
- **Custom topics** — your own application's events, same shape
- **Filters** on subject prefix, event type or any field in the payload

### Delivery
**Push**, with retries and exponential backoff for about a day, then a **dead-letter** blob container — which you must configure, or failures vanish.

> If the publisher cares that someone acted, it is not an event. Use a queue.`,
  narration:
    "This section is mostly vocabulary, and I am going to spend time on it because the rest of this course rests on it and because these three words get used interchangeably by people who should know better. An event is a small statement of fact about something that already happened. A blob was created. A virtual machine was deallocated. An order was placed. It is past tense, it is small, and — this is the important part — the publisher does not know who is listening and does not care. It is not asking for anything. A message is different. A message is an instruction, and it has an owner. Charge this card. Send this email. Someone must pick it up and act on it, exactly once, and if nobody does then something is wrong and the message needs to still be there tomorrow. A stream is different again: a high-rate series of records where consumers read by position and can rewind. Telemetry, clicks, sensor readings. Three concepts, three services: Event Grid for events, Service Bus for messages, Event Hubs for streams. Use one where another belongs and you will be building the missing half yourself. Event Grid, then, is a router for events. A publisher sends an event to a topic. Against that topic you create subscriptions, and each subscription says two things: which events it cares about, as a filter, and where they should go — a function, a webhook, a queue, a Logic App. Event Grid pushes to each subscription independently. So one event can trigger four unrelated handlers, none of which knows the others exist, and adding a fifth handler requires no change to the publisher at all. That decoupling is the whole product. Two kinds of topic. System topics are Azure publishing about itself, and you get them for free: subscribe to blob-created events on a storage account and you have an ingestion pipeline with no polling anywhere in it. Custom topics are your application's own events in the same shape, which is how you get that same decoupling between your own components. Filtering is worth knowing properly — you can filter on the subject prefix, on the event type, or on fields inside the payload — because the alternative is every handler being invoked for every event and immediately returning, which you are paying for. Finally, delivery. Event Grid pushes, and it retries with exponential backoff for about a day if your handler is failing. After that the event is dropped — unless you have configured a dead-letter destination, which is a blob container you nominate. Configure it. On an unconfigured topic, a broken handler loses events silently, and silence is the worst failure mode there is.",
}
