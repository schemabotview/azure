import type { Course } from '../types'
import { whatIsAzure } from './01-what-is-azure'
import { globalInfrastructureSection } from './02-global-infrastructure'
import { theResourceModel } from './03-the-resource-model'
import { resourceManager } from './04-resource-manager'
import { subscriptions } from './05-subscriptions'
import { resourceGroups } from './06-resource-groups'
import { sharedResponsibilitySection } from './07-shared-responsibility'
import { pricingModel } from './08-pricing-model'
import { ifYouKnowAws } from './09-if-you-know-aws'
import { theMap } from './10-the-map'

// foundations — the first course of the eleven-course Azure spine. What Azure is, the tree
// everything hangs off, and how a bill is built. Ten sections, ten scenes.
//
// §01 is the trade, §02 the map, and §03-§06 are the structural core: the scope tree, the one API
// that enforces it, and the two containers people misuse. §03 is the load-bearing one — every later
// course attaches something to a level of that tree. §09 exists because a large share of this
// audience arrives fluent in another cloud and translating is what trips them.
export const foundations: Course = {
  id: 'foundations',
  title: 'What Azure Is',
  sections: [
    whatIsAzure,
    globalInfrastructureSection,
    theResourceModel,
    resourceManager,
    subscriptions,
    resourceGroups,
    sharedResponsibilitySection,
    pricingModel,
    ifYouKnowAws,
    theMap,
  ],
}
