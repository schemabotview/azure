import type { Section } from '../types'

export const adlsGen2: Section = {
  id: 'adls-gen2',
  title: 'ADLS Gen2 — the lake flag',
  scene: 'one-flag-makes-a-lake',
  slide: `## One checkbox, a different engine underneath

**Hierarchical namespace** gives a storage account real directories. Without it, \`bronze/orders/\` is a prefix in a key; with it, it is an object the service understands.

### What that changes
- **Renaming a directory** becomes one metadata operation instead of copying and deleting every blob under it — which is the difference between an atomic write pattern and a broken one
- **POSIX ACLs** apply per directory and per file, underneath the container-level RBAC
- The **ABFS driver** works — which is what Spark, Databricks, Synapse and Fabric expect to find

### The decision is permanent
It can only be set **at creation**. Turning it on later means a new account, a copy of every byte, and every consumer repointed. If there is any chance this account will hold analytics data, turn it on now — it costs nothing when unused.`,
  narration:
    "Azure Data Lake Storage Gen2 is not a separate service, and that confuses people who go looking for it in the portal. It is blob storage with one option enabled: the hierarchical namespace. Tick that box at creation and the account gains real directories; leave it off and you have the flat namespace we discussed earlier, where a path is just a long key with slashes in it. Why does that matter enough to be its own section? Three reasons, and the first is the one that breaks things. Without a hierarchical namespace, renaming a directory is not an operation — it is a loop. The service has to copy every blob under that prefix to the new prefix and then delete every original. For a folder with a million files that is slow, expensive, and non-atomic, which means a failure halfway leaves you with a mess. With the flag on, renaming a directory is a single metadata operation that either happens or does not. That matters far more than it sounds, because the standard way to write data safely in a lake is to write to a temporary directory and then rename it into place when it is complete. Every big data engine does this. On a flat namespace, that pattern is quietly broken. The second reason is permissions. With the flag on you get POSIX-style access control lists on directories and files, underneath the container-level role assignments we discussed in the identity course. So a data platform team can grant one group access to the bronze folder and another to gold, inside one account, without splitting accounts to express it. The third reason is compatibility. The ABFS driver — the one Spark, Databricks, Synapse and Fabric all use — expects this. Without it, those tools fall back to slower paths and some features simply do not work. Now the part to take seriously: this flag can only be set when the account is created. There is a migration path, and it involves a new account, a copy of every byte, and every pipeline and consumer repointed at the new endpoint. So the practical advice is to turn it on whenever there is any chance the account will hold analytics data. It costs nothing when unused, and it removes a future migration that always arrives at the least convenient time.",
}
