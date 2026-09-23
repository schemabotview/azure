import type { Section } from '../types'

export const theLake: Section = {
  id: 'the-lake',
  title: 'The lake',
  scene: 'folders-that-survive-contact',
  slide: `## The lake is its folder layout

A storage account with a hierarchical namespace. Everything that makes it good or bad is the **paths you choose**.

### The three zones
- **bronze** — raw, as it arrived, append-only. The evidence
- **silver** — cleaned, typed, deduplicated. One row per real thing
- **gold** — shaped for a question: a star, or one wide table

### Four rules
1. **Partition by what you filter on**, in the path as \`key=value\` — then every engine prunes without being told
2. **One dataset per folder.** A folder is a table; mixed schemas are not
3. **128 MB to 1 GB per file.** Small files make a fast engine slow
4. **bronze is append-only.** Nothing rebuilds bronze

> Names are a public API. Renaming a folder breaks every notebook, pipeline and report below it.`,
  narration:
    "A data lake sounds like a product and is really a discipline. Technically it is what we built in the storage course: a storage account with the hierarchical namespace flag on, which turns a flat container of blobs into something with real directories, real renames and POSIX-style permissions. That is the whole technical difference. Everything that makes a lake good or catastrophic is the folder layout, and that is a set of decisions you make on day one and live with for years. Start with the zones, which you will hear called the medallion architecture. Bronze is raw: the data exactly as it arrived, in whatever ugly shape the source produced, appended and never edited. Silver is cleaned: typed properly, deduplicated, bad rows quarantined, one row per real-world thing. Gold is shaped for a question: a star schema, or one wide denormalised table, built so a dashboard is fast. Three zones, and the direction is always forwards. Now the four rules that decide whether this works, and I have watched each of them be learned the expensive way. Rule one: partition by the column you filter on, which is almost always a date, and put it in the path as key equals value — ingest underscore date equals two-oh-two-six dash oh-nine dash two-three. Every engine on the platform, Spark and Synapse and Fabric alike, recognises that pattern and skips folders it does not need. Get it wrong and every query reads everything. Rule two: one dataset per folder. A folder is a table. The moment two different schemas live in the same folder, every reader has to cope with both, forever. Rule three: aim for files between roughly a hundred and thirty megabytes and a gigabyte. Small files are the classic way to make a fast engine slow — ten thousand tiny files means ten thousand open-and-close operations before any work happens, and a streaming job that writes every few seconds will produce exactly that unless you compact. Rule four, and this is the one to be dogmatic about: bronze is append-only. If silver turns out to be wrong, you rebuild it from bronze and you have lost an afternoon. If bronze is wrong or deleted, the evidence is gone and you are asking a source system for last quarter. One last thing, which is not technical. Folder and column names are a public API. Once a notebook, a pipeline and four reports read a path, renaming that path is a breaking change to all of them, and there is no compiler to tell you. Pick the names as if you cannot change them, because effectively you cannot.",
}
