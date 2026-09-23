import type { Scene } from '@graphlearning/flow'

// §01. The figure exists because the portal hides it: "create a virtual machine" creates five
// resources, and four of them outlive the fifth. Nesting rather than a flow — they are contents of
// one resource group, not steps — and the sub on each card is what it costs you when it is orphaned.
export const aVmIsFiveThings: Scene = {
  id: 'a-vm-is-five-things',
  title: 'One click. Five resources.',
  nodes: [
    {
      id: 'rg',
      label: 'rg-web · what "create a VM" actually made',
      sub: 'delete the VM and four of these remain',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'vm', label: 'Virtual machine', sub: 'the compute itself', icon: 'vm' },
        { id: 'disk', label: 'OS disk', sub: 'bills whether or not it runs', pattern: 'storage', icon: 'disk' },
        { id: 'nic', label: 'Network interface', sub: 'holds the private IP', pattern: 'network', icon: 'nic' },
        { id: 'pip', label: 'Public IP', sub: 'bills while reserved', pattern: 'network', icon: 'publicip' },
        { id: 'nsg', label: 'Network security group', sub: 'the firewall rules', pattern: 'network', icon: 'nsg' },
        { id: 'sub', label: 'Subnet', sub: 'shared, not yours alone', pattern: 'network', icon: 'subnet' },
      ],
    },
  ],
  edges: [],
}
