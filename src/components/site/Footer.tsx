import { Link } from "@tanstack/react-router";
import { contact, footerNav } from "@/data/site";
import { Logo } from "./Logo";
import { Container } from "./SectionHeading";
import { SocialLinks } from "./SocialIcon";

export function Footer() {
  return (
    <footer className="section-dark">
      <Container className="pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm leading-relaxed text-snow/70">The vehicle-care ecosystem for people who keep moving.</p>
            <p className="mt-3 text-[0.9375rem] font-medium text-leaf">Better car care. Made convenient.</p>
          </div>
          <nav aria-label="Footer" className="md:col-span-3">
            <p className="eyebrow">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {footerNav.map((n) => (
                <li key={n.to}><Link to={n.to as "/"} className="text-snow/70 transition-colors hover:text-leaf">{n.label}</Link></li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-4">
            <p className="eyebrow">Get in touch</p>
            <ul className="mt-4 space-y-2.5 text-snow/70">
              <li><a href={contact.phoneHref} className="transition-colors hover:text-leaf">{contact.phone}</a></li>
              <li><a href={`mailto:${contact.customerEmail}`} className="transition-colors hover:text-leaf">{contact.customerEmail}</a></li>
              <li><a href={`mailto:${contact.generalEmail}`} className="transition-colors hover:text-leaf">{contact.generalEmail}</a></li>
              <li><a href={contact.siteUrl} className="transition-colors hover:text-leaf">{contact.website}</a></li>
            </ul>
            <SocialLinks tone="dark" className="mt-6" />
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-snow/10 pt-6 text-sm text-snow/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 STOPWASH PVT LTD. All rights reserved. <span className="text-snow/80">Stop washing time away.</span></p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-snow">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-snow">Terms and Conditions</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
