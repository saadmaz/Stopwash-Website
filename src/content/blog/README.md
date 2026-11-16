# Writing a blog post

1. Copy `_template.md` in this folder and rename it to the URL you want, e.g.
   `monsoon-car-care.md` → `stopwash.lk/blog/monsoon-car-care`. Use lowercase and hyphens.
2. Fill in the details between the `---` lines at the top.
3. Write the post below them in Markdown (headings `##`, **bold**, lists, links, images, quotes).
4. Put images in `public/blog/` and reference them as `/blog/your-image.jpg`.
   Use JPG or PNG for the cover so it shows in link previews on WhatsApp / Facebook / LinkedIn.
5. Set `draft: true` while writing. Drafts only appear when running the site locally.

The blog index, post page, sitemap and RSS feed update automatically.

| Field         | Required   | Example                                           |
| ------------- | ---------- | ------------------------------------------------- |
| `title`       | yes        | `Why we built STOPWASH`                           |
| `description` | yes        | One or two sentences for Google and link previews |
| `date`        | yes        | `2026-11-13`                                      |
| `updated`     | no         | `2026-12-01`                                      |
| `author`      | no         | `STOPWASH Team` (default)                         |
| `cover`       | no         | `/blog/monsoon-cover.jpg`                         |
| `coverAlt`    | with cover | A short description of the image                  |
| `tags`        | no         | `[Car care, Tips]`                                |
| `draft`       | no         | `true` / `false`                                  |

Files whose names start with `_` (like the template) and this README are never published.
