import type { Scene } from '@graphlearning/flow'

// §09. The closing table. Columns are the three questions that actually decide it — who patches the
// OS, what the scaling unit is, and what it costs while nothing is happening — because those are the
// ones a team feels six months in, long after the feature comparison has been forgotten.
export const choosingCompute: Scene = {
  id: 'choosing-compute',
  title: 'The three questions that decide it',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'service',
      label: 'Choosing compute',
      sub: 'ordered by how much you own',
      headers: ['Option', 'Who patches the OS', 'Scales by', 'Idle cost'],
      values: [
        ['Virtual machine', 'you', 'you, by hand', 'full'],
        ['Scale set', 'you', 'a metric rule', 'full, per instance'],
        ['App Service', 'Azure', 'instances in a plan', 'the plan'],
        ['AKS', 'you (the nodes)', 'pods, then nodes', 'the node pool'],
        ['Container Apps', 'Azure', 'requests or events', 'zero, if idle'],
        ['Functions', 'Azure', 'per invocation', 'zero, on consumption'],
      ],
    },
  ],
  edges: [],
}
