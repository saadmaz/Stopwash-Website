# Configuration

<!-- nav -->

<sub><a href="../README.md">Project README</a> · <a href="README.md">Documentation index</a></sub>

> Settings that control how stopwash.lk builds and behaves. Part of the [project documentation](README.md).

## Environment variables

The site needs no environment variables. If one is ever added, put non-secret values in `vars` in `wrangler.jsonc`; never commit a secret, use `npx wrangler secret put NAME` instead.

## Configuration files

| File               | Controls                                                                                                  |
| ------------------ | --------------------------------------------------------------------------------------------------------- |
| `wrangler.jsonc`   | Worker name, compatibility date, `workers.dev` and preview URLs, observability, and any non-secret `vars` |
| `src/server.ts`    | `www` redirect and security headers                                                                       |
| `vite.config.ts`   | Build configuration                                                                                       |
| `src/data/site.ts` | Business data, including `customerEmail` and `franchiseEmail`, the form destinations                      |
