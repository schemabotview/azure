import type { Course } from '../types'
import { storageAccount } from './01-storage-account'
import { blob } from './02-blob'
import { accessTiers } from './03-access-tiers'
import { redundancy } from './04-redundancy'
import { filesAndDisks } from './05-files-and-disks'
import { adlsGen2 } from './06-adls-gen2'
import { dataAccessControl } from './07-data-access-control'
import { storageNetworking } from './08-storage-networking'
import { movingData } from './09-moving-data'

// storage — the fourth course. Nine sections.
//
// §01-§04 are the account and the three properties that are chosen rather than discovered: blob
// type, tier, redundancy. §05-§06 are the two shapes that are not plain object storage — a
// filesystem, and a lake. §07-§08 then close the two doors people leave open (shared keys, the
// public endpoint), which is why they sit AFTER the reader knows what is behind them. §09 is the
// arithmetic nobody does before starting a copy.
export const storage: Course = {
  id: 'storage',
  title: 'Accounts, Blob & the Lake',
  sections: [
    storageAccount,
    blob,
    accessTiers,
    redundancy,
    filesAndDisks,
    adlsGen2,
    dataAccessControl,
    storageNetworking,
    movingData,
  ],
}
