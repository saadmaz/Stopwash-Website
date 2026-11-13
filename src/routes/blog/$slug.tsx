import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Check, Link2 } from "lucide-react";
import { contact, pageHead } from "@/data/site";
import { formatDate, getPost, posts } from "@/lib/blog";
import { Container } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { PostCard } from "@/components/site/PostCard";
import { networkColors, networkIcons, type Network } from "@/components/site/SocialIcon";
import { Cta } from "@/components/site/Cta";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return {};
    const base = pageHead({
      title: `${post.title} | STOPWASH Blog`,
      description: post.description,
      path: `/blog/${post.slug}`,
      ...(post.cover ? { image: post.cover } : {}),
    });
    const url = `${contact.siteUrl}/blog/${post.slug}`;
    return {
      ...base,
      meta: [
        ...base.meta.filter((m) => !("property" in m && m.property === "og:type")),
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: post.date },
        ...(post.updated ? [{ property: "article:modified_time", content: post.updated }] : []),
        ...post.tags.map((t) => ({ property: "article:tag", content: t })),
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.updated ?? post.date,
            author: { "@type": "Organization", name: post.author },
            publisher: { "@type": "Organization", name: "STOPWASH PVT LTD", url: contact.siteUrl },
            mainEntityOfPage: url,
            ...(post.cover ? { image: `${contact.siteUrl}${post.cover}` } : {}),
            keywords: post.tags.join(", "),
          }),
        },
      ],
    };
  },
  component: Article,
});

function Article() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug && p.tags.some((t) => post.tags.includes(t))).slice(0, 3);
  const more = related.length ? related : posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="section-paper pb-12 pt-32 md:pt-40">
          <Container className="max-w-3xl">
            <Link to="/blog" className="fade-up inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-ink">
              <ArrowLeft className="h-4 w-4" aria-hidden /> All posts
            </Link>
            {post.tags.length > 0 && (
              <ul className="fade-up mt-8 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <li key={t}><Link to="/blog" search={{ tag: t }} className="rounded-full bg-snow px-3 py-1 text-xs font-medium hover:bg-lime">{t}</Link></li>
                ))}
              </ul>
            )}
            <h1 className="text-h1 fade-up mt-5" style={{ ["--d" as string]: "0.05s" }}>{post.title}</h1>
            {post.description && <p className="text-lead fade-up mt-5 text-muted-foreground" style={{ ["--d" as string]: "0.1s" }}>{post.description}</p>}
            <div className="fade-up mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6" style={{ ["--d" as string]: "0.15s" }}>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-ink">{post.author}</span> · <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read
              </p>
              <ShareButtons title={post.title} slug={post.slug} />
            </div>
          </Container>
        </header>

        {post.cover && (
          <Container className="-mb-4 mt-10 max-w-5xl md:mt-12">
            <img src={post.cover} alt={post.coverAlt} fetchPriority="high" className="aspect-[16/9] w-full rounded-3xl object-cover" />
          </Container>
        )}

        <Container className="section-y max-w-3xl">
          <div className="prose-blog" dangerouslySetInnerHTML={{ __html: post.html }} />
          {post.updated && <p className="mt-10 text-sm text-muted-foreground">Updated {formatDate(post.updated)}</p>}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-paper p-6">
            <p className="font-semibold">Found this useful? Share it.</p>
            <ShareButtons title={post.title} slug={post.slug} />
          </div>
        </Container>
      </article>

      {more.length > 0 && (
        <section className="section-paper section-y">
          <Container>
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-h2">Keep reading</h2>
              <Cta to="/blog" variant="link">All posts</Cta>
            </div>
            <ul className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((p, i) => <li key={p.slug}><Reveal delay={i * 0.05}><PostCard post={p} /></Reveal></li>)}
            </ul>
          </Container>
        </section>
      )}
    </>
  );
}

function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);
  const url = `${contact.siteUrl}/blog/${slug}`;
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const targets: { network: Network; label: string; href: string }[] = [
    { network: "facebook", label: "Share on Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
    { network: "linkedin", label: "Share on LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { network: "whatsapp", label: "Share on WhatsApp", href: `https://wa.me/?text=${t}%20${u}` },
    { network: "x", label: "Share on X", href: `https://twitter.com/intent/tweet?url=${u}&text=${t}` },
    { network: "email", label: "Share by email", href: `mailto:?subject=${t}&body=${u}` },
  ];
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — ignore */
    }
  };
  const btn = "grid h-9 w-9 place-items-center rounded-full bg-snow text-ink ring-1 ring-border transition-colors hover:bg-[var(--brand)] hover:text-white hover:ring-transparent";
  return (
    <ul className="flex items-center gap-2" aria-label="Share this post">
      {targets.map((s) => {
        const Icon = networkIcons[s.network];
        return (
          <li key={s.network}>
            <a href={s.href} target={s.network === "email" ? undefined : "_blank"} rel="noopener noreferrer" aria-label={s.label} title={s.label} className={btn} style={{ ["--brand" as string]: networkColors[s.network] }}>
              <Icon className="h-4 w-4" aria-hidden />
            </a>
          </li>
        );
      })}
      <li>
        <button type="button" onClick={copy} aria-label={copied ? "Link copied" : "Copy link"} title={copied ? "Copied" : "Copy link"} className={btn} style={{ ["--brand" as string]: "#0B1728" }}>
          {copied ? <Check className="h-4 w-4" aria-hidden /> : <Link2 className="h-4 w-4" aria-hidden />}
        </button>
      </li>
    </ul>
  );
}
