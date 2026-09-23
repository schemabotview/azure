# Azure — GraphL concept app

Video-shaped Azure course: **104 sections across eleven courses**, each section a
`(scene, slide, narration)` triple rendered full-frame — a diagram or code card on the left, a
markdown slide on the right, spoken narration over the top.

> For the engineer who can click through the portal and still cannot say *why* a permission did not
> take effect.

## The model

- **concept ⊃ course ⊃ section.** A section is the atomic unit of a video: one scene, one slide, one
  narration track.
- **Scenes are declarative.** Authors list nodes, edges and nesting; `@graphlearning/flow` computes
  every position — no hand-placed coordinates, so captures are reproducible.
- **The shell is a package.** The router, section view, slide panel, catalog and narration all come
  from `@graphlearning/shell`; this repo supplies content, scenes and three brand tokens.

## The arc

| # | course | what it teaches |
|---|--------|-----------------|
| 1 | `foundations` | what Azure is, the scope tree, ARM, and how a bill is built |
| 2 | `identity` | Microsoft Entra ID and RBAC |
| 3 | `compute` | VMs, scale sets, App Service, containers, AKS |
| 4 | `storage` | storage accounts, blob, redundancy, ADLS |
| 5 | `networking` | VNets, NSGs, hybrid, load balancing, Private Link |
| 6 | `databases` | Azure SQL, Cosmos DB, PostgreSQL, cache |
| 7 | `serverless` | Functions, Logic Apps, Event Grid, Service Bus, APIM |
| 8 | `data` | ADLS, Data Factory, Fabric, Synapse, streaming |
| 9 | `security` | Key Vault, encryption, Defender, Sentinel |
| 10 | `governance` | Policy, landing zones, cost, Monitor, KQL, Bicep |
| 11 | `project` | capstone — design and justify a whole system |

Courses 1–5 are the shippable prefix. The full section plot is in
[`COURSE-PLAN.md`](./COURSE-PLAN.md).

## Run it

```bash
npm install
npm run dev        # the app, hash-routed: #/foundations-the-resource-model
npm run build      # must stay clean
npx tsc --noEmit   # must stay clean
npm run check      # content budget guard: card overflow, slide clipping, missing wavs
```

## Authoring

- A **scene** goes in `src/scenes/<course>/`, registered in that folder's `index.ts`.
- A **section** goes in `src/content/<course>/`, listed in that folder's `index.ts`.
- The slide is the eye, the narration is the ear — they say the same thing at different speeds, and
  neither restates the figure on the left.

Nothing is done until it has been seen rendered in the browser.
