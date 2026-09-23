import type { Section } from '../types'

export const durableFunctions: Section = {
  id: 'durable-functions',
  title: 'Durable Functions',
  scene: 'an-orchestrator',
  slide: `## A workflow that survives a restart

An **orchestrator** is a function that calls other functions and remembers where it got to. Its state is an **event history** in storage, not memory — so a crash, a deploy or a scale event resumes it mid-flight.

### The patterns it buys you
- **Chaining** — step, then step, with the result passed along
- **Fan-out / fan-in** — a thousand activities in parallel, one \`yield\`
- **Human interaction** — wait days for an approval, paying nothing while waiting
- **Monitor** — a durable, restartable poll loop, optionally eternal

### The one hard rule
The orchestrator is **replayed** from its history on every step, so it must be **deterministic**: no \`now()\`, no random, no IO, no new GUIDs. Everything non-deterministic goes in an **activity**.

> Reach for it when a process has steps, a memory and a duration.`,
  narration:
    "A plain function is stateless and short. That is the deal, and most of the time it is a good one. But some work genuinely has steps: reserve the stock, then charge the card, then book the courier, then email the customer — and if the charge fails you have to unwind the reservation. You can build that by hand with queues between every step, and people do, and what they end up owning is a state machine spread across six functions and a storage table, with no way to see where any particular order got to. Durable Functions is the framework for exactly that. You write an orchestrator function, which looks like ordinary sequential code: call this, wait for the result, branch on it, call that. Underneath, every decision it makes is appended to an event history in storage. So when the orchestrator awaits an activity, the instance can be torn down entirely — the host can restart, you can deploy new code, the platform can scale your app to zero — and when the result comes back, the orchestrator is rebuilt by replaying its history up to that point and carries on. The state lives in the history, not in memory. That single design choice is what everything else follows from. Four patterns come out of it. Chaining, which is the sequential case. Fan-out and fan-in: start a thousand activities in parallel and wait for all of them with a single line, which is the pattern that would be genuinely painful to write yourself. Human interaction: an orchestration can wait for an external event — an approval, a callback, a signature — for three days, and cost you nothing while it waits, because nothing is running. And the monitor pattern: a durable polling loop that survives restarts, optionally eternal. Now the rule you must respect, because breaking it produces bugs that look like ghosts. Because the orchestrator is replayed, it has to be deterministic. Every time it is replayed it must make exactly the same decisions in exactly the same order. So no reading the current time, no random numbers, no new GUIDs, no direct calls to a database or an HTTP endpoint. All of that goes in an activity function, which runs once and whose result is recorded in the history. If you want the current time, there is a deterministic replacement for it on the context object. Get that rule into your hands early, because the symptom of breaking it is an orchestration that behaves correctly in testing and then does something inexplicable in production, once a replay happens for the first time.",
}
