# Azure — course plan

The full section plot for the eleven-course spine. `CLAUDE.md` is the operational summary; this is
the detail.

**104 sections across 10 courses + a capstone.** Courses 1–5 (48 sections) are the shippable prefix.
**Authored: `foundations` · `identity` · `compute` · `storage` · `networking` — 48 sections, the whole shippable prefix. Courses 6-11 are declared with `sections: []`.**

Three decisions taken before a line is authored:

- **Architect's build-up, not an exam cram.** Same shape as `../aws`: each course teaches one layer
  of the mental model. AZ-900 falls out of courses 1–2 + 10; AZ-104 is ~80% covered, incidentally.
- **The scope tree is taught early and used everywhere.** Management group → subscription → resource
  group → resource is the thing Azure has that AWS does not, and RBAC, Policy, cost and locks all
  hang off it. It lands in `foundations` (03–06) and is assumed from `identity` onward.
- **The quarry is an inventory, not a script.** `schemabotview/azure` (14 AZ-104 notebooks + wavs)
  is what breadth is benchmarked against. Narration is authored fresh; its wavs are never reused.

---

## 01 · `foundations` — What Azure Is (10)

1. `what-is-azure` — what you actually rent, and the three-provider landscape in one honest sentence
2. `global-infrastructure` — geography → region → region pair → availability zone; plus sovereign clouds
3. `the-resource-model` — management group → subscription → resource group → resource: the tree everything hangs from
4. `resource-manager` — every action is a REST call to ARM; portal, CLI, PowerShell and Terraform all funnel through one plane
5. `subscriptions` — the billing, quota and policy boundary; when a second one is the right answer
6. `resource-groups` — a lifecycle boundary, not a folder; what genuinely belongs together
7. `shared-responsibility` — IaaS / PaaS / SaaS and the line that moves under you
8. `pricing-model` — pay-as-you-go, reservations, savings plans, spot; where a bill actually comes from
9. `if-you-know-aws` — the service-name map, and the three places the model genuinely differs
10. `the-map` — the whole platform as one diagram, and the ten courses laid over it

## 02 · `identity` — Entra ID & RBAC (10)

1. `entra-is-not-ad` — a directory for cloud apps, not a domain controller; what Domain Services is for
2. `tenants` — one tenant, many subscriptions; the trust edge, and what moving a subscription means
3. `users-and-groups` — members vs guests, dynamic groups, and group-based everything
4. `service-principals` — app registration vs enterprise app: identity for code
5. `managed-identities` — system- vs user-assigned; the credential you never store
6. `rbac` — a role assignment is principal + role + scope, and it inherits down the tree
7. `built-in-roles` — Owner / Contributor / Reader / User Access Administrator, and picking narrow
8. `custom-roles` — actions, notActions, dataActions, and the sharp edge of deny assignments
9. `conditional-access` — the policy engine that decides whether a sign-in survives
10. `pim-and-reviews` — standing access is the risk: just-in-time elevation and access reviews

## 03 · `compute` — VMs to AKS (9)

1. `vm-anatomy` — a VM is five resources, not one: NIC, disk, NSG, public IP, and the VM itself
2. `sizing` — the letter series (B/D/E/F/N/M) and reading a size name
3. `disks-and-images` — managed disk tiers, ephemeral OS disks, images and compute galleries
4. `availability` — availability sets vs zones vs region pairs, and the SLA each one buys
5. `scale-sets` — VMSS, autoscale rules, uniform vs flexible orchestration
6. `app-service` — PaaS web hosting: plans, deployment slots, scale-out vs scale-up
7. `containers` — ACR → ACI → Container Apps → AKS, and what each is actually for
8. `aks` — a managed control plane, node pools, and what you still own
9. `choosing-compute` — the decision board, from a VM you patch to a function you forget

## 04 · `storage` — Accounts, Blob & the Lake (9)

