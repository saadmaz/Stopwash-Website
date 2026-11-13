import { createFileRoute } from "@tanstack/react-router";
import { Lock } from "lucide-react";
import { contact, franchiseJourney, pageHead } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/SectionHeading";
import { FranchiseForm } from "@/components/site/FranchiseForm";

export const Route = createFileRoute("/franchise/apply")({
  head: () =>
    pageHead({
      title: "Apply to Franchise: Start the Conversation | STOPWASH",
      description: "Tell us about your market, your operating experience and the STOPWASH you want to build. Franchise enquiry form for STOPWASH Sri Lanka.",
      path: "/franchise/apply",
    }),
  component: Apply,
});

function Apply() {
  return (
    <>
      <PageHero eyebrow="Franchise enquiry" title="Do not send us a CV. Send us a plan.">
        <p>Tell us about your market, your operating experience and the STOPWASH you want to build.</p>
      </PageHero>

      <section id="apply" className="section-y scroll-mt-24">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <FranchiseForm />
          </div>
          <aside className="lg:col-span-4">
            <div className="space-y-4 lg:sticky lg:top-28">
              <div className="rounded-2xl bg-paper p-7">
                <h2 className="text-h3">What happens next</h2>
                <ol className="mt-5 space-y-4">
                  {franchiseJourney.slice(0, 3).map((s, i) => (
                    <li key={s.title} className="flex gap-3">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-lime text-xs font-bold">{i + 1}</span>
                      <span>
                        <span className="block font-semibold">{s.title}</span>
                        <span className="text-sm text-muted-foreground">{s.text}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="flex gap-3 rounded-2xl border border-border p-6 text-sm text-muted-foreground">
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
