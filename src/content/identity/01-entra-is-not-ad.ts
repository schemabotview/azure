import type { Section } from '../types'

export const entraIsNotAd: Section = {
  id: 'entra-is-not-ad',
  title: 'Entra ID is not Active Directory',
  scene: 'directory-vs-domain',
  slide: `## A directory for the internet, not for the office

Microsoft Entra ID — the service formerly called Azure Active Directory — shares a word with the thing in your server room and almost nothing else. It authenticates people and code to **web applications**, over HTTPS.

### What does not come with you
- No forests, no domains, no organisational units — a tenant is **flat**
- No LDAP, no Kerberos — OAuth 2.0 and SAML instead
- No Group Policy — device configuration is Intune's job
- Nothing is "domain-joined"; apps and devices are **registered**

### If you genuinely need the old protocols
**Entra Domain Services** is a managed domain controller you can stand up inside a VNet — for the lift-and-shift application that will not speak anything newer. It is a compatibility layer, not the destination.`,
  narration:
    "Let's clear up the most expensive piece of confusion in Azure, and it is caused by a name. Microsoft Entra ID used to be called Azure Active Directory, and a great many people concluded, reasonably, that it was Active Directory hosted in Azure. It is not. It shares a word and a company, and beyond that it is a different design for a different problem. Active Directory — the one in your server room — was built for a corporate network. It assumes machines on a LAN, it speaks LDAP and Kerberos, it organises things into forests and domains and organisational units, and it pushes configuration down through Group Policy. All of that is excellent, and all of it assumes the network is the boundary. Entra ID was built for the public internet. It authenticates people and code to web applications, over HTTPS, using OAuth 2.0 and SAML — the protocols the web actually runs on. And here is what surprises people: a tenant is flat. There are no organisational units. There is no hierarchy of containers to mirror your org chart. You have users, you have groups, you have applications, and you have administrative units if you really need to delegate a slice of user management — but the tree you spent years designing in AD does not transfer, because nothing here needs it. There is no Group Policy either. If you want to configure a laptop, that is Intune, a different product. And nothing is domain-joined; devices and applications are registered, which is a weaker and far more scalable relationship. Now, one honest caveat. If you have an application that will only speak LDAP or Kerberos — and there are thousands of them — Microsoft offers Entra Domain Services: a managed domain controller you can stand up inside a virtual network, so that legacy app can find something familiar. Use it when you must. Just be clear about what it is: a compatibility layer for old protocols, not the thing you are supposed to be building towards.",
}
