import type { Scene } from '@graphlearning/flow'
import { whatYouRent } from './what-you-rent'
import { globalInfrastructure } from './global-infrastructure'
import { theScopeTree } from './the-scope-tree'
import { everyActionIsArm } from './every-action-is-arm'
import { oneSubOrMany } from './one-sub-or-many'
import { oneLifecycle } from './one-lifecycle'
import { sharedResponsibility } from './shared-responsibility'
import { whereTheBillComesFrom } from './where-the-bill-comes-from'
import { awsToAzure } from './aws-to-azure'
import { thePlatformMap } from './the-platform-map'

// foundations scenes — one per section, mirroring src/content/foundations. The renderer order is
// deliberate and no two adjacent sections share one, so the left pane keeps carrying information:
//   board · nest · nest+board · script · table · board · table · flow · table · board
export const foundationsScenes: Scene[] = [
  whatYouRent,
  globalInfrastructure,
  theScopeTree,
  everyActionIsArm,
  oneSubOrMany,
  oneLifecycle,
  sharedResponsibility,
  whereTheBillComesFrom,
  awsToAzure,
  thePlatformMap,
]
