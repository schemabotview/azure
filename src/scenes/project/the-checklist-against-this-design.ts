import type { Scene } from '@graphlearning/flow'

// §07. The security course's closing list, walked against this design and answered honestly. The
// last two lines are why the frame is worth a section: one item is marked not-applicable with a
// reason, and one is DECLINED with a reason — a SIEM nobody is rota'd to read is a cost and a
// liability, and writing that down is a review. A list of ticks is not.
export const theChecklistAgainstThisDesign: Scene = {
  id: 'the-checklist-against-this-design',
  title: 'The checklist, answered honestly',
  nodes: [
    {
      id: 'chk',
      kind: 'code',
      filename: 'security review · the order platform, before launch',
      minCols: 76,
      label: [
        '[x] MFA on admins .......... Conditional Access, the whole group',
        '[x] No standing Owner ...... PIM, 4 hours, the other engineer approves',
        '[x] No public IP on data ... Private Endpoint: SQL, vault, storage',
        '[x] WAF in front ........... Front Door, Prevention, tuned over two weeks',
        '[x] DDoS on the VNet ....... Network Protection, on the hub',
        '[x] No secret in config .... managed identity; the PSP key in Key Vault',
        '[x] Diagnostics on ......... deployIfNotExists, at the management group',
        '[x] Locks on what matters .. CanNotDelete: SQL, the vault, the workspace',
        '',
        '[-] Defender for Servers ... nothing here is a VM. Not applicable, and',
        '                            recorded as such so it is not re-asked.',
        '',
        '[!] Sentinel ............... DECLINED, for now. Two engineers and no',
        '                            rota, so incidents would queue unread — which',
        '                            is a cost AND a liability. Revisit when there',
        '                            is somebody to page. Written down, with a date.',
      ].join('\n'),
    },
  ],
  edges: [],
}
