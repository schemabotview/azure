import type { Section } from '../types'

export const sqlOnAVm: Section = {
  id: 'sql-on-a-vm',
  title: 'SQL on a VM',
  scene: 'three-ways-to-run-sql',
  slide: `## The third option, and the last resort

SQL Server on an Azure virtual machine is **infrastructure as a service**. You get the whole operating system — and every job that comes with it.

### What becomes yours again
- Patching Windows **and** SQL Server, on your schedule
- Backups: configure them, verify them, test the restore
- High availability: build the Always On cluster yourself
- Licensing: pay-as-you-go on the image, or bring your own

### The three legitimate reasons
1. A **specific version** the managed options do not offer
2. An agent that must run **on the host** — some backup and audit tools
3. A feature that lives outside the database engine: **SSRS**, **SSAS**, or a full SSIS host

> The SQL IaaS Agent extension gives you automated patching and backup on top of a VM. Use it. It narrows the gap; it does not close it.`,
  narration:
    "The third way to run SQL Server on Azure is the oldest one: put it on a virtual machine. And this is a genuine option, with genuine reasons to choose it, that is nonetheless chosen far too often — usually by a team that is uncomfortable rather than a team that is constrained. Here is what the choice actually costs. On a virtual machine you own the operating system, which means you own patching Windows and patching SQL Server, on a schedule you plan and a window you negotiate. You own backups: not just turning them on, but verifying them and rehearsing a restore, because nobody else is going to. You own high availability, which on a virtual machine means building an Always On availability group across zones yourself, with a listener and a quorum and all the careful work that entails. And you own capacity: when the disk fills at two in the morning, that is a person, and the person is on your team. Compare that with the managed options, where every one of those sentences is already handled. So when is a virtual machine right? Three reasons, and I would want to hear one of them. The first is a specific engine version — you need an older release, or a very new one, that the managed services do not offer. The second is an agent that has to run on the host: some enterprise backup products, some auditing and data-loss-prevention tools, some monitoring agents simply need to be installed on the operating system, and there is nowhere to install them on a platform service. The third, and the most common legitimate one, is that you need something that is not the database engine at all. Reporting Services, Analysis Services, or a full Integration Services host. Those are separate products that happen to ship in the same box, and the managed database services do not include them. If you do land on a virtual machine, do two things. Register it with the SQL IaaS Agent extension, which gives you automated patching, automated backup and some licence flexibility for free — it narrows the gap considerably. And use the SQL Server images from the marketplace rather than installing it yourself, because they come with the storage layout and the instance settings already configured the way Azure's own guidance says they should be. It is the last resort. Just make it a well-run one.",
}
