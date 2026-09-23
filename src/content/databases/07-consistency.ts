import type { Section } from '../types'

export const consistency: Section = {
  id: 'consistency',
  title: 'Consistency',
  scene: 'the-five-consistency-levels',
  slide: `## Five stops on one dial

Replicating data to five regions means a write cannot be everywhere at once. The consistency level is you deciding what a reader is allowed to see while it catches up.

### The two that matter in practice
- **Session** is the default and the right one for most applications: a client always sees its own writes, in order, and it costs a single request unit per read
- **Strong** guarantees every reader sees the latest committed write — and is **unavailable with multi-region writes**, because it would mean a round trip across the planet on every write

### What it costs
Strong and bounded staleness bill **double request units on reads**. The others bill one. The level is set on the account and can be **relaxed per request** in the SDK, which is where the real tuning happens.

> The question is never "how consistent?" but "what would a user notice?" A like count may lag. A seat booking may not.`,
  narration:
    "Once your data is in more than one region, a write cannot be in all of them at the same instant. Physics is involved. So every distributed database has to answer a question: while a write is propagating, what is a reader allowed to see? Most systems give you two answers, strong or eventual, and leave you to cope. Cosmos gives you five, which is one of the genuinely good ideas in the product. At the strong end, a read is guaranteed to return the most recent committed write. Everybody sees the same thing at the same time. This is what you want for a balance, a seat, a stock count — anything where two users seeing different numbers means a real-world mistake. It is also the slowest, and there is a hard constraint attached: you cannot have strong consistency with writes in more than one region, because that would mean a round trip across the planet before every write is acknowledged. Strong means a single write region. At the other end is eventual. A read returns some version of the data, with no ordering promise at all — you might even see a value go backwards between two reads. It sounds unacceptable until you name the use case, and then it is obviously fine: view counts, likes, telemetry, a recommendation list. Between those are the three that most designs actually want. Bounded staleness lets you say how far behind a read may be — a number of versions, or a number of seconds — so the lag becomes a number you can put in a design document. Consistent prefix promises you never see writes out of order or with gaps: if the values went one, two, three, you may see one, or one-two, but never one-three. That is exactly right for a feed or an event stream. And session, which is the default, promises that a single client always sees its own writes. That is the one to know, because it maps onto how users actually perceive correctness: I changed my name, so my profile page shows my new name. Whether it shows immediately to somebody else matters much less. Two practical notes. Strong and bounded staleness bill double request units on every read, so consistency has a line on the invoice. And the level you set on the account is a default — the SDK lets you relax it on an individual request. So the pattern that works is a sensible default of session, with the two or three operations that genuinely need it asking for strong at the call site, and everything cosmetic dropping to eventual.",
}
