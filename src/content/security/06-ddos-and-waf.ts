import type { Section } from '../types'

export const ddosAndWaf: Section = {
  id: 'ddos-and-waf',
  title: 'DDoS and the WAF',
  scene: 'what-the-edge-stops',
  slide: `## Two filters, and each only sees what got past the first

### DDoS Protection — volume
Basic is free and always on, protecting Azure's infrastructure. **Network Protection** is the paid tier for a VNet: tuned to *your* traffic, with attack telemetry and cost protection on the scale-out.

### The WAF — the request
A policy on **Front Door** (global) or **Application Gateway** (regional, in your VNet), running managed rule sets against every request.

- Start in **Detection**: run it, read the logs, tune, then switch to **Prevention**
- Prevention from day one blocks real customers — and it will be switched off

### What neither of them covers
A valid login at scale. A leaked token used correctly. A flaw in your own logic. **Authorization bugs look exactly like traffic.**

> The edge stops what is malformed or too much. Everything shaped like a real request is your problem.`,
  narration:
    "The edge is two filters in a row, and they are answering different questions. The first sees only volume. The second sees only what the first let through. Start with volume. Every Azure resource with a public address already has a basic level of distributed-denial-of-service protection, for free, always on. It is worth being precise about what that is for: it protects Azure's infrastructure. If somebody points a very large amount of traffic at a region, that basic layer is what stops the region from being the thing that falls over. It is not tuned to you and it will not tell you anything. The paid tier is DDoS Network Protection, which you enable once for a tenant and then associate with virtual networks. What you get for the money is three things. It learns your normal traffic profile, so the thresholds at which it starts mitigating are yours rather than a regional average. It gives you attack telemetry and reports, so you can actually tell somebody what happened. And it comes with cost protection — because one of the genuinely nasty outcomes of an attack is not downtime at all, it is a bill for the scale-out that the attack triggered. Now the second filter. A web application firewall is a policy you attach to Front Door, which is global and sits at Microsoft's edge, or to Application Gateway, which is regional and sits inside your virtual network. Either way, the policy runs managed rule sets — the core rule set, and a bot protection set — against every incoming request, looking at the URL, the headers, the query string and the body for the shapes of SQL injection, cross-site scripting, path traversal, and known bad crawlers. Here is the practical advice, and it is the one thing from this section I would like you to actually do. Start in detection mode. In detection mode the rules evaluate and log, and nothing is blocked. Run it for a week or two against real traffic, then go and read what it would have blocked — and you will find that some of it was your own application, because managed rules are generic and real applications do peculiar things in query strings. Tune those out as exclusions. Then switch to prevention mode. If you go straight to prevention on day one, you will block real customers on day one, and within the hour someone with more authority than you will ask for it to be switched off, and it will stay off. Detection-first is how a WAF survives contact with a business. And now the honest part, which is what this pair does not cover. A WAF inspects the shape of a request. So it will catch a request that is malformed, or that contains something that looks like an attack payload. It will not catch a login that is perfectly valid — the right username, the right password, arriving from a credential-stuffing operation at ten thousand accounts an hour. It will not catch an access token that leaked and is now being used exactly as designed. And it will absolutely not catch a flaw in your own authorization logic, where a user changes an identifier in a URL and gets somebody else's order, because that request is well-formed, authenticated, and indistinguishable from a legitimate one. Authorization bugs look exactly like traffic. The edge stops what is too much or malformed. Everything shaped like a real request is still yours.",
}
