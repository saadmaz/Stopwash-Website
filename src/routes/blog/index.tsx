import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/data/site";
import { allTags, posts } from "@/lib/blog";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { PostCard } from "@/components/site/PostCard";
import { SocialLinks } from "@/components/site/SocialIcon";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/blog/")({
  validateSearch: (search: { tag?: string }): { tag?: string | undefined } => ({
    tag: typeof search.tag === "string" && search.tag ? search.tag : undefined,
  }),
  head: () => ({
    ...pageHead({
      title: "Blog — Car Care Tips & News | STOPWASH Sri Lanka",
      description: "Car care tips, STOPWASH news and notes from the road. Practical vehicle-care advice for drivers in Sri Lanka.",
      path: "/blog",
    }),
  }),
  component: Blog,
});

function Blog() {
  const { tag } = Route.useSearch();
  const list = tag ? posts.filter((p) => p.tags.includes(tag)) : posts;
  const [featured, ...rest] = list;

  return (
    <>
      <PageHero eyebrow="Blog" title="Notes from the road.">
        <p>Car care tips, STOPWASH news and the thinking behind a better way to keep your vehicle moving.</p>
      </PageHero>

      <section className="section-y">
        <Container>
          {allTags.length > 1 && (
            <nav aria-label="Filter by topic" className="mb-12">
              <ul className="flex flex-wrap gap-2">
                <li><TagLink active={!tag}>All posts</TagLink></li>
                {allTags.map((t) => <li key={t}><TagLink tag={t} active={tag === t}>{t}</TagLink></li>)}
              </ul>
            </nav>
          )}

          {!featured ? (
            <div className="rounded-3xl bg-paper px-6 py-16 text-center">
              <h2 className="text-h3">No posts yet{tag ? ` in “${tag}”` : ""}.</h2>
              <p className="mt-2 text-muted-foreground">Check back soon — or follow us for updates.</p>
              <SocialLinks className="mt-6 justify-center" />
            </div>
          ) : (
            <>
              <Reveal><PostCard post={featured} featured /></Reveal>
              {rest.length > 0 && (
                <ul className="mt-16 grid gap-x-6 gap-y-12 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((p, i) => (
                    <li key={p.slug}><Reveal delay={(i % 3) * 0.05}><PostCard post={p} /></Reveal></li>
                  ))}
                </ul>
              )}
            </>
          )}
        </Container>
      </section>

      <section className="section-y pt-0">
        <Container>
          <Reveal className="section-dark flex flex-col items-start justify-between gap-6 rounded-3xl px-7 py-10 md:flex-row md:items-center md:px-12">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight">Follow along</h2>
              <p className="mt-1 text-muted-foreground">New posts, outlet updates and behind-the-scenes from the clean squad.</p>
            </div>
            <SocialLinks tone="dark" />
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function TagLink({ tag, active, children }: { tag?: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      to="/blog"
      search={tag ? { tag } : {}}
      aria-current={active ? "page" : undefined}
      className={cn("inline-block rounded-full px-4 py-2 text-sm font-medium transition-colors", active ? "bg-ink text-snow" : "bg-paper hover:bg-ink/10")}
    >
      {children}
    </Link>
  );
}
