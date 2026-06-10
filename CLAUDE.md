# Azure Learning Content Repo

## Role
You are an Azure expert and content creator. This repo contains educational content covering Azure concepts, targeting the AZ-900 (Azure Fundamentals) and AZ-104 (Azure Administrator) certifications and general Azure architecture knowledge.

See `../CLAUDE.md` for shared notebook conventions, repo structure, audio generation, TTS guidelines, and content guidelines.

## Content Guidelines

- Use real-world analogies to explain Azure concepts
- Prefer the `azure-mgmt-*` Python SDKs or Azure CLI for code examples, choosing whichever is more illustrative
- Emphasise architectural decision-making: when to use which service and why
- Draw comparisons to AWS equivalents where helpful (e.g. Azure Blob Storage ≈ S3, Azure VNet ≈ VPC)

## Consolidation Plan — 14 Notebooks

The original layout (23 planned topics) is being consolidated to **14 notebooks** for better retention, mirroring the `aws` approach. Each notebook targets **20–30 min of audio (~3,000–4,200 words `.tts`)** so the `.tts` word budget is a hard constraint, not a target.

### Per-notebook shape

The shape is content-driven, not template-driven. There is no fixed checklist that every section must satisfy — the goal is a clear, natural explanation of the topic.

- **Opening** — start teaching the topic directly. No "what this notebook covers" preamble, no learning-objectives list, no "when to reach for this" decision matrix. Open with the concept itself — the problem it solves, an analogy, or a definition — and let the content unfold from there. The filename announces the subject; the sections deliver it.
- **Per-service sections** — let each service dictate its own structure. An analogy, a code snippet, or a comparison appears when it genuinely helps understanding — not because a template requires one of each. Some services need an `azure-mgmt-*` or Azure CLI example; some are better explained in prose alone. Trust the content.
- **Visuals: prefer the NodeMap, allow ASCII where it earns its keep** — these notebooks are consumed inside the **NodeMap** app: a 3D R3F diagram in the left panel, the notebook in the right panel, played in parallel with audio. Don't restate what the 3D diagram already shows. But Azure has dense hierarchical and topological structures (Management Group → Subscription → Resource Group → Resource; region pairs; VNet/subnet/NSG layering; AKS node pools) where a compact inline ASCII sketch (~60 chars wide) conveys more in less space than prose. Use ASCII when it clarifies; skip it when the NodeMap already covers it. The `.tts` must describe the structure in prose either way — TTS skips ASCII.
- **No exam framing** — the study flow is to learn Azure deeply, not to drill AZ-900/AZ-104 questions. Don't add "exam gotcha" callouts, scenario questions, or keyword playbooks as a separate layer. If a nuance matters, write it inline as part of the concept. Exam-blueprint coverage will emerge from teaching the services properly, not from tagging exam moments.
- **AWS comparisons inline** — where an Azure service maps cleanly to a familiar AWS one (Blob ≈ S3, VNet ≈ VPC, Entra ID ≈ IAM, Cosmos DB ≈ DynamoDB), drop a short comparison in prose. Don't build a parallel "AWS equivalents" table at the end — weave it where it earns its keep.
- **Closing** — end when the topic is fully explained. No mandatory comparison table or quiz. Include a comparison only when two services are genuinely confusable (Service Bus vs Event Grid vs Event Hubs, Load Balancer vs Application Gateway vs Front Door, Availability Set vs Availability Zone vs Scale Set) and the comparison is pedagogically necessary — not as a closer.
- **Scope discipline** — the audio word budget (~3,500 words ≈ 25 min) is the hard constraint. Cut: redundant restatement of the same idea, exhaustive parameter dumps, deprecated features, CLI/SDK minutiae the reader can look up, and "complete" coverage of every sub-service. Keep: whatever is needed to build a correct mental model that pairs with the 3D diagram.

### Target structure

