import type { Section } from '../types'

export const containers: Section = {
  id: 'containers',
  title: 'Running containers',
  scene: 'the-container-ladder',
  slide: `## Same image, four homes

The image is built once and pushed to a **Container Registry**. What differs is what runs it — and the difference is how much cluster you are agreeing to own.

### Reading the ladder
- **Container Instances** — one container, no orchestrator, running in seconds. A batch job, a build agent, something short-lived
- **Container Apps** — HTTP and event-driven services with revisions, ingress and **scale to zero**. Kubernetes is underneath; you never see it
- **Kubernetes Service** — a real cluster, because you need what Kubernetes gives you: operators, custom schedulers, an ecosystem, a platform team

### Choose by what you will operate
If nobody on the team wants to own node pools, version upgrades and cluster networking, Container Apps is the honest answer. Picking AKS for a three-service application buys an operational burden the application never asked for.`,
  narration:
    "Once an application is containerised, Azure gives you four places to put it, and the only interesting question is how much cluster you want to own. Start with where the image lives. Azure Container Registry is a private registry: you push images to it, it scans them for vulnerabilities, it can replicate them to other regions, and — importantly for what we learned in identity — your compute pulls from it using a managed identity with the AcrPull role, rather than a stored credential. Everything below pulls from here. The simplest place to run one is Container Instances. You give it an image and it runs, in seconds, with no cluster and no orchestrator. It is billed per second. It is perfect for a batch job, a scheduled task, an ephemeral build agent — anything that starts, does a thing, and stops. It is not designed for a long-running service with rolling updates, because there is no orchestration: there is a container, and it is either running or it is not. Next is Container Apps, and this is where a great many teams should land. It runs containerised services with the things a service needs — ingress, revisions, traffic splitting between them, secrets, and both HTTP-based and event-based autoscaling that goes all the way down to zero instances when nothing is happening. Under the hood it is Kubernetes, with KEDA and Dapr available, but you never touch a node, never run an upgrade, and never see a YAML manifest unless you want to. Scale to zero is the part that changes cost conversations: an internal service used twice a day costs nearly nothing while it idles. Then there is Azure Kubernetes Service, and my honest advice is to choose it because you want Kubernetes, not because you want containers. If your team needs operators, custom schedulers, service meshes, the ecosystem of Helm charts, or you are already running Kubernetes elsewhere and want consistency — AKS is excellent and we will look at it next. If you have three services and nobody who wants to own node pools and quarterly version upgrades, choosing AKS buys an operational burden your application never asked for. The ladder is about ownership. Pick the rung where you are genuinely willing to do the work.",
}
