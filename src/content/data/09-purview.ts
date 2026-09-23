import type { Section } from '../types'

export const purview: Section = {
  id: 'purview',
  title: 'Purview',
  scene: 'one-scan-three-answers',
  slide: `## Governance for the data itself

Policy and RBAC govern **resources**. Nothing governs the *contents* — which table holds salaries, where a number came from, who owns it. That is **Microsoft Purview**, once Azure Purview.

### Everything starts with a scan
Register a source — Azure SQL, the lake, Fabric, on-premises, S3 — give it an identity and a rule set, and scan on a schedule. Three things come out:

- **Catalog** — searchable metadata, with an owner and a description per asset
- **Lineage** — where a column came from, across pipelines and reports
- **Classification** — patterns that look like a national ID, a card number, an email

### What it will not do
It finds the data and draws the map. It does not decide who may see what, and an unowned asset in the catalog is one nobody will fix.

> Start with one source, one scan, and go and look at the lineage graph. It usually finds a report nobody knew was still running.`,
  narration:
    "We finish the course with the thing that is missing from everything before it. We have governed resources all through this arc: role assignments on a scope, policy on a subscription, locks, budgets. None of that knows anything about what is inside the data. Which table has salaries in it. Where the number on the finance dashboard actually came from. Whether the extract somebody built in twenty-twenty-three is still running. Who to ask about a column. That is a different kind of governance, and Microsoft Purview is the service for it — it was Azure Purview until a rename folded it in with the compliance products. Everything in Purview starts with a scan. You register a source: an Azure SQL database, a storage account, a Fabric workspace, an on-premises SQL Server, Power BI, even S3. You give the scan an identity to connect with — a managed identity, ideally, granted read on the metadata — and a rule set that says how deep to look. Then you scan it, on a schedule. Three things come out of that, and they are the three reasons to care. The first is the catalog: searchable metadata about every asset it found. An analyst can search for revenue and find the four tables that might be what they meant, with a description and an owner on each — if somebody has filled those in, which is the part that is your job and not the tool's. The second is lineage, and this is the one that earns the licence. Purview draws the graph: this report reads that dataset, which was built by that pipeline, from those two tables, from that source system. When somebody asks whether they can drop a column, you can answer. When a number is wrong, you can walk backwards. When you want to retire a source system, you can see everything downstream of it before you break it. The third is classification: scanning the actual values for patterns that look like a national identifier, a card number, a passport, an email address, and labelling the columns that match. That is how you find the personal data you did not know you had, which is usually in a CSV somebody landed in the lake three years ago. And the honest limitation. Purview finds the data and draws the map; it does not decide who may see what — the access controls still live in the services themselves — and it cannot supply the ownership. A catalog full of assets with no owner is a list, not governance. So start small: one source, one scan, and go and look at the lineage graph. In my experience it finds at least one report that nobody knew was still running, and that alone tends to pay for the exercise.",
}
