import type { Section } from '../types'

export const partitionsAndRus: Section = {
  id: 'partitions-and-rus',
  title: 'Partitions and RUs',
  scene: 'the-partition-key',
  slide: `## The choice you cannot take back

Every item you write carries a **partition key** value. Cosmos hashes it, and that hash decides which physical partition stores the item. The key is set when the container is created and cannot be changed.

### What makes a key good
- **High cardinality** — thousands or millions of distinct values, not four
- **Even write distribution** — no value that takes most of the traffic
- **Present in your common query** — so the read hits one partition, not all of them

### The two numbers behind it
A **logical partition** — all items sharing one key value — is capped at **20 GB**. And throughput is divided evenly across physical partitions: 400 RU/s over 10 partitions is **40 RU/s each**, not 400 wherever you need it.

> A request unit is one normalised operation: a 1 KB point read is 1 RU. A cross-partition query fans out and pays on every partition it touches.`,
  narration:
    "This is the section to slow down for, because this is the decision that goes wrong. When you create a container you name a partition key — a path into your documents, like slash customer ID. Every item you write must have a value at that path. Cosmos hashes the value, and the hash decides which physical partition the item is stored on. You cannot change it afterwards. Not with a setting, not with a migration tool: changing the partition key means creating a new container and copying every item across. So it is worth ten minutes of thought. A good key does three things. First, it has high cardinality — thousands or millions of distinct values. Second, it spreads your writes evenly across those values. Third, and this is the one that gets forgotten, it appears in the query you run most often. Let me show you the failure. Suppose you partition orders by country. You have four countries, and seventy per cent of your orders are in one of them. Now, two things break. The traffic for that country all lands on one partition, which is a hot partition, and you start getting throttled while the other partitions sit idle. And separately, all the items sharing one key value — that is called a logical partition — have a hard ceiling of twenty gigabytes. When that country's orders pass twenty gigabytes, writes fail. Not slow down: fail. Partition by customer instead and you have millions of distinct values, no single one gets large, and the query you actually run — show me this customer's orders — stays inside a single partition. Which brings me to request units. A request unit is Cosmos's normalised unit of work: a point read of a one-kilobyte document is defined as one. A write of the same document is about five. A query is whatever it costs, and the response header will tell you exactly, which is a habit worth building. You buy request units per second on a container, and here is the part that surprises everyone: that throughput is divided evenly across your physical partitions. Four hundred request units a second spread over ten partitions is forty each, not four hundred available wherever you need it. Which is why a hot partition throttles while your dashboard shows plenty of headroom. And a query that does not filter on the partition key fans out to every partition and pays on each one. The partition key is not a storage detail. It is the performance and cost model of your whole container.",
}
