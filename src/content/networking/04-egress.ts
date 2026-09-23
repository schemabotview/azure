import type { Section } from '../types'

export const egress: Section = {
  id: 'egress',
  title: 'Getting out',
  scene: 'getting-out',
  slide: `## Outbound is a design decision, not a default

A VM with no public IP can still reach the internet, through an address Azure picks for you. Convenient — and it is being retired for new subnets, because nobody can allow-list an address that can change.

### The two deliberate options
- **NAT Gateway** — attach it to a subnet and all outbound traffic uses *your* static public addresses. A partner can allow-list them, and it removes the port-exhaustion failure that bites chatty workloads
- **Azure Firewall** — when egress must be controlled rather than merely known: rules by **FQDN**, full logging, and a threat-intelligence feed. It costs real money and needs a route table to send traffic to it

### The symptom worth recognising
Intermittent outbound failures under load, especially to one busy endpoint, are usually **SNAT port exhaustion** — not the remote service. A NAT Gateway is the fix.`,
  narration:
    "Every workload eventually needs to talk out: pull a package, call a payment provider, fetch an OS update. And because outbound works by default, almost nobody designs it — which is how it becomes an incident later. Here is the default. A virtual machine with no public IP still reaches the internet, because Azure performs source network address translation using an address it chooses from a shared pool. You did not pick that address, you cannot guarantee it, and it can change. So when a partner asks you to tell them which IP your calls will come from, you cannot answer. Microsoft is retiring this default for new subnets, which is the right decision and worth knowing before it surprises you. The first deliberate option is a NAT Gateway. You create it, attach one or more public IP addresses to it, and associate it with a subnet. Now every outbound connection from that subnet uses your addresses, they are static, and you can hand them to a partner to allow-list. It also fixes a failure mode worth naming, because the symptom is so misleading: SNAT port exhaustion. Every outbound connection consumes a port on the translating address, and the default pool is small. A service making many short-lived connections to one endpoint burns through them, and then new connections start failing — intermittently, under load, usually to the busiest dependency. Teams spend days blaming the remote service. A NAT Gateway gives you a vastly larger port pool and better reuse, and the problem disappears. The second option is Azure Firewall, and you choose it when egress must be controlled rather than just known. It is a managed, highly available firewall you put in the hub of your network, with a route table sending traffic to it. What it buys you over an NSG is meaningful: rules by fully qualified domain name rather than IP address — so you can allow traffic to github dot com without maintaining GitHub's address ranges — plus full logging of what went where, and Microsoft's threat intelligence feed. What it costs is also meaningful: it is billed hourly plus per gigabyte, it is one of the larger line items in a mature Azure network, and it needs that route table on every subnet that must use it. Which is exactly the silent failure from the last section: a subnet without the route table bypasses the firewall entirely.",
}
