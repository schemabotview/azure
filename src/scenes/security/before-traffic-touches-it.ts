import type { Scene } from '@graphlearning/flow'

// §09. The close, and deliberately an inventory rather than another argument: three piles at cols 2,
// each stacking its cards so the board stays squarish rather than letterboxed, grouped by the
// question each answers — who can act, what can reach it, and whether you could prove
// any of it afterwards. Every tile here is something an earlier course built.
export const beforeTrafficTouchesIt: Scene = {
  id: 'before-traffic-touches-it',
  title: 'What a subscription needs before production traffic',
  cols: 2,
  nodes: [
    {
      id: 'who',
      label: 'Who can act',
      sub: 'no standing Owner',
      pattern: 'group',
      children: [
        { id: 'mfa', label: 'MFA on admins', sub: 'Conditional Access', pattern: 'user', icon: 'mfa' },
        { id: 'pim', label: 'PIM for Owner', sub: 'eligible, time-boxed', pattern: 'user', icon: 'pim' },
      ],
    },
    {
      id: 'reach',
      label: 'What reaches it',
      sub: 'nothing needlessly public',
      pattern: 'group',
      children: [
        { id: 'pe', label: 'No public IP', sub: 'a Private Endpoint', pattern: 'network', icon: 'privatelink' },
        { id: 'waf', label: 'A WAF in front', sub: 'and DDoS on the VNet', pattern: 'network', icon: 'wafpolicy' },
      ],
    },
    {
      id: 'prove',
      label: 'What you can prove',
      sub: 'a month from now',
      pattern: 'group',
      children: [
        { id: 'kv', label: 'Key Vault + MI', sub: 'no secret in a config', pattern: 'storage', icon: 'keyvault' },
        { id: 'diag', label: 'Diagnostics on', sub: 'to a workspace, retained', pattern: 'service', icon: 'loganalytics' },
      ],
    },
  ],
  edges: [],
}
