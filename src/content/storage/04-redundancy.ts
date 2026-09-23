import type { Section } from '../types'

export const redundancy: Section = {
  id: 'redundancy',
  title: 'Redundancy',
  scene: 'what-redundancy-survives',
  slide: `## Three copies is the easy part. Where they sit is the answer.

Every option keeps at least three copies. What separates them is the failure they survive.

- **LRS** — three copies in one datacentre. Survives hardware; loses everything if the building does
- **ZRS** — three copies across three availability zones. Survives losing a datacentre. The right default for production
- **GRS** — ZRS or LRS locally, **plus** an asynchronous copy in the paired region. Survives the region
- **RA-GRS** — the same, and the second copy is **readable now**, without a failover

### The two things people get wrong
**GRS replication is asynchronous.** A regional failure can lose the last few seconds or minutes of writes — it is not a synchronous mirror, and no setting makes it one.

**GRS alone is not readable.** Until Microsoft or you initiate a failover, that second copy is invisible. If your DR plan says *"read from the secondary"*, you need RA-GRS, and you should have tested it.`,
  narration:
    "Azure Storage never keeps one copy of anything. Every option here keeps at least three, so durability against a failed disk is a given and not worth discussing. The interesting question is where those copies are, because that determines which failure you survive. Locally redundant storage, LRS, keeps three copies inside a single datacentre. It protects you from a disk failing, a rack failing, a server failing — real events, handled invisibly. It does not protect you from the datacentre itself: a fire, a flood, a sustained power failure, and the data is gone. LRS is the cheapest, and it is the right choice for things you can regenerate — intermediate analytics output, caches, temporary files. Zone-redundant storage, ZRS, keeps three copies across three availability zones: three physically separate buildings in the same region, each with its own power and cooling and network. Now the loss of a whole datacentre is invisible to your application. It costs modestly more than LRS, and for production data it is the default I would argue for — you are getting datacentre-level resilience for a small premium and no architectural work. Geo-redundant storage, GRS, adds a copy in the paired region hundreds of miles away, and that is what survives a regional disaster. And read-access geo-redundant storage, RA-GRS, is the same arrangement with one crucial difference we will come to. Two things trip people up. The first is that geo-replication is asynchronous. Writes are committed locally and then copied to the paired region a short time later. If the primary region is lost abruptly, the most recent writes may not have made the trip. Microsoft publishes a recovery point objective for this, usually measured in minutes, and no configuration makes it synchronous. If your application genuinely cannot lose a single transaction, storage redundancy is not the mechanism that saves you — an application-level design is. The second is that plain GRS does not give you access to that second copy. It exists, it is paid for, and it is invisible until a failover happens — either one Microsoft declares, or a customer-initiated failover you trigger. If your disaster recovery plan contains the sentence 'we read from the secondary region', then you need the RA variant, and you should have tested actually doing it, because the first time you discover your connection strings all point at the primary endpoint should not be during the disaster.",
}
