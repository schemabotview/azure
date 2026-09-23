import type { Scene } from '@graphlearning/flow'

// §10. The closing board: the same person, two arrangements of the same role. Drawn as two piles
// because the difference is a state, not a flow. The left pile is deliberately LUCIDE rather than
// Azure tiles: a full-colour service tile ignores the pattern accent, so warn-red never reached the
// frame and both piles read identically — the contrast IS the argument here. — and the second pile is what the whole course has
// been building toward, which is why it carries the review cadence alongside the elevation.
export const standingAccess: Scene = {
  id: 'standing-access',
  title: 'The role you hold at 3am is the risk',
  cols: 2,
  nodes: [
    {
      id: 'standing',
      label: 'Standing access',
      sub: 'Owner, permanently, since onboarding',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 's-always', label: 'Always on', sub: 'nights, holidays', pattern: 'warn', variant: 'tile', icon: 'clock' },
        { id: 's-phish', label: 'One phish', sub: 'is total', pattern: 'warn', variant: 'tile', icon: 'skull' },
        { id: 's-drift', label: 'Never reviewed', sub: 'granted in 2021', pattern: 'warn', variant: 'tile', icon: 'history' },
        { id: 's-audit', label: 'No record', sub: 'of why it was used', pattern: 'warn', variant: 'tile', icon: 'circleslash' },
      ],
    },
    {
      id: 'jit',
      label: 'Eligible access',
      sub: 'the same role, claimed when needed',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'j-req', label: 'Activate', sub: 'with a reason', pattern: 'network', variant: 'tile', icon: 'pim' },
        { id: 'j-appr', label: 'Approve', sub: 'and MFA again', pattern: 'network', variant: 'tile', icon: 'mfa' },
        { id: 'j-time', label: 'Expires', sub: 'in hours', pattern: 'network', variant: 'tile', icon: 'identitygovernance' },
        { id: 'j-rev', label: 'Reviewed', sub: 'on a cadence', pattern: 'network', variant: 'tile', icon: 'compliance' },
      ],
    },
  ],
  edges: [],
}
