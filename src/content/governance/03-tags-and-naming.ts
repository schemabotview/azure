import type { Section } from '../types'

export const tagsAndNaming: Section = {
  id: 'tags-and-naming',
  title: 'Tags and naming',
  scene: 'a-name-that-answers-questions',
  slide: `## A name is a lookup you did not have to do

The CAF shape: *type-workload-environment-region-instance*. Each segment answers a question you would ask anyway.

### Two constraints, before the convention
Some names are **globally unique**, some forbid hyphens — storage accounts are both. And a name is **immutable**: renaming means recreating.

### Tags are the part that pays
- **owner** — a person, never a team
- **costCentre** — so the bill splits without a meeting
- **environment** — because the name can lie and the tag is queryable
- Tags **do not inherit** on their own. A \`modify\` policy copies them down from the resource group

### The test
Could you delete every untagged resource? If not, your tags are decoration.

> Naming makes a list readable. Tags make the bill, and the cleanup, possible.`,
  narration:
    "Naming conventions are the subject where reasonable people waste an entire afternoon, so let me give you the point of one before the shape of one. A good name is a lookup you did not have to do. When you are staring at a list of four hundred resources at eleven at night, the question is never what is this called — it is what is this, whose is it, and can I safely touch it. If the name answers those, you do not have to go and ask anybody. That is the whole value, and it is why the convention has the segments it has. The Cloud Adoption Framework shape is type, workload, environment, region, instance. Type, so you can tell a storage account from a key vault at a glance and so an alphabetical list groups itself. Workload, so you know which team to ask. Environment, and this is the one that actually prevents incidents, so that prod is visible in the name of the thing you are about to run a command against. Region, for when the same workload exists in two. Instance, for when there are ten. Two constraints to know before you design anything, because they will override your preferences. The first is that naming rules are not uniform. Some resource types must be globally unique across all of Azure, not just your tenant — a storage account is, because its name becomes a public DNS label. Some forbid hyphens, and storage accounts do that too, which is why every storage account name looks cramped compared to everything else. Some have a twenty-four character limit. So your convention needs a documented variant for the awkward types, or people will invent one each. The second constraint is bigger: a name is immutable. There is no rename. Changing a name means creating a new resource, moving the data, and deleting the old one — which for anything with state is a project. So you settle this once, early, and you write it down, and you enforce it with a policy rather than a wiki page. Now tags, which are the half of this section that actually pays for itself. A tag is a key and value on a resource, and there are only a few that matter. Owner, and it should be a person, with an email address. Not a team, not a distribution list, not the word platform — because when something needs turning off, a team does not answer email and a person does. Cost centre, because that is what turns the bill into something finance can split without a meeting. Environment, as a tag as well as in the name, because the name can lie — somebody will create something in a hurry — and a tag is queryable across the entire estate in one go. And here is the operational fact that catches everyone: tags do not inherit. Putting a cost centre on a resource group does not put it on the resources inside it, and cost analysis groups by the resource's own tags. So a resource group tagged beautifully, containing forty untagged resources, gives you exactly nothing in the bill. The fix is a policy with the modify effect, which copies the tag down from the resource group as the resource is created, and that is the single most useful policy most estates ever deploy. Let me leave you with the test I actually use, because it cuts through the argument about which tags to have. Ask: could you write a script that deletes every resource in the dev subscription that has no owner tag, and run it? If the answer is yes — you would be confident, you would not break anything important, and someone would be accountable for anything that broke — then your tagging is real. If the answer is no, then the tags are decoration, and you should fix that before adding a sixth tag to the standard.",
}
