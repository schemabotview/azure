import type { Course } from '../types'
import { theBrief } from './01-the-brief'
import { landingZone } from './02-landing-zone'
import { identityDesign } from './03-identity-design'
import { networkDesign } from './04-network-design'
import { theApplication } from './05-the-application'
import { theDataPath } from './06-the-data-path'
import { securityReview } from './07-security-review'
import { observability } from './08-observability'
import { costReview } from './09-cost-review'
import { wellArchitected } from './10-well-architected'

// project — the capstone, and the eleventh course. Ten sections, one system.
//
// The system is a retailer's order platform, and it is deliberately ordinary: the point of a
// capstone is judgment, not novelty. §01 is a table of six agreed NUMBERS, and the rule the rest of
// the course obeys is that every decision names the row it came from — which is the only thing that
// stops a capstone becoming a tour of services somebody liked.
//
// Order follows what has to be decided first: the scope tree and the baseline (§02), then who may
// act (§03) BEFORE anything is deployed that would hand something a permission, then the network,
// the application, and the data path. §07-§09 are the three reviews — security, observability, cost
// — each walking an earlier course's list against this design and answering honestly, including two
// declinations. §10 reads the five pillars backwards over the finished thing.
//
// The capstone is the trimmable tail recorded in COURSE-PLAN.md: nothing before it points forward,
// so it can be cut or deferred without touching the other ten courses.
export const project: Course = {
  id: 'project',
  title: 'Capstone — Ship a Real System',
  sections: [
    theBrief,
    landingZone,
    identityDesign,
    networkDesign,
    theApplication,
    theDataPath,
    securityReview,
    observability,
    costReview,
    wellArchitected,
  ],
}
