import type { Section } from '../types'

export const sentinel: Section = {
  id: 'sentinel',
  title: 'Sentinel',
  scene: 'a-siem-is-a-query',
  slide: `## A SIEM is a scheduled query

Microsoft Sentinel is a **Log Analytics workspace** with four things layered on it. Once you see that, the mystery goes.

### The four parts
- **Connectors** — pull sign-in logs, activity logs, Defender alerts, firewall logs, third-party sources into tables
- **Analytics rules** — a **KQL query on a schedule**. A hit raises an *incident*, not a row
- **Entities** — map a column to an account, host or IP, so incidents about the same thing join up
- **Playbooks** — a Logic App on an incident: disable the account, open the ticket, post to the channel

### Before you turn it on
It bills by the **gigabyte ingested**. Connecting every source you own is how a SIEM becomes the largest line on the bill having caught nothing.

### When a team is ready
When someone is **on the hook** for responding. A SIEM nobody reads is a more expensive way to not notice.

> Connect sign-in and activity logs. Write three rules you would actually act on. Grow from there.`,
  narration:
    "Sentinel is sold as a security information and event management system, and that phrase is doing nobody any favours, so let me take it apart. Underneath, Sentinel is a Log Analytics workspace. It is the same thing you already use for metrics and diagnostics, with the same query language, and there are four things layered on top of it. That is the whole product. First, connectors. These pull data into tables: Entra sign-in logs, Azure activity logs, Defender for Cloud alerts, firewall logs, and a long list of third-party sources. A connector is just an agreement about where a stream of records lands. Second, analytics rules — and this is the piece that makes it a SIEM rather than a log search. An analytics rule is a KQL query that runs on a schedule. When it returns rows, Sentinel does not hand you rows. It raises an incident. That difference is the entire product. A query you run by hand finds something once, when you thought to look. A query on a schedule finds it at three in the morning on a Saturday, when you did not. Look at the query on the left, because it is deliberately ordinary. Take successful sign-ins in the last hour, group them by account, collect the set of countries each account signed in from, and return any account that appears in more than one country in one hour. That is impossible travel. It is about eight lines, there is nothing clever in it, and it is a real detection that real teams run. Third, entities. You map a column in the results — the account name, the host, the IP — to an entity type. What this buys you is that incidents about the same account join up, and when you open one you see everything else that account has done rather than a disconnected row. Without entity mapping you have alerts. With it you have a case. Fourth, playbooks. A playbook is a Logic App triggered by an incident, and it is how a detection becomes a response: disable the account, isolate the machine, open the ticket, post to the channel where somebody will see it. Now, two warnings, and I want to give them equal weight to everything above. The first is the bill. Sentinel is priced by the gigabyte ingested. Connecting every data source you own — because they were there, and connecting them was one click each — is exactly how a SIEM becomes the largest line on your Azure bill before it has caught a single thing. Verbose sources, and firewall logs are the classic, can cost more per month than the rest of your security programme. Be deliberate. Connect a source because you have a rule that reads it. The second warning is about readiness, and it is not technical. A SIEM is not a detection capability. It is a queue of incidents, and a queue needs somebody on the other end of it. If no named person is on the hook for looking at what it raises, then what you have built is a more expensive way of not noticing — and worse, a documented one, because now there is a record showing the alert fired and nobody moved. So here is what I would actually do. Connect sign-in logs and activity logs, because they are comparatively small and they tell you about the two things that matter most: who signed in and who changed something. Write three rules you would genuinely act on at two in the morning. Attach a playbook to one of them. Live with that for a quarter. Then grow it — driven by incidents you actually had, not by the list of available connectors.",
}
