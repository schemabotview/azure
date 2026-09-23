import type { Section } from '../types'

export const postgresAndRedis: Section = {
  id: 'postgres-and-redis',
  title: 'Postgres and Redis',
  scene: 'the-cache-in-front',
  slide: `## The open-source lane, and the tier in front of it

**Azure Database for PostgreSQL — Flexible Server** is the managed open-source relational option: choose your zone, choose your maintenance window, stop and start it, and add read replicas. MySQL is the same shape.

### What flexible server gives you
- **Zone placement** and an optional high-availability standby in another zone
- **Stop the server** and stop paying for compute — a real saving on a dev database
- Extensions (\`pgvector\`, \`PostGIS\`, \`TimescaleDB\`) from an allow-list you enable per server

### The cache is a tier, not an optimisation
**Azure Cache for Redis** goes in front. The application asks Redis first and the database only on a miss, then writes the answer back with a TTL. Also: sessions, rate limits, leaderboards, and a pub/sub channel.

> Every cached value is a **stale value with a deadline**. Choosing the TTL is choosing how wrong you are willing to be.`,
  narration:
    "Not everything should be SQL Server, and Azure knows it. Azure Database for PostgreSQL, in the shape called Flexible Server, is the managed Postgres offering, and MySQL has an almost identical one. If you are coming from the relational side of the platform, the interesting thing about flexible server is how much control it hands back while still being managed. You choose which availability zone it sits in, and whether it has a standby in another zone. You choose your own maintenance window, rather than accepting one. You can stop the server entirely — which stops the compute charge, and for a development database that is idle twenty hours a day, that is a very large saving for one command. You can add read replicas, including in another region. And you can enable extensions from an allow-list, which is how vector search, geospatial types and time-series support arrive. That last point matters more than it used to: a Postgres flexible server with the vector extension enabled is, for a lot of teams, the entire answer to where embeddings should live. Now, Redis. I want to argue that a cache is a tier in your architecture, not a performance trick you add at the end. Azure Cache for Redis is an in-memory store that sits in front of whichever database holds your truth. The read path becomes two stops instead of one: the application asks Redis, and on a hit it is done in well under a millisecond, having never touched the database at all. On a miss it goes to the database, gets the answer, and writes it into Redis with a time-to-live before returning it. That is the read-through pattern, and it is most of what caching is. Caching is not all it does, though. Redis is where you put session state so that any instance of your web app can serve any user. It is where rate-limit counters live, because it can increment atomically. It is how you keep a leaderboard sorted. And it has publish-subscribe channels, which people use to fan out invalidation messages to every app instance. Two pieces of judgement to carry away. First, choose the tier for the right reason: the higher Redis tiers are not primarily about memory, they are about clustering and zone redundancy, and the basic tier has no availability commitment at all, so it belongs nowhere near production. Second, and this is the discipline: every value in a cache is a stale value with a deadline on it. When you choose a time-to-live, you are choosing how wrong you are prepared for the screen to be. Make that a deliberate number per kind of data, not a global default somebody typed once.",
}
