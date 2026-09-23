import type { Scene } from '@graphlearning/flow'

// §08. Read ACROSS a row. Zero trust is four slogans until the third column is filled in with things
// this arc has already built — so the table's job is to be an index back into the courses, not a
// definition. Named, never numbered, per the house rule.
export const neverTrustAndWhereWeDidIt: Scene = {
  id: 'never-trust-and-where-we-did-it',
  title: 'Four principles, and where each one was already built',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'service',
      label: 'Zero trust, applied to what we built',
      sub: 'the third column is the only one that counts',
      headers: ['The principle', 'What it forbids', 'Where we did it'],
      values: [
        ['Verify explicitly', 'trusting an IP range', 'Conditional Access'],
        ['Least privilege', 'a standing Owner', 'PIM, scoped roles'],
        ['Assume breach', 'one flat network', 'subnets, NSG, Firewall'],
        ['No shared secret', 'a connection string', 'managed identity'],
      ],
    },
  ],
  edges: [],
}
