import type { Section } from '../types'

export const costReview: Section = {
  id: 'cost-review',
  title: 'The cost review',
  scene: 'where-the-money-goes',
  slide: `## Nearly half the bill is one row of the brief

Shares rather than currency: the absolute numbers go stale, the **shape** does not.

### The database is 45%, on purpose
Business Critical with a geo-replica is what the **15-minute RPO** costs. That makes it a conversation with the person who set the number, not a complaint about Azure pricing.

### Three levers, in order
- **A reservation** on SQL compute — one year, once usage is steady. Never month one, and check *utilisation* monthly
- **Non-prod on a schedule.** Left running it is roughly 60% of prod, for eleven hours of use a day
- **Log Analytics retention.** 90 days hot, then archive. Ingestion is the bill, and it only ever grows

### What we did not do
Downgrade the database. It is the largest line and it is the one traceable to a signed-off number.

> A cost review that cannot trace its biggest line to a requirement is a complaint.`,
  narration:
    "The cost review, and I have deliberately put shares on the table rather than currency. Two reasons. The absolute numbers go stale within a year — prices change, tiers get renamed, regions differ — whereas the shape of a bill for a system like this is remarkably stable. And the shape is the teaching. If you can look at a system and predict roughly where its money goes, you can spot the anomaly, and spotting the anomaly is the skill. So. The database is about forty-five percent of this bill. Nearly half. And I want to handle that number carefully, because there are two completely different reactions to it and only one of them is useful. The unhelpful reaction is that Azure SQL is expensive. The useful one is: that line exists because of the fifteen-minute recovery point objective in the brief. Business Critical with a zone-redundant configuration and a geo-replica in the second region is what fifteen minutes costs. So when the bill lands and somebody asks why the database is half of it, the answer is not a defence of a technology choice. It is: because you told us you could lose at most fifteen minutes of orders, and here is what that costs, and if the number were an hour this line would be substantially smaller — would you like to have that conversation? That is a completely different meeting, and you can only have it if you wrote the brief down first. Container Apps is about fifteen percent, driven by requests and by the idle floor — the minimum replicas we keep warm so that the first request after a quiet period is not slow. Front Door and the WAF are about twelve, which is a fixed base plus egress. Log Analytics is about ten, and that is gigabytes ingested. Storage and the lake are about eight, and notice what drives that: what is retained, not what is written. Writing data is nearly free; keeping it for three years is the bill. And everything else — Service Bus, Key Vault, DNS, the firewall's rules — is the last ten percent, which is worth knowing because it means optimising any of those individually is not where the money is. Three levers, in the order I would pull them. First, a reservation on the SQL compute. One year, bought once usage has been steady for a few months, never in month one when you do not yet know your shape. And check the utilisation report monthly, because a reservation that matches nothing — wrong size, wrong region — is the purest waste on an Azure bill, a line item with no service behind it, and it fails silently. Second, non-prod on a schedule. Left running continuously, non-prod is roughly sixty percent of production, and it is used for about eleven hours a day by two people. Shut it down outside working hours and you have removed a meaningful fraction of the total bill for zero loss. This is the single most common piece of money left on the floor in small estates and it is embarrassingly easy to fix. Third, Log Analytics retention. Ninety days hot for the queries we actually run, then archive for the compliance obligation. Ingestion is the bill and ingestion only ever grows, so a retention policy set deliberately on day one is much easier than one negotiated in year two when somebody has started sending firewall logs. And then, what we did not do. We did not downgrade the database, even though it is the largest line and it would be the fastest saving. Because it is the one line that traces directly to a number somebody signed off. Everything else on that list is engineering judgment we are free to revise. That one is a commitment, and changing it means going back to the person who made it. That is the discipline this whole section is about, and it is why I would put it like this: a cost review that cannot trace its biggest line to a requirement is not a review. It is a complaint.",
}
