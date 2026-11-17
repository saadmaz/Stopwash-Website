# ADR-0001: TanStack Start on Cloudflare Workers

| Status   | Date       |
| -------- | ---------- |
| Accepted | 2026-11-15 |

## Decision

Server-render the site with TanStack Start and deploy it to Cloudflare Workers through Workers Builds connected to the repository.

## Alternatives considered

Static hosting without server rendering; a traditional Node.js host.

## Rationale

Server rendering gives complete HTML for search engines and a fast first paint, while Workers remove server management and handle the `www` redirect and security headers at the edge.
