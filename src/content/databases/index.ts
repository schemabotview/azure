import type { Course } from '../types'
import { theChoice } from './01-the-choice'
import { azureSqlDatabase } from './02-azure-sql-database'
import { managedInstance } from './03-managed-instance'
import { sqlOnAVm } from './04-sql-on-a-vm'
import { cosmosDb } from './05-cosmos-db'
import { partitionsAndRus } from './06-partitions-and-rus'
import { consistency } from './07-consistency'
import { postgresAndRedis } from './08-postgres-and-redis'
import { migration } from './09-migration'

// databases — the sixth course, and the first past the shippable prefix. Nine sections.
//
// §01 is the only place the whole field is in view: four shapes of question, and the point that a
// real system uses several at once. §02-§04 are one engine at three levels of ownership — the
// ladder the compute course taught, applied to SQL Server, with the VM row there to be argued out
// of. §05-§07 are Cosmos, in the order the decisions are actually made: the hierarchy first,
// because throughput is bought on a container; then the partition key, which is the one choice
// that cannot be undone; then consistency, which is the dial you tune afterwards. §08 is the
// open-source lane and the cache tier in front of it. §09 is the job you get handed — assess,
// migrate, cut over — and the rollback that is missing from most plans.
export const databases: Course = {
  id: 'databases',
  title: 'SQL, Cosmos & Cache',
  sections: [
    theChoice,
    azureSqlDatabase,
    managedInstance,
    sqlOnAVm,
    cosmosDb,
    partitionsAndRus,
    consistency,
    postgresAndRedis,
    migration,
  ],
}
