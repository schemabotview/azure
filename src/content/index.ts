import { foundations } from './foundations'
import { identity } from './identity'
import { compute } from './compute'
import { storage } from './storage'
import { networking } from './networking'
import { databases } from './databases'
import { serverless } from './serverless'
import { data } from './data'
import { security } from './security'
import { governance } from './governance'
import { project } from './project'
import type { Course, Section } from './types'

// The course catalog, in syllabus order. → past a course's last section rolls into the next course's
// first. All eleven courses are declared up front so the whole arc is visible in the app from day
// one; each fills with sections as its slice is authored.
//
// The spine (104 sections planned — see COURSE-PLAN.md):
//   1 foundations · 2 identity · 3 compute · 4 storage · 5 networking
//   6 databases · 7 serverless · 8 data · 9 security · 10 governance · 11 project
//
// Courses 1-5 are the shippable PREFIX: they can go live while 6-11 are still being authored. The
// scope tree taught in foundations is assumed from identity onward — RBAC, Policy, cost and locks
// all attach to a level of it, which is why it is taught before anything is deployed.
//
// Narration is authored FRESH. The 14-notebook AZ-104 curriculum this concept was benchmarked
// against is an inventory, not a script, and its own recordings are never reused. House rule:
// NOTHING cross-references a neighbour by course number — name a course, never number it — which is
// what keeps a later reorder free. After a course's audio is generated its section ORDER is frozen,
// because the wav filenames are pinned to section ids.
export const COURSES: Record<string, Course> = {
  [foundations.id]: foundations,
  [identity.id]: identity,
  [compute.id]: compute,
  [storage.id]: storage,
  [networking.id]: networking,
  [databases.id]: databases,
  [serverless.id]: serverless,
  [data.id]: data,
  [security.id]: security,
  [governance.id]: governance,
  [project.id]: project,
}

export type { Course, Section }

// slugOf / allSections are the shell's — the slug rule (`<courseId>-<sectionId>`) is part of the
// route contract the recorders drive, so it cannot be a per-repo decision. Re-exported here because
// this module is what the app and the scripts already import them from.
export { slugOf, allSections } from '@graphlearning/shell'

export function getCourse(id: string): Course | undefined {
  return COURSES[id]
}
