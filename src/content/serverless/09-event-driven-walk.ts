import type { Section } from '../types'

export const eventDrivenWalk: Section = {
  id: 'event-driven-walk',
  title: 'One order, end to end',
  scene: 'one-order-end-to-end',
  slide: `## One order, through everything we built

### The customer's path
**API Management** validates the token and the rate limit. The **order function** validates the body, writes one message to a **Service Bus queue**, and returns \`202 Accepted\`. The customer is done in tens of milliseconds, and the order is already safe.

### The work
A **queue-triggered function** takes the message under a peek-lock, charges the card, writes the record to **Cosmos DB**, and completes the message. If it throws, the lock expires and the message returns; after N attempts it dead-letters, and a human sees it.

### Everything else
The function publishes **OrderPlaced** to **Event Grid**. Warehouse, email and the analytics sink each subscribe, and none knows the others exist. Adding a fifth reaction changes no existing code.

> The accepted response and the queue are the whole design. Everything downstream can be slow, or briefly broken, without the customer ever seeing it.`,
  narration:
    "Let's put it together. One order, from a tap on a phone to a parcel, through the pieces we have built — and I want you to notice where the design decisions are, because they are not where people expect. The request arrives at API Management. The gateway validates the token against the directory and checks this caller's rate limit, so an unauthenticated or abusive request never reaches any code of ours. It forwards to an HTTP-triggered function. That function does one thing: it validates the body, writes a single message to a Service Bus queue, and returns two-oh-two Accepted. It does not charge the card. It does not write to the database. The customer's request is finished in tens of milliseconds, and the order is durably safe in a queue. That decision — accept, then work — is the whole design. Everything after it can be slow, or briefly broken, and the customer never sees it. A queue-triggered function picks the message up under a peek-lock, charges the card, and writes the order record to Cosmos DB. If it throws halfway, the lock expires and the message comes back for another attempt, which is exactly why that function checks whether it has already charged this order before charging it. After a few failed attempts the message dead-letters, and an alert on that queue's depth puts it in front of a person with the payload intact. Then the interesting part. The worker publishes an event — OrderPlaced — to Event Grid, and stops caring. The warehouse system has a subscription and starts picking. A notification function has a subscription and emails the customer. An archiving subscription writes the event to the lake for the analytics team. None of those three knows the others exist, and when finance asks for a fourth reaction next month, nobody touches the order path to add it. Three more pieces fall in around the edges. The telemetry the app emits all day — every page, every click, every timing — goes to Event Hubs, because that is a stream and not a set of instructions. The refund process, which takes days and waits on a human approval, is a Durable Functions orchestration, because it has steps and a memory. And the nightly file that finance insists on receiving by SFTP is a Logic App with two connectors, because writing that in code would be a week of somebody's life for no benefit at all. Look back at what that is. Nine services, no servers, nothing polling anything, and every piece replaceable on its own — because the contracts between them are a queue, an event and an HTTP address rather than a shared codebase.",
}
