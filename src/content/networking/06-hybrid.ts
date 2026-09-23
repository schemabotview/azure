import type { Section } from '../types'

export const hybrid: Section = {
  id: 'hybrid',
  title: 'Hybrid connectivity',
  scene: 'hybrid-options',
  slide: `## Connecting the datacentre you already have

- **Site-to-site VPN** — an IPsec tunnel over the public internet between your firewall and an Azure VPN gateway. Cheap, quick, and bounded by the internet's worst day
- **ExpressRoute** — a private circuit from a connectivity provider. Consistent latency, a real SLA, bandwidth to 100 Gbps — and a **lead time measured in weeks or months**
- **Virtual WAN** — a managed hub that terminates many VPNs, ExpressRoute circuits and VNets, with routing Microsoft operates

### The choice in practice
Most organisations start with a VPN, because it works this afternoon. Many keep it as the backup path once ExpressRoute arrives — which is the recommended arrangement, since a circuit is one physical thing that a digger can find.

> The lead time is the part that wrecks migration plans. If ExpressRoute is in the design, order it in the first week, not the month before cutover.`,
  narration:
    "Most organisations using Azure also have something that is not in Azure — a datacentre, a factory floor, a set of offices. There are three ways to join them, and the deciding factor is usually not technical. The first is a site-to-site VPN. You deploy a VPN gateway into that GatewaySubnet we reserved in the first section, configure your on-premises firewall with the matching settings, and an IPsec tunnel comes up over the public internet. It is encrypted, it is inexpensive, and you can have it working in an afternoon. What you do not get is any guarantee about the path: your traffic crosses the internet, so its latency is the internet's latency, and when somebody's fibre is cut three countries away, your tunnel has a bad day too. The second is ExpressRoute, which is a private circuit from a connectivity provider directly into Microsoft's network. Your traffic never touches the public internet. You get consistent latency, an actual SLA on availability, and bandwidth options from fifty megabits to a hundred gigabits. You also get the thing that ruins schedules: a lead time. Ordering a circuit involves a telecoms provider, physical cross-connects, and a process measured in weeks and often months. I have watched migration plans slip a quarter because ExpressRoute was ordered the month before cutover instead of in the first week of the project. If it is in your design, order it now. The third is Virtual WAN, which is less a connection type than a way to manage many of them. Instead of building hub networks and their gateways and routing yourself, you create a Virtual WAN hub and attach things to it — branch VPNs, ExpressRoute circuits, virtual networks, remote users — and Microsoft manages the routing between them. For an organisation with forty branch offices, that is a large simplification. For one VNet and one datacentre, it is unnecessary machinery. In practice most organisations start with a VPN because it works today, and many keep it after ExpressRoute arrives — as the backup path. That is the arrangement Microsoft recommends, and it is sensible: an ExpressRoute circuit is ultimately one physical thing, and physical things can be found by a digger.",
}
