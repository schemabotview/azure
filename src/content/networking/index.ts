import type { Course } from '../types'
import { vnet } from './01-vnet'
import { nsg } from './02-nsg'
import { routingSection } from './03-routing'
import { egress } from './04-egress'
import { peering } from './05-peering'
import { hybrid } from './06-hybrid'
import { loadBalancer } from './07-load-balancer'
import { appGatewayAndFrontDoor } from './08-app-gateway-and-front-door'
import { privateLink } from './09-private-link'
import { hubAndSpoke } from './10-hub-and-spoke'

// networking — the fifth course, and the last of the shippable prefix. Ten sections.
//
// §01-§04 are one network: its address space, the two controls that attach to a subnet (NSG and
// route table), and the direction nobody designs — outbound. §05-§06 join networks to each other and
// to the datacentre. §07-§09 put things in FRONT of a workload, and then take the PaaS services off
// the public internet. §10 assembles all of it into the topology every real Azure estate converges
// on — and the reason it works is the non-transitivity taught in §05.
export const networking: Course = {
  id: 'networking',
  title: 'VNets to Front Door',
  sections: [
    vnet,
    nsg,
    routingSection,
    egress,
    peering,
    hybrid,
    loadBalancer,
    appGatewayAndFrontDoor,
    privateLink,
    hubAndSpoke,
  ],
}
