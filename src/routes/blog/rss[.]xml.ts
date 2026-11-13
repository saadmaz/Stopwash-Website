import { createFileRoute } from "@tanstack/react-router";
import { contact } from "@/data/site";
import { posts } from "@/lib/blog";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** RSS 2.0 feed of published posts. */
export const Route = createFileRoute("/blog/rss.xml")({
  server: {
    handlers: {
      GET: () => {
        const items = posts
          .map((p) => {
            const url = `${contact.siteUrl}/blog/${p.slug}`;
            return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${p.date}T00:00:00+05:30`).toUTCString()}</pubDate>
      <description>${esc(p.description)}</description>
${p.tags.map((t) => `      <category>${esc(t)}</category>`).join("\n")}
    </item>`;
          })
          .join("\n");
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>STOPWASH Blog</title>
    <link>${contact.siteUrl}/blog</link>
    <atom:link href="${contact.siteUrl}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <description>Car care tips, STOPWASH news and notes from the road.</description>
    <language>en-lk</language>
${items}
  </channel>
</rss>
`;
        return new Response(body, { headers: { "content-type": "application/rss+xml; charset=utf-8", "cache-control": "public, max-age=3600" } });
      },
    },
  },
});
