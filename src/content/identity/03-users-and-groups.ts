import type { Section } from '../types'

export const usersAndGroups: Section = {
  id: 'users-and-groups',
  title: 'Users, guests and groups',
  scene: 'who-is-in-the-directory',
  slide: `## Four kinds of principal, one way to assign

A directory holds people who sign in and code that signs in. Everything in the rest of this course is granted to one of them.

### Assign to a group. Always.
A role assignment on a person has to be found and repeated for the next person, and found again when they leave. A role assignment on a **group** survives both — membership becomes the only thing that changes.

- **Assigned** groups: you add and remove members yourself
- **Dynamic** groups: a rule does it — \`department -eq "Finance"\` — so HR's system becomes the source of truth and nobody is left behind when someone transfers

### The trap
Dynamic membership is evaluated by the platform, not instantly. Treat it as *eventually* correct, and never as the last line of defence for something that must be revoked **now**.`,
  narration:
    "Four kinds of thing can be given permission in Azure, and it is worth naming them clearly, because from here on every sentence about access ends in one of them. First, members: your own employees, with an account in your directory. Second, guests: people from another organisation, invited in, authenticating against their own employer. Third, service principals: the identity an application gets when you register it — code that signs in with a client id and a secret or a certificate. And fourth, managed identities, which are service principals Azure creates and maintains for you, and which we will spend a whole section on shortly because they remove the worst failure mode in this entire area. Now the part I want you to actually change your habits over. Assign access to groups, not to people. Here is why. Suppose you grant Priya the Contributor role on a resource group because she is joining the payments team. Six months later Marco joins the same team, and somebody has to remember what Priya has and repeat it. A year later Priya moves to another department, and somebody has to remember to take it away — and nobody does, because nothing breaks when you forget. Multiply that by four years and two hundred people, and you have an estate where nobody can answer the question 'who can delete production?' If instead you create a group called payments-engineers and grant the role once to that group, the only thing that ever changes is membership. Onboarding is adding someone to a group. Offboarding is removing them. And the permission model itself stops drifting. Azure gives you two kinds of group. An assigned group is one where you add and remove members by hand. A dynamic group has a membership rule — department equals Finance, or job title contains Engineer — and Entra evaluates it for you, so the group follows your HR system automatically. Dynamic groups are excellent and there is one caveat to hold onto: the evaluation is not instantaneous. It is usually quick, sometimes it takes a while, and it is not a mechanism you should rely on when something has to be revoked immediately. For an urgent revocation, disable the account.",
}
