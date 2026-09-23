import type { Section } from '../types'

export const dataAccessControl: Section = {
  id: 'data-access-control',
  title: 'Who may read the data',
  scene: 'three-ways-in',
  slide: `## Three doors, and only one has a name on it

- **Account keys** — two strings that grant *everything* in the account. Anyone holding one is the account, and the log records the key, not a person
- **SAS tokens** — a signed URL, scoped to a path and an expiry. Better, and still a bearer secret: forwarded, it works for whoever holds it
- **Entra identity + RBAC** — a role assignment on a principal. Revocable, attributable, and the only one that appears in an audit as a name

### The setting that makes the hierarchy real
Set \`allowSharedKeyAccess: false\` on the account. Until you do, every Contributor can read the keys and walk past everything above — which is why the management-plane / data-plane distinction from the identity course only half exists by default.

### If you must issue a SAS
Prefer a **user delegation SAS**: it is signed with an Entra credential rather than the account key, so it is bounded by that principal's own permissions and dies with them.`,
  narration:
    "There are three ways to get at data in a storage account, and they are not equivalent — they differ in what happens when one of them leaks. The first is the account keys. Every storage account has two, they are long random strings, and they grant complete control over everything in the account: every container, every blob, every share, read and write and delete. There is no scoping. There is no expiry. And critically, the access log records that the key was used, not who used it — so if a key leaks, you cannot tell legitimate traffic from an intruder. Two keys exist so you can rotate: switch everything to key two, regenerate key one, switch back. In practice, most organisations that have keys in use have never rotated them, because nobody is confident they know every place a key was pasted. The second is a shared access signature, a SAS. This is a signed URL that grants specific permissions — read this container, for the next hour, from this IP range. That is enormously better than a key, and it is the right tool for giving somebody outside your tenant temporary access to a file. But keep the property in view: a SAS is still a bearer token. Whoever holds the URL has the access. Forward it in an email and you have forwarded the permission, and there is no clean revocation short of regenerating the key that signed it. The third is Microsoft Entra identity with role assignments — exactly the model from the identity course, applied to the data plane. The caller is a principal: a user, a managed identity, a service principal. Access is a role assignment, which can be narrowed to a container, revoked instantly, reviewed, and — the part that matters at three in the morning — attributed to a name in the log. Now, the setting that makes this hierarchy real rather than aspirational. By default, an account accepts shared key access, which means anybody with the Contributor role on that account can read the keys from the management plane and walk straight past every role assignment you carefully configured. Set allowSharedKeyAccess to false and shared key authentication stops working entirely. That is the switch that turns the management-plane versus data-plane distinction from a theory into a boundary. Expect it to break something the first time — a legacy tool, a connection string in an old app — and fix those rather than reverting it. And if you do need a SAS, prefer a user delegation SAS: it is signed with an Entra credential instead of the account key, which means it is bounded by that principal's own permissions and it dies when they lose them.",
}
