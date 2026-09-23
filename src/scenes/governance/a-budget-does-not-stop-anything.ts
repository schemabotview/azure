import type { Scene } from '@graphlearning/flow'

// §05. The fork is the point. Metered usage feeds two completely different things — the place you
// LOOK (cost analysis) and the thing that WATCHES (a budget) — and the chain off the budget ends at
// a person, deliberately, because a budget notifies and does not cap. Every team that has been
// surprised by a bill assumed the opposite.
export const aBudgetDoesNotStopAnything: Scene = {
  id: 'a-budget-does-not-stop-anything',
  title: 'A budget notifies. It does not cap.',
  nodes: [
    { id: 'usage', label: 'Metered usage', sub: 'and about a day behind', pattern: 'external', icon: 'history' },
    { id: 'analysis', label: 'Cost analysis', sub: 'sliced by tag, group, service', pattern: 'service', icon: 'costanalysis' },
    { id: 'budget', label: 'A budget', sub: 'a threshold on a scope', pattern: 'service', icon: 'costbudgets' },
    { id: 'ag', label: 'An action group', sub: 'email, webhook, a Function', pattern: 'service', icon: 'alerts' },
    { id: 'human', label: 'Someone decides', sub: 'nothing stops on its own', pattern: 'user', icon: 'users' },
  ],
  edges: [
    { source: 'usage', target: 'analysis', label: 'where you look' },
    { source: 'usage', target: 'budget', label: 'evaluated daily' },
    { source: 'budget', target: 'ag', label: 'at the threshold' },
    { source: 'ag', target: 'human' },
  ],
}
