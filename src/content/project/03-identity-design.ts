import type { Section } from '../types'

export const identityDesign: Section = {
  id: 'identity-design',
  title: 'Who may act, and where',
  scene: 'who-may-act-and-where',
  slide: `## The design is the scope on each line

Three populations, treated completely differently.

### Humans
**Reader** standing, nothing else. Contributor is **PIM-eligible** — four hours, justified, logged.

Strict for a team this small? The opposite: two people have no second pair of eyes, so the time box *is* the control.

### Workloads
One identity per component, at the narrowest scope:

- the API → *Key Vault Secrets User*, on **the vault**
- the worker → *Service Bus Data Receiver*, on **the queue**
- the ETL → *Blob Data Contributor*, on **bronze** — not the account

The ETL cannot read gold, so a bug in it cannot leak it.

### Break-glass
Two accounts, out of Conditional Access, in a safe, **tested** — and one alert on any sign-in.

> Deployment is a pipeline identity. No personal account writes to prod.`,
  narration:
    "Identity is the design decision people do last and should do first, because every later choice hands something a permission, and a permission granted casually at three in the afternoon is a permission nobody revisits. There are three populations here and they need completely different treatment. Humans first. In orders-prod, the two of us have Reader. Standing, always, across the subscription. That is it. Contributor exists, but it is PIM-eligible rather than assigned — meaning it is requested, it requires a justification, it lasts four hours, and it is logged. And with a two-person team, the approver is the other engineer. Now, people push back on this at this team size, and the pushback is always the same: we are two people, we trust each other, this is ceremony. I want to answer that directly, because I think it is backwards. A two-person team has no second pair of eyes by default. There is no reviewer standing between you and production at two in the morning. The time box is the control — not because you are not trusted, but because the version of you that is tired and under pressure benefits from a moment where the system asks are you sure, and from a log line that lets tomorrow-you reconstruct what happened. It is also, bluntly, the thing that limits the damage when one of those two accounts is the one that gets phished. Workloads second, and this is where the design actually lives. One managed identity per component — not one shared identity for the application, which is the tempting shortcut. The API gets Key Vault Secrets User on the vault. The worker gets Service Bus Data Receiver on the queue. The ETL gets Storage Blob Data Contributor on the bronze container. Look at that last scope again, because it is the one worth copying. Not on the storage account — on the container. Which means the ETL identity can write raw data into bronze and cannot read gold, the served, shaped, customer-facing dataset. So a bug in the ETL, or a compromise of it, cannot exfiltrate the thing people actually query. That is least privilege doing real work rather than being a phrase in a policy document, and it cost one extra word in a scope string. And notice what is absent from all of this: there is no connection string anywhere. Not in a config file, not in an environment variable, not in a secret that we then have to protect. The API's access to the vault is a token, the worker's access to the queue is a token, and none of them were issued a password to lose. Third, break-glass. Two accounts that exist for one scenario: a Conditional Access policy is misconfigured and locks everybody out of the tenant, including the people who would fix it. Those two accounts are excluded from Conditional Access precisely so that cannot happen, their credentials are in a physical safe, and — this is the part that gets skipped — they have been signed into at least once, on purpose, to confirm they work. An untested break-glass account is a story people tell about a tenant they could not get back into. And there is one alert rule that fires on any sign-in by either of them, because a legitimate use of a break-glass account is a once-in-two-years event, and anything else is an incident. One last thing, and it is short because it follows from everything above. Deployments run as a pipeline identity — a workload identity federated to the repository — with Contributor scoped to the resource groups it deploys. Nobody's personal account writes to production. Not because anybody would do something careless, but because when you look at the activity log in six months, you want it to say which pipeline run changed something, not which human was logged in at the time.",
}
