import type { Section } from '../types'

export const fabric: Section = {
  id: 'fabric',
  title: 'Fabric',
  scene: 'one-lake-many-items',
  slide: `## One lake, one capacity, many items

**Microsoft Fabric** is the whole estate as one SaaS product: pipelines, Spark, warehouse, real-time and Power BI, sharing one storage layer and one bill.

### OneLake
One lake per tenant, created for you. Every item writes **Delta Parquet** into it — so a table written by Spark is readable by the warehouse and by Power BI without a copy or an export. That is the idea Fabric is actually selling.

### Lakehouse or warehouse
Both store Delta in OneLake. A **lakehouse** is files plus tables, written by Spark, with a read-only SQL endpoint. A **warehouse** is T-SQL that **writes** — pick it when your team's language is SQL.

### Shortcuts
A pointer to data elsewhere — ADLS, S3, another workspace — that appears as a folder and is **read in place, never copied**.

> You buy a **capacity** (F-SKU) for the tenant, not a cluster per job. It can be paused, and it is shared, so one heavy job is felt by everyone on it.`,
  narration:
    "Microsoft Fabric is Microsoft's answer to the complaint that the estate we have just described is too many products. Fabric is all of it as one software-as-a-service thing: data pipelines, Spark notebooks, a warehouse, real-time analytics, and Power BI, in one portal, on one bill, over one storage layer. And that storage layer is the part worth understanding, because it is the only genuinely new idea here. It is called OneLake. There is one per tenant, it is created for you, and you do not provision it. Every item in Fabric — every lakehouse, every warehouse, every pipeline output — writes into OneLake, and writes in Delta Parquet. One format. Which means a table written by a Spark notebook is immediately queryable by the SQL warehouse, and immediately usable by a Power BI report in direct lake mode, with no copy, no export and no import step. If you have spent years moving the same data between a lake and a warehouse and a cube, you will recognise how much work that deletes. Inside a workspace — which is the unit of access control and the thing a capacity is assigned to — you choose between a lakehouse and a warehouse. Both store Delta in OneLake; the difference is who writes and how. A lakehouse holds files and tables, is written by Spark, and exposes a read-only SQL endpoint for querying. A warehouse is T-SQL that can write: inserts, updates, stored procedures, the things a SQL team already knows. If your team's language is Python and Spark, take the lakehouse. If it is SQL, take the warehouse. Do not agonise; they are the same bytes underneath. Then shortcuts, which are lovely. A shortcut is a pointer to data that lives somewhere else — an ADLS account, an S3 bucket, another Fabric workspace — and it appears in your lakehouse as a folder. The data is read in place. It is not copied, not synced, and there is no second version to go stale. If you already have a lake with three years of history in it, you can put a shortcut to it in Fabric this afternoon and query it, without a migration project. Finally, the commercial shape, because it is genuinely different and it surprises people. You do not size a cluster per job. You buy a capacity for the tenant — an F-SKU, measured in capacity units — and everything in Fabric runs on it. You can pause it, which stops the bill. But it is shared, and it throttles: one person running a monstrous Spark job is felt by everybody else on that capacity. That is a governance conversation, not a technical one, and it is worth having before the first heavy workload lands.",
}
