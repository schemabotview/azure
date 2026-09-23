import type { Scene } from '@graphlearning/flow'

// §05. Three piles at cols 2, the third centred underneath — at cols 3 a board of three renders at
// half this type size. Each pile STACKS its two cards rather than setting them side by side: piles
// of two-across made the whole board 1040×330, which is the letterbox fitView shrinks, and it came
// out at half this type size too. All six are CARDS: a pile of tiles is narrower than a pile of
// cards, so mixing them made the three piles visibly uneven. The piles are free · paid · output,
// not a feature list, because the only real question about Defender for Cloud is what costs money.
export const scoreRecommendationAlert: Scene = {
  id: 'score-recommendation-alert',
  title: 'What is free, what is billed, and what comes out',
  cols: 2,
  nodes: [
    {
      id: 'free',
      label: 'Free · posture',
      sub: 'already on, everywhere',
      pattern: 'group',
      children: [
        { id: 'score', label: 'Secure score', sub: 'one number, per subscription', pattern: 'user', icon: 'metrics' },
        { id: 'recs', label: 'A ranked list', sub: 'from a built-in initiative', pattern: 'service', icon: 'circlecheck' },
      ],
    },
    {
      id: 'paid',
      label: 'Paid · plans',
      sub: 'per resource type',
      pattern: 'group',
      children: [
        { id: 'srv', label: 'For Servers', sub: 'EDR and a vuln scan', pattern: 'service', icon: 'vm' },
        { id: 'sto', label: 'For Storage', sub: 'malware and anomalies', pattern: 'service', icon: 'storage' },
      ],
    },
    {
      id: 'out',
      label: 'What comes out',
      sub: 'and where it goes',
      pattern: 'group',
      children: [
        { id: 'alert', label: 'Alerts', sub: 'a detection, not a gap', pattern: 'warn', icon: 'zap' },
        { id: 'siem', label: 'Into Sentinel', sub: 'if anyone is reading', pattern: 'service', icon: 'sentinel' },
      ],
    },
  ],
  edges: [],
}
