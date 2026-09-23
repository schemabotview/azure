import type { Section } from '../types'

export const theChecklist: Section = {
  id: 'the-checklist',
  title: 'Before production traffic',
  scene: 'before-traffic-touches-it',
  slide: `## What a subscription needs first

Not a maturity model. The short list that separates a subscription you can defend from one you cannot.

### Who can act
MFA on every admin via **Conditional Access**. **PIM** for Owner and User Access Administrator — eligible, not standing. **Break-glass accounts** excluded, and tested.

### What can reach it
No public IP that does not need one — **Private Endpoints** for data services. **WAF** in front of anything public, in Prevention mode after tuning. **DDoS Network Protection** on the VNet. NSGs that name real sources.

### What you could prove
**Key Vault** plus **managed identity**, so no secret sits in a config. **Diagnostic settings** on every resource, to one workspace, with a retention you chose. **Resource locks** on anything whose deletion would end the day.

> Being able to answer *who did that, and when* is worth more after an incident than any single control was before it.`,
  narration:
    "This is the close, and I want it to be useful rather than comprehensive, so it is short on purpose. This is not a maturity model and it is not a certification. It is the list that separates a subscription you could defend from one you could not, and every single item on it is something an earlier part of this arc already built. Three questions. First: who can act. Multi-factor authentication on every administrative account, and enforced through Conditional Access rather than turned on per user, because per-user settings drift and a policy does not. Privileged Identity Management on Owner and on User Access Administrator, so those roles are eligible rather than standing — requested, justified, time-limited, logged. And break-glass accounts: two of them, excluded from the Conditional Access policies precisely so that a broken policy cannot lock you out of your own tenant, with their credentials held somewhere physical. And I mean it about testing them. An untested break-glass account is a story people tell about a tenant they could not get back into. Second: what can reach it. Nothing has a public IP unless there is a reason you could say out loud. Data services — databases, storage accounts, vaults — get private endpoints, so they are not on the internet at all. Anything that genuinely is public sits behind a web application firewall, in prevention mode, after you ran it in detection mode long enough to tune it. DDoS Network Protection on the virtual network that fronts it. And network security groups whose rules name real sources, because a rule that says allow from any was written on a Friday with the intention of tightening it on Monday, and Monday has not arrived. Third, and the one that is least glamorous and most valuable: what you could prove. Key Vault plus managed identity, so that no secret sits in a configuration file anywhere in the deployment. Diagnostic settings on every resource that emits them, going to one Log Analytics workspace, with a retention period that somebody actually chose rather than the default that somebody accepted. And resource locks on the things whose accidental deletion would end your day — the production database, the vault holding the customer-managed key, the workspace holding all the evidence. Let me end on that last group, because it is the one that gets deferred. Every control before it is about preventing something. Logging is about the fact that one day prevention will not have worked, and on that day the only question that matters is what happened, and the only way to answer it is to have been writing it down beforehand. Being able to say who did that, and when, is worth more after an incident than almost any individual control was worth before it. That is the end of this course. Everything here has been about protecting things that earlier courses built. What is still missing is the machinery that keeps it true over time — the policy that stops the next resource from being created wrong, the budget that notices the bill, the templates that make the whole thing reproducible — and that is where we go next.",
}
