import type { Scene } from '@graphlearning/flow'

// §04. A Logic App IS a flow, so the scene is the product. The argument the course needs is in the
// second card: the workflow calls a Function for the one step that needs real code, and uses a
// managed connector for the three that do not. That mix is the honest recommendation, not a
// preference for one tool.
export const aWorkflowOfConnectors: Scene = {
  id: 'a-workflow-of-connectors',
  title: 'Four integrations. One of them is code.',
  nodes: [
    { id: 'trig', label: 'A file lands', sub: 'SFTP connector', pattern: 'user', icon: 'zap' },
    { id: 'parse', label: 'Parse it', sub: 'a Function, for logic', pattern: 'service', icon: 'functions' },
    { id: 'record', label: 'Create a row', sub: 'SQL connector', pattern: 'storage', icon: 'azuresql' },
    { id: 'notify', label: 'Tell the team', sub: 'Teams connector', pattern: 'external', icon: 'users' },
  ],
  edges: [
    { source: 'trig', target: 'parse', label: 'the trigger fires' },
    { source: 'parse', target: 'record', label: 'JSON out' },
    { source: 'record', target: 'notify', label: 'on success' },
  ],
}
