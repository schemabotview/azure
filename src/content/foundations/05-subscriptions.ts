import type { Section } from '../types'

export const subscriptions: Section = {
  id: 'subscriptions',
  title: 'Subscriptions',
  scene: 'one-sub-or-many',
  slide: `## A billing boundary that is also a blast radius

A subscription is where usage is totalled into an invoice — and, less obviously, where **quotas** are counted and where a **policy** or a **role assignment** stops applying.

### When a second subscription is the right answer
- A team's quota keeps being eaten by another team's workload
- Production and development need genuinely different policy baselines
- A business unit must be invoiced separately, without relying on tag discipline
- You want a mistake to be contained to one part of the estate

### What it costs you
Networking and identity now cross a boundary: peering, private DNS and role assignments all have to be arranged deliberately rather than inherited.`,
  narration:
    "A subscription is the container everything you build ends up inside, and it does three jobs that people tend to discover one at a time. The first is the obvious one: billing. Usage inside a subscription is totalled up and becomes an invoice. If you want two things billed apart with no arguing about tags, put them in two subscriptions. The second job is quotas, and this one surprises people. Azure limits how much of a given resource you can have — how many virtual CPUs of a particular family in a particular region, how many public IP addresses, how many storage accounts. Those limits are counted per subscription per region. So if one team runs a large batch job and consumes the regional vCPU quota, another team in the same subscription cannot start a VM, and the error they get says nothing about the first team. That is the single most common reason a growing organisation splits a subscription. The third job is that a subscription is a boundary for control. A policy assigned at the subscription applies to everything in it and nothing outside it. A role assignment at the subscription level does the same. Which means a subscription is also a blast radius: whatever misconfiguration you can apply there, you apply to everything in it. So when should you make a second one? When quotas collide, when two environments genuinely need different policy baselines — production and development usually do — when a business unit has to be invoiced separately, or when you want to contain the consequences of a mistake. What does it cost? Not money — subscriptions themselves are free. It costs coordination. Once your estate spans subscriptions, networks have to be peered deliberately, private DNS has to be shared deliberately, and access has to be granted in more than one place. That is manageable, and there is a well-trodden pattern for it that we will meet as landing zones. The mistake to avoid is the opposite of over-splitting: a single subscription that grew for four years until nobody can safely change anything in it.",
}