| # | New notebook | Rolls up old # | Audio target | Status |
|---|---|---|---|---|
| 01 | `01-cloud-and-azure-foundations` | 01, 02 | ~22 min | — |
| 02 | `02-identity-governance-and-access` | 03, 04 | ~28 min | — |
| 03 | `03-compute-core-vms-scale-sets-and-availability` | 05, 06 | ~28 min | — |
| 04 | `04-app-service-functions-and-containers` | 07, 08 | ~28 min | — |
| 05 | `05-storage-blob-files-disks-and-tiers` | 09, 10 | ~28 min | — |
| 06 | `06-networking-vnets-peering-vpn-and-expressroute` | 11, 12 | ~26 min | — |
| 07 | `07-traffic-load-balancer-app-gateway-front-door-dns` | 13, 14 | ~26 min | — |
| 08 | `08-relational-databases-and-caching` | 15 (SQL), 16 | ~25 min | — |
| 09 | `09-nosql-and-analytics` | 15 (Cosmos), new | ~26 min | — |
| 10 | `10-integration-and-messaging` | 17 | ~25 min | — |
| 11 | `11-security-services` | 19, 20 | ~25 min | — |
| 12 | `12-observability-and-governance` | 18 | ~25 min | — |
| 13 | `13-devops-ha-dr-and-migration` | 21, new | ~28 min | — |
| 14 | `14-well-architected-cost-and-az-104-exam-prep` | 22, 23 | ~22 min | — |

Status legend: `text only` = `.ipynb` + `.tts` published, audio pending. `—` = not started.

**Total runtime:** ~6.1 hours of audio.

### Per-notebook core sections

