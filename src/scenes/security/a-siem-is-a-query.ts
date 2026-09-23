import type { Scene } from '@graphlearning/flow'

// §07. The one place in this course where code is the argument. A SIEM sounds like a category of
// product until you see that a Sentinel analytics rule is a KQL query on a schedule — at which point
// the real questions become which tables you connect and what that ingestion costs, which is what
// the trailing comment is for.
export const aSiemIsAQuery: Scene = {
  id: 'a-siem-is-a-query',
  title: 'A SIEM is a scheduled query, and a bill by the gigabyte',
  nodes: [
    {
      id: 'kql',
      kind: 'code',
      filename: 'a Sentinel analytics rule: one account, two countries, one hour',
      minCols: 76,
      label: [
        'SigninLogs',
        '| where TimeGenerated > ago(1h)',
        '| where ResultType == 0                    // successful sign-ins only',
        '| summarize',
        '    countries = make_set(Location),',
        '    attempts  = count()',
        '    by UserPrincipalName, bin(TimeGenerated, 1h)',
        '| where array_length(countries) > 1        // two countries in one hour',
        '',
        '-- what makes this a SIEM and not a log search:',
        '--   run it on a SCHEDULE      an incident is raised, not a row returned',
        '--   map the account as an ENTITY  so the incident knows who it is about',
        '--   attach a PLAYBOOK          a Logic App disables the account for you',
        '',
        '-- and the part nobody budgets for: this is billed by the GIGABYTE',
        '-- INGESTED. Connecting every source you own is how a SIEM becomes the',
        '-- largest line on the bill before it has caught anything at all.',
      ].join('\n'),
    },
  ],
  edges: [],
}
