import type { Section } from '../types'

export const migration: Section = {
  id: 'migration',
  title: 'Migration',
  scene: 'the-migration-runbook',
  slide: `## Measure, migrate, cut over

Three phases, and the discipline is keeping them separate.

### Assess, then size
The **Azure Migrate** SQL assessment, or \`az datamigration\`, reports blocking incompatibilities and a **right-sized target** built from collected performance data. Never size a target from the old server's hardware.

### Migrate, then cut over
The **Database Migration Service** does the move. **Offline** is a restore and a window of downtime. **Online** keeps applying the log while production stays up. Cutover is then its **own command** — until you run it, nothing has moved.

### The rollback nobody writes down
The old server **is** the rollback, and only while it is still running and still writable. Keep it up and reachable for a week, then turn it off deliberately.

> Rehearse the whole sequence against a copy. The first time you run it should not be the real one.`,
  narration:
    "Let's close the course with the job you will actually be handed: there is a database somewhere else, and it needs to be here. Three phases, and the discipline is keeping them separate. Phase one is assessment, and it answers two different questions. The first is compatibility: is there anything in this database that the target will refuse? Cross-database queries, linked servers, a deprecated feature, an unsupported collation. The tooling will list them, and that list decides which target you are going to — a single database, a managed instance, or a virtual machine. The second question is sizing, and this is where teams go wrong in a way that costs real money. Do not size the target by looking at the old server's specification. That machine was bought five years ago for a workload nobody measured, and it is probably three times larger than it needs to be. Instead, collect performance data from the running source for a day or a week, and let the tooling recommend a target from what the workload actually does. The command-line tool will do both halves for you, and the recommendation comes out as a specific tier and core count. Phase two is the migration itself, run by the Database Migration Service. You have two modes and the choice is about downtime. Offline is simple: take a final backup, restore it into Azure, point the application at the new place. Everything is quiet for however long the restore takes, which on a large database is hours. Online is the grown-up version: it restores a backup and then keeps applying the transaction log, continuously, so the target stays a few seconds behind the source while production carries on serving traffic. You can leave that running for days. Phase three is cutover, and I want you to notice that it is a separate, deliberate command. Nothing moves on its own. You stop the application's writes, let the last of the log drain, run the cutover, and repoint the connection string. That is the only window of downtime, and it can be minutes. Now the part nobody puts in the plan. What is your rollback? The honest answer, almost always, is that the old server is the rollback — and that only works while it is still running, still writable, and still reachable from wherever your application now is. So write it into the runbook: the source stays up, untouched, for a week after cutover. Then it gets turned off on purpose, by someone who has checked. And rehearse the whole sequence against a copy first, because the first time you run these commands should not be the time that matters.",
}
