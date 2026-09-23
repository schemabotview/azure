import type { Section } from '../types'

export const zeroTrust: Section = {
  id: 'zero-trust',
  title: 'Zero trust, applied',
  scene: 'never-trust-and-where-we-did-it',
  slide: `## Four principles you have already built

Zero trust is the end of the **network perimeter as an identity**: being inside the VNet proves nothing, because the attacker who matters is already inside it.

### The four, and where they landed
- **Verify explicitly** — every request authenticated and authorised on its own merits. *Conditional Access*: device state, risk, location as **signals**, never as proof
- **Least privilege** — no standing Owner. *PIM* makes it eligible and time-boxed; roles are assigned at the narrowest scope on the tree that works
- **Assume breach** — design for someone already inside. Subnets, NSGs, Azure Firewall, Private Endpoints: **segment so one compromise is not total**
- **No shared secret** — a connection string is a password with no owner. *Managed identity* removes it

### The one worth arguing about
**Assume breach** is the one skipped: a flat VNet is easier and nothing visibly breaks. It shows up only on the day it matters.

> No new product here. Just the arc, as one design.`,
  narration:
    "Zero trust has been marketed badly enough that the phrase now makes experienced people roll their eyes, which is a shame, because the idea underneath it is simple and correct. Here it is. For about thirty years, security was built around a perimeter: there was an inside and an outside, you defended the boundary, and being inside meant you were trusted. That model was already strained by laptops and it was finished by cloud and remote work, because now your users are outside, your services are outside, and the attacker who actually matters — the one with a stolen credential, or a foothold on one machine — is already inside. So the network's position stopped being usable as a proof of identity. That is the whole idea. Everything else follows. Four principles, and I want to go through them with what we have already built, because none of this is new product. Verify explicitly means every request is authenticated and authorised on its own merits, every time, regardless of where it came from. In Azure that is Conditional Access, and the important nuance is how the signals are used: device compliance, sign-in risk, location, the sensitivity of what is being reached — those are inputs to a decision, not proofs on their own. A request from the corporate network is not trusted because it came from the corporate network. It might be asked for less, or for more, depending on everything else. Least privilege means no standing privilege. Nobody is Owner all the time. Privileged Identity Management makes the role eligible rather than assigned, so it is requested, justified, time-boxed and logged — and the ordinary assignments live at the narrowest scope on the management group, subscription, resource group tree that actually works. Assume breach means designing for the case where someone is already inside. Subnets, network security groups between them, Azure Firewall inspecting what leaves, private endpoints so data services are not reachable from the wider network at all. The measurable goal is that one compromised machine is one compromised machine, not the whole estate. And the fourth, which people leave off the standard list but which belongs with them: no shared secret. A connection string is a password with no owner — it cannot be attributed, its use cannot be traced to a person, and rotating it means coordinating a deployment. Managed identity removes it, and removing it removes a whole class of incident. Now let me tell you which of these four actually gets skipped, because three of them have obvious champions and one does not. Verify explicitly gets done, because Conditional Access is visible and someone asks for multi-factor authentication. Least privilege gets done, eventually, because an auditor asks. No shared secret gets done, because it is satisfying and it is one engineer's afternoon. Assume breach is the one that gets skipped. Segmenting a network is tedious, it makes things harder to debug, a flat virtual network works perfectly well, and absolutely nothing visibly breaks when you skip it. It only ever shows up on one day — the day somebody gets onto one machine, and finds that from there they can reach everything. If you take one thing from this section, take that one.",
}
