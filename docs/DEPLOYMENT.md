# Deployment

> How stopwash.lk reaches production. Part of the [project documentation](README.md).

stopwash.lk runs on **Cloudflare Workers**: server-side rendering and the enquiry forms run in the Worker, and static files are served from Cloudflare's edge. Configuration lives in [`wrangler.jsonc`](../wrangler.jsonc).

## What is already set up

| Item                                                                       | Where                                                  |
| -------------------------------------------------------------------------- | ------------------------------------------------------ |
| Worker name `stopwash-website`, pinned compatibility date, `nodejs_compat` | `wrangler.jsonc`                                       |
| `workers.dev` address and branch preview URLs                              | `wrangler.jsonc`                                       |
| Custom domains `stopwash.lk` and `www.stopwash.lk`                         | attached in the Cloudflare dashboard                   |
| `www` to `stopwash.lk` permanent redirect                                  | `src/server.ts`                                        |
| Security headers (HSTS, nosniff, frame, referrer and permissions policies) | `src/server.ts`                                        |
| Long-term caching for hashed assets                                        | generated `_headers`                                   |
| Logs and metrics                                                           | `observability` in `wrangler.jsonc`                    |
| Automatic deploy on every push to `main`                                   | Cloudflare Workers Builds (connected in the dashboard) |

## Going live (one time)

Cloudflare builds and deploys straight from this GitHub repository. No API tokens or GitHub secrets are needed.

1. **Connect the repository.** Workers & Pages → _Create_ → **Import a repository** → connect GitHub and choose `saadmaz/Stopwash-Website`.
2. **Use these settings:**

   | Setting                              | Value                                                      |
   | ------------------------------------ | ---------------------------------------------------------- |
   | Project name                         | `stopwash-website` (must match `name` in `wrangler.jsonc`) |
   | Production branch                    | `main`                                                     |
   | Build command                        | `bun run build`                                            |
   | Deploy command                       | `npx wrangler deploy`                                      |
   | Non-production branch deploy command | `npx wrangler versions upload`                             |
   | Root directory                       | `/` (leave empty)                                          |
   | Build variable                       | `BUN_VERSION` = `1.4.4`                                    |

3. **Save and deploy.** The site goes live at `https://stopwash-website.<your-account>.workers.dev`. From then on every push to `main` deploys automatically, and other branches get preview URLs.
4. **Add the domain to Cloudflare.** Add `stopwash.lk` as a site, then switch the domain's nameservers at your `.lk` registrar to the two Cloudflare nameservers shown. Wait until the zone shows as **Active**.
5. **Attach the domains.** Worker `stopwash-website` → Settings → **Domains & Routes** → _Add_ → **Custom domain**: add `stopwash.lk`, then `www.stopwash.lk`. Cloudflare creates the DNS records and SSL certificates.
6. **Recommended zone settings:** SSL/TLS mode **Full (strict)** and **Always Use HTTPS** on.
7. **Check it:** open https://stopwash.lk, confirm https://www.stopwash.lk redirects to it, and send one test message through the Contact form to confirm it opens an email to hello@stopwash.lk.

## Deploying from your machine

```sh
npx wrangler login     # once
bun run deploy         # build, then publish
```

## Preview the production build locally

`bun run preview:worker` builds the site and runs it in Cloudflare's own runtime (workerd) at http://localhost:8787. Requests always arrive as `localhost` there, so the `www` redirect only takes effect on the real domain (it is covered by `src/test/server-entry.test.ts`).
