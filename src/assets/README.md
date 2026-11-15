# Images

| Folder | What goes here | Format |
| --- | --- | --- |
| `photos/` | Site photography: hero, page sections, services | WebP, 1200 to 1600px wide |
| `locations/` | One photo per outlet, named after the location slug (e.g. `katubedda.webp`) | WebP, 1200 to 1600px wide |
| `brand/` | Official STOPWASH logo files | SVG preferred, or PNG |
| `../../public/blog/` | Blog covers and images inside posts | JPG, so link previews work on WhatsApp, Facebook and LinkedIn |

## Adding images

1. Drop the original files into `_incoming/` at the project root. That folder is ignored by git, so raw files never reach the repository.
2. Convert and resize them, give them a short descriptive name in lowercase with hyphens (e.g. `bay-exterior-wide.webp`), and move them into the right folder above.
3. Import the image in `src/data/site.ts` and add alt text to `alts`.

Keep each image under about 250 KB. Photos showing faces or readable number plates need permission, or should be cropped.
