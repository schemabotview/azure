import type { Section } from '../types'

export const peering: Section = {
  id: 'peering',
  title: 'Peering',
  scene: 'peering-is-not-transitive',
  slide: `## Two networks, one private path — and it does not chain

**Peering** joins two VNets so their resources reach each other by private IP, over Microsoft's backbone. No gateway, no encryption overhead, near-native latency. It works across regions and across subscriptions.

### The fact the whole topology rests on
**Peering is not transitive.** A↔hub and hub↔B does not give you A↔B. Nothing you configure on A or B creates it. Either peer them directly, or route their traffic *through* an appliance in the hub — which is a route table and a firewall, not a peering setting.

### Two details that bite
- Address spaces **must not overlap**, which is why the first section insisted on an addressing plan
- A peering is **two objects**, one in each VNet. Create one side only and the state sits at *Initiated* forever

> Traffic across a peering is billed in **both** directions, per gigabyte. Chatty cross-region peering is a real line item.`,
  narration:
    "Peering connects two virtual networks so that resources in each can reach the other by private IP address, as if they were one network. The traffic goes over Microsoft's backbone, not the public internet. There is no gateway to deploy, no encryption overhead, and latency is close to native. It works between regions, between subscriptions, and even between tenants. It is, in short, the good option, and it is also almost free to set up. Now the single most important property, and the reason this has a section of its own: peering is not transitive. If network A is peered with a hub, and the hub is peered with network B, then A cannot reach B. Not slowly — at all. There is no route. This surprises everyone the first time, because the picture looks connected. And nothing you configure on A or B fixes it, because the missing piece is not on them. You have two real options. Either peer A and B directly, which is fine for a handful of networks and becomes unmanageable at twenty — that is n-squared peerings, all managed by hand. Or you route their traffic through the hub deliberately: a route table on each spoke pointing at a firewall or gateway in the hub, and that appliance forwarding between them. That is the hub-and-spoke design, and the non-transitivity is precisely why it exists — it forces spoke-to-spoke traffic through a point where you can inspect and control it. There are two settings on a peering worth knowing. Allow gateway transit, and use remote gateways: together they let spokes use a VPN or ExpressRoute gateway that lives in the hub, instead of every spoke needing its own. That saves real money, since gateways are not cheap. Two details that bite. First, the address spaces must not overlap — which is the reason I made such a point of addressing in the first section of this course. Overlapping networks cannot be peered, ever, and the fix is to renumber one of them, which means touching everything in it. Second, a peering is two objects: one in each virtual network. Create it from one side only and the connection sits in the Initiated state forever, looking almost right. And a cost note, since it is easy to miss: traffic across a peering is billed per gigabyte, in both directions. Within a region it is small. Across regions it is not, and a chatty cross-region peering shows up on the bill as a mystery until someone traces it.",
}
