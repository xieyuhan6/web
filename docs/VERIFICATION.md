# Verification — 2026-10-05

- ESLint and production build pass.
- npm audit reports zero known vulnerabilities after compatible dependency updates.
- Checked desktop 1440×1000, phone 390×844, small phone 320×740, iPad-sized 768×1024 and landscape tablet 1024×768.
- All sizes: no document horizontal overflow, no page JavaScript errors or failed resource requests, three loaded project images, valid section destinations, one H1, current downloadable PDF.
- Mobile/tablet menu: opens, navigates to Skills, closes after selection, and closes with Escape.
- Reduced motion emulated during responsive checks.
- Optional 3D scene loads and renders after clicking; captured separately.
- The supplied CV PDF was extracted and visually inspected; professional content and dates were matched to it.
- Public My Adventure/SplitBill homepages return HTTP 200; AI interview's configured URL returns 404 and is omitted. Full remote-service functionality has not been tested.
- Full-page screenshots included for the five viewports. These are Chrome emulations; physical iOS/Safari testing has not been performed.
