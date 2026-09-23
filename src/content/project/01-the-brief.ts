import type { Section } from '../types'

export const theBrief: Section = {
  id: 'the-brief',
  title: 'The brief',
  scene: 'the-numbers-that-decide-it',
  slide: `## The system, and its non-negotiables

A retailer's **order platform**. A public API, a worker that fulfils, a database of record, and a nightly reconciliation finance will not go without.

### Why it starts with numbers
Every architecture argument is unresolvable until somebody states a number. *Highly available* is not a requirement. **99.9% monthly** is — and it is the difference between zone redundancy and a second region.

### The two that constrain the most
- **Two engineers.** Not a preference. It rules out anything with a control plane to run, and it is why *managed* wins every close call in this design
- **15-minute RPO.** It sets the database tier, and the database tier turns out to be **half the bill**

### The rule for the next nine sections
Every decision names the row it came from. A choice that traces to no row is a **preference**, and argued for as one.

> A design nobody wrote the numbers down for is a design nobody can review.`,
  narration:
    "This is the last course, and it is different from the nine before it. There is nothing new in it — no service you have not met. What it does is take one system and design it end to end, out loud, with the reasoning visible, because knowing what Container Apps is and knowing whether to use it are genuinely different skills and only one of them has been taught so far. So here is the system. A retailer is moving its order platform onto Azure. There is a public API that the storefront calls, there is a worker that does fulfilment, there is a database that is the system of record for orders, and there is a nightly reconciliation that finance will not operate without. That is a small, extremely common shape, and it is deliberately not exotic — the point of a capstone is judgment, not novelty. Now, the numbers, and I want to explain why we start here rather than with a diagram. Every architecture argument you will ever have is unresolvable until somebody states a number. Two people can disagree for an hour about whether a system needs to be highly available and get nowhere, because highly available is not a requirement — it is an adjective. Ninety-nine point nine percent monthly is a requirement. It is also, as it happens, about forty-three minutes of downtime a month, which is comfortably achievable with availability zones in one region and does not require the enormous complexity of running in two. That one number just removed a month of work and a permanent operational burden from the design, and it did it before anything was drawn. Let me walk the six. Forty thousand orders a day, peaking at six times that in a ninety-minute window on promotion days. Note the shape of that: it is not sustained load, it is a spike. That pushes you towards levelling the load with a queue rather than provisioning for the peak — which we will come back to. Ninety-nine point nine percent monthly, which as I said means zones, not regions. A fifteen-minute recovery point and a four-hour recovery time: you may lose fifteen minutes of orders and you must be back within four hours. That combination is very specific — fifteen minutes means a geo-replicated database rather than a nightly backup, and four hours means you can afford to restore rather than needing a hot standby you pay for continuously. Card data is never stored; the payment provider gives us a token and the actual card details never touch our systems, which removes an entire compliance regime from scope and is the single highest-leverage decision on this list. Personal data stays in the EU, which we will enforce with a policy rather than a convention. And two engineers. I want to dwell on that last one because people treat team size as context rather than as a requirement, and it is a requirement. Two engineers means nothing in this design may have a control plane that needs running. It means managed wins every close call. It means the number of alerts has a hard ceiling, because there is no rota to absorb noise. Kubernetes is an excellent technology and it is the wrong answer here, and it is the wrong answer for a reason written in the brief rather than because of anybody's taste. So here is the rule for the next nine sections, and I would like you to hold me to it. Every decision names the row of this table it came from. If a choice traces to no row, then it is a preference — which is allowed, preferences are real — but it has to be argued for as one, out loud, rather than smuggled in wearing the clothes of a requirement.",
}
