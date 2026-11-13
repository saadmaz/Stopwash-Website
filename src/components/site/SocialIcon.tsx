import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import type { IconType } from "react-icons";
import { contact } from "@/data/site";
import { cn } from "@/lib/utils";

export type Network = "instagram" | "facebook" | "tiktok" | "linkedin" | "youtube" | "whatsapp" | "email" | "x";

/** Official brand marks (Font Awesome brand set). */
export const networkIcons: Record<Network, IconType> = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  tiktok: FaTiktok,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
  whatsapp: FaWhatsapp,
  email: MdOutlineEmail,
  x: FaXTwitter,
};

/** Brand colours, used on hover. */
export const networkColors: Record<Network, string> = {
  instagram: "#E4405F",
  facebook: "#1877F2",
  tiktok: "#000000",
  linkedin: "#0A66C2",
  youtube: "#FF0000",
  whatsapp: "#25D366",
  email: "#0B1728",
  x: "#000000",
};

type Link = { network: Network; label: string; href: string };

/** Social profiles only. */
export const socialProfiles: Link[] = contact.socials.map((s) => ({ network: s.network as Network, label: s.label, href: s.href }));

/** STOPWASH's own channels: social profiles + WhatsApp + email. */
export const brandChannels: Link[] = [
  ...contact.socials.map((s) => ({ network: s.network as Network, label: s.label, href: s.href })),
  { network: "whatsapp", label: "WhatsApp", href: contact.whatsappHref },
  { network: "email", label: "Email", href: `mailto:${contact.customerEmail}` },
];

/** Round icon buttons. `tone` picks the resting style for light or dark backgrounds. */
export function SocialLinks({ links = brandChannels, tone = "light", className }: { links?: Link[]; tone?: "light" | "dark" | "white"; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {links.map((l) => {
        const Icon = networkIcons[l.network];
        const external = l.href.startsWith("http");
        return (
          <li key={l.label}>
            <a
              href={l.href}
              aria-label={l.label}
              title={l.label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              style={{ ["--brand" as string]: networkColors[l.network] }}
              className={cn(
                "grid h-10 w-10 place-items-center rounded-full transition-colors duration-200 hover:bg-[var(--brand)] hover:text-white",
                tone === "dark" ? "bg-snow/10 text-snow" : tone === "white" ? "bg-snow text-ink" : "bg-paper text-ink",
              )}
            >
              <Icon className="h-[1.05rem] w-[1.05rem]" aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
