<div align="center">

# STOPWASH

**The queue ends here.**

The official website of STOPWASH: a faster, sharper and more dependable vehicle-care network in Sri Lanka.

[![Website](https://img.shields.io/badge/website-stopwash.lk-374151?style=flat-square&labelColor=111827)](https://stopwash.lk)
[![CI](https://github.com/saadmaz/Stopwash-Website/actions/workflows/ci.yml/badge.svg)](https://github.com/saadmaz/Stopwash-Website/actions/workflows/ci.yml)
[![Version](https://img.shields.io/badge/version-v1.2.0-374151?style=flat-square&labelColor=111827)](https://github.com/saadmaz/Stopwash-Website/releases)
![License](https://img.shields.io/badge/license-proprietary-374151?style=flat-square&labelColor=111827)

[**stopwash.lk**](https://stopwash.lk) · [Documentation](docs/README.md) · [Report a bug](https://github.com/saadmaz/Stopwash-Website/issues/new?template=bug_report.yml) · [Request a change](https://github.com/saadmaz/Stopwash-Website/issues/new?template=feature_request.yml)

</div>

---

## Contents

- [About](#about)
- [Features](#features)
- [Architecture](#architecture)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Configuration](#configuration)
- [Project structure](#project-structure)
- [Quality checks](#quality-checks)
- [Deployment](#deployment)
- [Documentation](#documentation)
- [Releases and versioning](#releases-and-versioning)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)

## About

STOPWASH is building a connected vehicle-care network for people who keep moving. The first outlet is open in Katubedda, with a franchise programme to take the network national.

This repository powers [stopwash.lk](https://stopwash.lk): the brand, service and location information customers use to find a STOPWASH, and the franchise funnel operators use to apply to build one.

|                  |                                                                 |
| ---------------- | --------------------------------------------------------------- |
| **Organisation** | STOPWASH PVT LTD                                                |
| **Status**       | Live                                                            |
| **Website**      | [stopwash.lk](https://stopwash.lk)                              |
| **Contact**      | [hello@stopwash.lk](mailto:hello@stopwash.lk) · +94 70 622 5252 |
| **Maintainer**   | [Saad Mazhar](https://github.com/saadmaz)                       |

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

## Architecture

A server-rendered TanStack Start application on Cloudflare Workers. Pages render in the Worker, which also applies the `www` redirect and security headers. Enquiry forms validate in the browser and open a pre-filled email to the STOPWASH inbox; the site stores no personal data.

The full picture, with diagrams, is in [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md). Significant decisions are recorded as [ADRs](docs/adr/README.md).

## Tech stack

| Layer     | Technology                                                                       |
| --------- | -------------------------------------------------------------------------------- |
| Framework | [TanStack Start](https://tanstack.com/start) (React 19, SSR, file-based routing) |
| Language  | TypeScript (strict)                                                              |
| Styling   | Tailwind CSS v4 with design tokens in `src/styles.css`                           |
| Motion    | Framer Motion, with CSS animations for server-rendered content                   |
| Forms     | React Hook Form + Zod                                                            |
| Content   | Markdown via `marked`                                                            |
| Build     | Vite 8 + Nitro                                                                   |
| Hosting   | Cloudflare Workers (default)                                                     |
| Tooling   | Bun, Vitest, Testing Library, ESLint, Prettier                                   |

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

| Command              | Description                                  |
| -------------------- | -------------------------------------------- |
| `bun run dev`        | Start the development server with hot reload |
| `bun run build`      | Production build into `.output/`             |
| `bun run preview`    | Serve the production build locally           |
| `bun run typecheck`  | Type-check the project with `tsc`            |
| `bun run test`       | Run the test suite once                      |
| `bun run test:watch` | Run tests in watch mode                      |
| `bun run lint`       | Lint with ESLint                             |
| `bun run format`     | Format with Prettier                         |

## Configuration

The site needs no environment variables. Contact details, services, locations and the form destinations live in `src/data/site.ts`; Worker settings live in `wrangler.jsonc`.

Every variable, where it is set and which are secret: [docs/CONFIGURATION.md](docs/CONFIGURATION.md). How to update content is in [docs/CONTENT.md](docs/CONTENT.md).

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

## Quality checks

Every push and pull request to `main` runs the [CI workflow](.github/workflows/ci.yml): lint, type check, tests and a production build. Run the same checks locally before opening a pull request:

```sh
bun run lint && bun run typecheck && bun run test && bun run build
```

## Deployment

| Environment | Branch    | URL                                        |
| ----------- | --------- | ------------------------------------------ |
| Development | `develop` | [dev.stopwash.lk](https://dev.stopwash.lk) |
| Production  | `main`    | [stopwash.lk](https://stopwash.lk)         |

Cloudflare Workers Builds builds and serves each branch; the Deploy workflow verifies the build and the live URL. Work merges into `develop` and deploys to development; a release pull request from `develop` into `main` deploys to production.

Environments, setup, secrets and post-deployment checks are in [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md). To release or roll back, follow the [runbooks](docs/runbooks/README.md).

## Documentation

All documentation lives in [`docs/`](docs/README.md), using the same layout in every STTPS repository.

| Document                                  | Covers                                              |
| ----------------------------------------- | --------------------------------------------------- |
| [ARCHITECTURE.md](docs/ARCHITECTURE.md)   | How the system is built and how data flows          |
| [CONFIGURATION.md](docs/CONFIGURATION.md) | Environment variables and configuration files       |
| [DEPLOYMENT.md](docs/DEPLOYMENT.md)       | Hosting, the delivery pipeline and first-time setup |
| [CONTENT.md](docs/CONTENT.md)             | Updating copy, business data, imagery and articles  |
| [adr/](docs/adr/README.md)                | Architecture decision records                       |
| [runbooks/](docs/runbooks/README.md)      | Release and rollback procedures                     |

Product and reference documents for this project are listed in the [documentation index](docs/README.md).

## Releases and versioning

The project follows [Semantic Versioning](https://semver.org). Each release is tagged `vX.Y.Z` and published on the [Releases](https://github.com/saadmaz/Stopwash-Website/releases) page. Notable changes are recorded in [CHANGELOG.md](CHANGELOG.md), and the release procedure is in [docs/runbooks/release.md](docs/runbooks/release.md).

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) for the branching model, commit conventions and pull request checklist. All participants are expected to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Security

Please do not report security issues in public issues. See [SECURITY.md](SECURITY.md) for how to report a vulnerability privately.

## License

Copyright © 2026 STOPWASH PVT LTD. All rights reserved.

This is proprietary software. The source is publicly visible, but no permission is granted to use, copy, modify or distribute it without prior written consent. See [LICENSE](LICENSE).
