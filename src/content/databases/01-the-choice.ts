import type { Section } from '../types'

export const theChoice: Section = {
  id: 'the-choice',
  title: 'The choice',
  scene: 'four-shapes-of-data',
  slide: `## Pick by the shape of the question

A real system uses several of these at once. The mistake is not choosing wrong — it is assuming one engine should serve every access pattern.

### The four shapes
- **Relational** — joins, constraints, one version of the truth. Azure SQL, or PostgreSQL
- **Document** — fetch one whole object by its key, fast, anywhere. Cosmos DB
- **Cache** — the same answer, again, in microseconds. Azure Cache for Redis
- **Analytic** — every row, one column, once a day. The lake, not a database

### The question that decides it
Not "which is best" but **how is this data read?** One row at a time by key, or ten thousand rows aggregated? Consistently, or eventually? In one region, or five?

> Relational is the right default. Reach past it when you can name the access pattern it cannot serve.`,
  narration:
    "Azure will sell you about a dozen different things that store data, and the usual way people choose between them is by reputation. Someone heard that Cosmos is web scale, or that SQL is what serious companies use, and a decision gets made on a feeling. Let's replace that with a question. The question is: how is this data read? Because the shape of the read is what an engine is built around, and there are really only four shapes worth naming. The first is relational. You have entities that reference each other, you want to join them, and you want the database itself to refuse data that breaks the rules. That is Azure SQL Database, or Azure Database for PostgreSQL if you would rather be on open source. This is the right default, and I want to be blunt about that, because a lot of teams skip past it to something fashionable and then spend a year reimplementing joins in application code. The second shape is document. You fetch one whole object, by its key, and you want it back in single-digit milliseconds from anywhere on earth. A user profile. A shopping cart. A device's last known state. That is Cosmos DB, and the thing to notice is that its strength is not storage — it is predictable latency at a distance. The third shape is cache. It is the same question over and over, and the answer barely changes: the homepage list, a session, a rate-limit counter. Azure Cache for Redis holds that in memory, and it sits in front of one of the others rather than replacing it. Key-value storage lives here too, and in the cheap table storage you already have inside a storage account. The fourth shape is analytic. Every row, one or two columns, aggregated, and nobody is waiting on the screen for it. That is not a database at all — it is a lake and a query engine over it, and it has a whole course of its own later in this arc. What I want you to take from this section is that these four coexist. A single ordinary application will have a relational database as its source of truth, Redis in front of its hottest reads, and a nightly export into the lake. That is not indecision. That is each shape of question being sent to the thing built for it.",
}
