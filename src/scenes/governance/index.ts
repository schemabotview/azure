import type { Scene } from '@graphlearning/flow'
import { fourControlsOnOneTree } from './four-controls-on-one-tree'
import { ifThenEffect } from './if-then-effect'
import { aNameThatAnswersQuestions } from './a-name-that-answers-questions'
import { theShapeOfAnEstate } from './the-shape-of-an-estate'
import { aBudgetDoesNotStopAnything } from './a-budget-does-not-stop-anything'
import { oneWorkspaceManyTables } from './one-workspace-many-tables'
import { fiveOperatorsAndAPipe } from './five-operators-and-a-pipe'
import { signalRuleGroup } from './signal-rule-group'
import { twoNumbersDecideIt } from './two-numbers-decide-it'
import { aResourceGroupAsCode } from './a-resource-group-as-code'

// governance scenes — one per section, mirroring src/content/governance. Renderer order, no two
// adjacent the same, and the two tables (§03, §09) kept far apart since a repeated table reads as
// one repeated frame:
//   board · script · table · nest · flow · nest · script · flow · table · script
export const governanceScenes: Scene[] = [
  fourControlsOnOneTree,
  ifThenEffect,
  aNameThatAnswersQuestions,
  theShapeOfAnEstate,
  aBudgetDoesNotStopAnything,
  oneWorkspaceManyTables,
  fiveOperatorsAndAPipe,
  signalRuleGroup,
  twoNumbersDecideIt,
  aResourceGroupAsCode,
]
