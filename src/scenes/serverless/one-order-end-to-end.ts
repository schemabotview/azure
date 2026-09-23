import type { Scene } from '@graphlearning/flow'

// §09. The closing flow, and the only scene in the course where the pieces are assembled. It forks
// at the worker deliberately: the write is what the customer waited for, and the event is what
// everything else in the business hangs off. Drawn once, forward — the retries and the
// dead-letter path are narrated, because drawing them would close a loop the layout cannot rank.
export const oneOrderEndToEnd: Scene = {
  id: 'one-order-end-to-end',
  title: 'One order, through everything we built',
  nodes: [
    { id: 'apim', label: 'API Management', sub: 'authenticates, throttles', pattern: 'network', icon: 'apim' },
    { id: 'fn1', label: 'Order function', sub: 'HTTP trigger; validates', pattern: 'service', icon: 'functions' },
    { id: 'q', label: 'A queue', sub: 'the order is now safe', pattern: 'network', icon: 'servicebus' },
    { id: 'fn2', label: 'Worker function', sub: 'queue trigger; charges', pattern: 'service', icon: 'functions' },
    { id: 'cos', label: 'Cosmos DB', sub: 'the order record', pattern: 'storage', icon: 'cosmos' },
    { id: 'eg', label: 'Event Grid', sub: 'OrderPlaced, fanned out', pattern: 'network', icon: 'eventgrid' },
  ],
  edges: [
    { source: 'apim', target: 'fn1' },
    { source: 'fn1', target: 'q', label: 'accepted: 202' },
    { source: 'q', target: 'fn2', label: 'one at a time' },
    { source: 'fn2', target: 'cos', label: 'written' },
    { source: 'fn2', target: 'eg', label: 'published' },
  ],
}
