import heroBay from "@/assets/hero-bay.webp";
import detailHands from "@/assets/detail-hands.webp";
import interior from "@/assets/interior.webp";
import foam from "@/assets/foam.webp";
// JPEG kept for link previews: some social platforms do not render WebP og:images.
import ogImage from "@/assets/hero-bay.jpg";

/**
 * PLACEHOLDER IMAGERY — these are mood images, not photographs of the STOPWASH
 * outlet or team. Swap each file for real STOPWASH photography (same keys) and
 * update the alt text. Nothing else in the site needs to change.
 */
export const images = { heroBay, detailHands, interior, foam };
export const alts: Record<keyof typeof images, string> = {
  heroBay: "A dark vehicle covered in foam inside a wash bay lit in green",
  detailHands: "A gloved hand drying a freshly washed vehicle panel with a microfibre cloth",
  interior: "A vehicle cabin being vacuumed during an interior clean",
  foam: "A vehicle being rinsed with a high-pressure water jet",
};

export const contact = {
  phone: "+94 70 622 5252",
  phoneHref: "tel:+94706225252",
  customerEmail: "hello@stopwash.lk",
  franchiseEmail: "hello@stopwash.lk",
  generalEmail: "info.stopwash@gmail.com",
  website: "www.stopwash.lk",
  siteUrl: "https://stopwash.lk",
  /** WhatsApp chat link for the customer line (assumes +94 70 622 5252 is on WhatsApp). */
  whatsappHref: "https://wa.me/94706225252",
  // TODO: replace each href with the official STOPWASH profile URL.
  socials: [
    { network: "instagram", label: "Instagram", href: "https://www.instagram.com/" },
    { network: "facebook", label: "Facebook", href: "https://www.facebook.com/" },
    { network: "tiktok", label: "TikTok", href: "https://www.tiktok.com/" },
    { network: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/" },
    { network: "youtube", label: "YouTube", href: "https://www.youtube.com/" },
  ] as const,
};

export type NavItem = { label: string; to: string; children?: { label: string; to: string }[] };

export const mainNav: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/our-story",
    children: [
      { label: "Our Story", to: "/our-story" },
      { label: "Our Vision", to: "/our-vision" },
      { label: "Our Standard", to: "/our-standard" },
    ],
  },
  { label: "Services", to: "/services" },
  { label: "Locations", to: "/locations" },
  { label: "Franchise", to: "/franchise" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const footerNav = [
  { label: "Home", to: "/" },
  { label: "Our Story", to: "/our-story" },
  { label: "Our Vision", to: "/our-vision" },
  { label: "Services", to: "/services" },
  { label: "Locations", to: "/locations" },
  { label: "Franchise With Us", to: "/franchise" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

/** Preliminary service concepts — final names and inclusions to be confirmed. */
export const servicePreview = [
  { code: "01", name: "The Quick One", text: "For the days when the car needs a reset and you need to keep moving.", image: foam },
  { code: "02", name: "The Proper Clean", text: "For the inside, the outside and all the evidence of daily life the vehicle has collected along the way.", image: interior },
  { code: "03", name: "The Full Reset", text: "For vehicles that need more than a passing clean. A complete refresh from cabin to exterior.", image: heroBay },
  { code: "04", name: "The Detail Stop", text: "For customers who notice the finish, care about the surfaces and expect more from vehicle care.", image: detailHands },
  { code: "05", name: "The Repeat Route", text: "Memberships and scheduled visits for people who prefer their vehicle care handled before it becomes a problem.", image: null },
  { code: "06", name: "Fleet Lane", text: "Structured vehicle care for businesses whose vehicles are part of the business — not just parked outside it.", image: null },
];

export type Service = {
  slug: string;
  name: string;
  tag: string;
  text: string;
  /** Short "who it's for" line. Keep factual: no prices, durations or technical claims. */
  forWho: string;
  image: string | null;
  alt: string;
  enquiryType: EnquiryType;
};

/** Service architecture. Inclusions, durations and pricing are intentionally not listed until confirmed. */
export const serviceCatalogue: Service[] = [
  { slug: "routine", name: "Routine Care", tag: "Everyday", text: "Regular care that keeps the vehicle presentable between bigger cleans — designed to fit into a normal week.", forWho: "Daily drivers who want the car kept in order without planning around it.", image: foam, alt: alts.foam, enquiryType: "Service enquiry" },
  { slug: "interior", name: "Interior Care", tag: "Cabin", text: "Attention for the space you actually sit in: seats, surfaces, floors and the details daily life leaves behind.", forWho: "Family cars, commuter cabins and anything that carries more than people.", image: interior, alt: alts.interior, enquiryType: "Service enquiry" },
  { slug: "exterior", name: "Exterior Care", tag: "Body", text: "A careful clean for paint, glass, wheels and trim, following a defined process every time.", forWho: "Vehicles that need to look right on the road, not just in the driveway.", image: heroBay, alt: alts.heroBay, enquiryType: "Service enquiry" },
  { slug: "full", name: "Full Care", tag: "Inside + out", text: "Cabin and exterior handled together, for when the whole vehicle needs a reset.", forWho: "Before a trip, after a long month, or when the car simply needs starting over.", image: null, alt: "", enquiryType: "Service enquiry" },
  { slug: "detail", name: "Detail Care", tag: "Finish", text: "For customers who notice the finish and want a deeper level of attention to surfaces.", forWho: "Owners who care about surfaces as much as cleanliness.", image: detailHands, alt: alts.detailHands, enquiryType: "Service enquiry" },
  { slug: "fleet", name: "Fleet Care", tag: "Business", text: "Structured vehicle care for companies running vehicles as part of their operation.", forWho: "Businesses whose vehicles are part of the business — not just parked outside it.", image: null, alt: "", enquiryType: "Fleet partnership" },
  { slug: "repeat", name: "Repeat Care", tag: "Membership", text: "Scheduled visits and memberships for people who prefer vehicle care handled before it becomes a problem.", forWho: "People who would rather not think about it again.", image: null, alt: "", enquiryType: "Service enquiry" },
];

export type Location = {
  slug: string;
  name: string;
  status: "open" | "coming-soon";
  label: string;
  address: string | null;
  phone: string;
  hours: string | null;
  /** Used for "Get directions" until exact coordinates are confirmed. */
  mapsQuery: string;
  /** Set once the exact pin is confirmed. Enables the embedded Google Map. */
  coordinates: { lat: number; lng: number } | null;
  image: string;
  alt: string;
};

export function directionsUrl(l: Location) {
  const dest = l.coordinates ? `${l.coordinates.lat},${l.coordinates.lng}` : l.mapsQuery;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(dest)}`;
}
export function mapEmbedUrl(l: Location) {
  if (!l.coordinates) return null;
  return `https://www.google.com/maps?q=${l.coordinates.lat},${l.coordinates.lng}&z=16&output=embed`;
}

export const locations: Location[] = [
  {
    slug: "katubedda",
    name: "Katubedda",
    status: "open",
    label: "The first STOPWASH outlet",
    address: null, // exact address to be confirmed
    phone: contact.phone,
    hours: null, // opening hours to be confirmed
    mapsQuery: "STOPWASH Katubedda, Moratuwa, Sri Lanka",
    coordinates: null, // exact pin to be confirmed
    image: heroBay,
    alt: alts.heroBay,
  },
];

export const pillars = [
  { n: "01", title: "Motion", lead: "Get customers back on the road.", text: "Vehicle care designed around convenience and the customer's schedule." },
  { n: "02", title: "Precision", lead: "Make every minute and every movement count.", text: "A defined process, trained teams and attention to detail." },
  { n: "03", title: "Repeatability", lead: "The same confidence, every time.", text: "A consistent experience supported by operational standards and quality control." },
];

export const journey = [
  { n: "01", title: "Pull In", text: "Arrive at STOPWASH." },
  { n: "02", title: "Choose Your Stop", text: "Select the level of care your vehicle needs." },
  { n: "03", title: "Let the Clean Squad Take Over", text: "Our team follows a defined process built for speed, care and consistency." },
  { n: "04", title: "Check the Finish", text: "The job is reviewed before the vehicle is handed back." },
  { n: "05", title: "Pull Out", text: "Cleaner car. Clearer head. Still on schedule." },
];

export const standards = [
  { title: "Defined service steps", text: "Every service follows a set sequence, so nothing depends on luck." },
  { title: "Trained teams", text: "A clean squad trained to move with purpose and notice the details." },
  { title: "Approved products & equipment", text: "Only products and tools that meet the STOPWASH standard." },
  { title: "Quality checks", text: "The finish is reviewed before the vehicle is handed back." },
  { title: "Clear customer communication", text: "You know what is happening and what happens next." },
  { title: "Service recovery", text: "If something is not right, we make it right." },
  { title: "Continuous improvement", text: "Every stop teaches the network something." },
];

export const franchiseWhy = [
  "A brand with a point of view.",
  "A customer proposition people understand.",
  "A repeat-demand category.",
  "A defined operating system.",
  "A network effect.",
  "A route to multi-unit growth.",
];
export const franchiseBrings = [
  "Brand identity and brand standards", "Outlet format and customer-experience design", "Site and location assessment",
  "Service architecture", "Operating procedures", "Equipment and product guidance", "Training framework",
  "Pre-opening planning", "Launch support", "Marketing assets", "Quality audits", "Performance reporting", "Ongoing network support",
];
export const partnerBrings = [
  "Capital and working capital", "Site development", "Team recruitment and leadership", "Day-to-day operations",
  "Customer relationships", "Local marketing execution", "Compliance with STOPWASH standards", "Performance and profitability",
];
export const franchiseJourney = [
  { title: "Raise Your Hand", text: "Send us your plan through the franchise enquiry form." },
  { title: "Test the Fit", text: "Conversations about your market, your experience and your ambitions." },
  { title: "Design the Stop", text: "Site assessment and outlet format planning." },
  { title: "Build the Outlet", text: "Site development to STOPWASH brand and operating standards." },
  { title: "Learn the System", text: "Training on the procedures, the people and the standard." },
  { title: "Open With Intent", text: "Pre-opening planning and launch support." },
  { title: "Earn the Next Stop", text: "Perform, improve and grow with the network." },
];

export const enquiryTypes = ["General enquiry", "Service enquiry", "Franchise enquiry", "Fleet partnership", "Other"] as const;
export type EnquiryType = (typeof enquiryTypes)[number];

export function pageHead(opts: { title: string; description: string; path: string; image?: string }) {
  const url = `${contact.siteUrl}${opts.path}`;
  // Every page shares one JPEG preview card; opts.image is accepted for future per-page cards.
  const src = opts.image && /\.(jpe?g|png)$/i.test(opts.image) ? opts.image : ogImage;
  const image = src.startsWith("http") ? src : `${contact.siteUrl}${src}`;
  return {
    meta: [
      { property: "og:image", content: image },
      { name: "twitter:image", content: image },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
