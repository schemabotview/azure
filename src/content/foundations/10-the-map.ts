import type { Section } from '../types'

export const theMap: Section = {
  id: 'the-map',
  title: 'The map from here',
  scene: 'the-platform-map',
  slide: `## Six layers, eleven courses, one order

The arc is not Azure's service catalogue in alphabetical order. Each course adds one layer of the mental model, and later courses assume the ones before them.

### What you can already do
Read a resource id, place any resource in the tree, name the boundary you are working inside, and predict where a control has to attach to reach it.

### What comes next, and why in this order
**Identity** first, because nothing should be deployed before you know who may act on it. Then **compute**, **storage** and **networking** — the three things every workload is made of. Everything after that is a specialisation or a discipline applied to what those five built.`,
  narration:
    "Let's close the course by putting the whole platform on one page, because the order of what follows is not arbitrary and it is worth knowing why. Look at the layers on the left. Ground is where we are now: the scope tree, and then identity — who may act, at which level. Run and store is the workload itself: compute, in every form from a virtual machine you patch yourself up to a managed Kubernetes cluster; storage, from a blob container to a data lake; and databases, relational and otherwise. Connect is the path in and out: virtual networks, the load balancers and gateways in front of them, and the private paths between them — plus the integration services that let parts of a system talk without being wired directly together. Analyse is what you do with the data once it has accumulated. Protect is the set of services whose whole job is that nothing above goes wrong. And operate is the discipline of running all of it on purpose rather than by accident: policy, monitoring, cost and infrastructure as code. Now, why this order? Because each layer assumes the one before it. Identity comes immediately, before we deploy a single thing, because every later course will hand something a permission and I want that to be a decision rather than a default. Compute, storage and networking come next because every workload in Azure, without exception, is some combination of those three. Everything after that is either a specialisation — a database is storage with opinions, a function is compute with a shorter life — or a discipline applied across the lot. What can you already do, after this course? More than it feels like. You can read a resource id and know exactly what you're looking at. You can place any resource in the tree. You can name the boundary you're working inside, and say whether it is about billing, quota, policy or lifecycle. And when someone asks why a permission or a rule isn't taking effect, you know the first question to ask: at what scope was it attached? Next, we go to identity — Microsoft Entra ID, and the role assignments that hang off the tree you just learned.",
}
