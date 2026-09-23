import type { Section } from '../types'

export const hubAndSpoke: Section = {
  id: 'hub-and-spoke',
  title: 'The hub and spoke',
  scene: 'the-hub-and-spoke',
  slide: `## Everything in this course, assembled

A **hub** holds what is shared and expensive: the firewall, the gateway to on-premises, private DNS. Each workload gets a **spoke** peered to it, with its own subnets, its own NSGs and its own lifecycle.

### Why this shape and not a flat network
- The things that are **shared** are built and paid for once, not per team
- A spoke is a **blast radius** — the resource-group argument, one level up
- Peering's non-transitivity means spoke-to-spoke traffic *must* go through the hub, where it can be inspected. The constraint is doing the work

### What makes it real rather than decorative
A **route table on every spoke subnet** sending \`0.0.0.0/0\` to the firewall. Miss one subnet and it silently bypasses the whole design.

> You have now finished the shippable prefix: the scope tree, identity, compute, storage and the network they all sit in. Next: databases.`,
  narration:
    "Let's assemble everything this course has covered into the shape you will actually meet, because hub-and-spoke is not an Azure product — it is what falls out of the constraints we have been discussing. In the middle is the hub: a virtual network owned by whoever runs the platform, containing the things that are shared and expensive. The firewall that inspects egress. The VPN or ExpressRoute gateway to the datacentre. The private DNS zones that make private endpoints resolve. Possibly Bastion, for administrative access without public IPs. Each workload gets its own virtual network — a spoke — peered to the hub. The spoke has its own subnets, its own network security groups, and its own lifecycle. And here is why this shape rather than one big flat network. First, the shared things are built once and paid for once. A VPN gateway per team would be absurd; one in the hub, with gateway transit enabled on the peerings, serves all of them. Second, a spoke is a blast radius. It is the resource-group argument from the foundations course, one level up: a team can work inside their own network without any possibility of changing somebody else's. Third — and this is the elegant part — peering's non-transitivity, the thing that seemed like an annoying limitation two sections ago, is doing the security work for you. Spoke A cannot reach spoke B directly. It cannot be made to by accident. If those two workloads must talk, their traffic goes through the hub, where the firewall sees it and logs it. The constraint enforces the policy. Now, the piece that makes it real rather than decorative, and I want to say it plainly because it is the single most common gap I see in real estates: the route table. Each spoke subnet needs a route sending zero dot zero dot zero dot zero slash zero to the firewall in the hub. Without it, the packets take the system route straight out to the internet, the firewall never sees them, and the architecture diagram is a work of fiction. And because route tables are associated per subnet, every new subnet is a new opportunity to forget. This is exactly what Azure Policy is for, and we will meet it in the governance course — a policy that refuses to create a subnet without a route table, or remediates it automatically. And with that, you have finished the shippable prefix of this series. You know the scope tree everything hangs off, who may act on it, how to run code, where to keep state, and the network all of it sits inside. From here the courses specialise. Next: databases.",
}
