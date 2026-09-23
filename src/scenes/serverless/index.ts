import type { Scene } from '@graphlearning/flow'
import { theUnitOfCode } from './the-unit-of-code'
import { whereAFunctionRuns } from './where-a-function-runs'
import { anOrchestrator } from './an-orchestrator'
import { aWorkflowOfConnectors } from './a-workflow-of-connectors'
import { eventMessageStream } from './event-message-stream'
import { partitionsAndReaders } from './partitions-and-readers'
import { queueOrTopic } from './queue-or-topic'
import { onePolicyDocument } from './one-policy-document'
import { oneOrderEndToEnd } from './one-order-end-to-end'

// serverless scenes — one per section, mirroring src/content/serverless. Renderer order, no two
// adjacent the same — and `compare` is kept away from `table`, since both are table nodes and two
// of them in a row read as one repeated frame:
//   script · table · script · flow · board · nest · compare · script · flow
export const serverlessScenes: Scene[] = [
  theUnitOfCode,
  whereAFunctionRuns,
  anOrchestrator,
  aWorkflowOfConnectors,
  eventMessageStream,
  partitionsAndReaders,
  queueOrTopic,
  onePolicyDocument,
  oneOrderEndToEnd,
]
