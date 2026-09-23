import type { Scene } from '@graphlearning/flow'

// §04. The two objects an app registration creates are invisible in the portal until you have been
// bitten by them, so the scene shows the artefact: the command, and the four fields it hands back.
// The trailing comments carry the half that costs people a production outage — the secret expires.
export const anAppIdentity: Scene = {
  id: 'an-app-identity',
  title: 'Registering an app creates two objects',
  nodes: [
    {
      id: 'sp',
      kind: 'code',
      filename: 'creating an identity for code',
      minCols: 76,
      label: [
        '# one command, two objects: an application, and a service principal in THIS tenant',
        'az ad sp create-for-rbac --name checkout-api \\',
        '    --role Reader --scopes /subscriptions/8f2e.../resourceGroups/rg-web',
        '',
        '{',
        '  "appId":       "6b1c...",   # the client id — the username',
        '  "password":    "Yt8Q~...",  # the client secret — the password, shown ONCE',
        '  "tenant":      "72f9..."    # which directory to authenticate against',
        '}',
        '',
        '# the application object = the definition, global to your tenant',
        '# the service principal  = the local identity a role is assigned TO',
        '# a secret expires. A certificate expires. A managed identity does not.',
      ].join('\n'),
    },
  ],
  edges: [],
}
