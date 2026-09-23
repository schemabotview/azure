import type { Scene } from '@graphlearning/flow'

// §03. The fork at the bottom is the point of the scene. People meet managed identity as a Key Vault
// trick; it is not — the same identity and the same token authenticate to storage and to SQL, and
// once that lands the question stops being "where do I keep this connection string" for every
// resource at once. Drawn top-down: nothing in the chain is a secret the app holds.
export const aTokenInsteadOfAPassword: Scene = {
  id: 'a-token-instead-of-a-password',
  title: 'The app holds no credential, and still gets in',
  nodes: [
    { id: 'app', label: 'Your app', sub: 'no connection string, no key', pattern: 'service', icon: 'appservice' },
    { id: 'mi', label: 'Its managed identity', sub: 'a principal Azure owns', pattern: 'user', icon: 'managedidentity' },
    { id: 'tok', label: 'A token from Entra', sub: 'short-lived, and scoped', pattern: 'service', icon: 'tenant' },
    { id: 'kv', label: 'Key Vault', sub: 'Secrets User', pattern: 'storage', icon: 'keyvault' },
    { id: 'blob', label: 'A storage account', sub: 'Blob Data Reader', pattern: 'storage', icon: 'blob' },
    { id: 'sql', label: 'Azure SQL', sub: 'an Entra login', pattern: 'storage', icon: 'azuresql' },
  ],
  edges: [
    { source: 'app', target: 'mi', label: 'system-assigned' },
    { source: 'mi', target: 'tok', label: 'the platform asks' },
    { source: 'tok', target: 'kv' },
    { source: 'tok', target: 'blob' },
    { source: 'tok', target: 'sql' },
  ],
}
