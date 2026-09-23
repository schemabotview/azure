import type { Scene } from '@graphlearning/flow'

// §04. The claim is invisible in the portal, so the scene shows the wire. One card, two halves: the
// command a person types, and the request it becomes. Everything an author would otherwise have to
// assert — one endpoint, one resource id, one api-version, PUT as the verb — is legible in the text
// itself, which is the whole reason this section is a [script] rather than a four-box diagram.
export const everyActionIsArm: Scene = {
  id: 'every-action-is-arm',
  title: 'Four front doors. One API behind them.',
  nodes: [
    {
      id: 'wire',
      kind: 'code',
      filename: 'az vm create --debug (trimmed)',
      minCols: 76,
      label: [
        '# what you type',
        'az vm create -g rg-web -n web-01 --image Ubuntu2204 --size Standard_B2s',
        '',
        '# what Azure Resource Manager actually receives',
        'PUT https://management.azure.com',
        '    /subscriptions/8f2e.../resourceGroups/rg-web',
        '    /providers/Microsoft.Compute/virtualMachines/web-01',
        '    ?api-version=2024-07-01',
        '',
        'Authorization: Bearer eyJ0eXAiOi...        # a Microsoft Entra token',
        '{ "location": "eastus",',
        '  "properties": { "hardwareProfile": { "vmSize": "Standard_B2s" } } }',
        '',
        '# the portal, PowerShell, Terraform and the SDKs send this same request',
      ].join('\n'),
    },
  ],
  edges: [],
}
