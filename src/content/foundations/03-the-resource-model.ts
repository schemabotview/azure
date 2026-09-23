import type { Section } from '../types'

export const theResourceModel: Section = {
  id: 'the-resource-model',
  title: 'The scope tree',
  scene: 'the-scope-tree',
  slide: `## Four levels, and everything attaches to one of them

A **resource** is anything Azure manages. It lives in exactly one **resource group**, which lives in exactly one **subscription**, which sits under a **management group**.

### Why this is the most important figure in the course
Three things attach at any level and inherit downward:
- **Role assignments** — who may act, and on what
- **Policy** — what is even allowed to exist
- **Tags and cost** — who pays for it

Grant at the subscription and you have granted on every resource inside it, including the ones created next year.

### The rule of thumb
Attach a control as **low** as it can do its job, and **no lower**.`,
  narration:
    "This is the figure I would ask you to remember if you remembered nothing else from this course, because almost everything in the next ten courses is an instance of it. Azure organises everything you own into a tree with four levels. At the bottom is a resource: a virtual machine, a storage account, a database — anything Azure manages on your behalf, each with a unique id you saw on the wire a moment ago. Every resource lives inside exactly one resource group. A resource group is a container with a lifecycle: things that are created together and deleted together. Above that is the subscription, which is the billing boundary, the quota boundary, and the outer edge of most people's mental map. And above subscriptions are management groups, which exist so that an organisation with fifty subscriptions can apply one rule to all of them without applying it fifty times. Now, why does this tree matter so much more than the equivalent in other clouds? Because of what attaches to it. Three separate systems — role assignments, which decide who may act; Azure Policy, which decides what may even exist; and cost management, which decides who pays — all attach at a level of this tree, and all of them inherit downward. Grant someone the Contributor role at the subscription level, and you have granted it on every resource group inside it, and every resource inside those, including resources nobody has created yet. That inheritance is enormously convenient and it is exactly how people over-grant by accident. So carry this rule with you: attach a control as low in the tree as it can still do its job, and no lower. If a team needs to manage one application, give them the resource group, not the subscription. We will apply that rule to role assignments in the next course, to policy much later, and to budgets after that — but the shape of the tree never changes.",
}
