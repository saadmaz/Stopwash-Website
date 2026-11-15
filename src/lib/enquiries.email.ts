import { contact } from "@/data/site";
import type { ContactInput, FranchiseInput } from "./enquiries.schema";

type Line = [label: string, value: string | undefined | null];

/** A mailto: link with the enquiry written out, so the visitor's email app opens with it ready to send. */
function mailto(to: string, subject: string, lines: Line[]) {
  const body = lines
    .filter(([, v]) => v && v.trim())
    .map(([label, v]) => (v!.includes("\n") || v!.length > 60 ? `${label}:\n${v!.trim()}` : `${label}: ${v!.trim()}`))
    .join("\n\n");
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function contactEmailLink(v: ContactInput) {
  return mailto(contact.customerEmail, `${v.enquiryType}: ${v.name}`, [
    ["Name", v.name],
    ["Email", v.email],
    ["Phone", v.phone],
    ["Enquiry type", v.enquiryType],
    ["Message", v.message],
  ]);
}

export function franchiseEmailLink(v: FranchiseInput) {
  return mailto(contact.franchiseEmail, `Franchise application: ${v.fullName}, ${v.territory}`, [
    ["Full name", v.fullName],
    ["Email", v.email],
    ["Phone", v.phone],
    ["City or territory", v.territory],
    ["Current business or occupation", v.occupation],
    ["Investment range", v.investmentRange],
    ["Single-unit or multi-unit", v.unitInterest],
    ["Potential site identified", v.siteIdentified],
    ["Relevant operating experience", v.experience],
    ["Why STOPWASH", v.whyStopwash],
    ["What I will bring to the network", v.contribution],
    ["Preferred time to speak", v.preferredTime],
  ]);
}
