import type { Section } from '../types'

export const monitor: Section = {
  id: 'monitor',
  title: 'Azure Monitor',
  scene: 'one-workspace-many-tables',
  slide: `## Two stores, and only one of them is queryable

Azure Monitor is an umbrella over two genuinely different things, and the confusion between them costs people hours.

### Metrics
Numeric, time-stamped, **pre-aggregated**. Collected automatically for every resource, retained about 93 days, and free. Fast to chart, cheap to alert on — and they cannot be joined to anything.

### Logs
Structured records in **tables** inside a Log Analytics workspace. Queried with KQL, joinable across tables, retained as long as you pay for. This is where investigation happens.

### The wiring that is not automatic
Metrics arrive on their own. **Logs do not.** A resource emits nothing to a workspace until a **diagnostic setting** says so — which is why \`deployIfNotExists\` exists, and why one workspace beats fifteen.

> Whether a resource was logging has two answers, and you chose which one months earlier.`,
  narration:
    "Azure Monitor is an umbrella brand over two things that are genuinely different, and almost every confusing conversation about observability on Azure comes from treating them as one. So let me separate them properly. The first is metrics. A metric is a number with a timestamp — CPU percentage, requests per second, queue depth, available memory. Metrics are pre-aggregated at collection, they are gathered automatically for essentially every resource with no configuration from you at all, they are retained for about ninety-three days, and they are free. That combination makes them the right thing for two jobs: charting something over time, and alerting on a threshold, because evaluating a metric alert is cheap and fast. What metrics cannot do is be joined to anything. A metric has dimensions but it is not a record. You cannot ask which user caused the spike, because that information was aggregated away before it was stored. The second is logs. A log is a structured record — a row, with a schema, in a named table, inside a Log Analytics workspace. Sign-in events, resource writes, application traces, firewall decisions. You query them with KQL, which is the next section, and crucially you can join across tables: take the activity log, join it to sign-in logs, and now you know not just that a resource group was deleted but which account did it and where they signed in from ten minutes earlier. That is investigation, and metrics cannot do it. Logs are also where the money is, because you pay by the gigabyte ingested and by retention — which is the same economics we met with Sentinel, for the same reason: Sentinel is a Log Analytics workspace. Now, the operational fact that this whole section exists for, and the reason the picture puts the metric store outside the box. Metrics arrive on their own. Logs do not. A resource will emit exactly nothing to your workspace until you create a diagnostic setting on it saying which categories go where. That is per-resource configuration, and it is the thing nobody does. So the most common and most painful observability failure on Azure is not a dashboard being wrong — it is an incident where the answer to what happened is simply unavailable, because the resource in question was never sending its logs anywhere, and logs are not retroactive. You cannot go and get last Tuesday. This is precisely what the deployIfNotExists effect is for. You write one policy that says: any resource of this type without a diagnostic setting pointing at our workspace gets one created. Assign it at the management group. Now every resource that has ever existed and every resource that ever will is logging, and nobody had to remember. If you take one action away from this entire course, that is a strong candidate. One design decision and I will stop. Use one workspace, not fifteen. The instinct is to give each team or each environment its own, and it feels tidy, and it is wrong for one decisive reason: you cannot join across workspaces cheaply, and the queries you will actually need during an incident are exactly the ones that cross boundaries. Access is controlled per table and per resource within a single workspace, so the isolation you wanted is available without splitting the data. Split only when a legal or data-residency boundary forces you to, and then know you have accepted a real cost.",
}
