import type { Section } from '../types'

export const logicApps: Section = {
  id: 'logic-apps',
  title: 'Logic Apps',
  scene: 'a-workflow-of-connectors',
  slide: `## The connector lane

A **Logic App** is a workflow: a trigger, then a sequence of actions, built from a library of **managed connectors** — Salesforce, SAP, SharePoint, Outlook, SFTP, a few hundred more.

### What you are really buying
Not the designer — the **connectors**. Someone else wrote, and maintains, the authentication, pagination, retry behaviour and schema for each of those systems.

### Where it beats code, and where it does not
- **Yes** — the integration is between two SaaS products and your logic is thin
- **Yes** — a business person must read, and occasionally amend, the process
- **Yes** — it needs an approval: an email, a button, a wait
- **No** — loops over large collections, or anything performance-sensitive
- **No** — complex logic, which reads badly as a diagram and worse in a diff

> Usually the answer is both: a workflow for the connectors, calling a Function for the step that needs code.`,
  narration:
    "Logic Apps sits next to Functions and gets dismissed by developers who see a drag-and-drop designer and assume it is not for them. That is a mistake, and it is worth being precise about why. What you are buying with a Logic App is not the designer. It is the connectors. There are several hundred of them — Salesforce, SAP, ServiceNow, SharePoint, Outlook, Dynamics, SFTP, Oracle, Teams — and each one is somebody else's finished work on the authentication flow, the pagination, the retry behaviour, the throttling rules and the schema of that system. If your task is to pull rows from Salesforce, transform them and drop them into a SharePoint list, writing that as code means you now own three API integrations. As a workflow it is a trigger and three actions, and the maintenance of those integrations is Microsoft's problem. That is the trade, and stated that way it is often obviously worth it. So where do Logic Apps win? When the integration is between two systems you do not own and your own logic is thin. When a business person needs to be able to read the process, and occasionally change a threshold in it, without a deployment. And when the process needs human approval: send an email with an approve and reject button, wait for a click, carry on — that is a couple of actions in a Logic App and genuinely fiddly to build from scratch. Where do they lose? Loops over large collections, where the per-action billing and the per-action latency both add up fast. Anything where performance matters. And any logic with real complexity, because a nested condition inside a for-each inside a scope is much harder to read as a diagram than as fifteen lines of code — and it reviews terribly, since the diff in a pull request is a wall of workflow JSON. Which brings me to the answer I would actually give in a design review, and it is not one tool or the other. Use the workflow for the connectors and the orchestration, and have it call a Function for the one step that needs real code — the parsing, the calculation, the awkward transformation. You get somebody else's maintained integrations and your own testable code in the part where logic lives. One practical note on where they run: the Standard hosting model puts your workflows on the same runtime as Functions, which means they can live in your virtual network and be deployed as a unit with the rest of your app, rather than as a lone resource somebody made in the portal.",
}
