import type { Scene } from '@graphlearning/flow'

// §06. The resource-group rule is a sorting rule, so the scene sorts. Two piles, no arrow: the test
// is "would you delete these together?", and the right-hand pile is the set of things that outlive
// any one app — the mistake that fills a group nobody can ever delete.
export const oneLifecycle: Scene = {
  id: 'one-lifecycle',
  title: 'Would you delete these on the same day?',
  nodes: [
    {
      id: 'yes',
      label: 'rg-checkout-prod',
      sub: 'one app, one environment, one lifecycle',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'app', label: 'App Service', sub: 'the app', icon: 'appservice' },
        { id: 'db', label: 'Azure SQL', sub: 'its database', pattern: 'storage', icon: 'sqldatabase' },
        { id: 'kv', label: 'Key Vault', sub: 'its secrets', icon: 'keyvault' },
        { id: 'ai', label: 'App Insights', sub: 'its telemetry', icon: 'appinsights' },
      ],
    },
    {
      id: 'no',
      label: 'Not in that group',
      sub: 'these outlive the app that first needed them',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'vnet', label: 'Hub VNet', sub: 'shared by all', pattern: 'network', icon: 'vnet' },
        { id: 'dns', label: 'DNS zone', sub: 'the company', pattern: 'network', icon: 'dns' },
        { id: 'law', label: 'Log workspace', sub: 'every app logs here', pattern: 'network', icon: 'loganalytics' },
        { id: 'img', label: 'Image gallery', sub: 'every VM built from it', pattern: 'network', icon: 'gallery' },
      ],
    },
  ],
  edges: [],
}
