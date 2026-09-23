import type { Scene } from '@graphlearning/flow'
import { directoryVsDomain } from './directory-vs-domain'
import { tenantAndSubscriptions } from './tenant-and-subscriptions'
import { whoIsInTheDirectory } from './who-is-in-the-directory'
import { anAppIdentity } from './an-app-identity'
import { noSecretAnywhere } from './no-secret-anywhere'
import { anAssignment } from './an-assignment'
import { theFourRoles } from './the-four-roles'
import { aCustomRole } from './a-custom-role'
import { doesThisSignInSurvive } from './does-this-sign-in-survive'
import { standingAccess } from './standing-access'

// identity scenes — one per section, mirroring src/content/identity. Renderer order, no two
// adjacent the same:
//   compare · nest · board · script · flow · nest · compare · script · flow · board
export const identityScenes: Scene[] = [
  directoryVsDomain,
  tenantAndSubscriptions,
  whoIsInTheDirectory,
  anAppIdentity,
  noSecretAnywhere,
  anAssignment,
  theFourRoles,
  aCustomRole,
  doesThisSignInSurvive,
  standingAccess,
]
