import type { Scene } from '@graphlearning/flow'

// §09. A translation table, and deliberately a table: the value is in the third column, where the
// mapping stops being a rename. A diagram would show the pairs and hide the caveats, which are the
// only part worth a section.
export const awsToAzure: Scene = {
  id: 'aws-to-azure',
  title: 'The map is mostly renaming. Mostly.',
  nodes: [
    {
      id: 't',
      kind: 'table',
      pattern: 'service',
      label: 'If you already know AWS',
      sub: 'the third column is the part that bites',
      headers: ['AWS', 'Azure', 'Where it stops being a rename'],
      values: [
        ['EC2', 'Virtual Machines', 'a VM is five resources, not one'],
        ['S3', 'Blob Storage', 'inside a storage account'],
        ['VPC', 'Virtual Network', 'no gateway to attach'],
        ['IAM', 'Entra ID + RBAC', 'two systems, not one'],
        ['Account', 'Subscription', 'two more levels above it'],
        ['CloudFormation', 'ARM / Bicep', 'same idea, different engine'],
        ['CloudWatch', 'Monitor', 'a workspace you pay for'],
      ],
    },
  ],
  edges: [],
}
