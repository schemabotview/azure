import type { Section } from '../types'

export const customRoles: Section = {
  id: 'custom-roles',
  title: 'Custom roles',
  scene: 'a-custom-role',
  slide: `## When nothing built-in is the right shape

A custom role is a list of permitted operations, the operations subtracted from it, and the scopes it may be assigned at. Write one when a team needs a narrow, repeated capability — *restart these VMs, nothing else*.

### The three action lists
- \`actions\` — management-plane operations allowed, wildcards permitted
- \`notActions\` — subtracted from the line above. **Not a deny**: it only narrows this role, and says nothing about a second assignment that grants the same thing
- \`dataActions\` — the data plane, kept deliberately separate

### Before you write one
Search the built-in list again. A custom role is a thing you now own, review and keep current as Azure adds resource providers — and most of the time the specific built-in role already exists.`,
  narration:
    "Sometimes no built-in role has the shape you need. The classic case: an on-call rota that must be able to restart a handful of virtual machines at two in the morning, and must not be able to do anything else — not resize them, not delete them, certainly not touch the network. Contributor is far too much. Reader is not enough. So you write a custom role. A custom role is JSON, and it has three lists that matter. Actions is what the role permits on the management plane, and it takes wildcards — you can say Microsoft dot Compute slash virtualMachines slash star if you want every operation on virtual machines, or name individual ones as we have here: read, and restart slash action. NotActions is subtracted from actions, and this is the field people misunderstand most often. It is not a deny. It narrows this role only. If you grant someone a custom role with notActions on deleting virtual machines, and they also hold Contributor from a subscription-level assignment, they can still delete virtual machines — because permissions add, and notActions has no power over a different assignment. The third list is dataActions, which covers the data plane we just discussed, and it is kept separate for exactly that reason. There is also assignableScopes, which declares where this role is allowed to be used. Scope it to the subscription or management group it belongs to rather than leaving it wide, and note that a custom role cannot be assignable at the tenant root — Azure requires it to be anchored somewhere real. Now the advice around all this. Before writing a custom role, search the built-in list one more time. Microsoft adds them continually and the specific one you want often already exists, especially for data-plane access. The reason to hesitate is not difficulty — the JSON is easy. It is ownership. A custom role is now a thing your organisation maintains: when Azure adds a new operation to a resource provider, your wildcard may quietly include it, or your explicit list may quietly lack it, and nobody is reviewing that file. Built-in roles are Microsoft's problem to keep current. Custom roles are yours.",
}
