import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { contact, enquiryTypes, pageHead, type EnquiryType } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: { type?: string }): { type?: EnquiryType | undefined } => {
    const t = search.type;
    return { type: enquiryTypes.includes(t as EnquiryType) ? (t as EnquiryType) : undefined };
  },
  head: () =>
    pageHead({
      title: "Contact STOPWASH — Customer, Fleet & Franchise Enquiries",
      description: "Call +94 70 622 5252 or send us a message. Customer enquiries, fleet partnerships and franchise conversations with STOPWASH Sri Lanka.",
      path: "/contact",
    }),
  component: Contact,
});

const channels = [
  { label: "Customer enquiries", lines: [{ icon: Phone, text: contact.phone, href: contact.phoneHref }, { icon: Mail, text: contact.customerEmail, href: `mailto:${contact.customerEmail}` }] },
  { label: "Franchise enquiries", lines: [{ icon: Mail, text: contact.franchiseEmail, href: `mailto:${contact.franchiseEmail}` }] },
  { label: "General enquiries", lines: [{ icon: Mail, text: contact.generalEmail, href: `mailto:${contact.generalEmail}` }] },
];

function Contact() {
  // Router keeps unvalidated params alongside validated ones, so re-check here.
  const raw = Route.useSearch().type;
  const type = raw && enquiryTypes.includes(raw) ? raw : undefined;
  return (
    <>
      <PageHero eyebrow="Contact" title="Keep the conversation moving.">
        <p>Looking for a better clean? Planning a fleet partnership? Interested in building the next STOPWASH? Tell us where you are going.</p>
      </PageHero>

      <section className="section-y">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-4 lg:col-span-4">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.05} className="rounded-2xl bg-paper p-6">
                <h2 className="font-semibold">{c.label}</h2>
                <ul className="mt-3 space-y-2">
                  {c.lines.map((l) => (
                    <li key={l.text}>
                      <a href={l.href} className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-ink">
                        <l.icon className="h-4 w-4 shrink-0" aria-hidden />
                        <span className="break-all">{l.text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
            <Reveal delay={0.15} className="rounded-2xl bg-navy p-6 text-snow">
              <h2 className="font-semibold">Thinking bigger?</h2>
              <p className="mt-2 text-snow/75">Franchise enquiries have their own form.</p>
              <Link to="/franchise/apply" className="mt-4 inline-flex items-center gap-2 font-semibold text-lime hover:underline">
                Start the franchise conversation <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal className="rounded-3xl border border-border p-6 md:p-10">
              <h2 className="font-display text-2xl font-bold tracking-tight">Send us a message</h2>
              <p className="mt-2 text-muted-foreground">We read every message. For anything urgent at the outlet, calling is fastest.</p>
              <div className="mt-8">
                <ContactForm key={type ?? "default"} {...(type ? { defaultType: type } : {})} />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
