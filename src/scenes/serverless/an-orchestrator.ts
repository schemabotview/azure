import type { Scene } from '@graphlearning/flow'

// §03. Durable's whole claim is that a workflow can be a function, so the scene has to be code —
// a diagram of the same thing would hide the one constraint that matters, which is that the
// orchestrator is REPLAYED and must therefore be deterministic. Fan-out and a three-day wait are
// both in here because they are what no plain function can do.
export const anOrchestrator: Scene = {
  id: 'an-orchestrator',
  title: 'A workflow that is a function, and survives a restart',
  nodes: [
    {
      id: 'orch',
      kind: 'code',
      filename: 'orchestrator: the state lives in the history, not in memory',
      minCols: 76,
      label: [
        'import azure.durable_functions as df',
        '',
        '# The orchestrator is REPLAYED from its event history on every step, so it',
        '# must be deterministic: no now(), no random, no IO, no new GUIDs. Ever.',
        '# Anything non-deterministic goes in an ACTIVITY.',
        '@app.orchestration_trigger(context_name="ctx")',
        'def process_order(ctx: df.DurableOrchestrationContext):',
        '    order = ctx.get_input()',
        '',
        '    ok = yield ctx.call_activity("reserve_stock", order)   # chaining',
        '    if not ok:',
        '        return "rejected"',
        '',
        '    # FAN OUT, then fan in: 300 activities in parallel, one yield',
        '    charges = [ctx.call_activity("charge", ln) for ln in order["lines"]]',
        '    results = yield ctx.task_all(charges)',
        '',
        '    # wait for a human for up to three days, at no cost while waiting',
        '    yield ctx.wait_for_external_event("Approved")',
        '',
        '    yield ctx.call_activity("ship", order)',
        '    return results',
      ].join('\n'),
    },
  ],
  edges: [],
}
