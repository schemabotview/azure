import type { Scene } from '@graphlearning/flow'

// §03. A naming convention is worth exactly one thing — that a resource's name answers a question
// you would otherwise have to go and look up — so the table's third column is the only one that
// justifies the other two. Cells kept to a phrase; the tag half of the section is an argument and
// lives on the slide.
export const aNameThatAnswersQuestions: Scene = {
  id: 'a-name-that-answers-questions',
  title: 'Every segment answers a question you will ask',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'service',
      label: 'st-orders-prod-weu-01',
      sub: 'the CAF shape: type, workload, environment, region, instance',
      headers: ['Segment', 'Example', 'The question it answers'],
      values: [
        ['Type', 'st, vm, kv, rg', 'what am I looking at'],
        ['Workload', 'orders', 'who do I ask about it'],
        ['Environment', 'prod, dev', 'can I safely break it'],
        ['Region', 'weu, eus', 'which one did I open'],
        ['Instance', '01', 'is there more than one'],
      ],
    },
  ],
  edges: [],
}
