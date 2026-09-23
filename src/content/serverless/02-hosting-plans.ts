import type { Section } from '../types'

export const hostingPlans: Section = {
  id: 'hosting-plans',
  title: 'Hosting plans',
  scene: 'where-a-function-runs',
  slide: `## The plan decides three things you will care about

Same code, four plans. What changes is **cold start**, **network reach** and **how you are billed**.

### Cold start is a design constraint
On a plan that scales to zero, the first request after an idle period waits for an instance to be created and your app to load — **seconds, not milliseconds**. That is fine for a queue worker and unacceptable behind a login page.

### Choosing
- **Consumption** — cheapest, scales to zero, no VNet. Start here
- **Flex Consumption** — scales to zero *and* reaches a VNet, with far less cold start
- **Premium** — pre-warmed instances, no cold start, VNet. Billed even when idle
- **Dedicated** — an App Service plan you already run. Use the capacity you are paying for

> A plan change means re-creating the function app. Cheap early, awkward once a hostname is in production.`,
  narration:
    "Your code does not change between hosting plans. Three other things do, and each of them will eventually matter to you. The first is cold start. On a plan that scales to zero, when nothing has invoked your function for a while, there is no instance running. The next request has to wait for the platform to allocate one, pull your app and start the runtime. That is seconds — sometimes several, if your dependency tree is large. For a queue worker chewing through a backlog, nobody notices or cares. For the API behind a sign-in page, it is the difference between a product that feels fast and one that feels broken. The second is network reach. A function on the cheapest plan lives on shared infrastructure with no route into your virtual network, which means it cannot reach a database behind a private endpoint, and cannot call anything on-premises. The moment your design says the data tier has no public endpoint — which is where every serious design ends up — the plan has to be one that supports virtual network integration. The third is the bill. Consumption bills you per execution and per gigabyte-second of memory used, so an idle app costs essentially nothing. Premium bills you for instances that are kept warm, all the time, whether anybody calls you or not. That is not a worse deal, it is a different one: you are buying away the cold start. So, how to choose. Start on Consumption. It is the cheapest, it scales to zero, and for background work triggered by queues and timers it is genuinely the right answer for years. Move to Flex Consumption when you need virtual network access but still want to scale to zero — it keeps the consumption billing shape and cuts the cold start down considerably, and it is the default worth reaching for on anything new. Take Premium when a user is waiting on the other end of the request and the cold start is unacceptable, or when you need long-running executions. And use Dedicated — an App Service plan — when you already have one running a web app with spare capacity, because then the functions are effectively free. One practical warning. The plan is a property of the function app, not something you slide up and down. Changing it means creating a new app and moving over. That is nothing at all in week one, and a small project once there is a hostname other people depend on. So spend five minutes on it now.",
}
