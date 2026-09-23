import type { Scene } from '@graphlearning/flow'

// §01. Nesting, because a subnet is not a thing that talks to a VNet — it is a slice of it. The subs
// carry the three facts that decide a design: the address space cannot overlap a network you will
// ever peer with, subnets are per-region, and Azure takes five addresses out of every one.
export const aVnetAndItsSubnets: Scene = {
  id: 'a-vnet-and-its-subnets',
  title: 'One address space, cut into subnets',
  nodes: [
    {
      id: 'vnet',
      label: 'VNet · 10.20.0.0/16',
      sub: 'one region · 65,536 addresses · cannot overlap anything you will peer with',
      pattern: 'group',
      icon: 'vnet',
      cols: 3,
      children: [
        { id: 'web', label: 'snet-web', sub: '10.20.1.0/24 · 251 usable', pattern: 'network', icon: 'subnet' },
        { id: 'app', label: 'snet-app', sub: '10.20.2.0/24 · the tier behind', pattern: 'network', icon: 'subnet' },
        { id: 'data', label: 'snet-data', sub: '10.20.3.0/24 · private endpoints', pattern: 'network', icon: 'subnet' },
        { id: 'gw', label: 'GatewaySubnet', sub: 'the name is mandatory', pattern: 'user', icon: 'vnetgateway' },
        { id: 'fw', label: 'AzureFirewall…', sub: '…Subnet — also fixed', pattern: 'user', icon: 'firewall' },
        { id: 'free', label: 'Left spare', sub: 'you will want it', pattern: 'external', icon: 'boxes' },
      ],
    },
  ],
  edges: [],
}
