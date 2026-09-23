import type { Section } from '../types'

export const alerts: Section = {
  id: 'alerts',
  title: 'Alerts and dashboards',
  scene: 'signal-rule-group',
  slide: `## The action group is the part worth understanding

A rule says *when*. An **action group** says *who and how* — reusable, so changing who is paged is one edit, not forty.

### An alert rule
A **signal**, a **condition**, a **window**, a **frequency**. Log rules cost more to run than metric rules — prefer a metric where one exists.

### Seeing it, versus being told
- **Dashboards** — pinned tiles, a wall display. Nobody investigates from one
- **Workbooks** — parameterised, with real queries. This is where an investigation lives
- **Alerts** — the only one that reaches a person who is not already looking

### Alert fatigue is a design failure
Every alert must name someone who will act **now**. Anything else is a workbook. Alerts that never matter train people to ignore the ones that do.

> The test: could you write the runbook? If not, it is not an alert.`,
  narration:
    "Alerting is where good intentions go to die, so I want to spend most of this section on the design rather than the mechanics — but the mechanics first, because there is one object in them that people consistently misunderstand. An alert rule has four parts. A signal, which is the thing being watched: a metric, the result of a log query, or a resource health event from the platform. A condition, which is the threshold or the row count that counts as bad. A window, which is how much time the condition looks at. And a frequency, which is how often the rule runs. Two practical notes. A log-based rule runs a KQL query on a schedule, and that costs more than evaluating a metric, so where a metric exists for what you want, use the metric. And resource health alerts are underused and free — they tell you when Azure itself has a problem with your resource, which is information you otherwise find out from a customer. Now the action group, which is the piece worth understanding properly. Almost everyone's first instinct is that notifications belong to the rule: this rule emails me. Azure deliberately splits them, and the reason is operational. An action group is a named, reusable object that says who is notified and how — email, SMS, push, voice, a webhook into your incident tool, a Logic App, a Function. Rules reference it. So when the on-call rota changes, or you move from email to your paging tool, or somebody leaves, you edit one object and forty rules follow. If instead each rule carries its own recipients, that same change is forty edits, and it will not be done, and alerts will keep going to someone who left in March. Then there is the distinction between seeing something and being told something, which is three different products that people use interchangeably and should not. A dashboard is pinned tiles on a page. It is for a wall display or for a morning glance, and it is genuinely fine at that. Nobody has ever conducted an investigation from a dashboard, because you cannot ask it a question it was not built to answer. A workbook is the thing people should reach for more: parameterised, with real KQL behind it, with text explaining what you are looking at, so it is a document that computes. That is where an investigation actually lives, and a good workbook written after an incident is how the next person solves it in ten minutes instead of two hours. And an alert is the only one of the three that reaches somebody who is not already looking. That is its entire distinction and it should drive how you use it. So, alert fatigue. I want to be direct: alert fatigue is not a volume problem, it is a design failure, and it is the most common one in this whole area. Here is the rule I would hold you to. Every alert must name a person who will do something now. Not today, not at the next stand-up — now. If the answer to the question of what the recipient does when this fires is: look at it, and probably nothing — then it is not an alert. It is a weekly review, and it belongs in a workbook that somebody opens on purpose. The cost of getting this wrong compounds in a specific way. It is not that the noisy alerts are annoying. It is that a team which receives fourteen alerts a night, none of which required action, will start closing them without reading them, and they will close the real one exactly the same way. You have not added a safety net. You have trained people to ignore one. The test I use is simple, and you can apply it to every alert you have right now. Could you write the runbook? One paragraph: when this fires, do this. If you can, it is an alert and it is worth having. If you cannot, delete it, and put the query in a workbook where it will do some good.",
}
