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

Contact buttons open a message to `arshad.choudary@gainport.ca` in the visitor's email application. Update the `mailto:` links in `index.html` if that address changes.

## Files

- `index.html`: page structure and copy
- `styles.css`: visual design and responsive layout
- `script.js`: mobile menu and copyright year
- `favicon.svg`: site icon
- `vercel.json`: Vercel static hosting configuration

## Organization marks

The moving experience row uses locally hosted image assets so it works without third-party image servers:

- RCMP signature: https://rcmp.ca/themes/custom/poweb/assets/sig-blk-en.svg
- IRCC signature: https://www.immigrantresearch.com/research/settlesmart-supporting-messaging-and-assistance-resource-technology
- Government of Canada signature: https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-en.svg
- TPG Technology Consulting logo: https://www.tpgtechnology.com/

The federal and RCMP identities are protected marks. Confirm that Gainport has permission to use them in a commercial site before publishing. The organizations are listed as team experience; the page does not claim their endorsement.
