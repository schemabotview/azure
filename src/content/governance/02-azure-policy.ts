import type { Section } from '../types'

export const azurePolicy: Section = {
  id: 'azure-policy',
  title: 'Azure Policy',
  scene: 'if-then-effect',
  slide: `## A condition, and an effect

A **definition** is JSON: an \`if\` over resource fields, and a \`then\` naming an effect. ARM evaluates it on every write, and on a schedule for what already exists.

### The effects, in order of teeth
- **audit** — it exists and is wrong. A compliance row. Nothing is blocked
- **deny** — ARM refuses the write. The deployment fails, and it fails *visibly*
- **deployIfNotExists** — it creates the missing thing. Needs a **managed identity** with rights to do so
- **modify** — it rewrites the request in flight. This is how a tag gets inherited

### Initiatives and assignment
An **initiative** bundles definitions and is assigned as one, at a **scope on the tree**, and inherits downward. Assign at the management group; exclude the exception.

### How to introduce one
Ship as **audit**. Read the report. *Then* switch to deny.

> Deny on day one breaks somebody's deployment, and the policy gets removed rather than fixed.`,
  narration:
    "Azure Policy sounds like a large product and it is not — it is a small idea applied at exactly the right moment. Look at the definition on the left, because that is genuinely all of it. A policy definition is JSON with two halves. There is an if, which is a condition over the fields of a resource: what type is it, what is this property set to, does it have this tag. And there is a then, which names an effect. That is a policy. Now, where it runs is what makes it powerful. Azure Resource Manager is the single front door — everything, portal, CLI, a Bicep deployment, a Terraform apply, goes through ARM. So policy evaluates on every write, before the resource exists, which means it is not a scanner that finds problems afterwards. It is a gate. And separately it evaluates on a schedule against what is already there, so you also get a compliance picture of the estate you inherited. The effects are where the judgement is, so let me go through them in order of how much they can hurt you. Audit is the gentle one. The resource is created, and a row appears saying it does not comply. Nothing is blocked. This is useful and it is underrated, because a compliance report over four hundred resources tells you what your estate actually looks like, which is usually not what anybody believed. Deny is the one with teeth. ARM refuses the write. The portal shows an error, the pipeline goes red, the deployment does not happen. Use it for the small number of things that genuinely must never exist: a storage account that allows public blob access, a virtual machine in a region you are not allowed to use, a resource with no owner tag. DeployIfNotExists is the interesting one and it is the one that surprises people operationally. If the condition matches and the required thing is absent, the policy goes and creates it — a diagnostic setting sending logs to your workspace, for example, which is how you get logging on every resource without asking anyone. The thing to know is that it needs an identity: the assignment gets a managed identity, and that identity needs permission to create what you are asking it to create. A deployIfNotExists assignment that quietly does nothing is almost always a missing role assignment on its identity. And modify rewrites the request as it passes through — adding a tag, changing a property — which is the actual mechanism behind tag inheritance, and we will use it in the next section. Two more things and then the advice. A single definition is rarely what you assign. An initiative is a bundle of definitions, parameterised, assigned as one unit, and that is what you want, because policy assigned one definition at a time becomes an unmanageable list within a quarter. And assignment is at a scope on the tree — management group, subscription, or resource group — inheriting downward. Assign at the management group. If one subscription genuinely needs an exception, exclude that subscription from the assignment explicitly, which leaves the exception visible and attributable. The alternative, assigning the same initiative separately to fourteen subscriptions, means nobody can tell you what is actually enforced anywhere. Now the advice, and it is the same advice I gave about a web application firewall, for the same reason. Ship every new policy as audit first. Let it run. Read the compliance report, and find out what it would have blocked — because it will always be more than you expected, and some of it will be a legitimate thing your own platform does. Fix those, then switch the effect to deny. If you go straight to deny you will, on some Tuesday afternoon, break a deployment that somebody was halfway through, in a way they cannot self-serve around. And what happens then is not that the policy gets fixed. It gets removed.",
}
