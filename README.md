<div align="center">

# STOPWASH

**The queue ends here.**

The official website of STOPWASH: a faster, sharper and more dependable vehicle-care network in Sri Lanka.

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
- [Project structure](#project-structure)
- [Content management](#content-management)
- [Forms](#forms)
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

- **Brand and story pages:** Home, Our Story, Our Vision and The STOPWASH Standard.
- **Services:** The full service catalogue with clear levels of care.
- **Locations:** Outlet cards with directions, click-to-call and an embedded map when coordinates are set.
- **Franchise funnel:** Programme overview, partner criteria, journey, FAQ and an application form.
- **Contact:** Enquiry form with service, franchise and general enquiry types.
- **Blog:** Markdown posts with tags, reading time, drafts and an RSS feed.
- **Server-side rendering** for fast first paint and complete HTML for search engines.
- **SEO built in:** Per-page titles, descriptions and Open Graph images, a generated `sitemap.xml`, `robots.txt` and `AutoWash` structured data.
- **Spam-resistant forms:** Schema validation, a honeypot field and a minimum fill time. Enquiries arrive by email, with no database to manage.
- **Accessible by default:** Skip link, visible keyboard focus, reduced-motion support and WCAG AA colour contrast.

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | [TanStack Start](https://tanstack.com/start) (React 19, SSR, file-based routing) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 with design tokens in `src/styles.css` |
| Motion | Framer Motion, with CSS animations for server-rendered content |
| Forms | React Hook Form + Zod |
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

## Project structure

```
.
├── .github/                  # CI workflow, issue and pull request templates
├── public/                   # Static files: favicons, robots.txt, blog images
├── _incoming/                # Drop zone for new raw images (ignored by git)
├── src/
│   ├── assets/
│   │   ├── photos/           # Site photography
│   │   ├── locations/        # One photo per outlet
│   │   └── brand/            # Logo files
│   ├── components/
│   │   ├── site/             # Site components: Navbar, Footer, forms, cards
│   │   └── ui/               # Headless UI primitives (Radix-based)
│   ├── content/blog/         # Blog posts in Markdown
│   ├── data/site.ts          # Site content: contact, navigation, services, locations
│   ├── lib/                  # Blog loader, form schemas, email builder, helpers
│   ├── routes/               # File-based routes, one file per page
│   ├── styles.css            # Design tokens, type scale and section themes
│   └── test/                 # Vitest setup and tests
├── wrangler.jsonc            # Cloudflare Workers configuration
└── vite.config.ts            # Build configuration
```

## Content management

Most content lives in [`src/data/site.ts`](src/data/site.ts), so routine updates don't touch page code.

| Task | Where |
| --- | --- |
| Update phone, email or social links | `contact` in `src/data/site.ts` |
| Add or edit a location | `locations` in `src/data/site.ts`; set `coordinates` to enable the map |
| Edit services | `serviceCatalogue` and `servicePreview` in `src/data/site.ts` |
| Add or replace photography | See [`src/assets/README.md`](src/assets/README.md): drop originals in `_incoming/`, then convert into `src/assets/photos/`, `locations/` or `brand/` |
| Change brand colours | Tokens at the top of `src/styles.css` |
| Add a page | Create `src/routes/<slug>.tsx`, set `head: () => pageHead({...})`, add the path to `src/routes/sitemap[.]xml.ts` |
| Write a blog post | See [`src/content/blog/README.md`](src/content/blog/README.md) |

Blog posts appear on `/blog`, in the sitemap and in the RSS feed automatically. Set `draft: true` to keep a post visible only in local development.

## Forms

The Contact and Franchise forms do not use a database or any third-party service. When a visitor submits:

1. the form is validated against the Zod schemas in [`src/lib/enquiries.schema.ts`](src/lib/enquiries.schema.ts),
2. submissions with the honeypot field filled, or completed implausibly fast, are dropped,
3. the visitor's email app opens with a message to `hello@stopwash.lk`, with the subject and every field already written out ([`src/lib/enquiries.email.ts`](src/lib/enquiries.email.ts)). They press **Send**.

Enquiries therefore arrive in the `hello@stopwash.lk` inbox. To change the destination, update `customerEmail` and `franchiseEmail` in `src/data/site.ts`.

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

stopwash.lk runs on **Cloudflare Workers**: server-side rendering and the enquiry forms run in the Worker, and static files are served from Cloudflare's edge. Configuration lives in [`wrangler.jsonc`](wrangler.jsonc).

### What is already set up

| Item | Where |
| --- | --- |
| Worker name `stopwash-website`, pinned compatibility date, `nodejs_compat` | `wrangler.jsonc` |
| Custom domains `stopwash.lk` and `www.stopwash.lk` | `wrangler.jsonc` (`routes`) |
| `www` to `stopwash.lk` permanent redirect | `src/server.ts` |
| Security headers (HSTS, nosniff, frame, referrer and permissions policies) | `src/server.ts` |
| Long-term caching for hashed assets | generated `_headers` |
| Logs and metrics | `observability` in `wrangler.jsonc` |
| Automatic deploy on every push to `main` | Cloudflare Workers Builds (connected in the dashboard) |

### Going live (one time)

Cloudflare builds and deploys straight from this GitHub repository. No API tokens or GitHub secrets are needed.

1. **Add the domain to Cloudflare.** In the Cloudflare dashboard, add `stopwash.lk` as a site and switch the domain's nameservers to the two Cloudflare nameservers shown (at your `.lk` registrar). Wait until the zone shows as **Active**.
2. **Connect the repository.** Workers & Pages → *Create* → **Import a repository** → connect GitHub and choose `saadmaz/Stopwash-Website`.
3. **Use these settings:**

   | Setting | Value |
   | --- | --- |
   | Project name | `stopwash-website` (must match `name` in `wrangler.jsonc`) |
   | Production branch | `main` |
   | Build command | `bun run build` |
   | Deploy command | `npx wrangler deploy` |
   | Non-production branch deploy command | `npx wrangler versions upload` |
   | Root directory | `/` (leave empty) |
   | Build variable | `BUN_VERSION` = `1.4.4` |

4. **Save and deploy.** The first build creates the Worker and attaches `stopwash.lk` and `www.stopwash.lk`, including their SSL certificates. From then on, every push to `main` deploys automatically, and other branches get preview versions.
5. **Recommended zone settings:** SSL/TLS mode **Full (strict)** and **Always Use HTTPS** on.
6. **Check it:** open https://stopwash.lk, confirm https://www.stopwash.lk redirects to it, and send one test message through the Contact form to confirm it opens an email to hello@stopwash.lk.

### Deploying from your machine

```sh
npx wrangler login     # once
bun run deploy         # build, then publish
```

### Preview the production build locally

`bun run preview:worker` builds the site and runs it in Cloudflare's own runtime (workerd) at http://localhost:8787. Requests always arrive as `localhost` there, so the `www` redirect only takes effect on the real domain (it is covered by `src/test/server-entry.test.ts`).

### Environment values

The site needs no environment variables. If one is ever added, put non-secret values in `vars` in `wrangler.jsonc`; never commit a secret, use `npx wrangler secret put NAME` instead.

## Releases and versioning

The project follows [Semantic Versioning](https://semver.org). Each release is tagged `vX.Y.Z` and published on the [Releases](https://github.com/saadmaz/Stopwash-Website/releases) page. Notable changes are recorded in [CHANGELOG.md](CHANGELOG.md).

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) for the branching model, commit conventions and pull request checklist. All participants are expected to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Security

Please do not report security issues in public issues. See [SECURITY.md](SECURITY.md) for how to report a vulnerability privately.

## License

Copyright © 2026 STOPWASH PVT LTD. All rights reserved.

This is proprietary software. No permission is granted to use, copy, modify or distribute it without prior written consent. See [LICENSE](LICENSE).
