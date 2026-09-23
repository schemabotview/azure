import type { Scene } from '@graphlearning/flow'

// §03. A genuine mechanism and a one-way one, so a flow: data ages down the tiers under a rule you
// wrote, and the way back from archive is not a tier change but a rehydration that takes hours. The
// warn card is drawn at the end because "cheap" is the half of the trade people quote.
//
// TB, not LR. Four cards side by side is past the width fitView can spend — the first cut rendered
// every card at about a third of its legible size and squeezed the edge labels into the gaps.
export const theCoolingPath: Scene = {
  id: 'the-cooling-path',
  title: 'Storage gets cheaper as it gets slower to reach',
  nodes: [
    { id: 'hot', label: 'Hot', sub: 'written and read often', pattern: 'service', icon: 'blob' },
    { id: 'cool', label: 'Cool', sub: 'read rarely · 30-day minimum', pattern: 'network', icon: 'blob' },
    { id: 'archive', label: 'Archive', sub: 'offline · 180-day minimum', pattern: 'storage', icon: 'databox' },
    { id: 'rehydrate', label: 'Rehydration', sub: 'hours, and billed', pattern: 'warn', icon: 'clock' },
  ],
  edges: [
    { source: 'hot', target: 'cool', label: 'a lifecycle rule' },
    { source: 'cool', target: 'archive', label: 'after 90 days, say' },
    { source: 'archive', target: 'rehydrate', label: 'to read it again' },
  ],
}
