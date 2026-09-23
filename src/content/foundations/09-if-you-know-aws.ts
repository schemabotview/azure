import type { Section } from '../types'

export const ifYouKnowAws: Section = {
  id: 'if-you-know-aws',
  title: 'If you already know AWS',
  scene: 'aws-to-azure',
  slide: `## Most of it is a rename. Three things are not.

The service map transfers almost intact — and then there are three places where the model itself differs, and translating instead of re-learning is what trips people.

### The three real differences
- **The scope tree.** An AWS account maps to a subscription, but Azure adds resource groups below and management groups above — and RBAC, policy and cost all attach to a level of it.
- **Identity is two systems.** Entra ID is a directory of users, groups and applications. RBAC is role assignments on resources. IAM is both at once; here they are separate, and you will configure them separately.
- **Resource groups are mandatory.** Every resource is in exactly one, chosen at creation. There is no ungrouped resource.

### Everything else
Read the third column of the table, not the first two.`,
  narration:
    "A lot of people arrive at Azure already fluent in AWS, and the good news is that most of that knowledge transfers directly. A virtual machine is a virtual machine. Blob Storage is object storage. A virtual network is a virtual network with a different name. If that is you, the table on the left will get you productive in an afternoon — but read the third column, because that is where the translation stops working. There are three places where the model genuinely differs, and these are the ones that cause the confused ticket a month in. The first is the scope tree. In AWS, the account is the primary container, and organisations sit above it. In Azure, the subscription is roughly the account — but there is a level below it that is mandatory, the resource group, and levels above it that are common, the management groups. That extra structure is not decoration: role assignments, policy and cost all attach to a level of that tree and inherit downward, so where you attach something is a real design decision rather than a filing choice. The second is identity, and this is the big one. AWS IAM is a single system that holds your users and your permissions together. Azure splits that in two. Microsoft Entra ID is a directory: it holds users, groups, and application identities, and it handles sign-in, multi-factor authentication and conditional access. Azure RBAC is a separate system of role assignments that says which of those identities may do what, at which scope in the tree. You will configure them in two different places, and a permission problem is always a question of which of the two is refusing you. The third is that resource groups are not optional. Every resource belongs to exactly one, and you choose it at creation. There is no equivalent of a loose resource sitting in a region. And one honest word about terminology: Azure renames things more often than AWS does. Azure Active Directory became Microsoft Entra ID. Synapse absorbed SQL Data Warehouse and is now being absorbed by Fabric. If a name you learned last year has moved, that is normal — the underlying model is far more stable than the marketing is.",
}
