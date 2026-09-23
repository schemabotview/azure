import type { Section } from '../types'

export const builtInRoles: Section = {
  id: 'built-in-roles',
  title: 'The built-in roles',
  scene: 'the-four-roles',
  slide: `## Owner is Contributor plus one thing

And that one thing — the ability to grant access to others — is the whole reason it should be rare.

### Reach for the specific role first
Azure ships hundreds, and the named ones are almost always a better fit than Contributor: **Storage Blob Data Reader**, **Key Vault Secrets User**, **AcrPull**, **Virtual Machine Contributor**. Searching the list takes a minute and narrows the grant by an order of magnitude.

### Management plane and data plane are different surfaces
**Contributor** on a storage account lets you reconfigure it, delete it, and read its access keys — but grants **no** direct right to read a blob. A data-plane role like *Storage Blob Data Reader* does.

> The keys are the loophole: whoever can read them can reach the data anyway. Disable key access and the distinction becomes real.`,
  narration:
    "Azure ships hundreds of built-in roles, and you will use four of them constantly. Reader can see everything in scope and change nothing. Contributor can create, modify and delete anything in scope — but cannot give access to anyone else. User Access Administrator is the mirror image: it cannot create or delete resources, but it can hand out role assignments. And Owner is Contributor plus User Access Administrator: everything, including the power to grant everything. Look at that table and notice how small the gap between Contributor and Owner really is. One column. The ability to grant access to other people. That single capability is why Owner should be rare and, ideally, not permanent — because a compromised Owner does not just own what exists, they can grant themselves and anyone else access to whatever comes next, at any scope beneath them. Now, the habit that separates a tidy estate from a messy one: go looking for the specific role before you reach for Contributor. Azure has Storage Blob Data Reader, Key Vault Secrets User, AcrPull, Virtual Machine Contributor, Network Contributor, Monitoring Reader, and hundreds more. They take a minute to find and they narrow a grant enormously. Contributor on a subscription because someone needed to restart a VM is how estates rot. There is one more distinction here that genuinely trips people up, and it is the difference between the management plane and the data plane. The management plane is Azure Resource Manager — creating, configuring and deleting resources. The data plane is the data inside them — the blobs in a storage account, the secrets in a Key Vault, the messages in a queue. They are separate surfaces with separate roles. So Contributor on a storage account lets you reconfigure it, change its network rules, and delete the whole thing — but it does not, in itself, grant the right to read a blob. To read data you want Storage Blob Data Reader. Now, the honest asterisk: Contributor can read the account's access keys, and the keys let you into the data anyway. So the separation is real only if you disable shared key access and make Entra the only way in — which is exactly what you should do, and which we will come back to when we get to storage.",
}
