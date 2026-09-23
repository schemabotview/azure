import type { Section } from '../types'

export const resourceGroups: Section = {
  id: 'resource-groups',
  title: 'Resource groups',
  scene: 'one-lifecycle',
  slide: `## Not a folder. A lifecycle.

Every resource is in exactly one resource group, and deleting the group deletes everything in it. That single fact is the whole design rule.

### The test
**Would you delete these on the same day?** If yes, one group. If no, two.

An app, its database, its Key Vault and its telemetry are born and die together — one group. A hub network, a DNS zone and a shared log workspace outlive every app that ever used them — somewhere else.

### Two things people get wrong
- A group's **region** only stores its metadata; resources inside it can live anywhere
- A resource can be **moved** between groups, but not every type supports it — check before relying on a tidy-up later`,
  narration:
    "A resource group looks like a folder, and that is the wrong mental model — it's the one that produces a group called prod with four hundred things in it that nobody can ever safely delete. A resource group is a lifecycle boundary. Here is the test, and it is the entire design rule: would you delete all of these on the same day? If the answer is yes, they belong in one group. If the answer is no, they don't. Look at the left of the figure. An App Service, the Azure SQL database it talks to, the Key Vault holding its connection string, and the Application Insights instance collecting its telemetry. Those four things were created for one application in one environment. When that application is decommissioned, all four should go, and deleting the group does exactly that in one action — which, incidentally, is the tidiest way to clean up a proof of concept. Now look at the right. A hub virtual network that every workload peers into. A DNS zone for the company's domain. A Log Analytics workspace that every application writes to. An image gallery every VM is built from. None of those belong to the application; they outlive it, and they're shared by things that know nothing about each other. They go in their own groups — usually owned by a platform team, often in their own subscription. Two details that catch people out. First, a resource group has a region, and it is not the region of the things inside it. The group's region only says where its own metadata lives; a group in East US can perfectly well contain a VM in West Europe. It matters in exactly one scenario: if that region is unavailable, you may be unable to change the group's metadata, even if the resources are healthy elsewhere. Second, resources can be moved between groups and even between subscriptions — but support varies by resource type, and some moves require downtime. So don't lean on a future tidy-up. Put things in the right group the first time, and let the delete test decide.",
}
