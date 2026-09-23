import type { Section } from '../types'

export const kql: Section = {
  id: 'kql',
  title: 'KQL',
  scene: 'five-operators-and-a-pipe',
  slide: `## A table, a pipe, five operators

Every KQL query is the same shape: name a table, then pipe it through transformations. There is no \`SELECT\` and no \`FROM\` — the table comes first because that is the order you think in.

### The five
- \`where\` — filter rows. **Cheapest filter first, and time is always cheapest**
- \`project\` — choose columns. Early, because it is what you carry forward
- \`summarize\` — aggregate; \`by\` is the grouping. \`count()\`, \`avg()\`, \`make_set()\`
- \`order by\` — sort, nearly always on what \`summarize\` just produced
- \`take\` — stop. Use it the entire time you are exploring

### The habit that matters
Start every query with a time filter. Without one you scan the retention period to answer a question about yesterday — slower, and on some tiers billed.

> \`| render timechart\` is the fastest way to tell a spike from a step.`,
  narration:
    "You cannot read a single Azure log without this language, so it is worth twenty minutes, and the good news is that it is a genuinely small language to get useful in. Here is the shape. A query names a table, and then pipes it through a sequence of transformations. There is no SELECT and no FROM. You do not say select these columns from this table where this is true — you say: this table, then filter, then aggregate, then sort. And that ordering is not arbitrary, it is the order you actually think in when you are looking for something, which is why people who have never seen KQL can usually read a query correctly on first sight. Look at the one on the left. AzureActivity — that is the table of control-plane operations, every write that went through ARM. Then filter to the last seven days. Then filter to operations whose name ends in DELETE. Then filter to the ones that succeeded. Then summarise: count them, grouped by who did it and which resource group. Then sort descending, and take the top twenty. That is a complete, genuinely useful query — who has been deleting things — and it is seven lines of which five are the operators we are about to name. So, the five. Where filters rows, and it is the one you use most. The important habit with where is ordering: put the cheapest, most selective filter first, and a time filter is nearly always both. Project chooses columns, and the reason to do it early rather than at the end is that everything downstream carries whatever you did not drop. On a wide table with a big time range that difference is real. Summarize aggregates, and its shape is: the aggregation you want, then by, then the columns to group on. Count, average, sum, min, max, and the ones you will come to love — make_set, which collects distinct values into an array, and dcount, which counts distinct things approximately and fast. Order by sorts, and in practice it almost always sorts on a column that summarize just invented, which is why it nearly always comes right after it. And take stops, returning some rows and not caring which — which sounds useless and is the single most valuable thing while you are exploring, because you are building the query up one line at a time and you do not want to wait for the full result on every iteration. Now the habit I want to actually land, because it is the difference between a query that returns in a second and one that sits there. Start every query with a time filter. Where TimeGenerated is greater than ago of something. If you leave it out, the query scans the entire retention period — which might be two years — to answer a question about yesterday. It is slower, it is heavier on the workspace, and on some tiers you are paying for the scan. Make it muscle memory: table, time filter, then everything else. Two things beyond the five that are worth knowing exist. Join works the way you expect and is what makes logs more powerful than metrics — take a table of failures, join it to a table of deployments, and you can see that every failure follows a release. And render, which takes the result of your query and draws it: render timechart is the fastest way I know to tell the difference between a spike, which is an incident, and a step, which is a change somebody made. Those two look identical in a table of numbers and completely different in a chart. And that is enough. Five operators, a time filter first, and render when you want to see it. Everything else in KQL you can look up at the moment you need it, and you will read almost every query you meet with just this.",
}
