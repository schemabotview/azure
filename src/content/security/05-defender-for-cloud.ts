import type { Section } from '../types'

export const defenderForCloud: Section = {
  id: 'defender-for-cloud',
  title: 'Defender for Cloud',
  scene: 'score-recommendation-alert',
  slide: `## Posture is free. Detection is billed.

Two products in one blade, and the difference is the bill.

### Free, on already
**CSPM** — posture. A built-in Policy initiative assesses every resource and rolls the result into a **secure score**, one number per subscription.

### Paid, per plan
**Workload protection** — detection, billed per hour:

- **Servers** — EDR on the VM, plus vulnerability assessment
- **Storage** — malware scanning and anomalous-access alerts
- **SQL**, **Containers**, **Key Vault**, **App Service** — each its own plan

### How to read the score
A **relative** measure, weighted by controls Microsoft thinks matter. 40 to 70 is progress. **100 is not "secure"** — it means you passed the checks, including ones that do not apply.

> Turn on Servers and Storage first: they catch what posture work never would have.`,
  narration:
    "Defender for Cloud is two products sharing one place in the portal, and almost every confused conversation about it — including every confused conversation about what it costs — comes from not separating them. So let us separate them. The first product is cloud security posture management, and it is free. It is already running on every subscription you have. What it does is evaluate your resources against a large built-in Policy initiative — is this storage account allowing public blob access, does this virtual machine have a public IP, is this SQL server missing auditing — and it rolls the results into a single number called the secure score, per subscription, with a ranked list of recommendations behind it. You did not switch this on and you are not paying for it. If you have never opened the blade, go and open it, because the list is already there. The second product is workload protection, and this is the part with a bill. You enable it per resource type, as a plan, and you pay per resource per hour. Defender for Servers puts endpoint detection and response on your virtual machines and runs vulnerability assessment against them. Defender for Storage scans uploads for malware and alerts on access patterns that do not look like your application. There are separate plans for SQL, for containers, for Key Vault, for App Service, and each is priced on its own. The distinction that matters is this: posture tells you about a door you left unlocked. Workload protection tells you that somebody walked through one. Those are completely different kinds of information and you need both, but only one of them is free. Now, how to read the secure score, because it gets misused in two opposite directions. It is a relative measure, weighted by controls that Microsoft has decided matter more than others, and the honest use of it is as a trend. Going from forty to seventy over a quarter is real, and it is a good thing to put in front of people who fund your work. What it is not is a certification. A hundred does not mean you are secure — it means you satisfied a specific set of checks, some of which will not apply to your architecture at all, and none of which know anything about your business logic. I have seen a subscription with a very high score and an application that would hand you every customer record if you asked it nicely in a URL. The score cannot see that. It was never looking. And the failure mode in the other direction is treating the recommendation list as a to-do list to be cleared. It is not. It is a list ordered by someone who does not know your system, and some of those items will be correct to dismiss with a reason recorded. If I had to give you one piece of advice on where to spend money here, it is this: turn on Servers and Storage first. Those two catch classes of thing — a process behaving like ransomware, a malicious file landing in a container — that no amount of posture work would ever have prevented, because they are not misconfigurations. They are events. Which brings us to the question of where those alerts go, and whether anybody is actually reading them.",
}
