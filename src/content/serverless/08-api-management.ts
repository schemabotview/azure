import type { Section } from '../types'

export const apiManagement: Section = {
  id: 'api-management',
  title: 'API Management',
  scene: 'one-policy-document',
  slide: `## A gateway whose behaviour is a document

A gateway in front of your APIs — functions, app services, anything with an address. Authentication, throttling, caching and transformation then live in one place.

### Three objects
- An **API** is a set of operations pointing at a backend
- A **product** bundles APIs and sets the terms; a consumer gets a **subscription key** to one
- A **policy** is the XML that runs on the way in, the way out, and on error

### What belongs in the gateway
Token validation, rate and quota limits per caller, response caching, header stripping, request rewriting — and a **mock response**, so consumers can build against an API that does not exist yet.

### Versions and revisions
A **version** is consumer-visible: \`/v2\`, a header, a query string. A **revision** is not — change a policy on one, test it, then make it current.

> Every policy line is logic you delete from every backend.`,
  narration:
    "Once you have a dozen functions and a few app services, each one is answering questions that have nothing to do with what it does: is this caller authenticated, is this caller over their limit, can this response be cached, is this an old client that needs the old field names. API Management is where you put all of that, once. It is a gateway. It sits in front of your backends, and it has three objects worth knowing. An API is a collection of operations that point at a backend address. A product is a bundle of APIs with terms attached — so you can publish a free tier limited to a hundred calls a day and a partner tier that is not, from the same API — and a consumer subscribes to a product and gets a subscription key. And a policy is the interesting one: the gateway's behaviour is an XML document, executed in stages. There is an inbound section that runs before the request reaches your backend, an outbound section that runs on the response, and an on-error section that runs when something fails. Policies are where the work happens. Validate a JWT against your identity provider, and reject unauthenticated calls at the edge — your backend then never sees an unsigned request, and every function behind the gateway can stop implementing token validation. Rate limit by key, where the key is the caller's subscription rather than the gateway as a whole, so one noisy consumer cannot starve the others. Cache a response for thirty seconds and take the load off the backend entirely. Strip the headers that advertise what you are running. Rewrite a request so an old client keeps working against a new backend shape. And mock a response, which is genuinely underused: you can publish an API with a realistic mocked response before the implementation exists, and let the client team build against it that week. Two things about configuration that are easy to get wrong. Secrets and environment-specific values do not belong inline in the policy; use named values, which can be backed by Key Vault, and reference them with the double-brace syntax. And understand the difference between a revision and a version, because the words sound interchangeable and are not. A version is consumer-visible: a path segment, a header or a query parameter, and it exists so that two shapes of your API can be live at once while clients migrate. A revision is invisible to consumers: it is a draft of an API or its policy that you can test and then make current, or roll back. Change a policy on a revision, never on the thing production traffic is hitting.",
}
