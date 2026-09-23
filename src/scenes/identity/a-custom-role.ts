import type { Scene } from '@graphlearning/flow'

// §08. The JSON is the lesson. Three fields carry the whole model — actions, notActions,
// dataActions — and the comment on dataActions is the one that catches people: the management plane
// and the data plane are separate surfaces, and a role over one says nothing about the other.
export const aCustomRole: Scene = {
  id: 'a-custom-role',
  title: 'When no built-in role is the right shape',
  nodes: [
    {
      id: 'role',
      kind: 'code',
      filename: 'restart-only-operator.json',
      minCols: 76,
      label: [
        '{',
        '  "roleName": "VM Restart Operator",',
        '  "assignableScopes": ["/subscriptions/8f2e.../resourceGroups/rg-web"],',
        '  "permissions": [{',
        '    "actions": [',
        '      "Microsoft.Compute/virtualMachines/read",',
        '      "Microsoft.Compute/virtualMachines/restart/action"',
        '    ],',
        '    "notActions":   [],   # subtracted from actions — never a deny for other roles',
        '    "dataActions":  [],   # the DATA plane: reading a blob, not reading the account',
        '    "notDataActions": []',
        '  }]',
        '}',
        '',
        '# effective permission = the UNION of every assignment that reaches you.',
        '# a second assignment can only add. Only a deny assignment subtracts.',
      ].join('\n'),
    },
  ],
  edges: [],
}
