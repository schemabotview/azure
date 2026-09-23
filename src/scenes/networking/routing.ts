import type { Scene } from '@graphlearning/flow'

// §03. Routing is invisible until it is wrong, so the card shows the table Azure maintains for you
// and then the one line that overrides it. The last block is the trap: a UDR sends traffic to an
// appliance, and if that appliance is not forwarding, the packets stop there with no error anywhere.
export const routing: Scene = {
  id: 'routing',
  title: 'Azure already wrote you a routing table',
  nodes: [
    {
      id: 'routes',
      kind: 'code',
      filename: 'effective routes on a NIC',
      minCols: 76,
      label: [
        '# SYSTEM routes — created for you, invisible, always there',
        'Source   Address prefix      Next hop',
        'Default  10.20.0.0/16        VirtualNetwork      # inside the VNet',
        'Default  10.30.0.0/16        VNetPeering         # appears when you peer',
        'Default  0.0.0.0/0           Internet            # everything else, straight out',
        '',
        '# a USER-DEFINED route overrides the system one for that prefix',
        'az network route-table route create -g rg-net --route-table-name rt-spoke \\',
        '    -n force-tunnel --address-prefix 0.0.0.0/0 \\',
        '    --next-hop-type VirtualAppliance --next-hop-ip-address 10.20.4.4',
        '',
        '# now every packet leaving this subnet goes to the firewall at 10.20.4.4.',
        '# THE TRAP: if that appliance does not have IP forwarding enabled on its NIC,',
        '# the packets arrive and are dropped. No error is raised anywhere.',
      ].join('\n'),
    },
  ],
  edges: [],
}
