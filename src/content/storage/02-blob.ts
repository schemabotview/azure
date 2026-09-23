import type { Section } from '../types'

export const blob: Section = {
  id: 'blob',
  title: 'Blob storage',
  scene: 'three-kinds-of-blob',
  slide: `## Containers, blobs, and three kinds of write

A **container** is a flat namespace inside the account; a **blob** is an object in it. Slashes in a name look like folders and are not — without the lake flag, they are just characters in a long key.

### Block, append, page
The type is fixed **at write time** and cannot be changed afterwards.

- **Block** — nearly everything: files, images, backups, parquet. Uploaded as blocks, committed as a whole, so a resumed upload is cheap
- **Append** — writes only ever go on the end. Logs and audit trails
- **Page** — random writes at 512-byte boundaries. This is what a managed disk is made of

### The two properties worth knowing early
**Soft delete** keeps a deleted blob recoverable for a window you choose — turn it on now, it is cheap and it has saved many people. **Versioning** keeps every overwrite, which is protection and a bill; pair it with a lifecycle rule that expires old versions.`,
  narration:
    "Blob storage is the one of the four you will use most, and the model is deliberately simple. Inside an account you create containers, and inside a container you put blobs. A container is flat — there are no real directories, no nesting. When you see a blob named bronze slash orders slash 2026 slash part-0001 dot parquet, you are not looking at four folders; you are looking at one object whose name happens to contain slashes. Tools display that as a tree, and the API can list by prefix, which makes the illusion convincing right up until you try to rename a folder and discover there is nothing to rename. We will fix that properly when we get to the lake. Now, the part people miss: there are three types of blob, the type is chosen when the blob is first written, and it cannot be changed afterwards. Block blobs are the default and what you almost always want — documents, images, backups, parquet files, anything you write once and read many times. The name comes from how they are uploaded: in blocks, in parallel, and then committed as one operation, which is why uploading a fifty-gigabyte file over a flaky connection is resumable rather than tragic. Append blobs only allow writes at the end. That sounds like a limitation and it is exactly right for log files and audit trails, where many writers add lines and nobody edits history. And page blobs support random writes at 512-byte boundaries, which is what a virtual hard disk needs — every managed disk you created in the compute course is, underneath, a page blob you never see. Two features to turn on before you have anything you care about in there. Soft delete keeps deleted blobs recoverable for a retention window you set — seven days, thirty, whatever suits — and it costs almost nothing. It is the difference between a mistaken delete being an inconvenience and being an incident, and the number of times that has saved someone is larger than anyone admits. The second is versioning, which keeps every overwrite as a previous version. That is genuine protection against a bad deployment overwriting good data — and it is also a bill, because you are now storing every version of everything. Turn it on where it matters, and pair it with a lifecycle rule that expires old versions after a sensible period. Which brings us neatly to tiers.",
}
