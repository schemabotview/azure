import type { Section } from '../types'

export const routingSection: Section = {
  id: 'routing',
  title: 'Routing',
  scene: 'routing',
  slide: `## Azure already wrote the routing table

Every subnet has **system routes** you never created: traffic inside the VNet stays local, peered ranges appear when you peer, and everything else — \`0.0.0.0/0\` — goes straight out to the internet.

### A user-defined route overrides one prefix
Point \`0.0.0.0/0\` at a virtual appliance and every packet leaving the subnet goes through your firewall instead. That single route is what makes a hub-and-spoke design real rather than decorative.

### Two failures, both silent
- The appliance needs **IP forwarding enabled** on its NIC. Without it, packets arrive and are dropped, and nothing is logged anywhere
- Routing is **per subnet**, not per VNet. Forget the route table on one subnet and that subnet quietly bypasses the firewall the whole design was built around

> When something cannot reach something, read *effective routes* on the NIC before touching a single rule. It shows what Azure will actually do with the packet.`,
  narration:
    "Routing in Azure is invisible right up until it is wrong, and then it is the hardest thing to see. So let us make it visible. Every subnet already has a routing table that you did not create and cannot delete, called system routes. It contains three kinds of entry. Traffic destined for the VNet's own address space stays inside the VNet. Traffic destined for a peered network goes over the peering, and that entry appears automatically the moment you create a peering. And everything else — zero dot zero dot zero dot zero slash zero, the default route — goes straight out to the internet. That is why a virtual machine with no public IP can still call an external API: the route exists, and outbound address translation happens for you. Now, a user-defined route overrides the system route for a given prefix. The classic one is the default route. You create a route table, add a route for zero dot zero dot zero dot zero slash zero with the next hop set to a virtual appliance at, say, ten dot twenty dot four dot four, and associate that table with a subnet. Now every packet leaving that subnet for anywhere outside goes to your firewall instead of straight out. That single route is what turns a hub-and-spoke diagram into an actual security boundary rather than a picture. Two ways this fails, and both are silent, which is why they are worth memorising. The first: if the next hop is a network virtual appliance — your own firewall VM, or a third-party one — the appliance's network interface must have IP forwarding enabled. It is a checkbox on the NIC, it is off by default, and without it the appliance receives packets addressed to somewhere else and drops them. No error is raised. Nothing is logged. Traffic simply disappears. The second: route tables are associated with subnets, one at a time. A new subnet added six months later by somebody else does not get the route table, and so that subnet quietly bypasses the firewall that the entire design depends on. Nobody notices, because everything works — that is the problem. So here is the habit worth building. When traffic is not reaching somewhere and you are about to start editing NSG rules, first open the network interface in the portal and look at effective routes. It shows the real, merged table Azure will apply to that NIC — system routes, your routes, peering routes, gateway routes, all resolved. Half the time the answer is sitting there, and it is that the packet is going somewhere you did not expect.",
}
