import type { Section } from '../types'

export const azureSqlDatabase: Section = {
  id: 'azure-sql-database',
  title: 'Azure SQL Database',
  scene: 'how-azure-sql-is-priced',
  slide: `## The engine you know, with the server taken away

It is SQL Server — the same T-SQL, the same query optimiser — with patching, backups, high availability and failover handled by the platform. What you create is a **database**, not a machine.

### What the platform already did
- **Backups** taken automatically; point-in-time restore for up to 35 days
- **High availability** built in; a 99.99% SLA on the higher tiers
- **Patching** on Microsoft's schedule, not in your maintenance window

### The decision that matters
The purchasing model, not the feature list. **vCore** is the one to learn — you buy cores and memory, and you can see what you bought. **Serverless** pauses when idle and bills per second. An **elastic pool** shares one budget across many small databases.

> \`DTU\` is a blended unit of CPU, memory and IO. It is simple, and it tells you nothing about which of the three ran out.`,
  narration:
    "Azure SQL Database is the one to reach for first, and it is worth being precise about what it actually is. It is a real SQL Server database engine — the same T-SQL, the same query optimiser, the same execution plans you have been reading for years — with the server removed from your responsibility. You do not create a machine. You create a database, and you get a connection string. Everything a database administrator used to spend their week on is already done: backups run automatically, with point-in-time restore going back as far as thirty-five days; high availability is built into the tier, with a four-nines availability commitment on the higher ones; and patching happens on Microsoft's schedule without asking for your maintenance window. That is the offer. Now, the part people get wrong. It is not a feature decision, it is a purchasing decision, and you make it once and then live inside it. There are two ways to buy compute. The older one is the DTU, a database transaction unit, which is a blended bundle of processor, memory and IO sold as a single number. It is genuinely simple, and that is its whole problem: when you run out, the number cannot tell you which of the three you ran out of. Learn the other one, the vCore model. You buy a number of cores and an amount of memory, you can see them separately, and you can bring your own SQL Server licence if you have one. Within vCore there are two shapes worth knowing. Serverless scales the cores up and down automatically, bills you per second of use, and will pause the database entirely when nobody has touched it for an hour. For an internal application that is idle every night and all weekend, that can cut the bill dramatically — at the cost of a cold start of about a minute on the first query after a pause. The other shape is the elastic pool, where many databases share one purchase of compute. If you run a per-tenant design with two hundred small databases that peak at different times, a pool is enormously cheaper than two hundred individually sized ones. The catch is the obvious one: one badly behaved tenant can eat the pool. And when a single database grows past a few terabytes, Hyperscale is the tier that keeps going, up to a hundred, by separating compute from a storage layer that grows on its own.",
}
