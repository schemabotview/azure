import type { Section } from '../types'

export const pricingModel: Section = {
  id: 'pricing-model',
  title: 'How the bill is built',
  scene: 'where-the-bill-comes-from',
  slide: `## Usage × rate, summed once a month

Every resource emits usage to **meters**. A meter's units are multiplied by a rate, and the total is your invoice. Nothing about that is negotiable — but the rate is.

### The four ways to pay
- **Pay-as-you-go** — full rate, zero commitment, the right default while you are still learning the shape of a workload
- **Reservation** — commit to a specific size in a region for 1 or 3 years, typically 30–70% less
- **Savings plan** — commit to an hourly spend instead of a specific size; less discount, more flexibility
- **Spot** — spare capacity at a steep discount, evicted with 30 seconds' notice. Batch only.

### The habit worth building now
A resource you stopped using still meters. Deleting is the only reliable way to stop paying — and a budget alert is the cheapest insurance in Azure.`,
  narration:
    "A cloud bill feels mysterious until you see the machinery, and the machinery is simple. Every resource in Azure reports its usage to things called meters. A virtual machine meters compute hours. A storage account meters gigabyte-months, and separately meters the number of read operations, and separately meters the data leaving the region. Each meter has a rate, and that rate depends on the region, the size, and the service tier. At the end of the month, Azure multiplies units by rate for every meter you touched and sends you the sum. That's the whole model: usage times rate. Two things follow from it immediately. The first is that a resource you are no longer using still meters. A stopped virtual machine is a good example — if you stop it from inside the operating system, it is still allocated to you and still billed. Deallocating it in Azure stops the compute charge, but the managed disk underneath it keeps metering until you delete the disk. Nothing in Azure turns itself off to save you money. Deleting is the only reliable way to stop paying. The second is that if usage times rate is the formula, then there are exactly two levers. Use less, or pay less per unit. Use less is engineering work, and we'll come back to it. Pay less per unit has four named options. Pay-as-you-go is the full rate with no commitment, and it is the right default while you are still learning what shape a workload really is. A reservation is a commitment to a specific size in a specific region for one or three years, and it typically saves somewhere between thirty and seventy percent — enormous, if your forecast is right. A savings plan commits you to an hourly spend rather than a specific machine size; you give up some discount and get flexibility back, which suits a fleet that keeps changing shape. And spot pricing sells you Azure's spare capacity at a steep discount, on the condition that it can be taken away with thirty seconds' notice — which is fine for batch processing and disastrous for anything a customer is waiting on. One habit to start today, before you have anything expensive running: set a budget with an alert on your subscription. It costs nothing, it takes two minutes, and it is the cheapest insurance in Azure.",
}
