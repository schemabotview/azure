import type { Section } from '../types'

export const appService: Section = {
  id: 'app-service',
  title: 'App Service',
  scene: 'plan-and-apps',
  slide: `## You rent the plan; the apps share it

An **App Service plan** is the machines. Apps run inside it, and several apps in one plan share the same CPU and memory — which is why the plan, not the app, is the line on your bill.

### Scale up, scale out
**Up** is a bigger plan tier. **Out** is more instances of the same tier, on a schedule or a metric. Scaling the plan scales every app in it, together — that is the efficiency, and it is also why a runaway app becomes everyone's problem.

### Deployment slots are the reason to be here
A slot is a live copy of the app with its own hostname. Deploy to **staging**, let it warm up, check it, then **swap** — the swap exchanges the running instances, so there is no cold start for users, and swapping back is the rollback.

> Rule of thumb: put noisy or critical apps in their own plan. Co-tenancy is a cost decision, and it has a blast radius.`,
  narration:
    "App Service is where most teams should start for a web application, because it removes the entire category of work we just spent two sections on. There is no operating system to patch, no image to build, no instance to replace. You bring code or a container, and Azure runs it. But there is one structural idea you have to get right, and it is the plan. An App Service plan is the compute: a tier, which sets the CPU, memory and features, and a number of instances. Apps run inside a plan. And multiple apps in the same plan share the same underlying machines, which means they share CPU, memory and disk. That is why the plan is what appears on your bill, not the app — an empty plan costs money, and adding a second app to an existing plan is nearly free. The efficiency is real. So is the coupling: if one app starts consuming all the memory, every app in that plan feels it. My rule of thumb is that anything noisy, or anything whose availability you would be asked about in an incident review, gets its own plan. Co-tenancy is a cost decision with a blast radius attached. Scaling comes in the two directions you would expect. Scaling up means moving to a larger tier — more CPU and memory per instance, and at the higher tiers, features like VNet integration and dedicated hardware. Scaling out means more instances of the same tier, and you can do that on a schedule, on a metric, or automatically. Both act on the plan, so both act on every app in it at once. Now, the feature that makes App Service genuinely pleasant, and the reason I would choose it over a VM for most web work: deployment slots. A slot is a fully functioning copy of your app with its own hostname, running in the same plan. You deploy the new version to a staging slot, it starts up, you point tests or a colleague at its URL, and when you are satisfied you swap. The swap does not redeploy anything — it exchanges the running instances between slots, which means your users never hit a cold start, and configuration you have marked as slot-specific stays behind. And because the previous version is now sitting in the staging slot, still warm, the rollback is swapping back. That is a genuinely good deployment story for something you configure in about a minute.",
}
