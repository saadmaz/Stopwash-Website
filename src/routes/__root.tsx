import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { type ReactNode } from "react";
import { MotionConfig } from "framer-motion";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <section className="section-paper flex min-h-[80vh] items-center px-5 pb-20 pt-36 md:px-8">
      <div className="mx-auto w-full max-w-[1240px]">
        <p className="eyebrow mb-5">Page not found</p>
        <h1 className="text-h1 max-w-2xl">Looks like a wrong turn.</h1>
        <p className="text-lead mt-5 max-w-lg text-muted-foreground">The page you&apos;re looking for has moved or never existed. Let&apos;s get you moving again.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link to="/" className="inline-flex items-center rounded-full bg-lime px-6 py-3.5 font-semibold text-ink hover:bg-[#c0e86a]">Back to home</Link>
          <Link to="/locations" className="inline-flex items-center rounded-full border border-ink/25 px-6 py-3.5 font-semibold hover:border-ink/60">Find a STOPWASH</Link>
        </div>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Please refresh the page or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    // Site-wide defaults. Each route sets its own title, description and og:image via pageHead().
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "STOPWASH: The Queue Ends Here" },
      { name: "description", content: "STOPWASH is building a faster, sharper vehicle-care network in Sri Lanka." },
      { name: "author", content: "STOPWASH PVT LTD" },
      { name: "theme-color", content: "#FFFFFF" },
      { property: "og:site_name", content: "STOPWASH" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "alternate", type: "application/rss+xml", title: "STOPWASH Blog", href: "/blog/rss.xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoWash",
          name: "STOPWASH Katubedda",
          url: "https://stopwash.lk",
          telephone: "+94706225252",
          email: "hello@stopwash.lk",
          address: { "@type": "PostalAddress", addressLocality: "Katubedda", addressCountry: "LK" },
          parentOrganization: { "@type": "Organization", name: "STOPWASH PVT LTD" },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <QueryClientProvider client={queryClient}>
      <MotionConfig reducedMotion="user">
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
      <Navbar />
      <main id="main" key={pathname} className="page-fade">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <Toaster />
      </MotionConfig>
    </QueryClientProvider>
  );
}
