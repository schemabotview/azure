import type { Scene } from '@graphlearning/flow'

// §06. A path, because the edge protections are strictly sequential and each one only sees what the
// one before it let past. The fork at the bottom is the teaching: a WAF's output is two streams, and
// the left-hand one is still traffic you have to be able to survive.
export const whatTheEdgeStops: Scene = {
  id: 'what-the-edge-stops',
  title: 'Two filters, in order, and what each one sees',
  nodes: [
    { id: 'net', label: 'The internet', sub: 'all of it, all the time', pattern: 'external', icon: 'globe' },
    { id: 'ddos', label: 'DDoS Protection', sub: 'volume, at layers 3 and 4', pattern: 'network', variant: 'tile', icon: 'ddos' },
    { id: 'waf', label: 'A WAF policy', sub: 'the request itself, layer 7', pattern: 'network', variant: 'tile', icon: 'wafpolicy' },
    { id: 'origin', label: 'Your origin', sub: 'private, and still hardened', pattern: 'service', icon: 'appservice' },
    { id: 'blocked', label: 'Blocked · 403', sub: 'SQLi, XSS, a known bad bot', pattern: 'warn', icon: 'ban' },
  ],
  edges: [
    { source: 'net', target: 'ddos', label: 'a flood' },
    { source: 'ddos', target: 'waf', label: 'what is left' },
    { source: 'waf', target: 'origin', label: 'looks legitimate' },
    { source: 'waf', target: 'blocked', label: 'matched a rule' },
  ],
}
