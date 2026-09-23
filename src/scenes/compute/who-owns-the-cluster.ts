import type { Scene } from '@graphlearning/flow'

// §08. AKS is sold as "managed", and the word does a lot of hiding. The card draws the line exactly
// where it falls: Microsoft runs the control plane for free, and everything that wakes a team at
// night is below the line. The commands are real, because the upgrade one is the whole argument.
export const whoOwnsTheCluster: Scene = {
  id: 'who-owns-the-cluster',
  title: '"Managed" ends at the control plane',
  nodes: [
    {
      id: 'aks',
      kind: 'code',
      filename: 'what AKS manages, and what you do',
      minCols: 76,
      label: [
        'az aks create -g rg-apps -n aks-prod \\',
        '    --node-count 3 --zones 1 2 3 \\',
        '    --enable-managed-identity --network-plugin azure',
        '',
        '# AZURE OWNS — free, and you cannot SSH to it',
        '#   the API server, etcd, the scheduler, the controller manager',
        '#   their patching, their availability, their backups',
        '',
        '# YOU OWN — and these are billed as ordinary VMs',
        '#   the node pools, their size, and their OS patching cadence',
        '#   the Kubernetes version, and the upgrade below',
        '#   every workload, quota and network policy inside the cluster',
        '',
        'az aks upgrade -g rg-apps -n aks-prod --kubernetes-version 1.31.2',
        '# nodes are cordoned, drained and replaced one at a time.',
        '# a version falls out of support in about a year, whether or not you are ready.',
      ].join('\n'),
    },
  ],
  edges: [],
}
