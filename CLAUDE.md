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

**Authored so far:** `foundations` (10) · `identity` (10) · `compute` (9) · `storage` (9) ·
`networking` (10) — the whole shippable prefix — plus `databases` (9) and `serverless` (9) =
**66 sections**. Courses 8-11 are declared with `sections: []`. No audio yet, so every authored
course's section order is still free to change.

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

Renderer mix per course, and no two adjacent sections share one. Check the plan BEFORE authoring —
`networking` was drafted with two flows back to back and had to be recut:

| course | order |
|---|---|
| `foundations` | board · nest · nest · script · table · board · table · flow · table · board |
| `identity` | compare · nest · board · script · flow · nest · compare · script · flow · board |
| `compute` | nest · script · table · board · flow · nest · board · script · table |
| `storage` | nest · table · flow · board · table · script · flow · nest · script |
| `networking` | nest · table · script · board · flow · table · flow · board · table · nest |
| `databases` | board · table · script · table · nest · script · table · flow · script |
| `serverless` | script · table · script · flow · board · nest · compare · script · flow |

`compare` and `table` are BOTH table nodes — the difference is only whether you read down the rows
or across them. So they count as the same renderer for adjacency: two in a row read as one repeated
frame. `serverless` was planned around that.

## Authoring rules — learned on these frames

- **A wide, short composition renders small.** fitView is width-bound, so two containers side by
  side (≈1040×290) come out at roughly half the type size of the same content stacked. `foundations`
  §02 and §06 were both authored side-by-side, looked thin on the frame, and were stacked. A board
  of three piles has the same problem: `serverless` §05 rendered at half size at `cols: 3` and at
  full size at `cols: 2` with the third pile centred underneath. The left pane is roughly SQUARE —
  aim a composition at that, not at a letterbox.
- **A data table's width sets its type size.** §05 and §09 shipped with sentence-length cells and
  rendered at half the size of §07's table. Keep a cell to a phrase; the sentence belongs in the
  slide.
- **An edge label rides the midpoint of its path.** §08's `levers → rate` label sat straight on top
  of the Meter card — the exact defect the workspace file warns about. If a label cannot be short,
  drop it and let the arrow carry the relation.
- **A flow must not be a cycle.** The layout is longest-path and cannot rank one: `compute`'s
  autoscale scene closed its loop and the chain ran off the top and bottom of the frame, dropping an
  edge label onto a card on the way. Narrate the loop; draw the line.
- **A full-colour service tile ignores the pattern accent.** `identity`'s warn-red pile rendered
  identical to the pile it was contrasted against. Where the COLOUR is the argument, use lucide.
- **`flow: 'LR'` caps at three cards** — `storage`'s four-tier path came out at a third of legible
  size before it was switched to TB.
- **Review slides in a 16:9 viewport.** The slide pane's usable height in DESIGN px is roughly
  `2015 × (viewport height / width)` — because the shell scales by WIDTH (`zoom = paneWidth / 806`)
  while the pane's pixel height comes from the window. At 16:9, the capture ratio, that is **1081
  design px**. A wide, short browser window shrinks it to ~1000 and reports three slides clipping
  that the capture frame renders perfectly. Size the window before trusting the frame.
- **The oracle for a slide's height is the DOM, not the guard.** With a section routed:
  `document.querySelector('.slide-panel__scaler').scrollHeight` is its true design height, and
  `panel.scrollHeight > panel.clientHeight` is whether it actually clips. `check-content.mjs` models
  the same number from characters and lands within ±3.5% — good enough to catch the gross case,
  never good enough to settle a borderline one. All 66 sections were measured this way; the tallest
  is 1072 against the 1081 pane.
- **Keep a slide's `## ` title to one rendered line.** The guard used to push a single line's height
  for any heading, so a two-line title was undercounted by ~52px: `databases` §09 modelled 1096px,
  passed, and clipped its title AND its closing blockquote on screen. Headings now wrap at their own
  measured glyph width — but a title that needs two lines is a title to shorten.
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
