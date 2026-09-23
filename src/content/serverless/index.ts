import type { Course } from '../types'
import { functionsSection } from './01-functions'
import { hostingPlans } from './02-hosting-plans'
import { durableFunctions } from './03-durable-functions'
import { logicApps } from './04-logic-apps'
import { eventGrid } from './05-event-grid'
import { eventHubs } from './06-event-hubs'
import { serviceBus } from './07-service-bus'
import { apiManagement } from './08-api-management'
import { eventDrivenWalk } from './09-event-driven-walk'

// serverless — the seventh course. Nine sections.
//
// §01-§03 are the compute unit: a function is a trigger plus bindings, the plan decides cold start
// and network reach, and Durable is what you reach for when the work has steps and a memory. §04 is
// the honest case for the connector lane next door. §05 is the pivot of the whole course — event vs
// message vs stream — and §06-§07 are the two services that distinction sends you to. §08 puts a
// gateway in front of all of it. §09 walks one order through every piece, which is also where the
// accept-then-work shape finally earns its keep.
export const serverless: Course = {
  id: 'serverless',
  title: 'Functions, Events & Integration',
  sections: [
    functionsSection,
    hostingPlans,
    durableFunctions,
    logicApps,
    eventGrid,
    eventHubs,
    serviceBus,
    apiManagement,
    eventDrivenWalk,
  ],
}
