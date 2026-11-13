import { createFileRoute } from "@tanstack/react-router";
import { Lock } from "lucide-react";
import { contact, franchiseJourney, pageHead } from "@/data/site";
import { Container } from "@/components/site/SectionHeading";
import { FranchiseForm } from "@/components/site/FranchiseForm";

export const Route = createFileRoute("/franchise/apply")({
  head: () =>
    pageHead({
      title: "Apply to Franchise — Start the Conversation | STOPWASH",
      description: "Tell us about your market, your operating experience and the STOPWASH you want to build. Franchise enquiry form for STOPWASH Sri Lanka.",
      path: "/franchise/apply",
    }),
  component: Apply,
});

function Apply() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy pb-12 pt-28 md:pb-16 md:pt-36">
        <div className="motion-lines pointer-events-none absolute -right-20 top-0 h-full w-1/3 opacity-60" aria-hidden />
        <Container className="relative">
          <p className="micro fade-up mb-8 flex items-center gap-3 text-lime"><span className="h-px w-10 bg-lime" />Franchise enquiry</p>
          <h1 className="display-lg max-w-5xl text-snow">
            <span className="block overflow-hidden"><span className="rise">Do not send us a CV.</span></span>
            <span className="block overflow-hidden"><span className="rise text-lime" style={{ ["--d" as string]: "0.12s" }}>Send us a plan.</span></span>
          </h1>
          <p className="fade-up mt-8 max-w-xl text-lg text-snow/80 md:text-xl" style={{ ["--d" as string]: "0.3s" }}>
            Tell us about your market, your operating experience and the STOPWASH you want to build.
          </p>
        </Container>
      </section>

      <section id="apply" className="section-light scroll-mt-24 py-16 md:py-24">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <FranchiseForm />
          </div>
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="rounded-md bg-ink p-7 text-snow">
                <p className="micro text-lime">What happens next</p>
                <ol className="mt-5 space-y-4">
                  {franchiseJourney.slice(0, 3).map((s, i) => (
                    <li key={s.title} className="grid grid-cols-[2rem_1fr] gap-2">
                      <span className="font-mono text-xs font-bold text-lime">{String(i + 1).padStart(2, "0")}</span>
                      <span>
                        <span className="block font-display font-bold uppercase">{s.title}</span>
                        <span className="text-sm text-snow/65">{s.text}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="flex gap-3 rounded-md border border-border p-6 text-sm text-muted-foreground">
                <Lock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <p>Your enquiry is stored privately and only reviewed by the STOPWASH franchise team. Prefer email? Write to <a className="font-medium text-ink underline underline-offset-4" href={`mailto:${contact.franchiseEmail}`}>{contact.franchiseEmail}</a>.</p>
              </div>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
