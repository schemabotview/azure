import type { Section } from '../types'

export const managedIdentities: Section = {
  id: 'managed-identities',
  title: 'Managed identities',
  scene: 'no-secret-anywhere',
  slide: `## The credential you never hold

A managed identity is a service principal whose credential Azure creates, stores and rotates. Your code asks a **local endpoint** — reachable only from that resource — for a token, and uses it.

### Why this is the section that matters
There is no secret in the repository, none in the pipeline, none in a config file, none in a password manager. The class of incident that starts *"a key was committed"* stops being possible.

### Two kinds
- **System-assigned** — born with the resource, dies with it. One identity, one resource. The default choice
- **User-assigned** — a standalone resource you attach to many things, and which survives them. Use it when a fleet must share one identity, or when access has to be granted *before* the workload exists

> It only works where the platform can vouch for the caller — an Azure resource. A laptop cannot have one.`,
  narration:
    "This is the most useful thing in the course, so I want to slow down on it. Every credential problem you have ever had comes from the same root: a secret has to exist somewhere so that code can present it. It goes in a config file, or an environment variable, or a pipeline variable, or a password manager, and from there it gets copied, committed, screenshotted, pasted into a chat, and eventually leaked. A managed identity removes the secret entirely. Here is the mechanism, and it is worth understanding rather than memorising. When you enable a managed identity on a virtual machine, Azure creates a service principal in your directory for that VM, and it holds the credential — you never see it. Inside the VM, there is a local endpoint at a link-local address that only code on that machine can reach. Your application makes a plain HTTP request to it saying 'I would like a token for Key Vault'. The platform authenticates the request by virtue of where it came from — this is the Azure fabric vouching that the caller really is that VM — and hands back a bearer token issued by Entra ID for the VM's identity. The app then calls Key Vault with that token, Key Vault checks the role assignment, and returns the secret. Notice what never happened. No credential was stored, typed, deployed, or rotated by you. If somebody clones your repository, there is nothing in it to steal. And if you use the Azure SDK, you do not even write the token call — DefaultAzureCredential tries the managed identity automatically when it is running in Azure, and falls back to your own developer login when it is running on your laptop. The same line of code works in both places. There are two kinds. A system-assigned identity is created with a resource and deleted with it — one identity, one resource, tightly coupled, and it is the right default. A user-assigned identity is a standalone Azure resource you create yourself and then attach to as many things as you like, and it outlives all of them. Reach for user-assigned in two situations: when a fleet of machines should share one identity so you grant access once rather than fifty times, and when you need to grant permissions before the workload exists — which is the common case in infrastructure as code, where the deployment creates the identity first and the virtual machine afterwards. One boundary, and it is the honest limit of the feature. A managed identity only works where the Azure platform can vouch for the caller — that is, on an Azure resource. Your laptop cannot have one. For CI systems outside Azure, the equivalent is the federated credential we met in the last section.",
}
