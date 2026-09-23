import type { Scene } from '@graphlearning/flow'

// §01. Defense in depth is literally containment, so the scene is literally nested: five boxes, the
// data at the centre, and an attacker outside that has to get through all of them. Each layer's
// `sub` names the service that guards it, which keeps the picture one column wide — a row of five
// layers side by side would render at a third of this type size, and the nesting IS the argument.
export const theLayersAndWhoGuardsThem: Scene = {
  id: 'the-layers-and-who-guards-them',
  title: 'Five layers, and the service that guards each',
  nodes: [
    {
      id: 'edge',
      label: 'Edge · anything reachable from the internet',
      sub: 'DDoS Protection, and a WAF on Front Door or Application Gateway',
      pattern: 'group',
      icon: 'frontdoor',
      children: [
        {
          id: 'net',
          label: 'Network · inside the VNet',
          sub: 'NSGs, Azure Firewall, Private Endpoints',
          pattern: 'group',
          icon: 'vnet',
          children: [
            {
              id: 'host',
              label: 'Host · the VM, the node, the plan',
              sub: 'Defender for Cloud, patching, Bastion instead of open RDP',
              pattern: 'group',
              icon: 'vm',
              children: [
                {
                  id: 'app',
                  label: 'Application · the code and what it holds',
                  sub: 'Key Vault and a managed identity — no credential in the config',
                  pattern: 'group',
                  icon: 'keyvault',
                  children: [
                    { id: 'data', label: 'The data', sub: 'encrypted, and RBAC on the data plane', pattern: 'storage', icon: 'lock' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    { id: 'attacker', label: 'Someone uninvited', sub: 'or a credential that leaked', pattern: 'warn', icon: 'skull' },
  ],
  edges: [{ source: 'attacker', target: 'edge', label: 'all five, in order' }],
}
