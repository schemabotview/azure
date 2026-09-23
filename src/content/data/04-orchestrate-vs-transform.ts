import type { Section } from '../types'

export const orchestrateVsTransform: Section = {
  id: 'orchestrate-vs-transform',
  title: 'Orchestrate vs transform',
  scene: 'orchestrate-or-transform',
  slide: `## Both can do it. Only one should.

**Mapping Data Flows** let you build a join, an aggregate and a derived column in the Data Factory designer. It works — it generates Spark and runs it on a managed cluster. The question is whether you want your business logic there.

### What decides it
- **Version control** — a Data Flow diffs as workflow JSON. Nobody can review that
- **Testing** — the only way to test a Data Flow is to run the pipeline
- **Cost shape** — you pay per activity run *and* for the cluster it warms up
- **Portability** — SQL and Spark move. A Data Flow moves nowhere

### The rule worth keeping
Let the pipeline **move and call**. Let an engine **compute**. A pipeline whose activities are all Copy, Notebook and Stored procedure stays readable for years.

> The exception is real: a small shop with no Spark skills ships a working Data Flow this week. That beats elegant and unbuilt.`,
  narration:
    "Data Factory can transform data. There is a feature called Mapping Data Flows where you build joins, aggregates, derived columns and pivots in a visual designer, and behind the scenes it generates Spark code and runs it on a managed cluster. It works. It is not a toy. And I am going to argue you should mostly not use it, then give you the case where you should — because the usual advice on this is dogma in both directions. Four things decide it, and notice that none of them is capability. The first is version control. Your transformation logic is the most valuable and most fragile thing in the estate, and a Mapping Data Flow is stored as workflow JSON. When somebody changes a join condition, the pull request is a few hundred lines of moved brackets. Nobody can review that, so nobody does, so the review stops happening. The same change in SQL or in a Spark notebook is three lines that a colleague can actually read. The second is testing. How do you test a Data Flow? You run the pipeline. That is the only way. A transformation written as code can have a unit test that runs in two seconds on a laptop with six rows of fixture data, and you can have forty of them. The third is the shape of the cost. A Data Flow bills you for the activity run and for the Spark cluster it spins up, and that cluster has a warm-up of a few minutes each time, which you also pay for. Running twenty small Data Flows is a surprisingly large bill for a small amount of work. The fourth is portability. SQL moves. A Spark notebook moves. Neither cares very much whether it is running in Synapse, Databricks or Fabric — and given how fast Microsoft is moving people between those, that matters more than it used to. A Mapping Data Flow moves nowhere. So the rule: let the pipeline move things and call things, and let an engine compute. A pipeline whose activities are all Copy, Notebook and Stored procedure is still readable in three years, and every hard part of it is in a file that a person can review and a test can exercise. Now the honest exception, because it is real. A small team with no Spark skills and no data engineer can build a working Mapping Data Flow this week, in the designer, and have a dashboard on Friday. That is worth a great deal. A perfectly engineered pipeline that does not exist because nobody on the team could write it is worth nothing. Ship the Data Flow, and know what you have taken on — that is a completely different thing from not knowing.",
}
