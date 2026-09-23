import type { Course } from '../types'
import { theDataPlatform } from './01-the-data-platform'
import { theLake } from './02-the-lake'
import { dataFactory } from './03-data-factory'
import { orchestrateVsTransform } from './04-orchestrate-vs-transform'
import { fabric } from './05-fabric'
import { synapse } from './06-synapse'
import { databricksOnAzure } from './07-databricks-on-azure'
import { streaming } from './08-streaming'
import { purview } from './09-purview'

// data — the eighth course. Nine sections.
//
// §01 is the frame the rest hangs on: ingest, land, transform, serve, and which service is for
// which stage. §02-§04 are the estate as it is usually built — the lake's folder layout, the
// orchestrator, and the argument about where transformation belongs. §05-§07 are the three engines
// you will actually meet, in the order the platform is moving: Fabric is where new work goes,
// Synapse is what already runs, Databricks is the one with a line down the middle of it. §08 is the
// continuous case. §09 is the governance nothing before it provides — of the DATA, not the
// resources, which is what makes it the right close.
//
// Scope, decided in COURSE-PLAN.md: this course NAMES Azure's data surface and says when each piece
// is right. Spark, dimensional modelling and dbt have their own concepts in the workspace, and §01
// and §07 say so out loud rather than pretending this is a data-engineering arc.
export const data: Course = {
  id: 'data',
  title: 'The Analytics Estate',
  sections: [
    theDataPlatform,
    theLake,
    dataFactory,
    orchestrateVsTransform,
    fabric,
    synapse,
    databricksOnAzure,
    streaming,
    purview,
  ],
}
