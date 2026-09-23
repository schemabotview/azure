import type { Section } from '../types'

export const theDataPlatform: Section = {
  id: 'the-data-platform',
  title: 'The data platform',
  scene: 'four-stages-of-an-estate',
  slide: `## Four stages, and a service for each

Every analytics estate on Azure is the same four stages. The services change; the shape does not.

### The stages
- **Ingest** — get the data out of the system that owns it. **Data Factory** for batch, **Event Hubs** for continuous
- **Land** — one cheap copy that nobody edits. **ADLS Gen2**, or **OneLake** if you are in Fabric
- **Transform** — clean, join, shape. **Databricks** or **Synapse** Spark; SQL if it fits
- **Serve** — shaped for a question. **Power BI**, or a SQL endpoint for everything else

### Why the stages are separate
So that a failure in one does not cost you the others. Land the raw copy before transforming it, and a bug in your transformation is a re-run rather than a re-ingest — which may not even be possible.

> Azure will sell you three ways to do each stage. This course names them and says when each is right; the engines themselves have concepts of their own.`,
  narration:
    "This course is a map, and I want to say what kind of map at the start. Azure has a very large number of data services, several of them overlapping, two of them actively replacing older ones, and the marketing does not help you tell them apart. What does help is noticing that every analytics estate — every one, regardless of which services it is built from — is the same four stages. Ingest. Land. Transform. Serve. Stage one, ingest: get the data out of the system that owns it. That system is an operational database, or a SaaS API, or a stream of events from an application, and it is somebody else's and it does not want to be queried by your analysts. For batch, that is Azure Data Factory. For a continuous stream, Event Hubs. Stage two, land. You write one copy, cheaply, in a place designed to hold enormous amounts of data that nobody edits. That is Azure Data Lake Storage — which, as we saw when we covered storage, is a storage account with one flag turned on — or OneLake, if you have gone to Fabric. Stage three, transform. Clean it, type it, deduplicate it, join it, and shape it into something that answers questions. That is Spark, on Databricks or in Synapse or in Fabric, or plain SQL if the data fits in a database. Stage four, serve. The shaped result goes somewhere a person or a tool can query quickly: a Power BI semantic model, or a SQL endpoint for the things that are not Power BI. Now — why insist on the stages being separate, when for a small estate you could do the whole thing in one pipeline? Because of what a failure costs. If you land the raw copy first, then a bug in your transformation is a re-run: you still have the input, and you fix the code and go again. If you transform in flight and write only the result, then a bug in your transformation means going back to the source system for the data — and the source may have moved on, or aged it out, or be a paid API with a quota. Landing the raw copy is the cheapest insurance in data engineering. One note on scope, so you know what you are getting. This course names Azure's data surface and tells you when each piece is the right answer. The engines themselves — Spark in earnest, dimensional modelling, dbt — have depth that belongs to them, and the workspace has whole concepts devoted to each.",
}
