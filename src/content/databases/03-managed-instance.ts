import type { Section } from '../types'

export const managedInstance: Section = {
  id: 'managed-instance',
  title: 'Managed Instance',
  scene: 'what-only-mi-has',
  slide: `## When the application needs the instance back

SQL Managed Instance is the same managed platform with the **instance-level surface** restored: near-100% compatibility with the SQL Server your application was written against.

### What only the instance has
- **SQL Agent** — scheduled jobs, in the database, where the application put them
- **Cross-database queries** and linked servers
- **MSDTC** distributed transactions, Service Broker, Database Mail, CLR
- Native \`RESTORE\` of a \`.bak\` file — the fastest way in

### The honest price
It is billed **per vCore with a floor**, it deploys into a **delegated subnet in your VNet**, and creating or scaling one takes hours rather than minutes.

> Choose it when a feature list forces you to — never because it sounds safer. Most applications that land here could have gone to a single database with a fortnight of work.`,
  narration:
    "So you have an application written in twenty-fourteen, it talks to a SQL Server instance, and you would like it to stop living in your server room. You try Azure SQL Database, and it fails on the first night, because the application has a scheduled job — and there is no SQL Agent in a single database. You work around that, and it fails again on a query that joins across two databases, which a single database cannot do. That pattern, of an application assuming the instance and not just the database, is exactly what SQL Managed Instance exists for. Managed Instance is the same managed platform — automatic backups, built-in high availability, patching handled — with the instance-level surface put back. You get SQL Agent. You get cross-database queries and linked servers. You get distributed transactions, Service Broker, Database Mail, the common language runtime, and instance-scoped logins and dynamic management views. And crucially you get native restore: you can take a backup file off the old server and restore it straight in, which is the shortest path from here to there that exists. Microsoft describes the compatibility as near a hundred per cent, and in practice that claim holds up. Now the part that does not get said often enough. Managed Instance is expensive, and it is slow to operate. It is billed per virtual core with a floor of several cores, so there is no small one. It deploys into a subnet inside your own virtual network — a subnet delegated to it, which it takes over entirely — so you need the networking designed before you start. And creating one, or scaling one, takes hours. Not the minute or two you are used to from a single database: hours, during which you watch a deployment blade. I have seen teams choose Managed Instance because it sounded like the safer option, and then carry the cost of it for years for an application that used none of the features. So make the decision the honest way round. Write down the specific things your application does that a single database cannot. If that list is empty, or if it is one scheduled job you could move to a Logic App or an Azure Function, go to Azure SQL Database. If the list has linked servers and distributed transactions on it, Managed Instance is the right answer and you should stop arguing with it.",
}
