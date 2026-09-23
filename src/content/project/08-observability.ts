import type { Section } from '../types'

export const observability: Section = {
  id: 'observability',
  title: 'Observability',
  scene: 'what-wakes-someone-up',
  slide: `## One branch reaches a person. The other does not.

Everything logs to the one workspace — the \`deployIfNotExists\` assignment from the landing zone, so there is nothing to remember.

### Four alert rules, and no more
- **Queue depth**, sustained — the worker is losing
- **API 5xx rate**, short window — customers see it
- **Database failover** — the platform moved us
- **Break-glass sign-in** — always, immediately

Each has a runbook paragraph. That is the entry requirement.

### Everything else is a workbook
Cost by tag, WAF blocks, slow queries, compliance drift — opened weekly, on purpose. None of it should wake anybody.

### Why four
No rota absorbs noise here. The **fifth** alert is what makes the first four ignorable.

> The test: could you write the runbook? Four could.`,
  narration:
    "Observability, and this section is short because the landing zone did most of the work. Every resource logs to the one workspace in the Management subscription, and that happens because of the deployIfNotExists policy assignment we made at the root in the second section. There is no per-resource configuration to remember, no checklist item that says turn on diagnostics, and no resource created next year that quietly logs nowhere. That is the whole reason that policy was worth making early. So what is left is the interesting question, which is not what do we collect — the answer to that is everything — but what reaches a person. And the picture splits into exactly two branches for that reason. One branch goes to a pager. The other does not. Almost every observability failure I have seen is something put on the wrong branch. Four alert rules. Let me give you them and the reasoning, because the specific four matter less than why there are four. Queue depth above a threshold, sustained for ten minutes. That is the one that tells us the worker is losing — not that it is busy, which is fine and expected on a promotion day, but that it is falling behind faster than it is catching up. Sustained for ten minutes, because the whole point of the queue is to absorb a spike, and an alert that fires every time the queue gets deep would fire on exactly the days the design is working correctly. API five-hundred error rate, on a short window, because that is customers seeing failures right now. Database failover, from resource health, because if the platform moved us to the secondary we want to know that before we start debugging latency. And break-glass sign-in, always, immediately, no threshold — because either somebody is recovering from a genuine lockout, in which case we already know, or something is very wrong. Each of those four has a paragraph of runbook attached: when this fires, do this. That is the entry requirement, and it is the test from the governance course. If you cannot write the paragraph, you do not understand what the alert means, and if you do not understand what it means at four in the afternoon you will not understand it at four in the morning. Everything else becomes a workbook. And I want to be clear that everything else is a lot, and it is genuinely useful: cost grouped by tag, what the WAF has been blocking and whether any of it was us, slow query statistics, policy compliance drift, reservation utilisation. All of that is real and all of it should be looked at. It is looked at on a Tuesday morning, deliberately, by somebody who opened the workbook on purpose. None of it should wake anybody up, because none of it requires action within the hour. Now, why four, and this is the part that I think is genuinely contested, so let me argue it. Four is not a magic number, but the existence of a hard ceiling is the point. With two engineers there is no rota to absorb noise. There is no tier one who triages. Every alert lands on one of two phones, and those two phones also have to be usable for family, and sleep, and everything else. So the cost of a noisy alert is not annoyance. It is that the fifth alert — the well-intentioned one that fires twice a week and requires nothing — is what makes the first four ignorable. That is the actual mechanism of alert fatigue and it is worth saying plainly: you do not lose responsiveness gradually, you lose it because people learn that closing a notification without reading it is usually correct. And once they have learned that, they close the real one the same way. So the ceiling is deliberate and it is defended. Adding a fifth alert means arguing that it is more important than one of the existing four, and if it is, one of them becomes a workbook. That is a slightly uncomfortable conversation to have, and having it is the entire point.",
}
