# STOPWASH Website

Marketing, locations and franchise-acquisition site for **STOPWASH** — [stopwash.lk](https://stopwash.lk).

Built with TanStack Start (React 19, SSR), TypeScript, Tailwind CSS v4, Framer Motion and Supabase.

## Getting started

```sh
bun install        # or npm install
bun run dev        # http://localhost:8080
```

| Script | What it does |
| --- | --- |
| `dev` | Start the dev server |
| `build` | Production build into `.output/` |
| `preview` | Serve the production build locally |
| `test` | Run Vitest |
| `lint` | Run ESLint |

## Environment

Create `.env` with the Supabase project credentials (publishable key only — never the service-role key):

```sh
SUPABASE_URL=https://<project>.supabase.co
SUPABASE_PUBLISHABLE_KEY=<publishable key>
```

## Project structure

```
src/
  data/site.ts            # All content: contact details, nav, services, locations, franchise copy
  routes/                 # File-based routes (one file per page)
  components/site/        # Site components (Navbar, Footer, Photo, StepTrack, forms…)
  lib/enquiries.*.ts      # Form schemas (zod) and server functions that write to Supabase
  assets/                 # Images — placeholders until real STOPWASH photography is supplied
supabase/migrations/      # Database schema for the enquiry tables
public/                   # favicon, robots.txt, sitemap.xml
```

### Common edits

- **Add a location** — add an entry to `locations` in `src/data/site.ts`. Set `coordinates` to enable the embedded map.
- **Edit services** — update `serviceCatalogue` / `servicePreview` in `src/data/site.ts`.
- **Swap photography** — replace the files in `src/assets/` (same names) and update `alts` in `src/data/site.ts`.
- **New page** — add `src/routes/<slug>.tsx`, set `head: () => pageHead({...})`, and add the URL to `public/sitemap.xml`.

## Forms & data

The contact and franchise forms post to TanStack server functions (`src/lib/enquiries.functions.ts`), which validate with zod, drop honeypot / too-fast submissions, and insert into Supabase. Row-level security allows **insert only** for anonymous users, so submitted enquiries are never publicly readable. Read them in the Supabase dashboard.

Apply the schema to a new Supabase project with:

```sh
supabase db push
```

## Deployment

`bun run build` targets **Cloudflare Workers** by default (output in `.output/`, deploy with `npx wrangler deploy`). For another host set `NITRO_PRESET` at build time, e.g. `NITRO_PRESET=node-server bun run build` then `node .output/server/index.mjs`, or `vercel` / `netlify`.
