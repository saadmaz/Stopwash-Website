import { createFileRoute } from "@tanstack/react-router";
import { contact } from "@/data/site";
import { posts } from "@/lib/blog";

const pages: { path: string; priority: string; freq: string }[] = [
  { path: "/", priority: "1.0", freq: "weekly" },
  { path: "/services", priority: "0.9", freq: "monthly" },
  { path: "/locations", priority: "0.9", freq: "weekly" },
  { path: "/franchise", priority: "0.9", freq: "monthly" },
  { path: "/contact", priority: "0.8", freq: "monthly" },
  { path: "/blog", priority: "0.8", freq: "weekly" },
  { path: "/our-story", priority: "0.7", freq: "monthly" },
  { path: "/our-vision", priority: "0.6", freq: "monthly" },
  { path: "/our-standard", priority: "0.6", freq: "monthly" },
  { path: "/privacy-policy", priority: "0.2", freq: "yearly" },
  { path: "/terms", priority: "0.2", freq: "yearly" },
];

/** Generated on request so new blog posts are included automatically. */
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const latest = posts[0]?.updated ?? posts[0]?.date;
        const urls = [
          ...pages.map((p) => ({
            loc: p.path,
            lastmod: p.path === "/blog" ? latest : undefined,
            ...p,
          })),
          ...posts.map((p) => ({
            loc: `/blog/${p.slug}`,
            lastmod: p.updated ?? p.date,
            priority: "0.6",
            freq: "yearly",
          })),
        ];
        const body =
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          urls
            .map(
              (u) =>
                `  <url><loc>${contact.siteUrl}${u.loc === "/" ? "/" : u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}<changefreq>${u.freq}</changefreq><priority>${u.priority}</priority></url>`,
            )
            .join("\n") +
          `\n</urlset>\n`;
        return new Response(body, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
