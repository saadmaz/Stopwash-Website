# Images

| Folder               | What goes here                                                              | Format                                                        |
| -------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `photos/`            | Site photography: hero, page sections, services                             | WebP, 1200 to 1600px wide                                     |
| `locations/`         | One photo per outlet, named after the location slug (e.g. `katubedda.webp`) | WebP, 1200 to 1600px wide                                     |
| `../../public/blog/` | Blog covers and images inside posts                                         | JPG, so link previews work on WhatsApp, Facebook and LinkedIn |

The STOPWASH logo is not an image in this folder: it is inline SVG in `src/components/site/Logo.tsx`, and every logo file (SVG, PNG, social images) lives in [`brand/`](../../brand/README.md).

## Page hero photos

Every main page opens with `LandingHero` (`src/components/site/LandingHero.tsx`). Pages without a photo show a branded backdrop. To add one, save it as `photos/hero-<page>.webp` (landscape, about 1600 x 900), import it in `src/data/site.ts` with alt text, and pass `image`, `imageAlt` and `focus` (the part to keep in view on phones) to that page's `LandingHero`.

## Adding images

1. Drop the original files into `_incoming/` at the project root. That folder is ignored by git, so raw files never reach the repository.
2. Convert and resize them, give them a short descriptive name in lowercase with hyphens (e.g. `bay-exterior-wide.webp`), and move them into the right folder above.
3. Import the image in `src/data/site.ts` and add alt text to `alts`.

Keep each image under about 250 KB. Photos showing faces or readable number plates need permission, or should be cropped.
