import type { Section } from '../types'

export const conditionalAccess: Section = {
  id: 'conditional-access',
  title: 'Conditional Access',
  scene: 'does-this-sign-in-survive',
  slide: `## The password was correct. Now the real question.

Conditional Access is evaluated on **every** sign-in: given who this is, what they are opening, from where, on what device, at what risk — is this allowed, allowed with a condition, or refused?

### It is not a switch between allow and block
The middle branch is where nearly all real policy lives: *allowed, if you complete multi-factor* · *allowed, if the device is compliant* · *allowed, but the session expires in an hour and downloads are blocked*.

### Two rules, both learned the hard way
- **Lock yourself out and nobody can help you.** Exclude a break-glass account from every policy, give it a long unique password held offline, and alert on its use
- **Ship in report-only first.** The policy logs what it *would* have done. Read a week of that before you turn it on

> RBAC decides what you may do once inside. This decides whether you get in at all — and it is the control that actually stops credential theft.`,
  narration:
    "Everything we have covered so far answers the question 'what may this person do?' Conditional Access answers a question that comes first: should this sign-in be allowed to happen at all? It is evaluated every single time anybody authenticates, after the password is verified and before the session is issued, and it works like a policy engine — a set of conditions, and a set of controls to apply when they match. The conditions are the signals you can see on the left. Who the user is and what roles they hold. Which application they are opening. Where they are — country, IP range, whether it is a location you have marked as trusted. What device they are on, and whether it is compliant with your management policy. And risk, which Entra calculates: is this sign-in anomalous, is this user's credential known to be compromised, is this a token replayed from somewhere impossible. Then come the controls, and here is the part people miss. Conditional Access is not a switch between allow and block. The interesting branch is the middle one. Allowed, if you complete multi-factor authentication. Allowed, if your device is marked compliant by Intune. Allowed, but this session lasts one hour instead of a week, and downloads are blocked in the browser. Nearly all real policy lives in that middle branch, because it lets you raise the cost of an unusual sign-in without stopping legitimate work. The canonical policy, and the one worth having before almost anything else: require multi-factor authentication for anyone holding an administrative role. Two pieces of hard-won advice. First: you can lock yourself out, and if you do, nobody can rescue you — not your colleagues, and in the ordinary case not Microsoft support either. So before you create your first policy, create a break-glass account, exclude it from every Conditional Access policy you will ever write, give it a long unique password kept somewhere physical, and set an alert that fires when it signs in. Every organisation running this properly has two of them. Second: every policy supports report-only mode, in which it is fully evaluated and logged but nothing is enforced. Turn every new policy on in report-only, leave it for a week, and read what it would have done. You will find the service account nobody told you about, the team in a country you did not have on the list, and the conference room device that cannot do multi-factor. Find them in a log, not in an incident.",
}
