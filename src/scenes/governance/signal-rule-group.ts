import type { Scene } from '@graphlearning/flow'

// §08. The shape is worth drawing because of ONE node: the action group. Every alert rule people
// build starts by attaching notifications to the rule, and the reason Azure separates them is that
// the group is reusable — change who is paged once, and forty rules follow. The fork at the bottom
// is what a group actually fans out to.
export const signalRuleGroup: Scene = {
  id: 'signal-rule-group',
  title: 'The action group is the piece worth understanding',
  nodes: [
    { id: 'sig', label: 'A signal', sub: 'a metric, a log, a health event', pattern: 'external', icon: 'metrics' },
    { id: 'rule', label: 'An alert rule', sub: 'condition, window, frequency', pattern: 'service', icon: 'alerts' },
    { id: 'ag', label: 'An action group', sub: 'reusable, shared by many rules', pattern: 'service', icon: 'workflow' },
    { id: 'people', label: 'Email, SMS, push', sub: 'and the rota behind it', pattern: 'user', icon: 'users' },
    { id: 'hook', label: 'A webhook', sub: 'into the ticket system', pattern: 'service', icon: 'zap' },
    { id: 'fn', label: 'A Function', sub: 'that remediates it', pattern: 'service', icon: 'functions' },
  ],
  edges: [
    { source: 'sig', target: 'rule', label: 'on a window' },
    { source: 'rule', target: 'ag', label: 'fired, then resolved' },
    { source: 'ag', target: 'people' },
    { source: 'ag', target: 'hook' },
    { source: 'ag', target: 'fn' },
  ],
}
