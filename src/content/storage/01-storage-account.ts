import type { Section } from '../types'

export const storageAccount: Section = {
  id: 'storage-account',
  title: 'The storage account',
  scene: 'inside-a-storage-account',
  slide: `## Four services share one resource

Blob, Files, Queues and Tables live inside a single storage account — which means they also share its name, its firewall, its redundancy setting and its two account keys.

### Three decisions you make once
- **Redundancy** — changeable later, but some conversions are one-way
- **Hierarchical namespace** — the data-lake flag, and it cannot be turned on afterwards
- **The name** — globally unique across all of Azure, and it becomes your endpoint: \`stcheckoutprod.blob.core.windows.net\`

### Why one account for everything goes wrong
Everything in it inherits the same network rules and the same keys. Separate accounts per environment, and per blast radius: production data and a team's scratch space should not be one firewall change apart.

> Standard general-purpose v2 is the right default. Premium accounts buy low latency for one service each, and are chosen deliberately.`,
  narration:
    "Storage in Azure starts with one resource that is easy to underestimate: the storage account. It is a container for up to four different services — blob storage for objects, Azure Files for SMB shares, queues for simple messaging, and tables for key-value data — and the thing to notice is that they share more than a parent. They share the account's name, which becomes part of every endpoint. They share its firewall and network rules. They share its redundancy setting. And they share its two account keys, which we will come back to in a security section later because those keys are the most dangerous object in this course. Three decisions are made when you create one. The first is redundancy — how many copies, and where — which we will spend a whole section on. You can change it later, though some conversions are one-way and some require a migration. The second is the hierarchical namespace flag, which turns blob storage into Azure Data Lake Storage Gen2, and that one cannot be changed after creation at all. If there is any chance this account will hold analytics data, we will look at why you want it on. The third is the name, and it is stranger than it looks: storage account names are globally unique across all of Azure, lower-case, no hyphens. That is because the name becomes a public DNS endpoint — stcheckoutprod dot blob dot core dot windows dot net. Somebody else's account name is unavailable to you forever. Which brings me to the mistake I see most often: one storage account for everything. It seems tidy. But everything inside it inherits the same network rules, so opening the firewall for one workload opens it for all of them. Everything inherits the same keys, so a leaked key exposes all of it. And everything shares the same scalability targets, so one noisy workload throttles the others. Separate accounts per environment at minimum, and then per blast radius: your production customer data and a team's scratch area should not be one firewall change away from each other. Accounts themselves cost nothing — you pay for what is in them — so there is no bill-shaped reason to consolidate. Finally, a note on kinds. Standard general-purpose v2 is the right default and covers all four services. There are premium variants — block blob, file share, page blob — that buy much lower latency for one service each. They cost considerably more, and you choose one because you measured something, not because production sounds like it deserves premium.",
}
