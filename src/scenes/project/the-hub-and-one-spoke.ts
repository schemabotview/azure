import type { Scene } from '@graphlearning/flow'

// §04. Deliberately ONE spoke. The hub-and-spoke picture is usually drawn with five, which hides the
// only thing a two-person team needs to decide: that there is exactly one public entrance and every
// data service is reached over a private endpoint. Each container takes cols 2 so the chain stays
// square rather than becoming a narrow column that renders at half size.
export const theHubAndOneSpoke: Scene = {
  id: 'the-hub-and-one-spoke',
  title: 'One public entrance, and a private path to everything else',
  nodes: [
    { id: 'fd', label: 'Front Door + WAF', sub: 'global, Prevention mode', pattern: 'external', icon: 'frontdoor' },
    {
      id: 'spoke',
      label: 'Spoke · orders-prod   10.1.0.0/16',
      sub: 'peered to the hub; no public IP on anything inside it',
      pattern: 'group',
      icon: 'vnet',
      cols: 2,
      children: [
        { id: 'app', label: 'snet-app', sub: 'the Container Apps environment', pattern: 'service', icon: 'containerapps' },
        { id: 'data', label: 'snet-data', sub: 'private endpoints only', pattern: 'storage', icon: 'privateendpoint' },
      ],
    },
    {
      id: 'hub',
      label: 'Hub · connectivity   10.0.0.0/16',
      sub: 'shared, and the only way out',
      pattern: 'group',
      icon: 'vnet',
      cols: 2,
      children: [
        { id: 'fw', label: 'Azure Firewall', sub: 'all egress, and logged', pattern: 'warn', icon: 'firewall' },
        { id: 'bastion', label: 'Bastion', sub: 'no public SSH or RDP', pattern: 'network', icon: 'bastion' },
      ],
    },
  ],
  edges: [
    { source: 'fd', target: 'spoke', label: 'the only way in' },
    { source: 'spoke', target: 'hub', label: 'peered' },
  ],
}
