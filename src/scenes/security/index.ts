import type { Scene } from '@graphlearning/flow'
import { theLayersAndWhoGuardsThem } from './the-layers-and-who-guards-them'
import { threeThingsOneVault } from './three-things-one-vault'
import { aTokenInsteadOfAPassword } from './a-token-instead-of-a-password'
import { aKeyThatWrapsAKey } from './a-key-that-wraps-a-key'
import { scoreRecommendationAlert } from './score-recommendation-alert'
import { whatTheEdgeStops } from './what-the-edge-stops'
import { aSiemIsAQuery } from './a-siem-is-a-query'
import { neverTrustAndWhereWeDidIt } from './never-trust-and-where-we-did-it'
import { beforeTrafficTouchesIt } from './before-traffic-touches-it'

// security scenes — one per section, mirroring src/content/security. Renderer order, no two adjacent
// the same, and `table` (§02, §08) kept well clear of itself since a repeated table reads as one
// repeated frame:
//   nest · table · flow · nest · board · flow · script · table · board
export const securityScenes: Scene[] = [
  theLayersAndWhoGuardsThem,
  threeThingsOneVault,
  aTokenInsteadOfAPassword,
  aKeyThatWrapsAKey,
  scoreRecommendationAlert,
  whatTheEdgeStops,
  aSiemIsAQuery,
  neverTrustAndWhereWeDidIt,
  beforeTrafficTouchesIt,
]
