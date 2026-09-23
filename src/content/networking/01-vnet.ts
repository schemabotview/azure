import type { Section } from '../types'

export const vnet: Section = {
  id: 'vnet',
  title: 'The virtual network',
  scene: 'a-vnet-and-its-subnets',
  slide: `## Your own private address space, in one region

A **VNet** is a block of private IP addresses you carve into **subnets**. Anything with a network interface — a VM, a private endpoint, a gateway — sits in a subnet, and a subnet is where the firewall and routing rules attach.

### The three things to get right on day one
- **Do not overlap.** Two networks with the same range can never be peered or joined by a VPN. Take a range from your organisation's plan, not \`10.0.0.0/16\` by reflex
- **Leave room.** A VNet's address space can be extended now, but subnets cannot overlap and resizing one means emptying it first
- **Five addresses per subnet are Azure's.** A \`/24\` gives you 251, not 256 — and some services demand a subnet to themselves

### The names that are not yours to choose
\`GatewaySubnet\`, \`AzureFirewallSubnet\`, \`AzureBastionSubnet\` — spelled exactly like that, or the service refuses to deploy.`,
  narration:
    "A virtual network is the private address space your resources live in. You give it a range in CIDR notation — ten dot twenty dot zero dot zero slash sixteen, say — and then you cut that range into subnets. Anything with a network interface goes into a subnet: virtual machines, private endpoints, gateways, container clusters. And the subnet is where the two controls we will meet next attach: the network security group, and the route table. Two structural facts first. A VNet lives in exactly one region and one subscription. You do not stretch one across regions; you build a second network there and connect the two, which we will come to. And within a VNet, everything can reach everything by default — the default rules allow all traffic between subnets. That surprises people who expect subnets to be isolation boundaries. They are not, until you make them so. Now the three decisions that are painful to undo. The first is overlap, and it is the one that ruins projects. If two networks use the same address range, they can never be peered and they can never be joined over a VPN, because the routing is ambiguous. So do not take ten dot zero dot zero dot zero slash sixteen by reflex just because it is the default in every tutorial — take a range from whatever addressing plan your organisation has, and if there is not one, make one before you create the second VNet. The number of Azure migrations delayed by two departments both having chosen ten dot zero is remarkable. The second is room. You can extend a VNet's address space these days, which was not always true, but subnets still cannot overlap each other, and resizing a subnet means emptying it first — every NIC in it has to go. So leave gaps between your subnets rather than packing them end to end. The third is a small one that trips people on the first deployment: Azure reserves five addresses in every subnet. The network address, the broadcast address, and three for its own use — the default gateway and DNS. So a slash twenty-four gives you two hundred and fifty-one usable addresses, not two hundred and fifty-six. On a small subnet that margin matters. Finally, some subnets must be named exactly: GatewaySubnet for a VPN or ExpressRoute gateway, AzureFirewallSubnet, AzureBastionSubnet. Not a naming convention — a requirement. Spell it any other way and the service simply refuses to deploy into it.",
}
