import type { Section } from '../types'

export const costManagement: Section = {
  id: 'cost-management',
  title: 'Cost management',
  scene: 'a-budget-does-not-stop-anything',
  slide: `## A budget notifies. It does not cap.

This is the single most expensive misunderstanding in Azure. A budget is a **threshold wired to an action group** — nothing is switched off, ever, by hitting one.

### Cost analysis is where you look
Usage is metered with about a day's lag. Group by **resource group**, **service**, or **tag** — which only works if the tag is on the resource, not its group.

### Reservations and savings plans
Commit for one or three years, save 30–70%. They apply **automatically** to matching usage — never to a named VM:

- A reservation bought for the wrong size or region **silently matches nothing**
- Check *utilisation* monthly. An unused reservation is a bill with no service behind it

### The two habits
Budgets at **80% of forecast**, not last month. Read cost analysis by tag weekly — the shape changes first.

> Nothing here stops spend. The control is a person who was told in time.`,
  narration:
    "I am going to start with the sentence that matters most in this section, because it is the single most expensive misunderstanding in Azure and it is not subtle. A budget does not cap anything. It notifies. You set a budget of ten thousand pounds on a subscription, you spend twelve thousand, and Azure charges you twelve thousand and sends some emails on the way. There is no switch that stops resources when a budget is hit, and if you want spend to actually stop, you have to build it — a budget that fires an action group that calls a Function that goes and deallocates things — and almost nobody does, because deallocating production to save money is a cure worse than the disease. So a budget is an alarm, and the control it gives you is a person who found out in time. Please make sure that person exists, and that the notification reaches them rather than a shared mailbox nobody reads. With that said, let me take the three parts in the order you will use them. Cost analysis is where you look. Usage is metered continuously and surfaced with roughly a day's lag — which is worth knowing, because when you turn something expensive off, you will not see the effect immediately and you should not conclude it did not work. The power of cost analysis is grouping. By resource group tells you which project. By service tells you which technology. By tag tells you which team or cost centre, and this is where the previous section pays off, because grouping by tag only sees tags that are on the resource itself. Tag the resource group beautifully and the chart shows you nothing. That is the single most common reason a cost analysis view looks useless. Budgets next, and the practical detail is the threshold. Set them on the forecast rather than on actuals, and set them at something like eighty percent, because a budget that notifies you when you have already spent the money is a receipt, not a warning. Wire it to an action group — which we will cover properly in a couple of sections, and which is the same reusable object alerts use — so that the notification goes to a rota rather than to whoever created the budget and has since moved teams. Then reservations and savings plans, which are where the real money is and where the real mistakes are. The deal is simple: you commit to a level of usage for one year or three, and you pay substantially less for it — thirty to seventy percent less depending on what and how long. What surprises people is the mechanism. You do not attach a reservation to a machine. You buy a reservation for a size, a region and a term, and the billing engine applies it automatically to any matching usage each hour. Which sounds convenient, and is, right up until the moment you realise the consequence: a reservation bought for the wrong size, or the wrong region, matches nothing. It does not warn you. It does not fail. You have simply pre-paid for a year of something you are not running, and you will find out when somebody opens the utilisation report. So: check reservation utilisation monthly. An underused reservation is the purest waste on an Azure bill, because it is a line item with no service behind it at all. And buy them after you have a few months of steady usage, never in the first month, because the whole product is a bet that your usage is predictable and in month one it is not. Two habits and I will stop. Budgets at eighty percent of forecast. And once a week, open cost analysis, group by tag, and look at the shape rather than the total — because the shape changes first. A total that is flat can hide one team's spend doubling while another's halved, and only one of those is going to keep happening.",
}
