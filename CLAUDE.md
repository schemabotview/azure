# CLAUDE.md — azure (lean operational pointers)

The **Azure** concept app of GraphL. Workspace-wide invariants, content model and working agreement
live in the workspace [`CLAUDE.md`](../CLAUDE.md) — read that first; this file is Azure-specific.
The full 104-section plot is [`COURSE-PLAN.md`](./COURSE-PLAN.md).

## What this is

A standalone concept app: its own scenes + courses. The render engine is **`@graphlearning/flow`**
(`^0.7.0` — the release that carries the Azure icon set) and the app shell is
**`@graphlearning/shell`**, both pinned by version.

The repo name collides with its own source material, and that is worth knowing before you go
looking: **`schemabotview/azure` previously held the content quarry** — a 14-notebook AZ-104
curriculum with its own audio. This app replaced it at that URL on the owner's instruction. The
quarry was an *inventory of topics*, never a script; if it is ever restored from git history, it is
still only there to check breadth against.

## Course arc (11)

`foundations · identity · compute · storage · networking · databases · serverless · data · security ·
governance · project`

All eleven are declared in `src/content/index.ts` from day one so the arc shows in the catalog
immediately; each fills as its slice is authored. **Courses 1–5 are the shippable prefix.** Played in
syllabus order; `→` past a course's last section rolls into the next.

**Authored so far: `foundations` (10/10).** The rest are declared with `sections: []`.

## The one idea the arc is built on

> Management group → subscription → resource group → resource. **RBAC, Policy and cost all attach to
> a level of that tree and inherit downward.**

It is taught in `foundations` §03–§06 and assumed everywhere after. It is also the biggest genuine
difference from AWS, which is why `foundations` §09 exists as a translation section rather than
letting the comparison leak into every later course.

## Scenes — what this concept has that others do not

`@graphlearning/flow@0.7.0` ships **134 Azure service tiles**; a node names one with `icon: 'vm'`.
Three things to know before authoring one:

- **The key is the short spoken service name** (`vm`, `aks`, `keyvault`, `adls`), not the package's
  export name. The `azure-gallery` fixture in `ui-flow`'s dev harness is the index — read it rather
  than guessing, because an unknown key fails silently into the pattern glyph.
- **Four keys are spelled apart from the AWS set** — `backupcenter`, `costbudgets`, `dbmigration`,
  `wafpolicy` — because `NodeIcon` checks AWS first and a shared key would resolve to the AWS tile.
- **A tile is not always the right glyph.** An availability zone is a *building*, not a service:
  §02 uses the lucide `building` glyph for its zones because six copies of the Availability Sets
  tile said nothing. Reach for a lucide glyph whenever the node is a concept rather than a product.

Renderer mix in `foundations`, and no two adjacent sections share one:
`board · nest · nest+board · script · table · board · table · flow · table · board`.

## Authoring rules — learned on these frames

- **A wide, short composition renders small.** fitView is width-bound, so two containers side by
  side (≈1040×290) come out at roughly half the type size of the same content stacked. §02 and §06
  were both authored side-by-side, looked thin on the frame, and were stacked. Check the render
  before assuming a horizontal arrangement reads better.
- **A data table's width sets its type size.** §05 and §09 shipped with sentence-length cells and
  rendered at half the size of §07's table. Keep a cell to a phrase; the sentence belongs in the
  slide.
- **An edge label rides the midpoint of its path.** §08's `levers → rate` label sat straight on top
  of the Meter card — the exact defect the workspace file warns about. If a label cannot be short,
  drop it and let the arrow carry the relation.
- **Keep a leaf card's `label` to ~3 words and its `sub` to one line.** A leaf is a fixed 210×96; it
  does not grow. `npm run check` models this, but it models the *height*, not whether the wrap reads
  well.

## Layout

```
src/content/    courses → sections (one file per section) + registry
src/scenes/     hand-authored scenes + registry (one folder per course)
src/main.tsx    mounts <ConceptApp> — router, section view, slide panel, catalog
                and narration are all @graphlearning/shell
src/theme.css   this repo's three brand tokens — its entire design surface
scripts/        concept.json (publishing identity) · check-content.mjs (the budget guard)
public/audio/<course>/   narration wavs
```

**Brand:** Azure blue `#3aa0ff` + warm gold `#ffcf70`. The vendor hue `#0078d4` reads at ~3.4:1 on
the shell's `#1a1d23` surface, which is thin for link text, so the token is the lifted blue.

## Build & verify

- `npm install` → `npm run dev` (port 5173, or the next free one). `npm run build`,
  `npx tsc --noEmit` and `npm run check` must all stay clean.
- No test runner. Bar for a change: **build clean + visually correct** at the relevant route, and
  **every new section seen rendered** before it is called done.
- Adding a scene: define in `src/scenes/<course>/`, register in that folder's `index.ts`.
- Adding content: add a `Section` under `src/content/<course>/`, list it in that folder's `index.ts`.

## House rules for this repo

- **Nothing cross-references a neighbour by course number.** Name a course, never number it — that
  is what lets the repo ship as a prefix and makes a later reorder free.
- After a course's audio is generated its section **order is frozen** — wav filenames are pinned to
  section ids.
- **No volatile version numbers in narration.** Azure renames services faster than a wav can be
  re-cut; the exact name or api-version goes on the slide, which is editable.
- Narration is authored **fresh**.
