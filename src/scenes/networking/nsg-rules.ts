import type { Scene } from '@graphlearning/flow'

// §02. An NSG is literally a table evaluated in order, so the scene is that table. The three default
// rules are included because they are invisible in the portal until you scroll, and they are the
// reason "I allowed it and it still does not work" is usually about priority, not about the rule.
export const nsgRules: Scene = {
  id: 'nsg-rules',
  title: 'First match wins. Lowest number first.',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'network',
      label: 'Inbound rules, in evaluation order',
      sub: 'priority 100-4096 yours · 65000+ Azure',
      headers: ['Priority', 'Source', 'Port', 'Action'],
      values: [
        ['100', 'Internet', '443', 'Allow'],
        ['200', 'VirtualNetwork', '5432', 'Allow'],
        ['300', 'Any', 'Any', 'Deny'],
        ['65000', 'VirtualNetwork', 'Any', 'Allow  (default)'],
        ['65001', 'AzureLoadBalancer', 'Any', 'Allow  (default)'],
        ['65500', 'Any', 'Any', 'Deny   (default)'],
      ],
    },
  ],
  edges: [],
}