- **01 Cloud & Azure Foundations** — cloud models (IaaS/PaaS/SaaS), shared responsibility, Azure Resource Manager & resource groups, subscriptions & management groups primer, Regions/Availability Zones/Region pairs, sovereign clouds (Government, China), edge services overview, choosing a region.
- **02 Identity, Governance & Access** — Entra ID (tenants, users, groups, app registrations, service principals), Conditional Access & MFA, B2B/B2C, hybrid identity (Entra Connect), RBAC (built-in vs custom roles, scope hierarchy, role assignments), Azure Policy (definitions, initiatives, effects, exemptions), management groups & subscription governance, Blueprints (deprecation note), resource locks & tags.
- **03 Compute Core — VMs, Scale Sets & Availability** — VM families & sizing, image gallery & custom images, pricing models (Pay-as-you-go, Reserved, Spot, Savings Plans, Hybrid Benefit), managed disks (OS/data/temp), NICs & accelerated networking, proximity placement groups, Availability Sets vs Availability Zones vs Regions, VM Scale Sets (uniform vs flexible, autoscale rules, instance protection, rolling upgrades), Azure Dedicated Host.
- **04 App Service, Functions & Containers** — App Service plans (tiers, scale-out vs scale-up, deployment slots, custom domains/TLS, VNet integration), Azure Functions (triggers/bindings, consumption vs premium vs dedicated, cold starts, durable functions), Container Instances (ACI) for burst/jobs, AKS (node pools, system vs user, networking modes, ingress, autoscaler & KEDA), Container Apps (Dapr, KEDA, revisions), ACR (geo-replication, tasks, content trust), when-to-choose-what decision tree.
- **05 Storage — Blob, Files, Disks & Tiers** — Storage account kinds & redundancy (LRS/ZRS/GRS/RA-GRS/GZRS), Blob (block/page/append, access tiers Hot/Cool/Cold/Archive, lifecycle policies, immutability, SAS tokens, encryption with CMK, Azure Data Lake Gen2 hierarchical namespace), Azure Files (SMB/NFS, Azure File Sync, premium vs standard), managed disks (Ultra/Premium SSD v2/Premium SSD/Standard SSD/Standard HDD, snapshots, shared disks), Azure NetApp Files positioning.
- **06 Networking — VNets, Peering, VPN & ExpressRoute** — VNets & subnets (address space, delegation, service endpoints, private endpoints), NSGs vs Application Security Groups, route tables & UDRs, Azure Firewall vs NVA, NAT Gateway, VNet Peering (regional & global, gateway transit), VPN Gateway (S2S, P2S, active-active), ExpressRoute (circuits, peering types, Global Reach, FastPath), Virtual WAN, Private Link.
- **07 Traffic — Load Balancer, App Gateway, Front Door & DNS** — Azure Load Balancer (Basic vs Standard, public vs internal, backend pools, health probes, HA ports), Application Gateway (WAF v2, listeners, rules, path/host routing, rewrites, autoscale), Azure Front Door (global anycast, WAF, caching, rules engine) vs Traffic Manager (DNS-based routing methods) vs CDN, Azure DNS (public/private zones, alias records), Private DNS resolver.
- **08 Relational Databases & Caching** — Azure SQL Database (vCore vs DTU, service tiers, Hyperscale, serverless, elastic pools, failover groups, geo-replication), Azure SQL Managed Instance vs SQL on VM (lift-and-shift trade-offs), Azure Database for PostgreSQL/MySQL Flexible Server (HA, read replicas, burstable tiers), Azure Cache for Redis (tiers, clustering, geo-replication, common patterns: lazy loading, write-through, session store).
- **09 NoSQL & Analytics** — Cosmos DB (API choices: NoSQL/MongoDB/Cassandra/Gremlin/Table, consistency levels, partition key design, RU model, autoscale, change feed, global distribution, multi-write), Azure Table Storage positioning, Synapse Analytics (dedicated vs serverless SQL pools, Spark pools, pipelines), Data Factory (linked services, datasets, mapping data flows, IR types), Azure Databricks (workspace, clusters, Unity Catalog) brief, HDInsight & Stream Analytics one-liners.
- **10 Integration & Messaging** — Service Bus (queues vs topics/subscriptions, sessions, dead-letter, duplicate detection, premium vs standard), Event Grid (system vs custom topics, event schemas, filters, push delivery), Event Hubs (partitions, throughput units, capture, Kafka surface), choosing between Service Bus vs Event Grid vs Event Hubs, Logic Apps (consumption vs standard, connectors, B2B with Integration Account), API Management (products, policies, gateways).
- **11 Security Services** — Key Vault (vaults vs Managed HSM, keys/secrets/certificates, access policies vs RBAC, soft delete & purge protection, key rotation), Managed Identities (system vs user assigned, federated credentials for workload identity), Microsoft Defender for Cloud (CSPM, workload protection plans, secure score, regulatory compliance), Microsoft Sentinel (workspace, data connectors, analytics rules, playbooks), DDoS Protection, Web Application Firewall positioning.
- **12 Observability & Governance** — Azure Monitor architecture (metrics, logs, traces), Log Analytics workspace & KQL basics, Application Insights (auto-instrumentation, sampling, availability tests, distributed tracing), Diagnostic Settings & destinations, Activity Log vs Resource Logs, alerts (metric, log, smart, activity), action groups, workbooks & dashboards, Azure Advisor, Service Health.
- **13 DevOps, HA/DR & Migration** — Azure DevOps (Repos, Pipelines YAML, Artifacts, Boards) vs GitHub Actions on Azure, service connections & OIDC federation, Bicep & ARM templates, deployment strategies (blue/green, canary with slots), Azure Backup (vaults, policies, soft delete), Azure Site Recovery (replication, failover, recovery plans), HA patterns (zonal, zone-redundant, multi-region active-passive vs active-active), DR strategies & RTO/RPO, Azure Migrate (assess, replicate, cutover), Database Migration Service, Data Box family.
- **14 Well-Architected, Cost & AZ-104 Exam Prep** — 5 WAF pillars (Reliability, Security, Cost Optimization, Operational Excellence, Performance Efficiency) with concrete service mappings, Cost Management + Billing (scopes, budgets, alerts, exports, Cost Analysis), pricing calculator & TCO calculator, reservations vs savings plans vs Hybrid Benefit, tagging for chargeback, AZ-104 blueprint coverage check, question-pattern playbook (keywords → service), top distractor traps, study plan.

### Migration approach

1. **Draft the notebook first** as the structured reference — tables, bullets, headings; add code cells only where they earn their keep. Keep the audio word budget (~3,500 words / ~25 min, with a hard ceiling of ~4,200 for 30-min notebooks) visible while writing — if the notebook sprawls past what would distill into that budget, the scope or split is wrong, not the content.
2. **Review** the notebook before moving on.
3. **Distil the `.tts`** from the notebook — plain prose, no markdown, natural teaching voice. The `.tts` carries the audio narration; the notebook carries the structure. They share content but aren't 1:1 — the notebook can include reference tables and code that aren't narrated.
4. **Generate audio** per the standard workflow in `../CLAUDE.md`.

Next up: **Notebook 01 (Cloud & Azure Foundations)** — establishes the resource hierarchy and region/AZ model that every later notebook builds on.

## Current Repo State

Pre-consolidation cleanup complete. The original 23 topic notebooks and their `.tts` files have been removed (staged deletions). The repo is ready to start drafting the new consolidated notebooks from `01` onward per the **Target structure** table above.
