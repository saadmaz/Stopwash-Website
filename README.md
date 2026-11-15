<div align="center">

# STOPWASH

**The queue ends here.**

The official website of STOPWASH — a faster, sharper and more dependable vehicle-care network in Sri Lanka.

[![Website](https://img.shields.io/badge/website-stopwash.lk-B2E04C?style=flat-square&labelColor=0B1728)](https://stopwash.lk)
[![CI](https://github.com/saadmaz/Stopwash-Website/actions/workflows/ci.yml/badge.svg)](https://github.com/saadmaz/Stopwash-Website/actions/workflows/ci.yml)
[![Release](https://img.shields.io/github/v/release/saadmaz/Stopwash-Website?style=flat-square&labelColor=0B1728&color=B2E04C)](https://github.com/saadmaz/Stopwash-Website/releases)
![License](https://img.shields.io/badge/license-proprietary-0B1728?style=flat-square)

[**stopwash.lk**](https://stopwash.lk) · [Report a bug](https://github.com/saadmaz/Stopwash-Website/issues/new?template=bug_report.yml) · [Request a change](https://github.com/saadmaz/Stopwash-Website/issues/new?template=feature_request.yml)

</div>

---

## Contents

- [About](#about)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Configuration](#configuration)
- [Project structure](#project-structure)
- [Content management](#content-management)
- [Forms and data](#forms-and-data)
- [Quality checks](#quality-checks)
- [Deployment](#deployment)
- [Releases and versioning](#releases-and-versioning)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)

## About

STOPWASH is building a connected vehicle-care network for people who keep moving. The first outlet is open in Katubedda, with a franchise programme to take the network national.

This repository powers [stopwash.lk](https://stopwash.lk): the brand, service and location information customers use to find a STOPWASH, and the franchise funnel operators use to apply to build one.

| | |
| --- | --- |
| **Organisation** | STOPWASH PVT LTD |
| **Website** | [stopwash.lk](https://stopwash.lk) |
| **Contact** | [hello@stopwash.lk](mailto:hello@stopwash.lk) · +94 70 622 5252 |
| **Maintainer** | [Saad Mazhar](https://github.com/saadmaz) |

## Features

- **Brand and story pages** — Home, Our Story, Our Vision and The STOPWASH Standard.
- **Services** — the full service catalogue with clear levels of care.
- **Locations** — outlet cards with directions, click-to-call and an embedded map when coordinates are set.
- **Franchise funnel** — programme overview, partner criteria, journey, FAQ and an application form.
- **Contact** — enquiry form with service, franchise and general enquiry types.
- **Blog** — Markdown posts with tags, reading time, drafts and an RSS feed.
- **Server-side rendering** for fast first paint and complete HTML for search engines.
- **SEO built in** — per-page titles, descriptions and Open Graph images, a generated `sitemap.xml`, `robots.txt` and `AutoWash` structured data.
- **Spam-resistant forms** — schema validation, a honeypot field and a minimum fill time, with insert-only database access.
- **Accessible by default** — skip link, visible keyboard focus, reduced-motion support and WCAG AA colour contrast.

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | [TanStack Start](https://tanstack.com/start) (React 19, SSR, file-based routing) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 with design tokens in `src/styles.css` |
| Motion | Framer Motion, with CSS animations for server-rendered content |
| Forms | React Hook Form + Zod |
| Data | Supabase (Postgres with row-level security) |
| Content | Markdown via `marked` |
| Build | Vite 8 + Nitro |
| Hosting | Cloudflare Workers (default) |
| Tooling | Bun, Vitest, Testing Library, ESLint, Prettier |

## Getting started

### Prerequisites

- [Bun](https://bun.sh) 1.x (recommended) or Node.js 20+
- Git

### Install and run

```sh
git clone https://github.com/saadmaz/Stopwash-Website.git
cd Stopwash-Website
bun install
cp .env.example .env    # then fill in the values (see Configuration)
bun run dev
```

The site runs at **http://localhost:8080**. If that port is busy, Vite picks the next free one and prints it.

### Scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start the development server with hot reload |
| `bun run build` | Production build into `.output/` |
| `bun run preview` | Serve the production build locally |
| `bun run typecheck` | Type-check the project with `tsc` |
| `bun run test` | Run the test suite once |
| `bun run test:watch` | Run tests in watch mode |
| `bun run lint` | Lint with ESLint |
| `bun run format` | Format with Prettier |

## Configuration

Copy `.env.example` to `.env` and set the Supabase project values.

| Variable | Used by | Description |
| --- | --- | --- |
| `SUPABASE_URL` | Server | Supabase project URL |
| `SUPABASE_PUBLISHABLE_KEY` | Server | Supabase publishable (anon) key |
| `SUPABASE_PROJECT_ID` | Tooling | Supabase project reference |
| `VITE_SUPABASE_URL` | Client | Same URL, exposed to the browser bundle |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Client | Same publishable key, exposed to the browser bundle |
| `VITE_SUPABASE_PROJECT_ID` | Client | Same project reference, exposed to the browser bundle |

> [!IMPORTANT]
> Only ever use the **publishable** key. Never put the Supabase `service_role` key in this repository, in `.env`, or in any `VITE_*` variable — `VITE_*` values are shipped to every visitor's browser.

## Project structure

```
.
├── .github/                  # CI workflow, issue and pull request templates
├── public/                   # Static files: favicons, robots.txt, blog images
├── src/
│   ├── assets/               # Photography
│   ├── components/
│   │   ├── site/             # Site components: Navbar, Footer, forms, cards
│   │   └── ui/               # Headless UI primitives (Radix-based)
│   ├── content/blog/         # Blog posts in Markdown
│   ├── data/site.ts          # Site content: contact, navigation, services, locations
│   ├── lib/                  # Blog loader, form schemas, server functions, helpers
│   ├── routes/               # File-based routes, one file per page
│   ├── styles.css            # Design tokens, type scale and section themes
│   └── test/                 # Vitest setup and tests
├── supabase/migrations/      # Database schema for enquiry tables
└── vite.config.ts            # Build configuration
```

## Content management

Most content lives in [`src/data/site.ts`](src/data/site.ts), so routine updates don't touch page code.

| Task | Where |
| --- | --- |
| Update phone, email or social links | `contact` in `src/data/site.ts` |
| Add or edit a location | `locations` in `src/data/site.ts` — set `coordinates` to enable the map |
| Edit services | `serviceCatalogue` and `servicePreview` in `src/data/site.ts` |
| Replace photography | Swap files in `src/assets/` (keep the names) and update `alts` |
| Change brand colours | Tokens at the top of `src/styles.css` |
| Add a page | Create `src/routes/<slug>.tsx`, set `head: () => pageHead({...})`, add the path to `src/routes/sitemap[.]xml.ts` |
| Write a blog post | See [`src/content/blog/README.md`](src/content/blog/README.md) |

Blog posts appear on `/blog`, in the sitemap and in the RSS feed automatically. Set `draft: true` to keep a post visible only in local development.

## Forms and data

The contact and franchise forms submit to TanStack server functions in [`src/lib/enquiries.functions.ts`](src/lib/enquiries.functions.ts). Each submission is:

1. validated against a Zod schema shared with the client,
2. rejected if the honeypot field is filled or the form was completed implausibly fast,
3. inserted into Supabase.

Row-level security allows anonymous users to **insert only**. Submitted enquiries are never publicly readable; review them in the Supabase dashboard.

To apply the schema to a new Supabase project:

```sh
supabase db push
```

## Quality checks

Every push and pull request to `main` runs the [CI workflow](.github/workflows/ci.yml):

- dependency install from the lockfile
- type check
- tests
- production build

Run the same checks locally before opening a pull request:

```sh
bun run typecheck && bun run test && bun run build
```

## Deployment

`bun run build` targets **Cloudflare Workers** by default. The output is written to `.output/`.

```sh
bun run build
npx wrangler deploy
```

To deploy elsewhere, set `NITRO_PRESET` at build time:

```sh
NITRO_PRESET=node-server bun run build   # then: node .output/server/index.mjs
NITRO_PRESET=vercel bun run build
NITRO_PRESET=netlify bun run build
```

Set the server-side environment variables (`SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`) in the hosting provider's dashboard.

## Releases and versioning

The project follows [Semantic Versioning](https://semver.org). Each release is tagged `vX.Y.Z` and published on the [Releases](https://github.com/saadmaz/Stopwash-Website/releases) page. Notable changes are recorded in [CHANGELOG.md](CHANGELOG.md).

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) for the branching model, commit conventions and pull request checklist. All participants are expected to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Security

Please do not report security issues in public issues. See [SECURITY.md](SECURITY.md) for how to report a vulnerability privately.

## License

Copyright © 2026 STOPWASH PVT LTD. All rights reserved.

This is proprietary software. No permission is granted to use, copy, modify or distribute it without prior written consent. See [LICENSE](LICENSE).
