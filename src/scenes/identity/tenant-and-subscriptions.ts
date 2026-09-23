import type { Scene } from '@graphlearning/flow'

// §02. Nesting, because the relationship IS containment: one tenant holds many subscriptions, and a
// subscription trusts exactly one tenant for sign-in. The second tenant is drawn to make the guest
// edge legible — B2B is the only line that crosses a tenant boundary in this figure.
export const tenantAndSubscriptions: Scene = {
  id: 'tenant-and-subscriptions',
  title: 'One directory. Many subscriptions.',
  nodes: [
    {
      id: 'tenant',
      label: 'Tenant · contoso.com',
      sub: 'the directory — users, groups, apps',
      pattern: 'user',
      icon: 'tenant',
      cols: 3,
      children: [
        { id: 's1', label: 'Sub · prod', sub: 'trusts this tenant', icon: 'subscription' },
        { id: 's2', label: 'Sub · dev', sub: 'trusts this tenant', icon: 'subscription' },
        { id: 's3', label: 'Sub · sandbox', sub: 'trusts this tenant', icon: 'subscription' },
      ],
    },
    {
      id: 'partner',
      label: 'Tenant · fabrikam.com',
      sub: 'a different company',
      pattern: 'external',
      icon: 'tenant',
      children: [{ id: 'p1', label: 'Their user', sub: 'their credential', pattern: 'external', icon: 'users' }],
    },
  ],
  edges: [{ source: 'p1', target: 'tenant', label: 'guest (B2B)' }],
}
