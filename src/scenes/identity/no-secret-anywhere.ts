import type { Scene } from '@graphlearning/flow'

// §05. A genuine mechanism, so a flow. The point of the figure is the shape: the token comes from a
// local endpoint the VM can reach and nobody else can, so no credential ever exists in the code, the
// config, or the pipeline. Every node here is a step the platform takes without you.
export const noSecretAnywhere: Scene = {
  id: 'no-secret-anywhere',
  title: 'A credential that is never written down',
  nodes: [
    { id: 'app', label: 'Your app', sub: 'holds no secret', icon: 'vm' },
    { id: 'imds', label: 'Local token endpoint', sub: 'reachable only from this VM', pattern: 'network', icon: 'managedidentity' },
    { id: 'entra', label: 'Microsoft Entra ID', sub: 'issues a token for the identity', pattern: 'user', icon: 'tenant' },
    { id: 'kv', label: 'Key Vault', sub: 'checks the role assignment', icon: 'keyvault' },
    { id: 'secret', label: 'The secret', sub: 'returned to the app', pattern: 'storage', icon: 'storage' },
  ],
  edges: [
    { source: 'app', target: 'imds', label: 'asks for a token' },
    { source: 'imds', target: 'entra', label: 'proves the VM' },
    { source: 'entra', target: 'kv', label: 'bearer token' },
    { source: 'kv', target: 'secret', label: 'allowed' },
  ],
}
