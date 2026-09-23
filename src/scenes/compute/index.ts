import type { Scene } from '@graphlearning/flow'
import { aVmIsFiveThings } from './a-vm-is-five-things'
import { readingASizeName } from './reading-a-size-name'
import { diskTiers } from './disk-tiers'
import { whatEachSurvives } from './what-each-survives'
import { autoscale } from './autoscale'
import { planAndApps } from './plan-and-apps'
import { theContainerLadder } from './the-container-ladder'
import { whoOwnsTheCluster } from './who-owns-the-cluster'
import { choosingCompute } from './choosing-compute'

// compute scenes — one per section, mirroring src/content/compute. Renderer order, no two adjacent
// the same:
//   nest · script · table · board · flow · nest · board · script · table
export const computeScenes: Scene[] = [
  aVmIsFiveThings,
  readingASizeName,
  diskTiers,
  whatEachSurvives,
  autoscale,
  planAndApps,
  theContainerLadder,
  whoOwnsTheCluster,
  choosingCompute,
]
