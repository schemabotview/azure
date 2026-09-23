import type { Scene } from '@graphlearning/flow'

// §05. The distinction the rest of the course rests on, drawn as a board because all three exist
// at once in a real system and the mistake is using one where another belongs. Each pile pairs the
// CONCEPT with the service that serves it, so the vocabulary and the product arrive together.
//
// cols: 2, NOT 3. Three piles side by side is ~1040x290 and fitView is width-bound, so it rendered
// at roughly half the type size of the flow in the section before it. Two-up with the third
// centred underneath is closer to square and reads at full size.
export const eventMessageStream: Scene = {
  id: 'event-message-stream',
  title: 'An event, a message and a stream are three different things',
  cols: 2,
  nodes: [
    {
      id: 'ev',
      label: 'An event',
      sub: 'a fact — it already happened',
      pattern: 'group',
      children: [
        { id: 'eg', label: 'Event Grid', sub: 'routes and filters', pattern: 'network', variant: 'tile', icon: 'eventgrid' },
        { id: 'ef', label: 'Fan out', sub: 'nobody owns it', pattern: 'service', icon: 'zap' },
      ],
    },
    {
      id: 'ms',
      label: 'A message',
      sub: 'someone must act on it',
      pattern: 'group',
      children: [
        { id: 'sb', label: 'Service Bus', sub: 'queues and topics', pattern: 'network', variant: 'tile', icon: 'servicebus' },
        { id: 'sf', label: 'Once, in order', sub: 'or dead-lettered', pattern: 'service', icon: 'circlecheck' },
      ],
    },
    {
      id: 'st',
      label: 'A stream',
      sub: 'a series — read by position',
      pattern: 'group',
      children: [
        { id: 'eh', label: 'Event Hubs', sub: 'millions a second', pattern: 'network', variant: 'tile', icon: 'eventhubs' },
        { id: 'sr', label: 'Replayable', sub: 'for days, by offset', pattern: 'service', icon: 'repeat' },
      ],
    },
  ],
  edges: [],
}
