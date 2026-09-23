import type { Section } from '../types'

export const landingZone: Section = {
  id: 'landing-zone',
  title: 'The landing zone',
  scene: 'where-this-system-lives',
  slide: `## Three subscriptions, and two rules above them

Not the full enterprise-scale diagram — the cut of it this system needs.

### The subscriptions
- **Connectivity** — the hub, the firewall, private DNS
- **Management** — the one workspace everything logs to
- **orders-prod** — the only one with real customer data
- **orders-nonprod** — dev and test together

### The baseline, at the root
Two assignments, inherited by everything. **Allowed locations**, the two EU regions — the residency row, enforced rather than remembered. And **deployIfNotExists**, putting a diagnostic setting on everything that emits one.

### What we did not build
No Sandbox group. With two engineers, non-prod *is* the sandbox — written down, so the next person finds a decision.

> A subscription costs nothing. Separating prod costs one afternoon.`,
  narration:
    "The landing zone course showed you the full enterprise-scale shape, with platform and landing zones and sandbox and decommissioned, and several subscriptions under each. That shape is correct for a large organisation and it would be absurd here. So this section is about taking the cut of it that this system actually needs, and being explicit about what we are leaving out, because the difference between a simplification and an omission is whether you wrote it down. Four subscriptions. Connectivity holds the hub virtual network, the firewall, and the private DNS zones that make private endpoints resolve. It is shared, it is built once, and it exists as its own subscription because it has a different lifecycle from anything that runs in it — the hub outlives every application. Management holds the single Log Analytics workspace. One workspace, as we argued in the governance course, because the queries that matter during an incident are the ones that cross boundaries, and you cannot join cheaply across workspaces. Then orders-prod, which is the only subscription that holds real customer data, and orders-nonprod, which holds dev and test together. That last one is a deliberate simplification. At a larger organisation dev and test are separate subscriptions with separate policy. Here, separating them buys us nothing — the same two people operate both, the data in both is synthetic, and a second subscription is a second thing to keep configured. So they share. Now the baseline, and this is the part I would keep even if we cut everything else. Two policy assignments at the tenant root, inherited by every subscription underneath, including any subscription created next year that nobody has thought of yet. The first is allowed locations, limited to our two EU regions. That is the personal-data row of the brief, and notice what has just changed about it: it stopped being a rule people have to remember and became a rule the platform enforces. Somebody creating a resource in East US does not get a talking-to at code review — they get a deployment failure with the reason in it, immediately, before the resource exists. The second is a deployIfNotExists assignment that puts a diagnostic setting on every resource type that emits one, pointing at the management workspace. That single assignment is the reason the observability section later in this course is short: logging is not something we will remember to configure per resource, because it is not per resource. And one thing we are not building, said out loud. There is no sandbox management group. In the full shape, sandbox exists so that experiments have somewhere legal to happen outside the baseline, and it is genuinely important at scale. Here, non-prod is the sandbox — it has the baseline, which is slightly inconvenient, and with two engineers the inconvenience is smaller than the cost of another management group to reason about. That is a judgment call, it could be wrong in eighteen months, and it goes in the repository next to the Bicep so that whoever asks why is looking at a decision rather than an accident. Finally, the economic point that makes all of this easy. A subscription in Azure costs nothing. It is a billing and policy boundary, not a purchase. Which means the usual objection to separating production — that it is expensive or heavyweight — is simply false, and the separation that stops a dev deployment from touching customer data costs you one afternoon of setup, once.",
}