1. `storage-account` — the one resource four services live inside
2. `blob` — containers and blobs; block vs append vs page, and why the distinction matters
3. `access-tiers` — hot / cool / cold / archive, rehydration, and lifecycle rules
4. `redundancy` — LRS / ZRS / GRS / RA-GRS: exactly what each one survives
5. `files-and-disks` — SMB shares, NetApp Files, managed disks; picking between them
6. `adls-gen2` — the hierarchical namespace: one flag turns blob storage into a data lake
7. `data-access-control` — account keys → SAS → Entra RBAC on the data plane, in the order to prefer
8. `storage-networking` — firewalls, service endpoints, private endpoints, and killing public access
9. `moving-data` — AzCopy, Storage Mover, Data Box: the commands, as an artifact

## 05 · `networking` — VNets to Front Door (10)

1. `vnet` — address space, subnets, and the boundary everything else is placed inside
2. `nsg` — rules, priority, default rules, and where an NSG attaches
3. `routing` — system routes, user-defined routes, and what BGP changes
4. `egress` — NAT Gateway, Azure Firewall, and the NVA; default outbound access going away
5. `peering` — VNet peering, non-transitivity, and hub-and-spoke
6. `hybrid` — VPN Gateway vs ExpressRoute vs Virtual WAN
7. `load-balancer` — L4: frontend, backend pool, health probe, rule
8. `app-gateway-and-front-door` — L7 regional vs global, WAF, and Traffic Manager's remaining job
9. `private-link` — service endpoints vs private endpoints, and the DNS that makes them work
10. `hub-and-spoke` — the reference topology, assembled from every piece above

## 06 · `databases` — SQL, Cosmos & Cache (9)

1. `the-choice` — relational, document, key-value, cache: the board
2. `azure-sql-database` — the PaaS SQL Server; DTU vs vCore, serverless, elastic pools
3. `managed-instance` — when lift-and-shift needs the instance surface back
4. `sql-on-a-vm` — the third option, and why it is the last resort
5. `cosmos-db` — the API surface, and what "planet-scale" costs
6. `partitions-and-rus` — the partition key decision you cannot undo, priced in RU/s
7. `consistency` — the five levels, and the latency each one buys
8. `postgres-and-redis` — flexible server, and caching as a first-class tier
9. `migration` — assessment, DMS, cutover, and the rollback nobody plans

## 07 · `serverless` — Functions, Events & Integration (9)

1. `functions` — triggers and bindings: the unit of code
2. `hosting-plans` — consumption, premium, dedicated, Flex; cold start as a design constraint
3. `durable-functions` — orchestration written as code
4. `logic-apps` — the connector lane, and where low-code beats code
5. `event-grid` — events vs messages: the distinction the rest of the course rests on
6. `event-hubs` — the high-throughput ingest pipe, partitions and consumer groups
7. `service-bus` — queues, topics, sessions, dead-letter
8. `api-management` — the front door for APIs: products, policies, versions
9. `event-driven-walk` — one order, followed end to end through all of it

## 08 · `data` — The Analytics Estate (9)

1. `the-data-platform` — the whole estate in one picture: ingest, land, transform, serve
2. `the-lake` — ADLS zones (bronze / silver / gold) and folder design that survives contact
3. `data-factory` — pipelines, activities, and the integration runtime
4. `orchestrate-vs-transform` — when ADF does the work and when it should call something that can
5. `fabric` — OneLake, lakehouse vs warehouse, and shortcuts
6. `synapse` — dedicated SQL pools, and where they still legitimately fit
7. `databricks-on-azure` — the relationship, and who owns which half
8. `streaming` — Event Hubs → Stream Analytics → sink, with the windowing that makes it useful
9. `purview` — catalog, lineage and classification: governance for data, not resources

## 09 · `security` — Protecting What You Built (9)

