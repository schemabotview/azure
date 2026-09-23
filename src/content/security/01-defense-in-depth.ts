import type { Section } from '../types'

export const defenseInDepth: Section = {
  id: 'defense-in-depth',
  title: 'Defense in depth',
  scene: 'the-layers-and-who-guards-them',
  slide: `## Five layers, and the service on each

Defense in depth is not a product. It is the assumption that **any one control will fail**, and the discipline of making the next one still matter.

### Outside in
- **Edge** — DDoS Protection, and a WAF on Front Door or Application Gateway
- **Network** — NSGs, Azure Firewall, Private Endpoints; nothing with a public IP that does not need one
- **Host** — Defender for Cloud, patching, Bastion instead of open RDP
- **Application** — Key Vault and a managed identity, so the code holds no credential
- **Data** — encrypted at rest, with RBAC on the **data** plane, not just the resource

### The test that makes it real
For each layer, ask what someone already **past** it can reach. If the answer is *everything*, the layers outside it were decoration.

> Most breaches are not a layer that broke. They are a layer that was never switched on.`,
  narration:
    "Defense in depth is one of those phrases that has been said so often it has stopped meaning anything, so let me give it back its meaning. It is not a product you buy and it is not a checklist you complete. It is a single assumption, and the assumption is this: any one control you put in place will eventually fail. Somebody will misconfigure it, somebody will get a valid credential, somebody will find a flaw in it. Defense in depth is what you do once you have accepted that — you arrange things so that the failure of any one control still leaves an attacker facing another one. That is all it is. Now, Azure gives you five places to put a control, and the useful thing is that they nest. Start from the outside. The edge is anything reachable from the public internet, and there are two things there: DDoS Protection, which absorbs volume, and a web application firewall, which inspects the request itself. Inside that is the network. Once traffic is in your virtual network, network security groups decide which subnet can talk to which, Azure Firewall inspects what leaves, and private endpoints mean your database is not on the internet at all. Inside that is the host — the virtual machine, the container node, the app service plan. That is Defender for Cloud, that is patching, and that is using Bastion rather than leaving remote desktop open to the world. Inside that is the application itself, and this is the layer people skip. The application layer is about what the code holds. If your app has a connection string in a config file, you have handed an attacker who reaches that file everything below it. Key Vault and a managed identity are how you make that file boring. And at the centre is the data, encrypted at rest, with role assignments on the data plane and not only on the resource — because being denied the right to manage a storage account means nothing if you can still read its blobs. Here is the test that turns this from a diagram into a decision. Take each layer in turn and ask: someone is already past this one. What can they reach? If the answer is everything, then everything outside that layer was decoration — you did not have five layers, you had one, drawn five times. And I want to be honest about how this actually goes wrong in practice, because it is not dramatic. It is very rarely a layer that was properly configured and then broke. It is almost always a layer that was never switched on: the DDoS plan nobody bought, the diagnostic setting nobody enabled, the network security group that still says allow-any because it was going to be tightened after launch. The rest of this course is those five layers, one at a time, and what switching each one on actually involves.",
}
