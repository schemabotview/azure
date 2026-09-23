import type { Section } from '../types'

export const vmAnatomy: Section = {
  id: 'vm-anatomy',
  title: 'A VM is five resources',
  scene: 'a-vm-is-five-things',
  slide: `## Create a virtual machine, get half a dozen objects

The portal presents one form. Azure Resource Manager creates a virtual machine, a disk, a network interface, usually a public IP, and often a network security group — each a separate resource with its own id, its own lifecycle, and its own line on the bill.

### Why this matters on day one
**Deleting the VM deletes the VM.** The disk stays. The public IP stays. The NIC stays, and it keeps the address reserved. Every Azure estate over a year old has orphaned disks nobody can account for — this is where they come from.

### The habit
One **resource group per VM workload**, so the delete test from the foundations course does the cleanup for you. And check the *"delete with VM"* boxes at creation: they are there, they default off for the disk on older paths, and they are the difference between a clean teardown and an archaeology project.`,
  narration:
    "Let's start the compute course by correcting a picture almost everybody carries. You go to the portal, you fill in one form, you click Create, and you think you have made a virtual machine. You have not. You have made five or six resources, and they are peers. There is the virtual machine itself — which is really just the compute: the CPU and memory allocation, and the configuration that binds everything else together. There is at least one managed disk, holding the operating system, and possibly several more for data. There is a network interface, which is what actually holds the private IP address and connects to a subnet. There is usually a public IP address, which is its own resource with its own price. And there is very often a network security group — a firewall rule set — created for you and attached to either the interface or the subnet. Each of those has its own resource id. Each one bills separately. And here is the consequence that costs organisations real money: deleting the virtual machine deletes the virtual machine. The disk remains, and a managed disk bills on its provisioned size whether or not anything reads it — a one-terabyte premium disk attached to nothing costs the same as one doing work. The public IP remains, and a reserved static address bills while it is held. The network interface remains, holding its address. Every Azure estate older than a year has a collection of orphaned disks that nobody can trace to a workload, and this is exactly where they come from — machines deleted in a hurry, over several years, by people who thought the delete was complete. Two habits fix it permanently. The first you already have from the foundations course: put a workload and its parts in their own resource group, so that deleting the group is the cleanup, and the delete test does the thinking for you. The second is to notice the 'delete with VM' checkboxes on the creation form. They exist, they are not all on by default depending on the path you take, and ticking them is the difference between a clean teardown and an archaeology project two years from now.",
}
