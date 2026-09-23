import type { Scene } from '@graphlearning/flow'
import { aVnetAndItsSubnets } from './a-vnet-and-its-subnets'
import { nsgRules } from './nsg-rules'
import { routing } from './routing'
import { gettingOut } from './getting-out'
import { peeringIsNotTransitive } from './peering-is-not-transitive'
import { hybridOptions } from './hybrid-options'
import { howALoadBalancerDecides } from './how-a-load-balancer-decides'
import { whichFrontDoor } from './which-front-door'
import { threePathsToAPaasService } from './three-paths-to-a-paas-service'
import { theHubAndSpoke } from './the-hub-and-spoke'

// networking scenes — one per section, mirroring src/content/networking. Renderer order, no two
// adjacent the same:
//   nest · table · script · board · flow · table · flow · board · table · nest
export const networkingScenes: Scene[] = [
  aVnetAndItsSubnets,
  nsgRules,
  routing,
  gettingOut,
  peeringIsNotTransitive,
  hybridOptions,
  howALoadBalancerDecides,
  whichFrontDoor,
  threePathsToAPaasService,
  theHubAndSpoke,
]
