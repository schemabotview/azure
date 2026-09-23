import type { Scene } from '@graphlearning/flow'

// §09. Conditional Access is an if-this-then-that engine evaluated on every sign-in, so it is drawn
// as the evaluation itself. The three outcomes are the point: it is not a switch between allow and
// block — the middle branch is where nearly all real policy lives.
export const doesThisSignInSurvive: Scene = {
  id: 'does-this-sign-in-survive',
  title: 'Every sign-in is evaluated, every time',
  nodes: [
    { id: 'signin', label: 'A sign-in attempt', sub: 'correct password already given', pattern: 'user', icon: 'users' },
    {
      id: 'signals',
      label: 'What the policy looks at',
      sub: 'the conditions half',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'who2', label: 'User or group', sub: 'and role held', pattern: 'network', variant: 'tile', icon: 'groups' },
        { id: 'app2', label: 'Target app', sub: 'what is being opened', pattern: 'network', variant: 'tile', icon: 'enterpriseapps' },
        { id: 'where2', label: 'Location', sub: 'and IP range', pattern: 'network', variant: 'tile', icon: 'region' },
        { id: 'risk', label: 'Risk', sub: 'device and sign-in', pattern: 'network', variant: 'tile', icon: 'idprotection' },
      ],
    },
    { id: 'grant', label: 'Allowed', sub: 'nothing further asked', pattern: 'storage', icon: 'conditionalaccess' },
    { id: 'mfa', label: 'Allowed, with MFA', sub: 'or a compliant device', pattern: 'service', icon: 'mfa' },
    { id: 'block', label: 'Blocked', sub: 'correct password, refused', pattern: 'warn', icon: 'idprotection' },
  ],
  edges: [
    { source: 'signin', target: 'signals', label: 'evaluated' },
    { source: 'signals', target: 'grant', label: 'low risk' },
    { source: 'signals', target: 'mfa', label: 'usual case' },
    { source: 'signals', target: 'block', label: 'refused' },
  ],
}
