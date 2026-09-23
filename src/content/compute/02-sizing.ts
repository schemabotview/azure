import type { Section } from '../types'

export const sizing: Section = {
  id: 'sizing',
  title: 'Reading a size name',
  scene: 'reading-a-size-name',
  slide: `## Standard_D4as_v5 is a specification

The letter is the **family** — the ratio of memory to CPU, and what the machine is built for. The number is **vCPUs**. The lower-case letters are capabilities. The \`v\` is the hardware generation.

### The two that catch people
- **\`s\` means premium-storage capable.** Without it you cannot attach a premium SSD — and without a premium disk, a single VM has no meaningful uptime SLA
- **B-series is burstable.** It banks credits while idle and spends them under load. Perfect for a dev box, quietly disastrous for a steady workload — it throttles to a fraction of a core once the credits are gone

### Resize is cheap; regret is not
Changing size takes a reboot and a minute. Start smaller than you think, watch a week of real metrics, then move. Guessing high and never revisiting is the single most common line item on an unexamined Azure bill.`,
  narration:
    "Azure has over seven hundred virtual machine sizes and the name of each one tells you what it is, if you know how to read it. Take Standard_D4as_v5. The capital letter after the underscore is the family, and it declares the ratio of memory to CPU. D is general purpose, roughly four gigabytes of memory per virtual CPU, and it is the right default for most things. E is memory-optimised at about eight gigabytes per vCPU — databases, caches, anything holding a working set in memory. F is compute-optimised, two gigabytes per vCPU with the fastest clock speeds, which suits build agents and batch processing. L gives you enormous fast local NVMe storage for big data nodes. N has GPUs, and note that GPU quota is something you request rather than something you have. And B is burstable, which we will come back to in a moment because it has a trap in it. The number after the family is the vCPU count — four, here — and the memory follows from the family ratio, so a D4 is four vCPUs and sixteen gigabytes. Then the lower-case letters. The 'a' says AMD processors; a 'd' there would mean Intel, a 'p' would mean Arm. The 's' is the one to care about: it means premium storage capable. If you pick a size without the s, you cannot attach a premium SSD — and without a premium disk, a single virtual machine has no meaningful uptime guarantee from Microsoft at all. Always take the s. Finally the v5 is the hardware generation. Newer generations are usually faster for the same price, so unless something pins you, take the newest generation available in your region. Now, the B-series trap, because it catches good engineers. A burstable machine accumulates CPU credits while it sits below its baseline, and spends them when it needs more. On a development box that idles all night, it is superb value. On a workload with steady load, the credits run out and the machine throttles down to a fraction of a single core, and the symptom is an application that was fine for three days and is now inexplicably slow. Burstable is for bursty. Last thing, and it is the practical one: resizing is cheap. It is a reboot and about a minute. So start smaller than you think you need, look at a week of real CPU and memory metrics, and then move. The most expensive habit in cloud computing is guessing high on day one and never looking again.",
}
