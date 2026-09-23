import type { Section } from '../types'

export const sharedResponsibilitySection: Section = {
  id: 'shared-responsibility',
  title: 'Shared responsibility',
  scene: 'shared-responsibility',
  slide: `## The line moves with the service model

Moving up the stack — IaaS to PaaS to SaaS — hands more layers to Microsoft. It never hands over the top two.

### Yours in every model, without exception
- **Your data**, and who is allowed to read it
- **Your identities**, and how strongly they authenticate
- **Your access configuration** — the role assignments, the network rules, the keys

### The practical reading
A managed database does not mean a secure database. Azure patches the engine; **you** still decide whether it is reachable from the internet and who holds the credentials — which is why the next course is identity, before we deploy anything at all.`,
  narration:
    "Every cloud provider publishes a shared responsibility diagram, and most people nod at it and move on. It's worth actually reading, because it answers a question that comes up in every incident review: whose job was that? Start at the bottom. The physical building, the hardware, the network cabling, the hypervisor — Microsoft's, always, in every service model. You will never patch a firmware bug in an Azure host. Now walk up. With infrastructure as a service — a virtual machine — you get an operating system, and it is yours. Microsoft will keep the host healthy underneath it, but the patches inside that VM, the packages you installed, the runtime you chose: yours. That is the trade. Maximum control, maximum responsibility. Move up to platform as a service — Azure SQL Database, App Service — and the operating system and runtime become Microsoft's problem. They patch the database engine, they keep the host current, they replace hardware without telling you. You bring an application and a schema. Move up again to software as a service — Microsoft 365 is the obvious example — and even the application is theirs. You bring data, users, and configuration. Now here is the row that matters, and it is the one people skip. At the very top of the stack sit your data, your identities, and your access configuration. Those are yours in every single model. There is no service in Azure where Microsoft decides who should be allowed to read your data. A managed database is not automatically a secure database: Azure will patch the engine flawlessly and will happily let you leave it reachable from the internet with a weak administrator password, because that part was always your decision. This is the reason the next course in this series is identity, and why it comes before we deploy anything at all. Nearly every cloud breach that reaches the news is a story about the top two rows of this table — not about a hypervisor.",
}
