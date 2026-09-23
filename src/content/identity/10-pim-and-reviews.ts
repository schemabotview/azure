import type { Section } from '../types'

export const pimAndReviews: Section = {
  id: 'pim-and-reviews',
  title: 'Standing access is the risk',
  scene: 'standing-access',
  slide: `## Hold the role only while you are using it

**Privileged Identity Management** makes an assignment *eligible* rather than active. The person still has the role — they claim it when they need it, with a reason, often an approval, and it expires by itself.

### What that changes
- The compromised laptop at 3am holds **no** privilege to steal
- Every use of the role has a reason attached and an entry in the log
- Nobody has to remember to take it away — expiry is the default, not a task

### And the half that stops the estate rotting
An **access review** asks the owner, on a cadence, whether each person still needs what they have. Unreviewed access only ever accumulates: people change teams, projects end, and a permission granted for one afternoon in 2021 is still there.

> Start with the ones that would end you: Owner, User Access Administrator, and the Entra admin roles.`,
  narration:
    "Let's finish the course with the idea that changes an estate the most, and it is not a technology — it is a shape. Think about the Owner role on your production subscription. Whoever holds it permanently holds it at three in the morning on a Sunday, on the laptop they take on holiday, in the browser session they left open in a hotel. They are not using it. They just have it. And the whole value of that role, to an attacker, is available at every moment of every day regardless of whether the legitimate holder is working. Privileged Identity Management inverts that. Instead of an active assignment, the person gets an eligible one. They still have the role — nobody has taken anything away, and no approval chain has to be invented — but they do not hold it until they ask. When they need it, they activate: they give a reason, they complete multi-factor again, and depending on how you have configured it, someone approves. Then they hold the role for a defined window, perhaps four hours, and it drops off by itself. Look at what that buys you for very little friction. The stolen session at three in the morning holds nothing worth having. Every use of the privilege now has a human reason recorded against it, which is the single most useful thing an incident reviewer can have. And nobody has to remember to remove access, because expiry is the default rather than a task on someone's list. The other half of governing access is review, and it is the unglamorous one. Access only ever accumulates. People change teams and keep what they had. Projects end and their permissions do not. Someone needed Contributor for one afternoon in 2021 and has it today. No individual grant was wrong; the aggregate is indefensible. An access review asks the right person — the group owner, the resource owner, or the holders themselves — on a schedule, whether each person still needs what they have, and can remove it automatically when nobody answers. Start where the damage would be worst rather than trying to review everything: Owner and User Access Administrator on your subscriptions, and the Entra administrator roles — Global Administrator above all. That is identity. You now know who can act, what they may do, and where that permission attaches. Next we start deploying things for them to act on: compute, from a virtual machine you patch yourself to a managed Kubernetes cluster.",
}
