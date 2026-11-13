import { Link } from "@tanstack/react-router";
import { formatDate, type Post } from "@/lib/blog";
import { cn } from "@/lib/utils";
import { Photo } from "./Photo";

export function PostMeta({ post, className }: { post: Post; className?: string }) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read
    </p>
  );
}

/** Blog card. `featured` lays it out wide with a larger headline. */
export function PostCard({ post, featured }: { post: Post; featured?: boolean }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className={cn("group block", featured && "grid items-center gap-8 lg:grid-cols-2 lg:gap-12")}
    >
      <Photo
        src={post.cover}
        alt={post.coverAlt}
        className={cn("transition-transform duration-300 group-hover:-translate-y-1", featured ? "aspect-[16/10]" : "aspect-[16/10]")}
      />
      <div className={featured ? "" : "mt-5"}>
        {post.tags.length > 0 && (
          <ul className="mb-3 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <li key={t} className="rounded-full bg-paper px-3 py-1 text-xs font-medium">{t}</li>
            ))}
          </ul>
        )}
        <h3 className={cn("font-display font-bold tracking-tight group-hover:underline group-hover:decoration-lime group-hover:decoration-2 group-hover:underline-offset-4", featured ? "text-h2" : "text-xl leading-snug")}>
          {post.title}
        </h3>
        {post.description && <p className={cn("mt-3 leading-relaxed text-muted-foreground", featured && "text-lead")}>{post.description}</p>}
        <PostMeta post={post} className="mt-4" />
      </div>
    </Link>
  );
}
