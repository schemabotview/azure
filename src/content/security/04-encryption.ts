import type { Section } from '../types'

export const encryption: Section = {
  id: 'encryption',
  title: 'Encryption',
  scene: 'a-key-that-wraps-a-key',
  slide: `## It is already encrypted. Whose key wraps it?

Storage, managed disks, SQL and Cosmos encrypt at rest with **AES-256**, by default. So "is it encrypted" is never the question.

### The envelope
Data is encrypted with a **data encryption key**, and that key is stored only **wrapped** — encrypted by a **key encryption key**. The KEK is what you choose.

- **Platform-managed** — Microsoft's key, rotated for you. The default
- **Customer-managed (CMK)** — your key in Key Vault. You rotate it, and can **revoke** it

### What CMK buys, and costs
It buys **crypto-shred**: delete the key and the data is unreadable everywhere, at once. It costs an availability dependency — lose the vault and the resource stops, so soft-delete and purge protection are not optional. In transit is simpler: TLS, and *Secure transfer required* on every account.

> Choose CMK when a regulator or a contract asks who holds the key. Not because it sounds stronger.`,
  narration:
    "Encryption is the topic where the honest answer disappoints people, so I will give it to you straight away: it is already on. Azure Storage, managed disks, Azure SQL, Cosmos DB — all of them encrypt data at rest with two-fifty-six-bit AES, by default, and for most of them you cannot turn it off even if you wanted to. So when somebody asks whether your data is encrypted at rest, the answer is yes, and it was yes before anybody asked. That means the interesting question is a different one, and it is a question about keys. Let me describe the actual arrangement, because once you see it the whole discussion becomes simple. Your data is encrypted with a key called the data encryption key. That key is not stored in the clear anywhere — it is itself encrypted by a second key, called the key encryption key, and only the wrapped form is kept. This is called envelope encryption, and the reason for it is practical: rotating the outer key means re-wrapping one small key rather than re-encrypting a petabyte. The inner key is the platform's business. The outer key is yours to decide about. Option one, and the default, is a platform-managed key. Microsoft generates it, Microsoft rotates it, you do nothing and you operate nothing. Option two is a customer-managed key, which lives in your Key Vault. You created it, you rotate it on your schedule, and — this is the actual substance — you can revoke it. Now let me be very direct about what that second option buys you, because it is frequently chosen for the wrong reason. It does not make the data more encrypted. The algorithm is the same, the strength is the same. What it buys you is crypto-shred: because the data encryption key is wrapped by your key, destroying your key makes the data unreadable immediately, everywhere, including in backups, without anyone having to go and delete anything. For a regulator who wants a provable answer to the question of how you would guarantee data is gone, that is a very good answer. And it gives you a real answer to the question of who holds the key, which appears in contracts far more often than it appears in threat models. What it costs you is an availability dependency, and this is where teams get hurt. Your storage account now depends on your Key Vault. If the key is deleted, if access to the vault is lost, if a network rule cuts the resource off from it — the resource stops serving. Not degrades. Stops. So if you turn this on, soft-delete and purge protection on that vault are not a recommendation, they are part of the feature, and Azure will refuse to wire it up without them. In transit is much simpler and I will be brief. Everything speaks TLS. The one setting to actually check is secure transfer required on storage accounts, which rejects plain HTTP outright, and it should be on for every account you own. So: choose customer-managed keys when a regulator or a contract is asking who holds the key, or when you need crypto-shred. Do not choose them because they sound stronger than the default. The default is not weak, and the thing you would be adding is not strength — it is an operational obligation.",
}
