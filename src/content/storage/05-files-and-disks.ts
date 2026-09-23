import type { Section } from '../types'

export const filesAndDisks: Section = {
  id: 'files-and-disks',
  title: 'Files, disks and shares',
  scene: 'files-disks-shares',
  slide: `## The question is how many machines write to it

A **managed disk** belongs to one VM. **Azure Files** is an SMB share many machines mount at once. That single difference decides most of these arguments.

### Azure Files earns its place in two situations
A lift-and-shift that expects a UNC path and will not be rewritten — and a set of application servers that must share configuration or user uploads. It also supports **AD authentication**, so existing NTFS permissions can come across.

### The two specialists
- **NetApp Files** — enterprise NAS: NFS and SMB, sub-millisecond, snapshots, cross-region replication. Genuinely excellent and genuinely expensive
- **Blob with NFS 3.0** — object storage mounted as a filesystem, for analytics tools that want a path rather than an SDK

> If you are writing the application, prefer blob. A filesystem API on shared network storage is a compatibility layer — useful, but you pay for it in latency and in the failure modes of a network drive.`,
  narration:
    "Sometimes what an application wants is not an object store but a filesystem — a path it can open, read and write. Azure gives you four ways to provide one, and the question that separates them is simple: how many machines need to write to it at the same time? A managed disk, which we met in the compute course, belongs to one virtual machine. It is the fastest option because it behaves like a local drive, and shared disks do exist for clustering scenarios, but the normal case is one disk, one machine. That is your operating system volume and your database volume. Azure Files is a genuine network share, spoken over SMB — the same protocol as a Windows file server — and many machines can mount it at once, including machines outside Azure over a VPN. There are two situations where it earns its place. The first is a lift-and-shift: an application that expects a UNC path, was written in 2011, and is not going to be rewritten. Point it at an Azure Files share and it works. The second is a set of application servers that genuinely need shared state — a configuration directory, a folder of user uploads, a shared cache. Azure Files also supports Active Directory authentication, so existing NTFS permissions can come across with the data, which matters enormously in a migration. Then there are two specialists. Azure NetApp Files is enterprise-grade NAS delivered as a service: NFS and SMB, sub-millisecond latency, instant snapshots, cross-region replication. It is excellent, and it is priced for organisations whose storage team previously bought NetApp hardware. Reach for it when you have SAP, a large virtual desktop deployment, or a workload with a real NAS requirement — not as a default. And blob storage can itself expose an NFS 3.0 endpoint, which lets analytics tools mount object storage as a filesystem without an SDK. Now, my advice, and it has a bias in it. If you are writing the application, prefer blob. A filesystem API over shared network storage is a compatibility layer: it is useful, and you pay for it in latency and in the awkward failure modes of a network drive — file locking, half-written files, a mount that goes away mid-write. Object storage has a simpler contract, better throughput for large files, lifecycle management, and every tier we just discussed. Use Files because something requires it, not because a filesystem feels more familiar.",
}
