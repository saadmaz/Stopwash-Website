import { Link } from "@tanstack/react-router";
import { contact, footerNav } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-navy">
      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-20 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo className="text-2xl text-snow" />
            <p className="mt-6 max-w-sm text-lg text-snow/80">The vehicle-care ecosystem for people who keep moving.</p>
            <p className="micro mt-4 text-lime">Better car care. Made convenient.</p>
          </div>
          <div className="lg:col-span-3">
            <p className="micro mb-5 text-steel">Navigate</p>
            <ul className="space-y-2.5">
              {footerNav.map((n) => (
                <li key={n.to}><Link to={n.to as "/"} className="text-snow/85 transition-colors hover:text-lime">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <p className="micro mb-5 text-steel">Reach us</p>
            <ul className="space-y-2.5 text-snow/85">
              <li><a href={contact.phoneHref} className="hover:text-lime">{contact.phone}</a></li>
              <li><a href={`mailto:${contact.customerEmail}`} className="hover:text-lime">{contact.customerEmail}</a></li>
              <li><a href={`mailto:${contact.generalEmail}`} className="hover:text-lime">{contact.generalEmail}</a></li>
              <li><a href={contact.siteUrl} className="hover:text-lime">{contact.website}</a></li>
            </ul>
            <div className="mt-6 flex gap-5">
              {contact.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="micro text-snow/70 hover:text-lime">{s.label}</a>
              ))}
            </div>
          </div>
        </div>
        <p aria-hidden className="display-xl mt-20 select-none text-outline text-snow/15">Keep Moving.</p>
        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 text-sm text-steel md:flex-row md:items-center md:justify-between">
          <p>© 2026 STOPWASH PVT LTD. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-lime">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-lime">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
