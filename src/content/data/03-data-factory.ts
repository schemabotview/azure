import type { Section } from '../types'

export const dataFactory: Section = {
  id: 'data-factory',
  title: 'Data Factory',
  scene: 'a-pipeline-and-its-runtime',
  slide: `## The orchestrator, and the runtime underneath it

**Azure Data Factory** moves data and calls things. A **pipeline** is a list of **activities** with dependencies between them, parameters, and a schedule or event to start it.

### Activities worth knowing
**Copy** (a source and a sink, and it is genuinely fast), **Notebook** and **Stored procedure** (it calls something that can compute), **Lookup**, **ForEach**, **If condition** — and **Execute pipeline**, so a pipeline can be a unit of reuse.

### The integration runtime is the compute
Nothing moves without one, and it is where the awkwardness lives:
- **Azure IR** — managed, serverless. The default
- **Self-hosted IR** — an agent you install, for on-premises or a private network
- **Azure-SSIS IR** — a lift-and-shift host for existing SSIS packages

> Most Data Factory tickets are integration-runtime tickets: the pipeline is fine and the runtime cannot reach the source.`,
  narration:
    "Azure Data Factory is the orchestrator, and the sentence to hold onto is that it moves data and it calls things. It is very good at both. It is not a transformation engine, which is the subject of the next section. The unit of work is a pipeline: a list of activities with dependencies drawn between them, so that this runs, and then those two run in parallel, and if either fails then that one runs instead. A pipeline takes parameters, so the same pipeline loads any table rather than you building ninety of them. And it is started by a trigger — a schedule, a tumbling window, or an event such as a blob appearing. Which activities matter? Copy, above all. Copy has a source and a sink, it knows about a hundred connectors, and it is genuinely fast and genuinely parallel — this is the piece of Data Factory that is simply better than code you would write. Then the ones that call something: Notebook, which runs a Databricks or Synapse notebook, and Stored procedure, which runs SQL where the data already is. Then the control-flow ones: Lookup to read a small result, ForEach to iterate it, If condition to branch. And Execute pipeline, which lets a pipeline call another pipeline, so you can have one that does a thing properly and reuse it rather than copying it. Now the object that causes most of the actual pain, and it is not the pipeline. It is the integration runtime — the compute that does the moving. Three kinds. The Azure integration runtime is managed and serverless and you barely think about it; it is the default and it is right for cloud-to-cloud. The self-hosted integration runtime is an agent you install on a machine you own, and it exists for one reason: reaching data that is not on the public internet. An on-premises SQL Server, a file share in your datacentre, a database behind a private endpoint in your own virtual network. The agent makes an outbound connection, so you do not open any inbound firewall holes. And the Azure-SSIS integration runtime is a managed host for existing SQL Server Integration Services packages, which exists so a shop with two hundred of them can move to Azure this year rather than rewriting them first. Here is the practical note. When a pipeline fails in a way that makes no sense — a timeout, a connection refused, an authentication error against a database you know is up — check the runtime before you read the pipeline. Most Data Factory tickets are integration-runtime tickets: the logic is fine, and the compute cannot reach the thing.",
}
