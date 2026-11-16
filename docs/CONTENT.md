# Content

> How to update copy, locations, photography and the blog on stopwash.lk. Part of the [project documentation](README.md).

Most content lives in [`src/data/site.ts`](../src/data/site.ts), so routine updates don't touch page code.

| Task                                | Where                                                                                                                                                   |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Update phone, email or social links | `contact` in `src/data/site.ts`                                                                                                                         |
| Add or edit a location              | `locations` in `src/data/site.ts`; set `coordinates` to enable the map                                                                                  |
| Edit services                       | `serviceCatalogue` and `servicePreview` in `src/data/site.ts`                                                                                           |
| Add or replace photography          | See [`src/assets/README.md`](../src/assets/README.md): drop originals in `_incoming/`, then convert into `src/assets/photos/`, `locations/` or `brand/` |
| Change brand colours                | Tokens at the top of `src/styles.css`                                                                                                                   |
| Add a page                          | Create `src/routes/<slug>.tsx`, set `head: () => pageHead({...})`, add the path to `src/routes/sitemap[.]xml.ts`                                        |
| Write a blog post                   | See [`src/content/blog/README.md`](../src/content/blog/README.md)                                                                                       |

Blog posts appear on `/blog`, in the sitemap and in the RSS feed automatically. Set `draft: true` to keep a post visible only in local development.
