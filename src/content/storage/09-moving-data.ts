import type { Section } from '../types'

export const movingData: Section = {
  id: 'moving-data',
  title: 'Moving data in and out',
  scene: 'moving-bytes',
  slide: `## Do the arithmetic before you start the copy

**AzCopy** is the workhorse: parallel, resumable, and able to authenticate with your own identity rather than a key. Server-to-server copies never touch your machine at all.

### When the network stops being the answer
100 TB over a saturated 1 Gbps link is about **nine days** — and nobody has a saturated link. A **Data Box** is an appliance Microsoft posts to you; you fill it and post it back, and it is faster past roughly 40 TB.

### The other two
- **Storage Mover** — a managed migration for an on-prem NAS: agents, resumable jobs, progress you can report on
- **Object replication** — continuous blob-to-blob copy between accounts, for keeping a second region warm

> Egress is not free. Data leaving a region is billed, so a copy that crosses regions twice costs twice — and a cross-cloud copy costs more than either side expects.

**Next: networking** — the VNet all of this has quietly been sitting in.`,
  narration:
    "Getting data into Azure, and out again, is a question people leave until it is urgent. The default tool is AzCopy, and it is genuinely good: it parallelises, it resumes after a failure, it handles millions of small files without falling over, and — the part I care about most — it can authenticate with a managed identity or your own Entra login rather than an account key. There is a second mode worth knowing: give AzCopy a source URL and a destination URL and the copy happens server to server, inside Azure, with no bytes passing through the machine running the command. Copying a terabyte between two accounts over your laptop's connection when you could have copied it between the endpoints directly is a mistake people only make once. Now, the arithmetic, because this is what the section is really about. A hundred terabytes over a one-gigabit link, perfectly saturated, with no contention and no failures, takes about nine days. Nobody has a perfectly saturated link. In practice you should assume half that throughput, and that your connection is also carrying everybody else's traffic, which means your migration is now competing with the business. Past somewhere around forty terabytes, shipping is faster than transmitting. That is what Data Box is: Microsoft posts you a ruggedised appliance, you copy data onto it over your local network at local-network speed, and you post it back. There is a family of them — a small one, a heavy one, and a rack-sized one for petabyte migrations — and the deciding factor is always the same sum: how long would the wire take. For a repeating migration rather than a one-off dump, Azure Storage Mover is the managed option. It handles an on-premises NAS properly: agents, resumable jobs, incremental passes, and progress you can report to somebody who asks for it weekly. And for keeping a second account continuously in step, object replication copies new and changed blobs from one account to another, in the same region or across regions, asynchronously. One cost note to finish, because it surprises people. Storing data is cheap; moving it out is not. Egress — data leaving an Azure region — is billed, and a pipeline that pulls data across regions twice pays twice. Keeping compute in the same region as the storage it reads is not a performance optimisation, it is a cost one. That is storage. Next we go to networking — the virtual network that everything in the last two courses has quietly been sitting inside.",
}
