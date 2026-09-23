import type { Section } from '../types'

export const whatIsAzure: Section = {
  id: 'what-is-azure',
  title: 'What Azure actually is',
  scene: 'what-you-rent',
  slide: `## Somebody else's datacentre, rented by the second

Azure is Microsoft's global fleet of datacentres, exposed as an API. You stop buying capacity three years ahead and start renting it — compute, storage, networking, identity — for exactly as long as you use it.

### The trade you are making
- **Capital becomes operating cost** — no purchase, no depreciation, a monthly bill instead
- **Lead time collapses** — a server is a request, not a procurement cycle
- **Elasticity becomes real** — scale up for a launch, scale down the same afternoon
- **You give up control of the floor** — you no longer choose the rack, the switch or the hypervisor

### Everything after this is one of four things
Compute that runs code · storage that holds bytes · networking that connects them · identity that decides who may touch any of it.`,
  narration:
    "Let's start with the least interesting true answer: Azure is a very large number of computers in buildings that Microsoft owns, in about sixty parts of the world, made available to you over an API. That's it. Every service you will ever hear named — virtual machines, Cosmos DB, Front Door, Sentinel — is a program running on those computers that Microsoft operates so you don't have to. What changes when you use them is not really technical, it's financial and it's about lead time. In your own datacentre, capacity is something you buy ahead of demand. You forecast three years out, you buy hardware for the peak you think you'll hit, you pay for all of it on day one, and then you run it at maybe fifteen percent utilisation while it depreciates. If your forecast was low, you are stuck for months. If it was high, you have bought expensive furniture. In Azure, capacity is something you request. It arrives in a couple of minutes, you pay for the seconds you actually use it, and you give it back when you're done. That is the whole value proposition, and it is why the term is elasticity rather than just scale. Now, what do you give up? Control of the floor. You no longer choose the rack, the top-of-rack switch, the firmware, or the hypervisor. For most organisations that is a trade worth making, because none of those choices were ever a competitive advantage. And here's the frame I want you to carry through the next hundred sections: however many service names Azure throws at you, they are variations on four things. Compute, which runs your code. Storage, which holds your bytes. Networking, which connects them and decides what can reach what. And identity, which decides who is allowed to touch any of it. If you can place a new service into one of those four buckets, you already half-understand it.",
}
