import type { Section } from '../types'

export const storageNetworking: Section = {
  id: 'storage-networking',
  title: 'Closing the public door',
  scene: 'closing-the-public-door',
  slide: `## A storage account is on the internet until you say otherwise

Every account gets a public DNS name that resolves from anywhere. Authentication is required — but the endpoint is reachable, and that is a wider surface than most workloads need.

### Three levels of closing it
- **Firewall rules** — named IP ranges and selected VNets. Simple, and it breaks when an address changes
- **Service endpoints** — the subnet reaches the account over the Azure backbone. Still the public endpoint, now restricted
- **Private endpoint** — a NIC **inside your subnet** holding a private IP for the account, so the public path is unused rather than merely refused

### Where it goes wrong
Private DNS. If the name still resolves to the public address, traffic goes there and is refused — and the error says *authorisation*, not *networking*. Resolve the name from the client before debugging anything else.

> Disable public network access **last**, once the private path is confirmed.`,
  narration:
    "Here is something worth sitting with for a moment: a storage account, the instant you create it, has a public DNS name that anyone on the internet can resolve and connect to. Authentication is required — nobody gets your data by guessing the name — but the endpoint is exposed, and for most workloads that is a wider surface than necessary. There are three levels of closing it, and they are genuinely different. The simplest is the firewall: a list of allowed IP ranges and selected virtual networks, with everything else refused. It works, it is one blade in the portal, and its weakness is that IP addresses change and someone eventually adds a broad range to make a problem go away. The second is service endpoints. You mark a subnet as having a service endpoint for storage, and traffic from that subnet to any storage account travels over the Azure backbone rather than the public internet, carrying its subnet identity so the account's firewall can allow it specifically. It is free and simple. But note what it does not do: the account still has its public endpoint, and the traffic still goes to the public IP address — it is just restricted about who may send it. The third is a private endpoint, and this is the one to aim for. A private endpoint is a network interface created inside your own subnet, holding a private IP address from your own address space, that represents the storage account. A private DNS zone is linked to your virtual network so that the account's usual name now resolves to that private address. Your application changes nothing — same hostname, same SDK — but the traffic never leaves your network. Combine it with public network access disabled and the public endpoint is not merely refusing connections; it is not part of the path at all. Now, the practical warning, because this is where an afternoon goes. Private DNS is what makes private endpoints work, and it is what people get wrong. If the private DNS zone is not linked to the virtual network the client is in — or the client is on-premises and your on-prem resolver has not been told about it — the name resolves to the public IP, the traffic goes to the public endpoint, and the public endpoint refuses it. The error you get back talks about authorisation, not networking, and people spend hours on role assignments that were never the problem. So when a private endpoint does not work, resolve the name from the client machine before you touch anything else. And do it in this order: create the private endpoint, confirm it works, then disable public access — not the other way around.",
}
