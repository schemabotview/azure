import type { Section } from '../types'

export const servicePrincipals: Section = {
  id: 'service-principals',
  title: 'Identity for code',
  scene: 'an-app-identity',
  slide: `## An application registration creates two objects

The **application** is the global definition of your app. The **service principal** is its local identity in a tenant — and that is the thing a role is actually assigned to.

### Two objects, because one app can serve many tenants
A multi-tenant app is defined once and has a service principal in each customer's directory. Even for a single-tenant app, the split is why the portal shows you *App registrations* and *Enterprise applications* and they look confusingly similar.

### How it proves who it is
- A **client secret** — a string. Simple, and it **expires**, usually at the least convenient moment
- A **certificate** — stronger, and still expires
- A **federated credential** — your CI system's own token is trusted directly, so no secret exists at all. This is what a GitHub Actions pipeline should use

> Nothing in Azure warns you loudly before a secret expires. The outage is the warning.`,
  narration:
    "Code needs to sign in too, and the object it signs in as is called a service principal. Here is where the portal confuses nearly everybody, so let's take it apart. When you register an application in Entra ID, you create two objects, not one. The first is the application object: the global definition of your app — its name, its redirect URIs, what permissions it requests. It lives in the tenant where you registered it, and there is exactly one of it. The second is the service principal: the local identity of that application inside a specific tenant. That is the object that role assignments actually point at. Why two? Because of multi-tenant applications. Imagine a software company that sells a product installed into customers' directories. The application is defined once, in the vendor's tenant. A service principal for it is created in each customer's tenant when they consent. One definition, many local identities. Even if you will never build such an app, that design is why the Azure portal shows you App registrations in one blade and Enterprise applications in another, containing what look like the same things. App registrations are the definitions you own. Enterprise applications are the service principals present in your tenant, including all the Microsoft ones you never created. Now, how does code prove it is that service principal? Three ways, in increasing order of how much I would like you to use them. A client secret is a long string, and it is a password in every sense — anyone with a copy is the application. You see it exactly once when it is created. And it expires: six months, twelve, twenty-four, whatever was picked. A certificate is stronger, because the private key can live somewhere the code can use but a person cannot copy — and it also expires. Then there are federated credentials, sometimes called workload identity federation, and these are the good ones. Instead of holding a secret, your pipeline presents the token its own platform already issues it — GitHub Actions, say — and Entra is configured to trust that token for this identity. No secret is created, so no secret can leak, and nothing expires at three in the morning. One last warning, and it comes from experience rather than documentation. Nothing in Azure shouts at you when a client secret is about to expire. The outage is the notification. If you must use secrets, put their expiry in whatever system actually wakes your team up.",
}
