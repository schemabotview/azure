import type { Scene } from '@graphlearning/flow'
import { fourStagesOfAnEstate } from './four-stages-of-an-estate'
import { foldersThatSurviveContact } from './folders-that-survive-contact'
import { aPipelineAndItsRuntime } from './a-pipeline-and-its-runtime'
import { orchestrateOrTransform } from './orchestrate-or-transform'
import { oneLakeManyItems } from './one-lake-many-items'
import { howAPoolSpreadsATable } from './how-a-pool-spreads-a-table'
import { whoOwnsWhichHalf } from './who-owns-which-half'
import { theWindowIsThePoint } from './the-window-is-the-point'
import { oneScanThreeAnswers } from './one-scan-three-answers'

// data scenes — one per section, mirroring src/content/data. Renderer order, no two adjacent the
// same, and `compare` (§04) kept clear of `table` (§06) since both are table nodes:
//   board · script · nest · compare · nest · table · board · script · flow
export const dataScenes: Scene[] = [
  fourStagesOfAnEstate,
  foldersThatSurviveContact,
  aPipelineAndItsRuntime,
  orchestrateOrTransform,
  oneLakeManyItems,
  howAPoolSpreadsATable,
  whoOwnsWhichHalf,
  theWindowIsThePoint,
  oneScanThreeAnswers,
]
