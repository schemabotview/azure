import type { Scene } from '@graphlearning/flow'

// §01. The whole estate as four stages, drawn as a board: the stages are a sequence but the
// SERVICES in each are alternatives, and the thing a newcomer actually needs is the inventory —
// which box is for which job. cols 2, because four groups in a row renders at half the type size.
export const fourStagesOfAnEstate: Scene = {
  id: 'four-stages-of-an-estate',
  title: 'Ingest, land, transform, serve — and what sits in each',
  cols: 2,
  nodes: [
    {
      id: 'ingest',
      label: 'Ingest',
      sub: 'get it out of the system that owns it',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'adf', label: 'Data Factory', sub: 'batch, on a schedule', pattern: 'service', variant: 'tile', icon: 'datafactory' },
        { id: 'eh', label: 'Event Hubs', sub: 'continuous', pattern: 'network', variant: 'tile', icon: 'eventhubs' },
      ],
    },
    {
      id: 'land',
      label: 'Land',
      sub: 'one copy, cheap, that nobody edits',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'adls', label: 'ADLS Gen2', sub: 'the lake', pattern: 'storage', variant: 'tile', icon: 'adls' },
        { id: 'onelake', label: 'OneLake', sub: 'the Fabric one', pattern: 'storage', variant: 'tile', icon: 'boxes' },
      ],
    },
    {
      id: 'transform',
      label: 'Transform',
      sub: 'clean it, join it, shape it',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'dbx', label: 'Databricks', sub: 'Spark, yours', pattern: 'service', variant: 'tile', icon: 'databricks' },
        { id: 'syn', label: 'Synapse', sub: 'Spark or SQL', pattern: 'service', variant: 'tile', icon: 'synapse' },
      ],
    },
    {
      id: 'serve',
      label: 'Serve',
      sub: 'shaped for a question somebody asks',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'pbi', label: 'Power BI', sub: 'the dashboard', pattern: 'user', variant: 'tile', icon: 'powerbi' },
        { id: 'ep', label: 'A SQL endpoint', sub: 'for everything else', pattern: 'storage', variant: 'tile', icon: 'azuresql' },
      ],
    },
  ],
  edges: [],
}
