import type { Section } from '../types'

export const nsg: Section = {
  id: 'nsg',
  title: 'Network security groups',
  scene: 'nsg-rules',
  slide: `## First match wins, lowest number first

An NSG is an ordered list of allow and deny rules for traffic in and out. Evaluation stops at the first match — so a permissive rule at priority 100 makes everything below it irrelevant.

### The three default rules you cannot delete
At the bottom of every NSG: **allow** all traffic from inside the VNet, **allow** the Azure load balancer, **deny** everything else. That last one is why inbound from the internet is closed until you open it — and the first is why subnets are *not* isolated from each other by default.

### Attach it to the subnet
An NSG can attach to a subnet or to an individual NIC. Prefer the subnet: a rule on a NIC is invisible to whoever is debugging the subnet, and both apply, in that order, which is how "allowed but still blocked" happens.

> Use **service tags** — \`Internet\`, \`VirtualNetwork\`, \`AzureMonitor\`, \`Sql.WestEurope\` — rather than IP ranges. Microsoft keeps them current; your hand-typed range goes stale silently.`,
  narration:
    "A network security group is a firewall, and it is simpler than most firewalls: an ordered list of rules, each one allowing or denying traffic based on source, destination, port and protocol. Rules have a priority number between one hundred and four thousand and ninety-six, they are evaluated from lowest to highest, and evaluation stops at the first match. That last part is the whole mental model. If you have a rule at priority one hundred that allows everything from anywhere, nothing you write below it will ever be reached. When somebody says a rule is not working, the question is almost never whether the rule is right — it is what matched first. Every NSG also has three rules you cannot delete, sitting at priorities sixty-five thousand and above. The first allows all traffic from inside the virtual network. The second allows Azure's load balancer to reach your instances for health probes. And the third denies everything else. Those defaults tell you two important things. Inbound traffic from the internet is denied until you explicitly allow it, which is a good default. But traffic between subnets inside the same VNet is allowed by default, which means subnets are not isolation boundaries unless you make them so — if you want your data subnet to refuse the web subnet, you write that rule yourself. An NSG can be attached to a subnet or to an individual network interface, and both can apply at once: for inbound, the subnet's rules are evaluated first and then the NIC's. My advice is to attach at the subnet and stop there. A rule on one NIC is invisible to the person debugging the subnet at three in the morning, and the combination produces the classic 'I allowed it and it is still blocked' — because the other one denied it. Finally, use service tags instead of IP addresses wherever you can. A service tag is a name that Azure expands to a set of ranges and keeps current: Internet, VirtualNetwork, AzureLoadBalancer, AzureMonitor, Storage, and regional variants like Sql dot WestEurope. When Microsoft adds addresses to a service, your rule follows. When you have typed the ranges by hand, it does not, and nothing tells you — the traffic just starts being denied one Tuesday.",
}
