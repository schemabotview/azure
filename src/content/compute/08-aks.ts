import type { Section } from '../types'

export const aks: Section = {
  id: 'aks',
  title: 'AKS — what is actually managed',
  scene: 'who-owns-the-cluster',
  slide: `## Azure runs the control plane. You run everything else.

The API server, etcd, the scheduler and the controller manager are Microsoft's: free on the standard tier, patched by them, unreachable by you. That is the whole of "managed".

### Yours, and billed as ordinary VMs
Node pools — their size, their count, their OS patching. **Separate the system pool from your workload pools**, and give each workload class the size it actually needs rather than one pool of compromises.

### The commitment nobody reads
A Kubernetes version leaves support in roughly a year. Upgrades cordon, drain and replace nodes one at a time, so they need a maintenance window, a tested rollback, and pod disruption budgets that let nodes drain at all.

> Enable **workload identity** on day one. A pod that authenticates to Azure with a federated managed identity is a pod with no secret in it.`,
  narration:
    "If you have chosen Kubernetes, AKS is a good way to run it — but the word managed is doing more work in the marketing than in the product, so let's draw the line precisely. Azure manages the control plane: the API server, etcd, the scheduler, the controller manager. They run it, patch it, and keep it available, and on the standard free tier you are not charged for it. You cannot SSH to it. You cannot install things on it. For most teams that is a genuine relief — running etcd well is a specialist job. Everything else is yours, and it is billed as ordinary virtual machines, because that is what it is. Your node pools are scale sets underneath. You choose their size and count, you decide how their operating systems get patched, and you pay for them whether or not a single pod is scheduled. Two structural decisions matter here. Run a separate system node pool for cluster components and put your workloads in their own pools — a workload that exhausts a node should not take CoreDNS with it. And use more than one workload pool if your workloads genuinely differ: memory-heavy services on E-series, batch on F-series with spot instances, rather than one pool of compromises. Then there is the commitment that nobody reads before signing. Kubernetes moves fast, and a version leaves Azure's support window in roughly a year. So a cluster is not a thing you create and forget; it is a thing you upgrade on a cadence, forever. The upgrade itself is well behaved — nodes are cordoned, drained and replaced one at a time — but every word of that sentence implies work on your side. Pods must tolerate being evicted. Pod disruption budgets must permit a node to drain at all, or the upgrade stalls. And you want a maintenance window and a rehearsed rollback, because an upgrade that goes wrong goes wrong for everything in the cluster at once. Finally, the one setting I would turn on before anything else: workload identity. It federates a Kubernetes service account with an Azure managed identity, so a pod can authenticate to Key Vault, to storage, to a database, holding no secret at all. It is the identity lesson from the previous course, applied to the thing most likely to leak credentials — and it is far easier to enable on a new cluster than to retrofit onto one with forty services already in it.",
}
