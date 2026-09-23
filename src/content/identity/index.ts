import type { Course } from '../types'
import { entraIsNotAd } from './01-entra-is-not-ad'
import { tenants } from './02-tenants'
import { usersAndGroups } from './03-users-and-groups'
import { servicePrincipals } from './04-service-principals'
import { managedIdentities } from './05-managed-identities'
import { rbac } from './06-rbac'
import { builtInRoles } from './07-built-in-roles'
import { customRoles } from './08-custom-roles'
import { conditionalAccess } from './09-conditional-access'
import { pimAndReviews } from './10-pim-and-reviews'

// identity — the second course. Who may act, and where that permission attaches.
//
// Two halves with a hinge. §01-§05 are the directory: what Entra ID is (and is not), the tenant
// boundary, and the four kinds of principal — ending on managed identities, which is the section
// that changes how people actually build. §06-§08 are authorisation: the three-part assignment, the
// four roles, and the escape hatch. §09-§10 then close over both, because Conditional Access and PIM
// are about the sign-in and the holding of a role rather than the role itself.
export const identity: Course = {
  id: 'identity',
  title: 'Entra ID & RBAC',
  sections: [
    entraIsNotAd,
    tenants,
    usersAndGroups,
    servicePrincipals,
    managedIdentities,
    rbac,
    builtInRoles,
    customRoles,
    conditionalAccess,
    pimAndReviews,
  ],
}
