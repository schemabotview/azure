import type { Section } from '../types'

export const privateLink: Section = {
  id: 'private-link',
  title: 'Private Link',
  scene: 'three-paths-to-a-paas-service',
  slide: `## Give the PaaS service an address in your network

A **private endpoint** is a NIC in your subnet that represents a specific storage account, database or Key Vault. Its name then resolves to a private IP, and the traffic never reaches the public endpoint at all.

### Against a service endpoint
A **service endpoint** keeps the public endpoint and restricts who may use it — subnet-scoped, free, per-service, and it does nothing for traffic coming from on-premises. A private endpoint is per-resource, costs a little, and is reachable from anywhere in your connected network, including across a VPN.

### DNS is the whole implementation
The endpoint is the easy half. A **private DNS zone** — \`privatelink.blob.core.windows.net\` — must be linked to the VNet, and on-premises resolvers must be pointed at it. If the name resolves to the public IP, traffic goes there and is refused, and the error will say *authorisation*.

> Resolve the hostname from the client before debugging anything else. Half of all private-endpoint tickets end there.`,
  narration:
    "Every platform service in Azure — storage, SQL, Key Vault, Cosmos — has a public endpoint by default. Private Link is how you stop using it. A private endpoint is a network interface, created in your subnet, that represents one specific instance of a service. Not storage in general: this storage account. It gets a private IP address from your address space, and once DNS is arranged, your application uses the same hostname it always did and the traffic goes to that private address instead. The application changes nothing. Compare that with a service endpoint, which does a related but weaker thing. A service endpoint marks a subnet as trusted for a service type, and the service's firewall can then allow that subnet specifically. But the traffic still goes to the public endpoint, over the Azure backbone rather than the internet, and it is per service type rather than per resource. Service endpoints are free and take one click; private endpoints cost a small hourly charge plus data processing, and are per resource. There is one difference that usually decides it: a service endpoint does nothing for traffic arriving from on-premises over a VPN or ExpressRoute, because that traffic is not coming from your subnet. A private endpoint is just an address in your network, so anything with a route to your network can reach it — including your datacentre. If you have hybrid connectivity, private endpoints are the answer. Now, the part that actually consumes people's afternoons. The endpoint itself is the easy half; DNS is the implementation. When you create one, the service's public name has to start resolving to the private address for clients inside your network. Azure does this with a private DNS zone — privatelink dot blob dot core dot windows dot net, for example — that has to be linked to your virtual network. If you create endpoints across several networks, you want one zone linked to all of them rather than a zone per VNet, or you will have several answers for the same name. And if on-premises clients must reach it, your own DNS servers need a conditional forwarder pointing at an Azure resolver, because a private DNS zone means nothing to a server in your datacentre. The failure mode is always the same and I will say it once more because it is worth recognising instantly: the name resolves to the public IP, the traffic goes to the public endpoint, the public endpoint refuses it, and the error mentions authorisation rather than networking. Resolve the hostname from the client machine first. That one command ends most of these tickets.",
}
