import type { Course } from '../types'
import { vmAnatomy } from './01-vm-anatomy'
import { sizing } from './02-sizing'
import { disksAndImages } from './03-disks-and-images'
import { availability } from './04-availability'
import { scaleSets } from './05-scale-sets'
import { appService } from './06-app-service'
import { containers } from './07-containers'
import { aks } from './08-aks'
import { choosingComputeSection } from './09-choosing-compute'

// compute — the third course. Nine sections, climbing one ladder: from a machine you own entirely to
// a service you barely see.
//
// §01-§05 are the VM, taken seriously — its five resources, its size name, its disks, what kills it,
// and how a fleet of them scales. §06-§08 then hand each of those responsibilities away in turn, and
// §09 makes the choice explicit against the three questions that survive a feature comparison.
export const compute: Course = {
  id: 'compute',
  title: 'VMs to AKS',
  sections: [
    vmAnatomy,
    sizing,
    disksAndImages,
    availability,
    scaleSets,
    appService,
    containers,
    aks,
    choosingComputeSection,
  ],
}
