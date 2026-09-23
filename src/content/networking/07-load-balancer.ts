import type { Section } from '../types'

export const loadBalancer: Section = {
  id: 'load-balancer',
  title: 'Azure Load Balancer',
  scene: 'how-a-load-balancer-decides',
  slide: `## Four objects, and the probe is the one that matters

A **frontend IP** receives the connection, a **rule** maps a port to a backend port, a **backend pool** holds the instances, and a **health probe** decides which of them are in it.

### Layer 4, and that is the point
It forwards TCP and UDP without reading the payload — so it is fast, protocol-agnostic and cheap, and it cannot route by URL path, terminate TLS, or rewrite a header. For those, you want the layer-7 options in the next section.

### Public or internal
The same resource does both. An **internal** load balancer takes a private frontend IP and balances traffic *inside* the VNet — the usual front for a middle tier that should never be reachable from outside.

> A probe that only checks the port answers nothing useful. Point it at a health path that touches the dependencies, or you will balance traffic beautifully onto instances that cannot serve it.`,
  narration:
    "Azure Load Balancer is a layer-four load balancer, which means it forwards TCP and UDP connections without looking inside them. It does not know what HTTP is. That sounds like a limitation and it is exactly why it is fast, cheap, and works for any protocol — a database, a game server, a custom binary protocol on a port nobody has heard of. It is made of four objects and it is worth knowing all four by name, because the portal presents them separately and people configure three of them and wonder why nothing works. The frontend IP configuration is the address clients connect to — public, or private if this is an internal load balancer. The backend pool is the set of instances that can receive traffic; usually a scale set, sometimes a list of NICs. The rule ties them together: traffic arriving on the frontend at port four four three goes to the backend pool on port eight four four three, with a distribution mode and a session persistence setting. And the health probe is the piece that decides which members of the backend pool are eligible at all. That last one deserves the emphasis. The probe is what makes this a load balancer rather than a fan-out. It calls each instance on an interval — a TCP connect, or an HTTP request to a path you specify — and instances that fail are taken out of rotation until they recover. Which means the quality of your probe is the quality of your failover. A probe that just checks whether the port is open tells you the process is running. It does not tell you the process can reach its database, or that it has not deadlocked, or that it is returning five hundreds to every request. Point the probe at a health endpoint that actually exercises the thing's dependencies and you get real failover; point it at port eighty and you get traffic balanced beautifully onto instances that cannot serve it. One more distinction. The same service comes in public and internal flavours. A public load balancer has an internet-facing address. An internal one has a private address from your VNet, and is what you put in front of a middle tier that should never be reachable from outside — the web tier talks to it by private IP, and nothing outside the network can. Both use the same four objects, so once you know one you know both.",
}
