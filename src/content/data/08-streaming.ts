import type { Section } from '../types'

export const streaming: Section = {
  id: 'streaming',
  title: 'Streaming',
  scene: 'the-window-is-the-point',
  slide: `## The whole job is a query

**Event Hubs** in, **Stream Analytics** in the middle, a sink out — Power BI for a live dashboard, the lake for history, a queue for an alert. The job itself is one SQL query.

### Event time, not arrival time
\`TIMESTAMP BY\` tells the job which column is the real time of the event. Leave it out and windows are built on **arrival** time, so a late or replayed batch lands in the wrong bucket and every number is quietly wrong.

### The four windows
- **Tumbling** — fixed, no overlap. *"the 5-minute average"*
- **Hopping** — a 5-minute window emitted every minute. A smooth line
- **Sliding** — emits only when the set of events changes
- **Session** — a burst of activity, closed by a timeout

> Two sinks from one job is the normal shape: the dashboard gets the aggregate, the lake gets every raw event for the questions nobody has asked yet.`,
  narration:
    "Streaming on Azure has a shape, and once you have seen it you will recognise it everywhere. Event Hubs at the front, taking the firehose. Something in the middle doing continuous computation. A sink at the back — usually more than one. The piece in the middle can be Spark structured streaming, or a function, but the one to learn first is Azure Stream Analytics, because the entire job is a SQL query and that is a remarkably low barrier for something that is genuinely doing continuous processing. You declare an input, which is your event hub. You declare one or more outputs. And then you write a select statement, and it runs forever. Two lines in that query are the whole art. The first is TIMESTAMP BY. Every event has a time it actually happened, which is a column in your payload, and a time it arrived at the event hub, which is usually a bit later and sometimes a lot later. TIMESTAMP BY tells the job to use the event's own time. If you leave it out — and it is easy to leave out, because the query works without it — then your windows are built on arrival time. Which means a device that buffered for ten minutes on a flaky connection has all its readings counted in the wrong five-minute bucket, and a replay of yesterday's events lands entirely in today. The job does not fail. The numbers are just wrong, and nothing tells you. The second is the window, and choosing it is the design. A tumbling window is fixed-length and non-overlapping: five minutes, then the next five minutes. That is what you want for the average over each five minutes, and it is the default answer. A hopping window is a five-minute window emitted every one minute, so windows overlap and you get a smooth moving line rather than a staircase — that is what a dashboard usually wants. A sliding window emits only at the moments the set of events in it changes, which is what you want for alerting when there have been three failures in two minutes. And a session window groups a burst of activity and closes it after a gap, which is how you measure a user's visit without deciding in advance how long a visit is. Finally, the sinks, and the shape worth copying. Send the aggregate to Power BI for the live dashboard, and send every raw event to the lake at the same time, in the same job. The dashboard answers the question you have today. The lake is what lets you answer the question somebody asks in March, about February — and a stream you did not keep is a question you cannot answer.",
}
