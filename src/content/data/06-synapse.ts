import type { Section } from '../types'

export const synapse: Section = {
  id: 'synapse',
  title: 'Synapse',
  scene: 'how-a-pool-spreads-a-table',
  slide: `## Where a dedicated SQL pool still fits

**Synapse Analytics** bundles a serverless SQL pool, Spark pools, pipelines and a **dedicated SQL pool** — the MPP warehouse once called SQL Data Warehouse. Fabric is where new work goes; the dedicated pool is what already runs.

### It is an MPP machine
A pool has **60 distributions**, and every table declares how its rows spread over them. Get that wrong and no amount of DWU helps: the work becomes a shuffle rather than a scan.

### Choosing a distribution
- **Hash** on a high-cardinality column you join on — large fact tables
- **Round-robin** for staging, where nothing joins yet
- **Replicated** for small dimensions, a couple of GB at most

> It is **paused or paid**, by the hour, at full provisioned size. An idle dedicated pool is the most common large line on an Azure data bill.`,
  narration:
    "Azure Synapse Analytics is a bundle, and the bundle is confusing because the pieces have different futures. Inside it there is a serverless SQL pool, which queries files in the lake and charges per terabyte scanned — that is genuinely useful and costs nothing when idle. There are Spark pools. There are pipelines, which are Data Factory with a different badge on them. And there is the dedicated SQL pool, which is the thing people mean when they say Synapse, and which used to be called Azure SQL Data Warehouse. Microsoft's new investment is going into Fabric. So the honest framing for the dedicated pool is not whether to build something new on it — mostly you should not — but that there is one running and you need to understand it. So: it is a massively parallel processing machine. Your data is spread across sixty distributions, which are spread over however many compute nodes your service level buys. Every query runs on all sixty in parallel. And every table declares how its rows are spread over those sixty, which is the single most important decision about the table, because if the rows a query needs to join are not co-located, the engine has to shuffle them across the network first, and that is the difference between four seconds and forty minutes. Three choices. Hash distribution spreads rows by a column you nominate: pick a high-cardinality column that you join on, and rows that join land together. That is what large fact tables want. The failure mode is skew — if you hash on a column where forty per cent of rows share one value, one distribution does forty per cent of the work while fifty-nine wait. Round-robin spreads rows evenly and blindly, which is perfect for staging tables where nothing joins yet, and bad for anything you query. Replicated keeps a full copy on every node, which makes joins free — for tables small enough to copy, meaning a couple of gigabytes at most, which is what a dimension table usually is. Add to that: keep statistics current, because the optimiser is helpless without them, and prefer columnstore, which is the default and is where the compression and the speed come from. Where does it still legitimately fit? A stable, well-modelled star schema, with known queries and predictable concurrency, run by a team that understands distribution and maintains statistics. That is a real workload and it runs well. And the commercial warning, which is the most common large surprise on an Azure data bill: a dedicated pool is paused or paid. It bills by the hour at its full provisioned size whether anybody queries it or not. Pause it on a schedule, or it will quietly cost you a salary.",
}
