import type { Section } from '../types'

export const resourceManager: Section = {
  id: 'resource-manager',
  title: 'Azure Resource Manager',
  scene: 'every-action-is-arm',
  slide: `## Every tool you use is a client of one API

The portal, the CLI, PowerShell, Terraform and the SDKs all send the same authenticated REST request to **Azure Resource Manager**. ARM authenticates it, checks RBAC, checks policy, and hands it to the resource provider.

### What that buys you
- **One consistent story** — anything you can click, you can script, because it was always the same call
- **One place the rules live** — an action denied in the portal is denied from the CLI too
- **Idempotent deployments** — the same template applied twice converges to the same state

### Read a resource id like a path
\`/subscriptions/…/resourceGroups/…/providers/…\` — subscription, then group, then provider and type. The tree you just learned, spelled out.`,
  narration:
    "When you click Create in the Azure portal, nothing special happens. The portal is a JavaScript application, and it does exactly what your terminal does: it builds an HTTPS request and sends it to a service called Azure Resource Manager. That is worth internalising early, because it collapses a whole category of confusion. There is no portal way of doing things and a separate CLI way of doing things. There is one API, and four or five clients that all speak to it — the portal, the Azure CLI, Azure PowerShell, Terraform, and the language SDKs. Look at the card on the left. On top is a command a human types: az vm create, with a resource group, a name, an image and a size. Underneath is what actually goes over the wire. A PUT request, to management.azure.com, at a path that spells out the tree we just learned — subscription, then resource group, then the provider Microsoft dot Compute, then the type virtualMachines, then the name. An api-version, because every resource type in Azure is versioned independently. A bearer token from Microsoft Entra, which is how ARM knows who you are. And a small JSON body describing what you want. Now, what does Resource Manager do with that request? Four things, in order. It authenticates the token. It checks your role assignments to see whether you are allowed to perform this action at this scope. It checks Azure Policy to see whether a resource of this shape is even permitted here. And only then does it hand the request to the compute resource provider, which does the actual work. That ordering is why a rule you set in one place holds everywhere. If policy forbids creating a virtual machine in a region, it is forbidden from the portal, the CLI, your Terraform pipeline and a script somebody wrote in 2019 — because none of them are doing anything except calling this one API. One last habit worth forming. Read resource ids as paths. When something fails at three in the morning, the id in the error message tells you which subscription, which resource group, which provider and which object — before you have opened anything.",
}
