import type { Section } from '../types'

export const tenants: Section = {
  id: 'tenants',
  title: 'Tenants',
  scene: 'tenant-and-subscriptions',
  slide: `## One directory, many subscriptions

A **tenant** is your organisation's directory — its users, groups and applications. A subscription trusts exactly **one** tenant to say who anyone is.

### What follows from that
- One set of people can be given access across **every** subscription you own
- Moving a subscription to another tenant **drops every role assignment in it** — the principals no longer exist there
- A second tenant is a genuinely separate organisation, not a folder. Real reasons: an acquisition, a strict test directory, a sovereign-cloud obligation

### Working with people outside it
**B2B guests** are invited into your tenant and keep their own employer's credential — they authenticate at home, and you authorise them here. That is why offboarding at their company ends their access at yours.`,
  narration:
    "A tenant is your organisation's directory: one instance of Entra ID, holding your users, your groups, and the applications you have registered. When your company signed up for Microsoft 365 or for Azure, a tenant was created, and it has a domain name attached to it — something like contoso dot onmicrosoft dot com, usually with your real domain verified alongside. Now, the relationship that matters. A subscription trusts exactly one tenant to tell it who people are. Not two. One. And a tenant can have any number of subscriptions trusting it — production, development, one per business unit, however you have carved it up. That asymmetry is doing a lot of work. It means you define a person once, in one directory, and they can be granted access in any subscription your organisation owns. It also means something that catches people badly: if you ever move a subscription from one tenant to another, every role assignment inside it is wiped. Not migrated. Wiped. Because those assignments point at principals — users, groups, service principals — that simply do not exist in the new directory. People discover this during an acquisition, at the worst possible moment, so if you are ever asked to move a subscription between tenants, the rebuild of access is the project, and the move itself is the easy part. When should you have a second tenant? Rarely, and for real reasons: a company you acquired that has its own directory, a test directory where you need to break things that would be unacceptable to break in the real one, or a sovereign cloud obligation. A second tenant is a separate organisation, not a folder — it doubles your identity administration. Finally, working with outsiders. You do not create accounts for your contractors and partners. You invite them as B2B guests: the guest object lives in your directory, but the credential lives in theirs. They sign in at their own company, with their own password and their own multi-factor, and your tenant simply accepts the result. The security benefit is the part worth remembering — when that person leaves their employer, their access to your resources ends, because the account doing the authenticating was never yours.",
}
