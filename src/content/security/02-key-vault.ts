import type { Section } from '../types'

export const keyVault: Section = {
  id: 'key-vault',
  title: 'Key Vault',
  scene: 'three-things-one-vault',
  slide: `## The vault, and the two ways in

A managed, HSM-backed store with its **own audit log**. Three object types — and a hard rule about the second one.

### What it holds
- **Secrets** — any string: a connection string, an API key. You rotate by **adding a version**
- **Keys** — crypto material that **never leaves**. You do not fetch a key; you ask the vault to sign, wrap or unwrap *with* it
- **Certificates** — a key and its chain, renewed from an issuer automatically

### Two access models, and one of them is legacy
- **Access policies** — per identity, per operation, vault-wide. No inheritance, no Deny, and invisible to a scope-tree review
- **Azure RBAC** — roles like *Key Vault Secrets User*, on the same management group → subscription → resource group tree as everything else

Choose **RBAC**. One model beats finer grain.

> The vault is not a hiding place. It is an **audited** one — and that log is what you will want afterwards.`,
  narration:
    "Key Vault is where secrets go, and almost everybody's first version of that sentence is wrong in an interesting way. People think of it as a hiding place. It is not, really — it is an audited place. The value of Key Vault is not primarily that the string is hard to get at; it is that every single read of that string is a line in a log with an identity attached to it. When something goes wrong, the question you will be asked is not whether the secret was encrypted. It is who read it and when, and a vault is the only thing that can answer that. So, three kinds of object, and they behave differently in a way that matters. Secrets are the simple one: any string at all, a connection string, an API key, a password for something that has not caught up yet. You rotate a secret by adding a new version rather than overwriting it, which means the old version stays readable while your fleet catches up — that is a feature, not an accident. Keys are the one people get wrong. A key is cryptographic material, and the whole point of it is that it never leaves the vault. You do not fetch a key. You send the vault something and ask it to sign it, or wrap it, or unwrap it, and you get the result back, and the key itself never crosses the boundary. If your code is downloading a key, you are using the wrong object type. Certificates are a key plus its chain, bundled together, with the ability to renew automatically from an issuer — which is how you stop being the organisation whose site goes down because a certificate expired on a public holiday. Now the part that decides your architecture: there are two ways to grant access to a vault, and they are not equivalent. The original model is access policies. You attach a policy to the vault saying this identity may do these operations on this object type. It works. But it is per-vault, it does not inherit from anywhere, there is no way to express a Deny, and — this is the real cost — it is completely invisible to anybody reviewing permissions on the scope tree. Somebody auditing who can read production secrets would have to go and open every vault individually. The other model is Azure role-based access control, with roles like Key Vault Secrets User and Key Vault Crypto Officer, assigned on the same management group, subscription and resource group tree as every other permission in Azure. My recommendation is not subtle: use RBAC. Access policies give you slightly finer grain over operations, and you will almost never need that grain, and what you pay for it is a second permissions model that nobody remembers to look at. One model across the whole estate is worth more than precision in a corner of it. The next section is the thing that makes all of this actually pay off — because a vault that your application reaches using a stored credential has just moved the problem, not solved it.",
}
