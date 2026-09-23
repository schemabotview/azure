import type { Section } from '../types'

export const globalInfrastructureSection: Section = {
  id: 'global-infrastructure',
  title: 'Geographies, regions and zones',
  scene: 'global-infrastructure',
  slide: `## Region is the word that matters

A **geography** is a data-residency boundary — a country or area whose data stays inside it. A **region** is the thing you actually deploy to: a set of datacentres close enough together to be treated as one place.

### Inside a region: availability zones
Physically separate datacentres with independent power, cooling and network. Spread across three and one zone's failure stops being your outage. Not every region has them — check before you design for them.

### Across regions: the pair
Every region is paired with another in the same geography. Microsoft sequences planned updates so a pair is never patched at once, and prioritises one of the pair in a broad outage.`,
  narration:
    "Azure's map has three levels, and people mix them up constantly, so let's separate them. The outermost is a geography — the United States, Europe, India, Australia. A geography is a compliance boundary, not a technical one. It exists so that an organisation can say: this data never leaves this country, and Microsoft can guarantee it. If you work anywhere near regulated data, the geography is the level your legal team cares about. Inside a geography are regions, and the region is the word that will matter to you every single day. East US, West Europe, Central India — a region is a set of datacentres close enough together that the network between them is fast and free, and far enough apart that they don't share a single point of failure. When you create anything in Azure, almost the first thing you choose is its region, and that choice sets three things at once: what it costs, how far it is from your users, and which laws apply to it. Inside a region, most of the busy ones now have availability zones. A zone is a physically separate datacentre — its own power feed, its own cooling, its own network path — with single-digit-millisecond latency to the other zones in the region. So if you spread a workload across three zones, the loss of one building becomes a capacity event rather than an outage. That is the single cheapest resilience decision you can make in Azure, and we'll come back to it in compute. One caveat, and it bites people: not every region has zones. Check, rather than assume. And then there's the pair. Every region is paired with a second region in the same geography — East US with West US, for example. That pairing is not something you configure; it's something Microsoft honours. Planned platform updates are sequenced so both halves of a pair are never patched at the same time, and if there's ever a broad outage, one region in each pair is prioritised for recovery. Some services use the pair automatically for storage replication, which we'll see when we get to storage redundancy.",
}
