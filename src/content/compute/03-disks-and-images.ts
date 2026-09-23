import type { Section } from '../types'

export const disksAndImages: Section = {
  id: 'disks-and-images',
  title: 'Disks and images',
  scene: 'disk-tiers',
  slide: `## You are buying latency, and you pay for the size you asked for

A managed disk bills on its **provisioned** size and tier, not on what you wrote to it. An empty one-terabyte premium disk costs exactly what a full one does.

### Choosing a tier
**Premium SSD v2** is the modern default for production: sub-millisecond, and you dial size, IOPS and throughput independently instead of buying a bigger disk to get faster. Standard SSD is fine for dev. Standard HDD belongs under backups. Ultra exists for SAP HANA and the top of OLTP.

### Two things worth knowing early
- **Ephemeral OS disks** put the OS on the host's local storage: free, faster to boot, and wiped on deallocate. Ideal for a stateless scale-set node, wrong for anything with state
- An **image** in a compute gallery is how you stop configuring machines by hand. Build it once, version it, replicate it to the regions that need it, and every VM starts identical`,
  narration:
    "Storage attached to a virtual machine is a managed disk, and the first thing to internalise is the billing model: you pay for the size and tier you provisioned, not for the bytes you wrote. A one-terabyte premium disk with nothing on it costs the same as a full one. That is the opposite of blob storage, which we will meet in the next course, and mixing the two up is how people are surprised. So what are you buying when you pick a tier? Latency, mostly, and consistency of latency. Ultra disks give sub-millisecond response with configurable throughput, and they exist for the genuinely demanding: SAP HANA, the busiest transactional databases. Premium SSD v2 is the one I would point most production workloads at today, because it decouples the three things that used to be bundled — you choose capacity, IOPS and throughput independently, rather than buying a larger disk purely to get more speed, which is what the original premium tier forced you to do. The original Premium SSD is still everywhere and still required for some SLA configurations. Standard SSD is perfectly reasonable for development and light workloads. And Standard HDD, spinning rust, belongs under backups and archives where tens of milliseconds do not matter. There is one more option that is not on that table, and it is worth knowing: the ephemeral OS disk. Instead of a managed disk in the storage service, the operating system lives on the host machine's own local storage. It costs nothing extra, it boots faster, and it is wiped whenever the VM is deallocated or moved. For a stateless node in a scale set that gets replaced rather than repaired, that is exactly right and it saves real money at scale. For anything holding state, it is obviously wrong. Finally, images. Every time you configure a machine by hand you have created something nobody can reproduce. An image captures a configured machine, and a compute gallery stores images with versions and replicates them to the regions you need. Build the image once, in a pipeline, with your agent and your hardening and your certificates baked in; then every VM and every scale-set instance starts from the same known state. This is also what makes scaling fast — an instance that boots ready is an instance serving traffic in ninety seconds rather than ten minutes.",
}
