import type { Scene } from '@graphlearning/flow'

// §01. A script, because the whole idea is declarative: a trigger says what starts the function and
// bindings say what it reads and writes, so the body holds business logic and nothing else. The
// comments carry the two rules that are never obvious from a portal screenshot — one trigger per
// function, and the trigger is also what scales it.
export const theUnitOfCode: Scene = {
  id: 'the-unit-of-code',
  title: 'A trigger, some bindings, and the code in between',
  nodes: [
    {
      id: 'fn',
      kind: 'code',
      filename: 'function_app.py — two functions in one function app',
      minCols: 76,
      label: [
        'import azure.functions as func',
        '',
        '# the FUNCTION APP is the deployment and scaling unit. A FUNCTION is the',
        '# unit of code, and it has exactly ONE trigger.',
        'app = func.FunctionApp()',
        '',
        '# TRIGGER: what starts it, and what the platform watches to scale you out.',
        '@app.blob_trigger(arg_name="raw", path="uploads/{name}",',
        '                  connection="AzureWebJobsStorage")',
        '# OUTPUT BINDING: declared, not coded. No SDK, no client, no connection.',
        '@app.queue_output(arg_name="msg", queue_name="thumbnails",',
        '                  connection="AzureWebJobsStorage")',
        'def on_upload(raw: func.InputStream, msg: func.Out[str]) -> None:',
        '    msg.set(raw.name)          # the business logic is this one line',
        '',
        '@app.timer_trigger(arg_name="t", schedule="0 30 2 * * *")   # 02:30 daily',
        'def nightly_rollup(t: func.TimerRequest) -> None:',
        '    ...',
        '',
        '# triggers: http · timer · queue · blob · event grid · event hub ·',
        '#           service bus · cosmos change feed · durable',
      ].join('\n'),
    },
  ],
  edges: [],
}
