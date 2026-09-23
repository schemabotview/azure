import type { Section } from '../types'

export const cosmosDb: Section = {
  id: 'cosmos-db',
  title: 'Cosmos DB',
  scene: 'inside-a-cosmos-account',
  slide: `## Account, database, container — and the container is where you pay

Cosmos DB is a globally distributed database sold on **latency guarantees**, not on storage. Single-digit millisecond reads, backed by an SLA, in every region you add.

### The hierarchy
An **account** picks an API and a set of regions. A **database** is a namespace inside it. A **container** holds the items — and throughput, indexing and the partition key are all set on the **container**.

### The API is chosen once
- **NoSQL** — the native one. Pick it unless you are migrating
- **MongoDB**, **Cassandra**, **Gremlin**, **Table** — wire-protocol compatibility so existing drivers connect
- It cannot be changed afterwards. A different API means a new account and a data migration

> Adding a region is a checkbox, and it multiplies the bill by the number of regions. Global is a cost decision before it is an architecture one.`,
  narration:
    "Cosmos DB gets described as planet-scale, which is true and not very useful. Here is the concrete version: it is a database you can place in as many regions as you like, and in each of those regions it will commit to serving a read by key in single-digit milliseconds, at the ninety-ninth percentile, in a financially backed agreement. That guarantee is the product. Everything else — the flexible schema, the automatic indexing, the multiple APIs — is in service of it. To use it you need three levels. At the top is the account. The account chooses two things that are hard to change: which regions your data lives in, and which API you speak. Inside the account are databases, which are mostly a namespace and a place you can optionally park shared throughput. Inside a database are containers, and the container is the important object. The container is where your items live, and it is where three decisions are set: how much throughput you are buying, how the data is indexed, and the partition key — which is the subject of the next section and the one thing here you cannot undo. Notice what that means. You do not buy a Cosmos database. You buy throughput on a container, and if you have forty containers you are making that purchase forty times, or sharing one pool across them. Now, the APIs, because this trips people up. Cosmos exposes the same underlying engine through several wire protocols. There is the native one, called NoSQL, which is what you should choose for anything new. Then there are compatibility surfaces: MongoDB, Cassandra, Gremlin for graphs, and Table, which mimics the old table storage API. Those exist so that an application with an existing driver can point at Cosmos and connect without a rewrite. They are real and they work, but they lag the native API in features, and — this is the part to write down — the API is fixed at account creation. You cannot switch. Moving from the Mongo API to the native one means a new account and a data migration, so if you are choosing for a new system, choose native. One last thing, about the geography. Adding a region is genuinely a checkbox in the portal, and about two minutes of waiting. But your data is then fully replicated there, and you are paying for the throughput in every region you have added. Two regions is roughly double. Global distribution is a cost decision before it is an architecture decision, and the honest question is whether your users are actually somewhere else.",
}