1. `defense-in-depth` — the layers, and which Azure service sits on each
2. `key-vault` — secrets, keys, certificates; access policies vs RBAC
3. `no-secrets` — an app that holds no credential at all: managed identity end to end
4. `encryption` — at rest and in transit; platform keys vs customer-managed keys
5. `defender-for-cloud` — secure score, recommendations, and the plans worth paying for
6. `ddos-and-waf` — the edge protections, and what they do not cover
7. `sentinel` — SIEM: what it actually is, and when a team is ready for one
8. `zero-trust` — the principle applied to the exact architecture built in courses 1–8
9. `the-checklist` — what a subscription needs before production traffic touches it

## 10 · `governance` — Policy, Cost, Monitoring & IaC (10)

1. `why-governance` — the subscription that grew teeth, and the four controls that stop it
2. `azure-policy` — definitions, initiatives, and effects: audit, deny, deployIfNotExists
3. `tags-and-naming` — CAF naming, tag inheritance policies, and what tags are really for
4. `landing-zones` — the Cloud Adoption Framework enterprise-scale shape
5. `cost-management` — budgets, alerts, cost analysis, and reservations actually applied
6. `monitor` — metrics vs logs, and Log Analytics as the one sink
7. `kql` — the query language you cannot read a single log without
8. `alerts` — action groups, dashboards, workbooks, and alert fatigue
9. `backup-and-dr` — Azure Backup, Site Recovery, and RTO/RPO stated as numbers
10. `bicep` — ARM vs Bicep vs Terraform; a resource group as code

## 11 · `project` — Capstone (10)

1. `the-brief` — the system to be shipped, and its non-negotiables
2. `landing-zone` — management groups, subscriptions, policy baseline
3. `identity-design` — who and what may act, at which scope
4. `network-design` — the hub, the spokes, the private path
5. `the-application` — compute and data tiers chosen and justified
6. `the-data-path` — ingest to served table
7. `security-review` — walk the checklist against the design
8. `observability` — what is logged, what alerts, who is paged
9. `cost-review` — the monthly bill, estimated line by line
10. `well-architected` — the five pillars as the finale

---

## Decisions taken

Recorded so they can be argued with, not rediscovered.

| Call | Why | Cost of reversing |
|---|---|---|
| The **scope tree** is taught in `foundations` (§03–§06), not in a governance course at the end | RBAC, Policy, cost and locks all attach to a level of it, so every later course needs it on day one. It is also the single biggest difference from AWS. | High — four sections and the spine of the first course. |
| **Azure icons shipped in the engine** (`@graphlearning/flow` 0.7.0, 134 keys) before authoring began | A vendor concept's scenes lean on service tiles; retrofitting ~100 scenes would mean re-reviewing every frame. | Zero now; it was the expensive option only if deferred. |
| `identity` is course 2, before anything is deployed | Every later course hands something a permission. Teaching it first makes that a decision rather than a default. | Low until its wavs exist. |
| `data` (08) is one course, not a data-engineering arc | The workspace already carries `databricks-data-engineer`, `apache-spark`, `dbt` and `data-warehousing`. This course names Azure's data surface and points at those. | Zero — it is additive to split later. |
| `project` (11) is the trimmable tail | Nothing before it points forward, so the capstone can be cut, deferred or appended late without touching 1–10. | Zero. |
| Deliberately **out of scope** | HDInsight, Azure Stack, Arc beyond one mention, AI Foundry / Azure OpenAI, Power Platform. | Each is additive. |

## House rules for this repo

1. **No volatile version numbers in narration.** A wav cannot be edited and Azure renames services
   often. "Recent versions" is spoken; the exact name or api-version goes on the slide, which is
   editable. Where a rename has already happened (Azure AD → Entra ID), say the current name and
   mention the old one once.
2. **No course cross-references by number.** Neighbours are named ("when we built the scope tree"),
   never numbered — that is what lets 1–5 ship as a prefix and keeps a later reorder free.
3. **Every CLI snippet must be real.** A command that only illustrates teaches a wrong habit; the
   `az` lines in a scene should run against a real subscription.
4. **Benchmarked against the quarry, not ported from it.** `schemabotview/azure`'s 14 AZ-104
   notebooks are an inventory of topics. Narration is authored fresh and its wavs are never reused.
