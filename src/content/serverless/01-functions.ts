import type { Section } from '../types'

export const functionsSection: Section = {
  id: 'functions',
  title: 'Functions',
  scene: 'the-unit-of-code',
  slide: `## A trigger, some bindings, and your code between them

A **function** is a piece of code with exactly one **trigger** — the thing that starts it. A **function app** is the deployment and scaling unit that holds several.

### Bindings are declared, not coded
An **input binding** hands you data; an **output binding** takes what you return. No SDK, no client object, no connection string in your code — the binding names a setting and the platform does the rest.

### The trigger is also the scaler
The platform watches the trigger source — queue depth, event lag, HTTP requests — and adds instances. **You do not write scaling logic. You choose a trigger.**

- \`http\` · \`timer\` · \`queue\` · \`blob\` · \`eventGrid\` · \`eventHub\`
- \`serviceBus\` · \`cosmosDB\` change feed · \`durable\`

> Write each function so it can run twice. Almost every trigger is **at-least-once**, and a retry is normal operation, not a fault.`,
  narration:
    "Azure Functions is the smallest unit of deployable code on the platform, and the model is simpler than it first looks. A function is some code with exactly one trigger. The trigger is the thing that makes it run: an HTTP request arrives, a timer fires, a message lands on a queue, a blob appears, a row changes in Cosmos. One function, one trigger — if you want the same logic reachable two ways, that is two functions calling a shared module. Around the trigger you declare bindings, and this is the part that earns the product. An input binding hands your function some data before it runs. An output binding takes whatever you hand back and puts it somewhere. So a function that reads a new blob and writes a queue message contains no storage SDK, no client object, no connection handling and no retry code. It contains the one line that is actually your logic. The binding names a configuration setting, the platform resolves it — ideally to a managed identity rather than a connection string — and that is it. Now the thing that makes this more than a convenience. The trigger is also what scales you. The platform watches the trigger source — the depth of the queue, the lag on the event hub, the rate of HTTP requests — and starts more instances of your function app in response. You do not write scaling logic. You do not configure a metric. You choose a trigger, and the scaling comes from the shape of the trigger. That is the real reason to prefer a queue trigger over a function that polls a queue itself: one of them scales, and one of them is a program you now own. Two habits to build from the very first function you write. First, keep functions small and single-purpose, because the whole unit scales together and a function that does four things scales for the wrong reason. Second, and this is the one that bites: write every function so that running it twice is harmless. Nearly every trigger in Azure is at-least-once, which means a message can be delivered again after a transient failure, a host restart or a scale event. That is not a bug being worked around — it is normal operation. If your function charges a card, it needs to check whether it already charged that card. Make it idempotent from the start and the entire category of duplicate-processing incidents never happens to you.",
}
