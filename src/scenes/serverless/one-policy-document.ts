import type { Scene } from '@graphlearning/flow'

// §08. API Management's product IS this document — the gateway's behaviour is a policy file, not a
// set of checkboxes — so the scene is the file. It is also the only place in the course where
// authentication, rate limiting and the backend address are one artifact, which is the argument for
// having a gateway at all.
export const onePolicyDocument: Scene = {
  id: 'one-policy-document',
  title: 'The gateway is a document',
  nodes: [
    {
      id: 'pol',
      kind: 'code',
      filename: 'policy on one API — inbound, outbound, and the error path',
      minCols: 76,
      label: [
        '<policies>',
        '  <inbound>',
        '    <base />                     <!-- inherit the product\'s policy -->',
        '',
        '    <!-- the gateway authenticates; the backend never sees an unsigned call -->',
        '    <validate-jwt header-name="Authorization"',
        '                  failed-validation-httpcode="401">',
        '      <!-- {{...}} is a NAMED VALUE: config and secrets live in the',
        '           instance or in Key Vault, never in the policy document -->',
        '      <openid-config url="{{entra-openid-config}}" />',
        '      <required-claims>',
        '        <claim name="aud"><value>api://orders</value></claim>',
        '      </required-claims>',
        '    </validate-jwt>',
        '',
        '    <!-- per CALLER, not per gateway: the counter key is the subscription -->',
        '    <rate-limit-by-key calls="100" renewal-period="60"',
        '                       counter-key="@(context.Subscription.Id)" />',
        '',
        '    <set-backend-service base-url="{{orders-backend}}" />',
        '  </inbound>',
        '',
        '  <outbound>',
        '    <base />',
        '    <set-header name="X-Powered-By" exists-action="delete" />',
        '  </outbound>',
        '',
        '  <on-error>',
        '    <base />       <!-- where a 500 stops leaking a stack trace -->',
        '  </on-error>',
        '</policies>',
      ].join('\n'),
    },
  ],
  edges: [],
}
