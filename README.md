# Gainport landing page

A responsive, dependency-free landing page for Gainport. It includes cloud migration, architecture, pipeline, platform, operations, and consultancy content, plus experience and FAQ sections.

## Preview locally

Run a static server from this folder, for example:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Deploy to Vercel

Import this folder or Git repository into Vercel. Choose **Other** as the framework preset if prompted, leave the build command empty, and deploy. No environment variables, package installation, or build step are required.

Primary contact buttons jump to an embedded Calendly booking section. The booking section also provides a direct Calendly link and an email alternative at `arshad.choudary@gainport.ca`. The Calendly event URL is set in `index.html`.

## Files

- `index.html`: page structure and copy
- `styles.css`: visual design and responsive layout
- `script.js`: mobile menu and copyright year
- `favicon.svg`: site icon
- `vercel.json`: Vercel static hosting configuration

The booking calendar loads Calendly's widget script directly in the visitor's browser. It requires no Vercel environment variables or server functions.

## Organization marks

The moving experience row uses locally hosted image assets so it works without third-party image servers:

- RCMP signature: https://rcmp.ca/themes/custom/poweb/assets/sig-blk-en.svg
- IRCC signature: https://www.immigrantresearch.com/research/settlesmart-supporting-messaging-and-assistance-resource-technology
- Government of Canada signature: https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-en.svg
- TPG Technology Consulting logo: https://www.tpgtechnology.com/

The federal and RCMP identities are protected marks. Confirm that Gainport has permission to use them in a commercial site before publishing. The organizations are listed as team experience; the page does not claim their endorsement.

## Certification imagery

The certifications section uses locally hosted artwork from the issuers' official pages: [Microsoft Certified: Azure Fundamentals](https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/), [AWS Certified Cloud Practitioner](https://aws.amazon.com/certification/certified-cloud-practitioner/), [AWS Certified Solutions Architect – Associate](https://aws.amazon.com/certification/certified-solutions-architect-associate/), and [The Open Group TOGAF portfolio](https://www.opengroup.org/certifications/togaf). The Microsoft image is its general Fundamentals badge; The Open Group image is its organization logo. The TOGAF certification level has not been specified in the site copy. Before publishing a public certification claim, confirm the team members' current credentials and any issuer badge-use requirements.
