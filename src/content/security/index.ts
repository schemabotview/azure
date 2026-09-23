import type { Course } from '../types'
import { defenseInDepth } from './01-defense-in-depth'
import { keyVault } from './02-key-vault'
import { noSecrets } from './03-no-secrets'
import { encryption } from './04-encryption'
import { defenderForCloud } from './05-defender-for-cloud'
import { ddosAndWaf } from './06-ddos-and-waf'
import { sentinel } from './07-sentinel'
import { zeroTrust } from './08-zero-trust'
import { theChecklist } from './09-the-checklist'

// security — the ninth course. Nine sections.
//
// §01 gives the layers, and §02-§04 are the innermost two of them: the vault, the identity that
// reaches it without a credential, and the key that wraps the data. §05-§07 are the watching half —
// posture, the edge, and the queue that turns a detection into somebody's morning. §08 is the arc
// re-read as one design rather than nine features, and §09 is the short list a subscription needs
// before traffic touches it.
//
// Ordered so the parts that REMOVE a credential come before the parts that WATCH for one being
// misused, because that is also the order of return on the effort — and §06 is placed where it is so
// its honest ending (authorization bugs look exactly like traffic) lands after §05 has already said
// that a secure score cannot see your business logic.
export const security: Course = {
  id: 'security',
  title: 'Protecting What You Built',
  sections: [
    defenseInDepth,
    keyVault,
    noSecrets,
    encryption,
    defenderForCloud,
    ddosAndWaf,
    sentinel,
    zeroTrust,
    theChecklist,
  ],
}
