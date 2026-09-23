import type { Section } from '../types'

export const rbac: Section = {
  id: 'rbac',
  title: 'Role assignments',
  scene: 'an-assignment',
  slide: `## Principal + role + scope

Every permission in Azure is one of these, and nothing else. A **principal** (who), a **role** (what actions), a **scope** (where in the tree).

### Inheritance runs downward, always
Assign at the subscription and it reaches every resource group and every resource in it — including the ones nobody has created yet. That is the convenience, and it is the entire mechanism of accidental over-granting.

### Permissions add up; they do not subtract
Effective permission is the **union** of every assignment that reaches you. A second, narrower assignment does not restrict the first — only a **deny assignment** subtracts, and those are rare and mostly made by Azure itself.

> Asked to debug access: find *which scope* the assignment sits at before you argue about the role.`,
  narration:
    "Azure's whole authorisation system is one sentence, and once you have it you can reason about any access problem you will meet. A role assignment is a principal, a role, and a scope. Who, what, and where. The principal is the who: a user, a group, a service principal, a managed identity. The role is the what: a named list of allowed operations — Reader, Contributor, Storage Blob Data Reader, or one you wrote yourself. The scope is the where: a level of the tree we built in the last course. A management group, a subscription, a resource group, or one individual resource. Now, two behaviours follow, and both of them are the source of real incidents. The first is inheritance, and it runs downward, always. If you assign Contributor to a group at the subscription, that group is Contributor on every resource group inside it, every resource inside those, and — this is the part people forget — everything created in that subscription next year. Nobody has to grant anything again. That is enormously convenient and it is precisely how organisations end up with thirty people holding Contributor over production without anyone having made that decision. The rule I gave you in the last course applies here: attach the assignment as low in the tree as it can still do its job. The second behaviour is that permissions add. Your effective permission is the union of every assignment that reaches you, from every scope above. So if you have Contributor at the subscription, and someone thoughtfully gives you Reader on one resource group in the hope of restricting you there — nothing happens. You are still Contributor on it. There is no such thing as a narrowing assignment. The only thing that subtracts is a deny assignment, and those are rare; they are mostly created by Azure itself, by features like Blueprints and managed applications, and you cannot make an arbitrary one in the portal. So when someone tells you their permissions are wrong, the first question is never 'what role do you have?' It is 'at what scope is your assignment, and what else reaches you from above?' Nine times out of ten the answer is there.",
}
