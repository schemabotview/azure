import type { Section } from '../types'

export const scaleSets: Section = {
  id: 'scale-sets',
  title: 'Scale sets and autoscale',
  scene: 'autoscale',
  slide: `## A model, a count, and a rule

A **scale set** is one definition of a machine and a number of copies. Change the number by hand, or let a rule change it for you: *when this metric crosses this line for this long, add two.*

### Why the loop bites
The metric that triggers a scale-out is the metric the new instances then reduce. Without a **cool-down**, the rule fires again before the first instances are serving traffic, and you oscillate — twelve machines at 09:05, three at 09:11, twelve again at 09:14.

- Scale **out** aggressively, scale **in** gently — the asymmetry is deliberate
- Choose a metric the queue actually feels: **queue depth** or **requests per instance** beat CPU for most web work

### Instances must be disposable
An instance can be replaced at any moment. Nothing that matters lives on its disk, and it must serve traffic without a human touching it — which means an image, not a setup script run by hand.`,
  narration:
    "A virtual machine scale set is two things: a model of a machine, and a count. The model says which image, which size, which subnet, which extensions. The count says how many copies of that model should exist right now. Change the count and Azure creates or destroys instances to match. That is the whole idea, and everything else is about what changes the count. You can change it by hand, which is genuinely useful — the day before a launch, take it from three to twelve. Or you can write an autoscale rule, which is a sentence of the form: when this metric crosses this threshold for this duration, add or remove this many instances. Now, look at the loop on the left, because the loop is where this goes wrong. The metric that triggers a scale-out is the same metric that the new instances then reduce. CPU is high, so you add machines, so CPU falls. Fine, except that adding a machine takes time — boot, configure, pass health checks, start receiving traffic. If your rule re-evaluates before any of that has happened, it sees CPU still high and adds more. Then all of them arrive at once, CPU collapses, and the scale-in rule fires and takes most of them away. That is oscillation, and the fix is the cool-down: a period after any scaling action during which the rules keep quiet. It is a field on the rule, it has a default, and the default is not always right for your workload. Two pieces of tuning advice. First, be asymmetric. Scale out aggressively and scale in gently — adding a machine you did not need costs you a few pennies, while removing one you did need costs you an outage. A common shape is out on a five-minute average, in on a twenty-minute one. Second, choose your metric carefully. CPU is the default and it is often the wrong signal for web workloads, where the real pressure shows up as queue depth or as requests per instance long before the processor is busy. Scale on the thing your users actually feel. And one design constraint that flows from all of this: instances must be disposable. An instance can be created or destroyed at any moment by a rule nobody is watching. So nothing important lives on its local disk, and a new instance must become useful without anyone logging into it. That means a prepared image, as we discussed in the last section — not a script somebody remembers to run.",
}
