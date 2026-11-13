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
import { useEffect, type ReactNode } from "react";
import { MotionConfig } from "framer-motion";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-navy px-5 pb-20 pt-36 md:px-10">
      <div className="motion-lines pointer-events-none absolute -right-20 top-0 h-full w-1/3 opacity-60" aria-hidden />
      <div className="relative mx-auto w-full max-w-[1440px]">
        <p className="micro mb-6 text-lime">Error 404 · Wrong turn</p>
        <h1 className="display-xl text-snow">This stop <span className="text-outline">doesn&apos;t exist.</span></h1>
        <p className="mt-6 max-w-lg text-lg text-snow/75">The page you&apos;re looking for has moved or never existed. Let&apos;s get you moving again.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/" className="inline-flex items-center rounded-md bg-lime px-6 py-4 font-display text-sm font-bold uppercase tracking-wider text-ink hover:bg-snow">Back to home</Link>
          <Link to="/locations" className="inline-flex items-center rounded-md border border-snow px-6 py-4 font-display text-sm font-bold uppercase tracking-wider text-snow hover:bg-snow hover:text-ink">Find a Stopwash</Link>
        </div>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
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
    // Replace these placeholders with the app's name and description when first building the app.
    // Each content route, / included, must still set its own head(). Never add og:image or
    // twitter:image here: every page without its own would inherit the root's preview image.
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "STOPWASH — The Queue Ends Here" },
      { name: "description", content: "STOPWASH is building a faster, sharper vehicle-care network in Sri Lanka." },
      { name: "author", content: "STOPWASH PVT LTD" },
      { name: "theme-color", content: "#0B1728" },
      { property: "og:site_name", content: "STOPWASH" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;700&family=Space+Grotesk:wght@500;700&display=swap" },
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
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-lime focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
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
