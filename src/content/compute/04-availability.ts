import type { Section } from '../types'

export const availability: Section = {
  id: 'availability',
  title: 'Availability',
  scene: 'what-each-survives',
  slide: `## Ask what kills it, not how many nines

A single VM on premium disks carries a **99.9%** SLA — and that number covers the platform under it, not your machine. A host update still reboots you.

### The three arrangements
- **Availability set** — spreads instances across fault and update domains inside one datacentre. **99.95%**. Survives a rack and a host patch; does not survive the building
- **Availability zones** — instances in physically separate datacentres in the same region. **99.99%**. Survives losing a building entirely
- **Region pair** — a second deployment far away. Survives the region, and is a project, not a checkbox

### The practical advice
Zones cost nothing extra for the VM, take one extra decision at creation, and are irreversible afterwards: you cannot move a running VM into a zone — you redeploy it. Pick zones at creation and you will almost never need to revisit this.`,
  narration:
    "Availability conversations go badly when they are about nines, so let's make this one about failures instead. A single virtual machine, with premium or ultra disks attached, has a published uptime SLA of 99.9 percent. Notice what that number covers: Microsoft's platform underneath your machine. It does not promise that your application stays up, and it does not stop Azure rebooting your machine to patch the host it sits on. If your workload cannot tolerate an unannounced reboot, one VM is already the wrong answer — before any discussion of nines. The first way to improve it is an availability set. When you put several VMs in a set, Azure spreads them across fault domains — separate racks with separate power and network — and across update domains, which it patches at different times. So a rack failure takes some of your instances and not all, and host maintenance rolls through rather than hitting everything at once. That gets you to 99.95 percent, and it is entirely within one datacentre. If the building floods, an availability set does not help. The second way is availability zones, and this is the one I want you to default to. Zones are physically separate datacentres within the same region — own power, own cooling, own network — and you place instances across two or three of them. Now losing an entire building is a capacity event rather than an outage, and the published SLA goes to 99.99 percent. What does that cost? For the virtual machines, nothing extra. You pay for inter-zone data transfer, which for most applications is small, and you accept a couple of milliseconds more latency between instances. That is an exceptional trade. The third way is a second region, using the pair we discussed in foundations, and I want to be honest about it: that is not a checkbox, it is a project. It means replicating data, deciding how failover is triggered, keeping a second deployment current, and testing it — and most organisations that say they have it have never actually run the drill. Two practical notes before we move on. You cannot combine an availability set with zones; they are alternative models, and zones are the newer and better one. And crucially, zone placement is chosen when the VM is created and cannot be changed afterwards — moving an existing machine into a zone means building a new one from its disk. That single fact is why this section sits early in the course: decide it at creation, and you will rarely have to revisit it.",
}
