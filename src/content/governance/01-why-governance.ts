import type { Section } from '../types'

export const whyGovernance: Section = {
  id: 'why-governance',
  title: 'Why governance',
  scene: 'four-controls-on-one-tree',
  slide: `## The subscription that grew teeth

Nobody governs on day one. By month nine there are four hundred resources, a bill nobody can split, and a machine everyone is afraid to delete because they cannot prove it is unused.

### Four controls, four questions
- **Policy** — *what may exist*. Deny at creation, or audit what already slipped in
- **Tags** — *whose is it*. An owner who is a person, and a cost centre so the bill splits
- **Budgets** — *what may it cost*. A threshold on a forecast, wired to someone who can act
- **Locks** — *what may be deleted*. The cheapest control here, and the most often missing

### All four attach to the same tree
Management group → subscription → resource group → resource, and they **inherit downward**. That is why this course comes late and is short: the mechanism was taught in *foundations*, and these are four things hung on it.

> Governance you add after the incident is a cleanup. The same four controls, assigned at a management group on day one, cost an afternoon.`,
  narration:
    "Nobody sets up governance on day one, and I am not going to pretend otherwise, because on day one there is nothing to govern and every control you add is friction with no visible benefit. So here is the shape of what actually happens instead. Month one, one subscription, six resources, everybody knows what everything is. Month nine, four hundred resources. There is a bill that finance wants split by team and nobody can split it. There is a virtual machine that has been running since March that nobody will turn off, because nobody can prove it is unused and the person who created it has left. There is a storage account with public blob access enabled that somebody set up for a demo. And there is at least one production database with no lock on it, one wrong click from being gone. That is what I mean by a subscription that grew teeth. Nothing in that list is a security failure or an outage. It is an estate that got bigger than anybody's memory of it. And the useful thing is that there are exactly four controls that prevent all of it, and each one answers a different question. The first is Policy, and it answers: what may exist. A policy is a rule evaluated when a resource is created or updated, and it can refuse the write outright, or let it through and record that it was wrong. This is the control with real teeth, and we spend the next section on it. The second is tags, and tags answer: whose is it. A tag is a key and a value on a resource, and the two that matter are an owner — a named person, not a team, because teams do not answer email — and a cost centre, because a bill you cannot split by tag is a bill that gets argued about rather than acted on. The third is budgets, and budgets answer: what may it cost. A budget is a threshold on a scope, evaluated against your actual and forecast spend, and it notifies. I will come back to that word, because it is the part people get wrong. The fourth is locks, and locks answer: what may be deleted. A lock is a single property on a resource that makes ARM refuse a delete request. It takes ten seconds to apply and it is the single cheapest control in this entire course, and it is the one most often missing from exactly the resources whose deletion would be unrecoverable. Now, the thing that ties all four together, and the reason this course is comparatively short. Every one of them attaches to a level of the scope tree — management group, subscription, resource group, resource — and every one of them inherits downward. You have already learned that mechanism. You learned it in foundations, before anything was deployed, and everything since has been hung on it. So this course is not teaching you a new model. It is four things hung on a model you already have, plus the machinery for seeing what is happening and the machinery for rebuilding it. One last framing, and then we start. There is a real asymmetry here. Governance you add after the incident is a cleanup project: you are retrofitting four hundred resources that were created without it, negotiating with teams about names and tags, and finding out which of those machines genuinely cannot be turned off. The same four controls assigned at a management group before the first subscription is used cost you an afternoon. It is the same work. The difference is entirely when.",
}
