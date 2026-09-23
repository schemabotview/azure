import type { Course } from '../types'
import { whyGovernance } from './01-why-governance'
import { azurePolicy } from './02-azure-policy'
import { tagsAndNaming } from './03-tags-and-naming'
import { landingZones } from './04-landing-zones'
import { costManagement } from './05-cost-management'
import { monitor } from './06-monitor'
import { kql } from './07-kql'
import { alerts } from './08-alerts'
import { backupAndDr } from './09-backup-and-dr'
import { bicep } from './10-bicep'

// governance — the tenth course. Ten sections.
//
// Three movements. §01-§04 are CONTROL: the four levers, the policy engine that carries most of
// them, the names and tags everything else is grouped by, and the management-group shape those get
// assigned to. §05-§08 are SIGHT: the bill, the two telemetry stores, the language for reading one
// of them, and what turns a signal into a person doing something. §09-§10 are RECOVERY and
// REPRODUCTION — how you get it back, and how you rebuild it without remembering.
//
// §07 (KQL) sits after §06 rather than with the rest of the tooling because a query language is
// unmotivated until you have somewhere to run it; §06 ends by establishing the workspace, and §08
// immediately spends KQL on log alert rules. And §10 closes the whole arc, not just this course:
// the file it shows carries the exact properties §02's policy would have denied.
export const governance: Course = {
  id: 'governance',
  title: 'Policy, Cost, Monitoring & IaC',
  sections: [
    whyGovernance,
    azurePolicy,
    tagsAndNaming,
    landingZones,
    costManagement,
    monitor,
    kql,
    alerts,
    backupAndDr,
    bicep,
  ],
}
