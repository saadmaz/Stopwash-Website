import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { contact, enquiryTypes, pageHead, type EnquiryType } from "@/data/site";
import { PageHero, SectionLabel } from "@/components/site/PageHero";
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
      <PageHero label="Contact" title={<>Keep the conversation <span className="text-lime">moving.</span></>}>
        <p>Looking for a better clean? Planning a fleet partnership? Interested in building the next STOPWASH?</p>
        <p className="mt-3 font-display text-2xl font-bold text-snow">Tell us where you are going.</p>
      </PageHero>

      <section className="border-t border-border bg-navy">
        <Container className="grid md:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08} className="border-b border-border py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
              <p className="micro text-lime">{String(i + 1).padStart(2, "0")} — {c.label}</p>
              <ul className="mt-5 space-y-3">
                {c.lines.map((l) => (
                  <li key={l.text}>
                    <a href={l.href} className="group flex items-center gap-3 font-display text-xl font-bold tracking-tight text-snow transition-colors hover:text-lime md:text-2xl">
                      <l.icon className="h-5 w-5 shrink-0 text-lime" aria-hidden />
                      <span className="break-all">{l.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="section-light section-y">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionLabel>Send a message</SectionLabel>
              <h2 className="display-md">Write to us.</h2>
              <p className="mt-6 text-lg text-muted-foreground">We read every message. For anything urgent at the outlet, calling is fastest.</p>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 rounded-md bg-ink p-7 text-snow">
              <p className="micro text-lime">Thinking bigger?</p>
              <p className="mt-3 font-display text-2xl font-bold uppercase leading-tight">Franchise enquiries have their own form.</p>
              <Link to="/franchise/apply" className="micro mt-6 inline-flex items-center gap-2 text-lime hover:underline">
                Start the franchise conversation <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ContactForm key={type ?? "default"} {...(type ? { defaultType: type } : {})} />
          </div>
        </Container>
      </section>
    </>
  );
}
