import type { Section } from '../types'

export const accessTiers: Section = {
  id: 'access-tiers',
  title: 'Access tiers',
  scene: 'the-cooling-path',
  slide: `## Cheaper to keep, dearer to touch

Every tier down cuts the price of storing a byte and raises the price of reading it. **Archive** is not slow storage — it is offline, and reading anything means rehydrating it first, in hours.

### The part that catches people
Each cool tier has an **early-deletion charge**: cool bills a minimum of 30 days, cold 90, archive 180. Move something to archive and delete it a week later and you pay for the remaining 173 days.

### Lifecycle rules do the moving
A rule reads *"blobs under \`logs/\` not modified for 90 days → cool; 365 days → archive; 7 years → delete"*, and it runs daily without you. That policy is where cost control in storage actually lives.

> Run it in audit first. A rule that archives something a nightly job reads turns a five-minute report into a four-hour one, and nobody connects the two.`,
  narration:
    "Every blob has an access tier, and the tiers trade two prices against each other: what it costs to keep a byte, and what it costs to touch it. Hot is the default — the most expensive storage and the cheapest access, for data being read and written regularly. Cool is around half the storage price with higher transaction costs, intended for data you might read once a month. Cold goes further in the same direction. And archive is a different thing entirely, and this is the part I want to be precise about: archive is not slow storage. It is offline. The data is not available at all. To read a single blob in archive, you issue a rehydration request and then wait — standard priority is up to fifteen hours, high priority is faster and costs more. Any application that tries to read an archived blob directly gets an error, not a delay. So archive is for data you are keeping because a regulator or a lawyer says so, not for data that is merely old. Now the trap, and it is a billing one. Each of the cooler tiers has an early deletion charge, which works like a minimum stay. Cool bills a minimum of thirty days, cold ninety, archive one hundred and eighty. If you move a blob to archive and delete it a week later, you are charged for the remaining one hundred and seventy-three days anyway. I have watched a cleanup script cost more than the storage it removed, because somebody archived aggressively and then tidied up. Moving data between tiers is what lifecycle management is for. A lifecycle rule is a policy on the account: blobs matching this prefix, not modified for this many days, move to this tier — or get deleted. Write one that says logs move to cool after ninety days, to archive after a year, and are deleted after seven years, and it runs every day without anybody remembering. That policy is where cost control in storage genuinely lives, far more than picking tiers by hand. One piece of advice from watching this go wrong. Run a new rule in audit mode, or scoped to one prefix, before you let it loose on the account. The failure mode is quiet: a rule archives a dataset that a nightly job reads, the job starts failing with an error nobody reads, or a five-minute report becomes a four-hour rehydration, and because the rule ran three weeks ago nobody connects the two events.",
}
