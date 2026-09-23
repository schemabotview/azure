import type { Scene } from '@graphlearning/flow'
import { fourShapesOfData } from './four-shapes-of-data'
import { howAzureSqlIsPriced } from './how-azure-sql-is-priced'
import { whatOnlyMiHas } from './what-only-mi-has'
import { threeWaysToRunSql } from './three-ways-to-run-sql'
import { insideACosmosAccount } from './inside-a-cosmos-account'
import { thePartitionKey } from './the-partition-key'
import { theFiveConsistencyLevels } from './the-five-consistency-levels'
import { theCacheInFront } from './the-cache-in-front'
import { theMigrationRunbook } from './the-migration-runbook'

// databases scenes — one per section, mirroring src/content/databases. Renderer order, no two
// adjacent the same:
//   board · table · script · table · nest · script · table · flow · script
export const databasesScenes: Scene[] = [
  fourShapesOfData,
  howAzureSqlIsPriced,
  whatOnlyMiHas,
  threeWaysToRunSql,
  insideACosmosAccount,
  thePartitionKey,
  theFiveConsistencyLevels,
  theCacheInFront,
  theMigrationRunbook,
]
