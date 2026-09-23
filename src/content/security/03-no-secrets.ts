import type { Section } from '../types'

export const noSecrets: Section = {
  id: 'no-secrets',
  title: 'An app with no secrets',
  scene: 'a-token-instead-of-a-password',
  slide: `## The credential you do not have cannot leak

A **managed identity** is a service principal in Entra ID whose lifecycle Azure owns. No password is ever issued, so none can be committed, logged or rotated late.

### How the app gets a token
The platform exposes a local endpoint only that resource can reach. \`DefaultAzureCredential\` calls it, gets a short-lived token for the scope it asked for, and sends it. Nothing is stored.

- **System-assigned** — born and dies with the resource. One identity, one thing
- **User-assigned** — a resource of its own, shared by several. Survives a redeploy

### The move that pays for itself
The same identity authenticates to **Key Vault, Storage, SQL, Service Bus and Cosmos**. Grant it a role at the right scope and the connection string stops existing everywhere at once.

> Key Vault holds the secrets you cannot avoid. Managed identity is how you avoid the rest.`,
  narration:
    "The previous section ended on a problem, so let me state it plainly. You have moved every secret into Key Vault. Excellent. Now — how does your application authenticate to Key Vault? If the answer is a client secret in a config file, then you have not removed a credential from your deployment, you have replaced many credentials with one, and that one now opens everything. That is genuinely better, but it is not the goal. The goal is an application that holds no credential at all, and managed identity is how you get there. Here is what a managed identity actually is. It is a service principal in Entra ID — the same kind of object as any application identity — except that Azure creates it, Azure owns its lifecycle, and no password or certificate is ever issued for it. There is nothing to put in a config file because nothing was ever handed to you. And a credential that does not exist cannot be committed to a repository, cannot be printed into a log, and cannot be left un-rotated for three years. Now, how does the code get in without a credential? The platform gives the resource a local endpoint, on a link-local address, that only that resource can reach. Your app calls it and says: I would like a token for Key Vault. The platform proves the caller's identity by virtue of where the request came from, goes to Entra, and hands back a short-lived access token scoped to what was asked for. The app puts that token in the authorization header. In practice you do not write any of that, because the Azure SDKs have a credential type that finds whatever identity is available — managed identity in Azure, your signed-in developer account on your laptop — so the same line of code works in both places with nothing conditional in it. Two flavours, and the choice is real. A system-assigned identity is born with the resource and deleted with it. One resource, one identity, tidy, and the right default. A user-assigned identity is a resource in its own right, which means several things can share it and it survives a redeploy — which matters, because a system-assigned identity that is destroyed and recreated is a new principal, and every role assignment you made to the old one is now pointing at a ghost. If you tear environments down and rebuild them, user-assigned will save you that phone call. And here is the thing that makes this more than a Key Vault trick, and the reason the picture forks the way it does. That same identity and that same token mechanism authenticate to storage accounts, to Azure SQL, to Service Bus, to Cosmos DB — to essentially everything with a data plane. Which means this is not a technique for one service. Grant the identity the right role at the right scope in that management group, subscription, resource group tree, and the connection string stops existing for all of them at once. Key Vault, in the end, is for the secrets you cannot avoid — a third-party API key, a legacy database that only knows passwords. Managed identity is how you make that list as short as it can possibly be.",
}
