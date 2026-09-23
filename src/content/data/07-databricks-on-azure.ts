import type { Section } from '../types'

export const databricksOnAzure: Section = {
  id: 'databricks-on-azure',
  title: 'Databricks on Azure',
  scene: 'who-owns-which-half',
  slide: `## One product, with a line down the middle

Azure Databricks is a **first-party** Azure service — sold, billed and supported by Microsoft — and also Databricks' own product. Knowing which half a thing belongs to explains almost every surprise.

### The split
- **Databricks runs the control plane**: the workspace UI, the notebooks, the job scheduler, the metastore
- **You run the data plane**: the clusters are VMs in **your** subscription, against **your** quota, on **your** bill — optionally in your own VNet
- **Azure supplies** the parts that make it first-party: Entra sign-in, and data in ADLS

### Two bills, always
**DBUs** to Databricks for the platform, **plus** the VMs to Azure. A cost estimate with only one of them in it is wrong by roughly half.

> **Unity Catalog** is the governance layer — catalog, schema, table, with column-level grants and lineage. Enable it before the first table, not after the hundredth.`,
  narration:
    "Azure Databricks is unusual, and the unusual thing is worth ten minutes because it explains almost every surprise people have with it. It is a first-party Azure service. You create it from the Azure portal, it appears as a resource in a resource group, it is on your Azure invoice, and Microsoft supports it. It is also Databricks' product, built and operated by Databricks, and the same thing exists on AWS and Google. Both of those are true at once, and there is a line down the middle of the product where responsibility changes hands. Databricks runs what is called the control plane. That is the workspace you log into, the notebook editor, the job scheduler, the cluster manager and the metastore. It lives in Databricks' own cloud account, not yours. You run the data plane. When you start a cluster, real virtual machines are created in your subscription — you can see them, they consume your compute quota, they appear on your Azure bill, and if your subscription's quota for that VM family is exhausted, your cluster does not start and the error will be about quota. You can deploy the data plane into your own virtual network, which is called VNet injection, and you should for anything production, because that is what lets clusters reach data behind private endpoints and lets you control egress. And Azure supplies the parts that make it first-party rather than a marketplace app: sign-in is Entra ID, with no second set of users to manage, and the data sits in ADLS with the access patterns we covered in the storage course. Now the commercial consequence, which catches out nearly every first cost estimate. You are billed twice, always. Databricks charges for the platform in Databricks Units — DBUs — metered per second of cluster runtime and priced by workload type and tier. Azure separately charges you for the virtual machines those clusters are made of. Neither of those numbers alone is the cost of running Databricks; a plan with only one of them in it is wrong by roughly half. Two practical recommendations. First, enable Unity Catalog from the start. It is the governance layer — a three-level namespace of catalog, schema and table, with grants down to the column, plus lineage — and retrofitting it onto a workspace with two hundred existing tables is a project, while turning it on before the first table is a checkbox. Second, know what this course is and is not. I have told you where Databricks sits in Azure and who owns which half. Spark itself, Delta Lake, and building pipelines on it in earnest are deep subjects with their own concepts in this workspace, and this section is the map rather than the territory.",
}
