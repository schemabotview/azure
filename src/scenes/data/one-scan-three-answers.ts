import type { Scene } from '@graphlearning/flow'

// §09. A flow, because the three things Purview gives you are all OUTPUTS of one act: pointing a
// scan at a source. Drawn as a fork rather than three unrelated features, so the dependency is
// visible — nothing in the catalog exists until something has been scanned.
export const oneScanThreeAnswers: Scene = {
  id: 'one-scan-three-answers',
  title: 'Everything here is a consequence of one scan',
  nodes: [
    { id: 'src', label: 'Your estate', sub: 'SQL, lake, Fabric, S3', pattern: 'external', icon: 'boxes' },
    { id: 'scan', label: 'A scan', sub: 'per source, on a schedule', pattern: 'service', icon: 'search' },
    { id: 'cat', label: 'Catalog', sub: 'searchable, with owners', pattern: 'storage', icon: 'purview' },
    { id: 'lin', label: 'Lineage', sub: 'column to column', pattern: 'storage', icon: 'gitbranch' },
    { id: 'cls', label: 'Classification', sub: 'where the PII is', pattern: 'warn', icon: 'shieldcheck' },
  ],
  edges: [
    { source: 'src', target: 'scan', label: 'a managed identity' },
    { source: 'scan', target: 'cat' },
    { source: 'scan', target: 'lin' },
    { source: 'scan', target: 'cls' },
  ],
}
