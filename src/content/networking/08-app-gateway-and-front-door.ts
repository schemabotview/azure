import type { Section } from '../types'

export const appGatewayAndFrontDoor: Section = {
  id: 'app-gateway-and-front-door',
  title: 'The layer-7 choices',
  scene: 'which-front-door',
  slide: `## Decide global or regional first

That is the axis people get wrong — not the feature list.

- **Front Door** — global. Terminates the connection at the Microsoft edge nearest the user, caches, runs a **WAF**, and fails over between regions. One entry point for a worldwide audience
- **Application Gateway** — regional. Layer 7 inside one region: path-based routing, TLS termination, cookie affinity, and a WAF of its own
- **Traffic Manager** — DNS only. It hands out *addresses*; no traffic passes through it. Cheap, protocol-agnostic, and bound by **DNS caching**, so failover is as fast as the client's resolver, not as fast as your health check
- **Load Balancer** — layer 4, from the previous section

### The common shape
Front Door at the edge for TLS, WAF and region failover; Application Gateway or an internal load balancer inside each region. Two layers, each doing its own job.

> A WAF belongs wherever the traffic first arrives. Two WAFs in series mostly buys you two places to debug a false positive.`,
  narration:
    "Once you move up from layer four, Azure offers several things that all claim to route traffic, and the way to choose between them is not to compare feature lists. It is to answer one question first: is this global, or is this regional? Global means the decision happens before the request reaches any particular region. Front Door is the main answer here. It is a content delivery network and a global layer-seven load balancer in one: a user in São Paulo connects to the Microsoft edge location nearest them, TLS is terminated there, static content may be served from cache there, a web application firewall inspects the request there, and only then does it travel over Microsoft's backbone to whichever of your regional deployments is healthy and closest. That is a genuinely different shape from anything regional — it improves latency for distant users and it gives you regional failover without DNS games. Traffic Manager is also global, and it is worth understanding precisely because it is so often misused. Traffic Manager is DNS. It does not see your traffic at all; it answers name lookups with the address of whichever endpoint it considers best — by geography, by priority, by weight, by measured latency. Because it is DNS, it works for any protocol, not just HTTP, and it costs almost nothing. And because it is DNS, failover is bounded by caching: clients and resolvers hold the answer for the time-to-live, and some of them hold it longer than they should. If your requirement is fast failover for a web application, Front Door does it in seconds and Traffic Manager does it in minutes. Regional means inside one region, in front of your instances. Application Gateway is the layer-seven option: it reads HTTP, so it can route on URL path — slash api to one pool, slash static to another — terminate TLS, do cookie-based session affinity, rewrite headers, and run a WAF. Load Balancer, from the previous section, is the layer-four option underneath it. The common production shape combines them: Front Door at the edge doing TLS, WAF and cross-region failover, and inside each region an Application Gateway or an internal load balancer distributing to instances. Each layer does one job. And on the WAF specifically: put it where traffic first arrives. Running two in series is mostly two places to debug the same false positive at midnight.",
}
