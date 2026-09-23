import type { Scene } from '@graphlearning/flow'
import { insideAStorageAccount } from './inside-a-storage-account'
import { threeKindsOfBlob } from './three-kinds-of-blob'
import { theCoolingPath } from './the-cooling-path'
import { whatRedundancySurvives } from './what-redundancy-survives'
import { filesDisksShares } from './files-disks-shares'
import { oneFlagMakesALake } from './one-flag-makes-a-lake'
import { threeWaysIn } from './three-ways-in'
import { closingThePublicDoor } from './closing-the-public-door'
import { movingBytes } from './moving-bytes'

// storage scenes — one per section, mirroring src/content/storage. Renderer order, no two adjacent
// the same:
//   nest · table · flow · board · table · script · flow · nest · script
export const storageScenes: Scene[] = [
  insideAStorageAccount,
  threeKindsOfBlob,
  theCoolingPath,
  whatRedundancySurvives,
  filesDisksShares,
  oneFlagMakesALake,
  threeWaysIn,
  closingThePublicDoor,
  movingBytes,
]
