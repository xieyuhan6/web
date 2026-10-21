# Yuhan Xie — Portfolio

An English-language React portfolio updated from the supplied CV, retaining the original dark palette, Mona Sans typography, and optional 3D workspace.

## Run

Node.js 24 or later:

```sh
npm ci
npm run dev
```

Development and preview: http://127.0.0.1:5174

```sh
npm run lint
npm run build
npm run preview
```

Deploy `dist/` to a static host (for example Vercel, with build command `npm run build` and output directory `dist`). This task prepares files locally; it does not publish the site or update GitHub. No environment variables, EmailJS credentials, or backend are required. Deploy at the domain root; configure Vite `base` and asset paths before subdirectory hosting.

## Content

- `src/constants/index.js`: professional experience, education, skills, project descriptions, repository/demo URLs, and contact details.
- `src/sections/`: hero, projects, experience, skills, contact, and footer.
- `src/index.css`: desktop, tablet, phone, focus and reduced-motion styles.
- `public/Yuhan-Xie-Resume.pdf`: exact copy of the supplied CV.pdf; update this file for future CV changes.
- `public/images/projects/`: screenshots of the actual projects (Interview Helper and SplitBill from the supplied local projects; My Adventure from its existing public site).

UNGSC internship dates are February–June 2026, matching the CV. The master's is listed as ongoing as in the supplied CV. Professional metrics are taken from that CV; no employment or user-count claims were invented. Next.js is included based on the project implementation. Resume review is presented within Interview Helper instead of as an unrelated fourth application.

## Project links

GitHub repositories were verified through the user's public GitHub profile. My Adventure and SplitBill public homepages returned HTTP 200 on 2026-10-05. This checks homepage availability only, not deployed backend or AI functionality. The AI interview repository's configured homepage returned 404, so its card links to GitHub and the related resume repository instead of a broken demo.

Project descriptions reflect the supplied local versions. Existing public demos/repositories may run older versions; this work does not redeploy those projects. The original source folders in Downloads and the original desktop CV remain unchanged.

## Responsive and performance changes

- Keyboard-accessible mobile menu with Escape-to-close, meaningful headings and skip link.
- Fixed missing Skills/contact destinations, broken images and placeholder copy.
- Removed template testimonials, unrelated brand logos, map embeds, unused modules and packages.
- Fonts and project images are bundled locally.
- 3D imports load only after the user clicks; the ordinary page does not require WebGL. The optional renderer uses demand rendering and a capped pixel ratio. An error boundary/fallback preserves the page if 3D fails.
- The optional Three.js chunk is large (~923 kB uncompressed), but excluded from the initial application bundle (~199 kB).
- The email link opens the visitor's email application; no message is sent by the site itself.

## Browser verification

```sh
# With npm run preview running:
node tests/browser.mjs
```

The test uses Chrome's standard macOS path; adjust it for other systems. See `docs/VERIFICATION.md` for checks and screenshots. Browser tests are desktop Chrome viewport emulations, not physical iPad/Safari testing.
