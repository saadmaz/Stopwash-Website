import { marked } from "marked";

/**
 * Blog posts live in src/content/blog/*.md (see src/content/blog/README.md).
 * Files starting with "_" are ignored. Posts with `draft: true` show in dev only.
 */
const files = import.meta.glob("/src/content/blog/*.md", { query: "?raw", import: "default", eager: true }) as Record<string, string>;

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO yyyy-mm-dd
  updated: string | null;
  author: string;
  cover: string | null;
  coverAlt: string;
  tags: string[];
  draft: boolean;
  readingMinutes: number;
  html: string;
};

type Frontmatter = Partial<Record<"title" | "description" | "date" | "updated" | "author" | "cover" | "coverAlt" | "tags" | "draft", string>>;

function parseFrontmatter(raw: string): { data: Frontmatter; body: string } {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!m) return { data: {}, body: raw };
  const data: Record<string, string> = {};
  for (const line of m[1]!.split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i === -1 || line.trimStart().startsWith("#")) continue;
    const key = line.slice(0, i).trim();
    let value = line.slice(i + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
    data[key] = value;
  }
  return { data: data as Frontmatter, body: m[2]! };
}

function parseTags(v: string | undefined): string[] {
  if (!v) return [];
  return v.replace(/^\[|\]$/g, "").split(",").map((t) => t.trim().replace(/^["']|["']$/g, "")).filter(Boolean);
}

function toPost(path: string, raw: string): Post {
  const slug = path.split("/").pop()!.replace(/\.md$/, "");
  const { data, body } = parseFrontmatter(raw);
  const words = body.replace(/[#>*_`[\]()!-]/g, " ").split(/\s+/).filter(Boolean).length;
  if (!data.title) throw new Error(`Blog post "${slug}" is missing a title in its frontmatter.`);
  if (!data.date || !/^\d{4}-\d{2}-\d{2}$/.test(data.date)) throw new Error(`Blog post "${slug}" needs a date like 2026-11-13.`);
  return {
    slug,
    title: data.title,
    description: data.description ?? "",
    date: data.date,
    updated: data.updated ?? null,
    author: data.author || "STOPWASH Team",
    cover: data.cover || null,
    coverAlt: data.coverAlt ?? "",
    tags: parseTags(data.tags),
    draft: data.draft === "true",
    readingMinutes: Math.max(1, Math.round(words / 220)),
    html: marked.parse(body, { async: false, gfm: true }),
  };
}

const all: Post[] = Object.entries(files)
  .filter(([path]) => {
    const name = path.split("/").pop()!;
    return !name.startsWith("_") && name.toLowerCase() !== "readme.md";
  })
  .map(([path, raw]) => toPost(path, raw))
  .filter((p) => !p.draft || import.meta.env.DEV)
  .sort((a, b) => b.date.localeCompare(a.date));

export const posts = all;
export const getPost = (slug: string) => all.find((p) => p.slug === slug);
export const allTags = [...new Set(all.flatMap((p) => p.tags))].sort();

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
