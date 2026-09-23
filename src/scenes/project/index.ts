import type { Scene } from '@graphlearning/flow'
import { theNumbersThatDecideIt } from './the-numbers-that-decide-it'
import { whereThisSystemLives } from './where-this-system-lives'
import { whoMayActAndWhere } from './who-may-act-and-where'
import { theHubAndOneSpoke } from './the-hub-and-one-spoke'
import { threeWaysToRunIt } from './three-ways-to-run-it'
import { orderToAnsweredQuestion } from './order-to-answered-question'
import { theChecklistAgainstThisDesign } from './the-checklist-against-this-design'
import { whatWakesSomeoneUp } from './what-wakes-someone-up'
import { whereTheMoneyGoes } from './where-the-money-goes'
import { fivePillarsOneSystem } from './five-pillars-one-system'

// project scenes — one per section, mirroring src/content/project. Renderer order, no two adjacent
// the same, and the three tables (§01, §05, §09) spread as far apart as ten sections allow:
//   table · board · script · nest · table · flow · script · flow · table · board
export const projectScenes: Scene[] = [
  theNumbersThatDecideIt,
  whereThisSystemLives,
  whoMayActAndWhere,
  theHubAndOneSpoke,
  threeWaysToRunIt,
  orderToAnsweredQuestion,
  theChecklistAgainstThisDesign,
  whatWakesSomeoneUp,
  whereTheMoneyGoes,
  fivePillarsOneSystem,
]
