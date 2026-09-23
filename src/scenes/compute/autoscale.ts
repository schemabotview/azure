import type { Scene } from '@graphlearning/flow'

// §05. A real mechanism, so a flow — but deliberately NOT a cycle. The first cut closed the loop
// (cool-down → metric) and the longest-path layout has no way to rank a cycle: it ran the chain off
// the top and bottom of the frame and dropped an edge label straight onto the Load balancer card.
// The loop is narrated instead; the figure carries the four steps and hangs the cool-down off the
// rule, which is where it is actually configured and the field people leave at its default.
export const autoscale: Scene = {
  id: 'autoscale',
  title: 'The rule that adds and removes machines',
  nodes: [
    { id: 'metric', label: 'A metric', sub: 'CPU, queue depth, requests', pattern: 'network', icon: 'metrics' },
    { id: 'rule', label: 'Autoscale rule', sub: 'above 70% for 10 minutes', pattern: 'network', icon: 'monitor' },
    { id: 'cool', label: 'Cool-down', sub: 'then keep quiet', pattern: 'warn', icon: 'clock' },
    { id: 'vmss', label: 'Scale set', sub: 'adds an instance from the model', icon: 'vmss' },
    { id: 'lb', label: 'Load balancer', sub: 'sends it traffic once healthy', pattern: 'network', icon: 'loadbalancer' },
  ],
  edges: [
    { source: 'metric', target: 'rule', label: 'sampled' },
    { source: 'rule', target: 'vmss', label: 'scale out' },
    { source: 'rule', target: 'cool', label: 'and waits' },
    { source: 'vmss', target: 'lb', label: 'joins the pool' },
  ],
}
