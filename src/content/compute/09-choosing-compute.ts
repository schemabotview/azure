import type { Section } from '../types'

export const choosingComputeSection: Section = {
  id: 'choosing-compute',
  title: 'Choosing compute',
  scene: 'choosing-compute',
  slide: `## Three questions, in this order

**Who patches the OS · what does it scale on · what does it cost while idle.** Feature comparisons change every year; these three you will feel every month.

### The default I would argue for
Start at the managed end and move down only when something forces you. A VM is the answer when you need a specific OS, a licensing arrangement, a kernel module, or a piece of software that assumes a machine — not because it feels more familiar.

### What actually forces the choice
- **A lift-and-shift with no source changes** → virtual machines
- **A web app or API your team wrote** → App Service, or Container Apps if it is containerised
- **Something spiky, event-driven, or idle most of the day** → Container Apps or Functions, for the scale to zero
- **You are already running Kubernetes, or you need its ecosystem** → AKS

> Next: storage — where all of this keeps its state, because none of these options should be keeping it on a local disk.`,
  narration:
    "Let's close the course by making the choice explicit, because in practice this decision is usually made by habit rather than by reasoning. Three questions decide it, and they are the three you will still be feeling in six months. First: who patches the operating system? On a virtual machine or an AKS node, that is you — forever, on a cadence, including the reboots. On App Service, Container Apps and Functions, that is Azure, and it happens without you knowing. Second: what does it scale on? A VM scales when a person decides. A scale set scales on a metric rule you wrote. App Service scales instances within a plan. AKS scales pods, and then nodes underneath them if the cluster autoscaler is on. Container Apps scales on requests or on an event source, and Functions scales per invocation. The finer the unit, the closer your bill tracks your actual load. Third: what does it cost while nothing is happening? This is the question people forget, and it is often the decisive one. A virtual machine at three in the morning costs exactly what it costs at midday. An App Service plan costs the plan. But Container Apps and consumption-plan Functions can scale to zero, and an internal service that is used twice a day genuinely costs almost nothing. My default, and I will defend it: start at the managed end and move down the ladder only when something forces you. The forcing reasons are real and specific. A lift-and-shift of software you cannot modify — that is a virtual machine. A licensing arrangement that requires a particular host or a particular kernel module — a virtual machine. An application your own team wrote, deployed as code or as a container — App Service or Container Apps, and you should have to argue to be allowed a VM instead. Something spiky or event-driven — Container Apps or Functions. Already running Kubernetes, or genuinely needing its ecosystem — AKS, with your eyes open about the upgrade treadmill. Notice what is not on the list: familiarity. Choosing a VM because it feels like the server you have always had is how teams end up patching operating systems for an application that never needed one. Next we go to storage — which is where every one of these options should be keeping its state, because none of them should be keeping it on a local disk.",
}
