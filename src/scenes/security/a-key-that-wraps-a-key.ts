import type { Scene } from '@graphlearning/flow'

// §04. Encryption at rest is an envelope, and the nesting says so: the data sits INSIDE the key that
// encrypts it. What the two nodes above show is that the argument is never "is it encrypted" — it
// always is — but which key wraps the wrapper, and therefore who can make the data unreadable.
export const aKeyThatWrapsAKey: Scene = {
  id: 'a-key-that-wraps-a-key',
  title: 'It is always encrypted. The question is whose key wraps it.',
  nodes: [
    { id: 'pmk', label: 'A Microsoft-managed key', sub: 'the default; you do nothing', pattern: 'service', icon: 'lock' },
    { id: 'cmk', label: 'Your key, in Key Vault', sub: 'you can rotate it, and revoke it', pattern: 'storage', icon: 'keyvault' },
    {
      id: 'dek',
      label: 'The data encryption key',
      sub: 'per resource, and stored only in its wrapped form',
      pattern: 'group',
      icon: 'key',
      children: [
        { id: 'data', label: 'Your data at rest', sub: 'AES-256, not optional', pattern: 'storage', icon: 'disk' },
      ],
    },
  ],
  edges: [
    { source: 'pmk', target: 'dek', label: 'the default' },
    { source: 'cmk', target: 'dek', label: 'or yours' },
  ],
}
