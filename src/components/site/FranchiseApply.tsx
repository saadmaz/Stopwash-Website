import { Lock } from "lucide-react";
import { contact, franchiseJourney } from "@/data/site";
import { Container } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { FranchiseForm } from "./FranchiseForm";

/** The franchise application: pitch on the left, form card on the right. */
export function FranchiseApply() {
  return (
    <section id="apply" className="section-dark section-y scroll-mt-16">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow mb-4">Apply</p>
              <h2 className="text-h2">If you have the drive, we have the system.</h2>
              <p className="text-lead mt-5 text-muted-foreground">Do not send us a CV. Send us a plan. Tell us about the city you want to build in, the experience you bring and the standard you are willing to protect.</p>
              <p className="mt-5 text-[0.9375rem] font-medium text-leaf">Selective by design. Built for serious operators.</p>
            </Reveal>
            <Reveal delay={0.1} className="mt-10">
              <h3 className="font-semibold">What happens next</h3>
              <ol className="mt-4 space-y-4">
                {franchiseJourney.slice(0, 3).map((s, i) => (
                  <li key={s.title} className="flex gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md border border-leaf/50 text-[0.6875rem] font-medium text-leaf">{i + 1}</span>
                    <span>
                      <span className="block font-semibold">{s.title}</span>
                      <span className="text-sm text-muted-foreground">{s.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-8 flex gap-3 text-sm text-muted-foreground">
                <Lock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <span>Your enquiry is stored privately and only reviewed by the STOPWASH franchise team. Prefer email? Write to <a className="font-medium text-snow underline underline-offset-4" href={`mailto:${contact.franchiseEmail}`}>{contact.franchiseEmail}</a>.</span>
              </p>
            </Reveal>
          </div>
        </div>
        <Reveal delay={0.05} className="theme-light rounded-2xl bg-snow p-6 text-ink md:p-10 lg:col-span-8">
          <FranchiseForm />
        </Reveal>
      </Container>
    </section>
  );
}
