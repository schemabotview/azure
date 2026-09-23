import type { Scene } from '@graphlearning/flow'

// §04. The same engine, three levels of ownership — the compute course's ladder, applied to SQL
// Server. A table because the deciding columns are who patches it, what it supports and what it
// costs in attention; the VM row exists mostly to be argued out of.
export const threeWaysToRunSql: Scene = {
  id: 'three-ways-to-run-sql',
  title: 'Same engine. Three levels of ownership.',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'storage',
      label: 'Running SQL Server on Azure',
      sub: 'ordered by how much is yours',
      headers: ['', 'Patched by', 'Surface', 'Choose it when'],
      values: [
        ['SQL Database', 'Azure', 'one database', 'writing a new app'],
        ['Managed Instance', 'Azure', 'the instance', 'Agent, cross-DB or MSDTC'],
        ['SQL on a VM', 'you', 'the whole OS', 'a host agent forces it'],
      ],
    },
  ],
  edges: [],
}
