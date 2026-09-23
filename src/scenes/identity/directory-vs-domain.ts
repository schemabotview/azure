import type { Scene } from '@graphlearning/flow'

// §01. The comparison is the content: every row is a thing people assume transfers from Active
// Directory and does not. A table rather than two boxes, because the value is in reading ACROSS a
// row — what you did there, what you do here.
export const directoryVsDomain: Scene = {
  id: 'directory-vs-domain',
  title: 'Same company. Different machine entirely.',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'user',
      label: 'Active Directory vs Microsoft Entra ID',
      sub: 'the rename hides a different design',
      headers: ['', 'AD Domain Services', 'Microsoft Entra ID'],
      values: [
        ['Talks', 'LDAP, Kerberos', 'HTTPS: OAuth 2.0, SAML'],
        ['Structure', 'forests, domains, OUs', 'one flat tenant'],
        ['Joins', 'domain-joined machines', 'apps and devices'],
        ['Group Policy', 'yes', 'no — Intune does that'],
        ['Built for', 'the office network', 'the public internet'],
      ],
    },
  ],
  edges: [],
}
