import type { Scene } from '@graphlearning/flow'

// §06. Nesting, because the billing model IS the containment: you pay for the PLAN, and the apps
// inside it share its machines. That is what makes "we have twelve apps" cheap and also what makes
// one badly behaved app everyone else's problem. Slots are nested one level deeper on purpose.
export const planAndApps: Scene = {
  id: 'plan-and-apps',
  title: 'You rent the plan. The apps share it.',
  nodes: [
    {
      id: 'plan',
      label: 'App Service plan · P1v3 × 3 instances',
      sub: 'this is the line on the bill',
      pattern: 'group',
      icon: 'appserviceplan',
      cols: 2,
      children: [
        {
          id: 'app1',
          label: 'checkout-api',
          sub: 'shares the CPU and the memory',
          icon: 'appservice',
          children: [
            { id: 'slot1', label: 'staging slot', sub: 'deploy here, then swap', pattern: 'network', icon: 'appservice' },
          ],
        },
        {
          id: 'app2',
          label: 'admin-portal',
          sub: 'a runaway here hurts both',
          icon: 'appservice',
          children: [
            { id: 'slot2', label: 'staging slot', sub: 'warm before the swap', pattern: 'network', icon: 'appservice' },
          ],
        },
      ],
    },
  ],
  edges: [],
}
