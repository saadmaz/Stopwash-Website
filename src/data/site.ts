import heroHome from "@/assets/photos/hero-home.webp";
import franchiseHero from "@/assets/photos/franchise-hero.webp";
import modelSupermarket from "@/assets/photos/model-supermarket.webp";
import modelOutlet from "@/assets/photos/model-outlet.webp";
import heroBay from "@/assets/photos/hero-bay.webp";
import detailHands from "@/assets/photos/detail-hands.webp";
import interior from "@/assets/photos/interior.webp";
import foam from "@/assets/photos/foam.webp";
import customer01 from "@/assets/photos/customers/customer-01.webp";
import customer02 from "@/assets/photos/customers/customer-02.webp";
import customer03 from "@/assets/photos/customers/customer-03.webp";
import customer04 from "@/assets/photos/customers/customer-04.webp";
import customer05 from "@/assets/photos/customers/customer-05.webp";
import customer06 from "@/assets/photos/customers/customer-06.webp";
import customer07 from "@/assets/photos/customers/customer-07.webp";
import customer08 from "@/assets/photos/customers/customer-08.webp";
import customer09 from "@/assets/photos/customers/customer-09.webp";
import customer10 from "@/assets/photos/customers/customer-10.webp";
// JPEG kept for link previews: some social platforms do not render WebP og:images.
import ogImage from "@/assets/photos/og-home.jpg";

/**
 * PLACEHOLDER IMAGERY: these are mood images, not photographs of the STOPWASH
 * outlet or team. Swap each file for real STOPWASH photography (same keys) and
 * update the alt text. Nothing else in the site needs to change.
 */
export const images = { heroHome, franchiseHero, heroBay, detailHands, interior, foam };
export const alts: Record<keyof typeof images, string> = {
  heroHome: "A smiling man walking out of a shop with shopping bags, seen from inside a parked car",
  franchiseHero: "A STOPWASH-branded wash kiosk with lime graphics on a wet forecourt under a blue sky",
  heroBay: "A dark vehicle covered in foam inside a wash bay lit in green",
  detailHands: "A gloved hand drying a freshly washed vehicle panel with a microfibre cloth",
  interior: "A vehicle cabin being vacuumed during an interior clean",
  foam: "A vehicle being rinsed with a high-pressure water jet",
};

/** Real customers photographed at STOPWASH Katubedda ("STOPWASH-ED"). Shown on the homepage photo wall. */
export const customerPhotos: { src: string; alt: string }[] = [
  { src: customer01, alt: "Two customers beside their freshly washed red Land Rover Defender, at STOPWASH Katubedda" },
  { src: customer02, alt: "A customer with a freshly washed white Honda SUV, at STOPWASH Katubedda" },
  { src: customer03, alt: "A customer and a boy beside their freshly washed white SUV, at STOPWASH Katubedda" },
  { src: customer04, alt: "Two customers with their freshly washed white Toyota, photographed at night, at STOPWASH Katubedda" },
  { src: customer05, alt: "A customer and two boys with their freshly washed car, at STOPWASH Katubedda" },
  { src: customer06, alt: "A customer beside a freshly washed white BMW, at STOPWASH Katubedda" },
  { src: customer07, alt: "A customer beside a freshly washed white Kia SUV, at STOPWASH Katubedda" },
  { src: customer08, alt: "A family beside their freshly washed red Honda, at STOPWASH Katubedda" },
  { src: customer09, alt: "Two customers beside their freshly washed red Toyota Land Cruiser Prado, at STOPWASH Katubedda" },
  { src: customer10, alt: "A customer and a boy beside their freshly washed dark SUV, at STOPWASH Katubedda" },
];

export const contact = {
  phone: "+94 70 622 5252",
  phoneHref: "tel:+94706225252",
  customerEmail: "hello@stopwash.lk",
  franchiseEmail: "hello@stopwash.lk",
  website: "www.stopwash.lk",
  siteUrl: "https://stopwash.lk",
  /** WhatsApp chat link for the customer line (assumes +94 70 622 5252 is on WhatsApp). */
  whatsappHref: "https://wa.me/94706225252",
  // TODO: replace each href with the official STOPWASH profile URL.
  socials: [
    { network: "instagram", label: "Instagram", href: "https://www.instagram.com/stopwash.lk/" },
    { network: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@stopwash.lk" },
    { network: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/stopwash/" },
  ] as const,
};

/** Pages that open with a full-screen dark LandingHero; the navigation bar is transparent over them. */
export const landingHeroPaths = new Set(["/", "/services", "/locations", "/our-story", "/our-vision", "/our-standard", "/franchise", "/blog", "/contact"]);

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
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const footerNav = [
  { label: "Home", to: "/" },
  { label: "Our Story", to: "/our-story" },
  { label: "Our Vision", to: "/our-vision" },
  { label: "The STOPWASH Standard", to: "/our-standard" },
  { label: "Services", to: "/services" },
  { label: "Locations", to: "/locations" },
  { label: "Franchise With Us", to: "/franchise" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

/** The two STOPWASH formats, shown on the homepage. */
export const serviceModels = [
  {
    slug: "supermarket",
    label: "High-traffic hotspots",
    title: "Clean while you're out.",
    text: "STOPWASH stations at busy everyday destinations, cleaning your car while you shop or dine.",
    points: ["No extra trip", "Where you already go"],
    cta: { label: "Find a STOPWASH", to: "/locations" },
    image: modelSupermarket,
    alt: "A smiling shopper walking out of a supermarket with his shopping bags",
  },
  {
    slug: "b2b",
    label: "Fleet & brand partners",
    title: "Your fleet's detailing partner.",
    text: "Official detailing for brand and dealer fleets, keeping every new car showroom-ready from day one.",
    /** Official brand partners, shown as wordmarks. */
    partners: ["JETOUR", "JAC", "DONGFENG"],
    cta: { label: "Partner with us", to: "/contact", search: { type: "Brand & dealer partnership" } },
    image: modelOutlet,
    alt: "A freshly detailed white Kia SUV at STOPWASH Katubedda",
  },
] as const;

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
  { slug: "routine", name: "Routine Care", tag: "Everyday", text: "The regular clean that keeps the vehicle ready for the road.", forWho: "Daily drivers who want the car kept in order without planning around it.", image: foam, alt: alts.foam, enquiryType: "Service enquiry" },
  { slug: "interior", name: "Interior Care", tag: "Cabin", text: "A focused reset for the space you spend your time in.", forWho: "Family cars, commuter cabins and anything that carries more than people.", image: interior, alt: alts.interior, enquiryType: "Service enquiry" },
  { slug: "exterior", name: "Exterior Care", tag: "Body", text: "A sharper finish for the surfaces that take the daily punishment.", forWho: "Vehicles that need to look right on the road, not just in the driveway.", image: heroBay, alt: alts.heroBay, enquiryType: "Service enquiry" },
  { slug: "full", name: "Full Care", tag: "Inside + out", text: "A complete inside-and-out service for when the vehicle needs more attention.", forWho: "Before a trip, after a long month or when the car simply needs starting over.", image: null, alt: "", enquiryType: "Service enquiry" },
  { slug: "detail", name: "Detail Care", tag: "Finish", text: "More time, more precision and more focus on the finish.", forWho: "Owners who care about surfaces as much as cleanliness.", image: detailHands, alt: alts.detailHands, enquiryType: "Service enquiry" },
  { slug: "fleet", name: "Fleet Care", tag: "Business", text: "A reliable operating programme for businesses with vehicles to keep moving.", forWho: "Businesses whose vehicles are part of the business, not just parked outside it.", image: null, alt: "", enquiryType: "Fleet partnership" },
  { slug: "repeat", name: "Repeat Care", tag: "Membership", text: "Memberships and scheduled programmes that make good vehicle care automatic.", forWho: "People who would rather not think about it again.", image: null, alt: "", enquiryType: "Service enquiry" },
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
  /** Google Maps share link for the business listing. */
  mapsLink?: string;
  /** Official Google Maps embed URL (shows the business card). Falls back to a pin at `coordinates`. */
  mapEmbed?: string;
  image: string;
  alt: string;
};

export function directionsUrl(l: Location) {
  const dest = l.coordinates ? `${l.coordinates.lat},${l.coordinates.lng}` : l.mapsQuery;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(dest)}`;
}
export function mapEmbedUrl(l: Location) {
  if (l.mapEmbed) return l.mapEmbed;
  if (!l.coordinates) return null;
  return `https://www.google.com/maps?q=${l.coordinates.lat},${l.coordinates.lng}&z=16&output=embed`;
}

export const locations: Location[] = [
  {
    slug: "katubedda",
    name: "Katubedda",
    status: "open",
    label: "The first STOPWASH outlet",
    address: "239 Model Town Rd, Moratuwa 10400",
    phone: contact.phone,
    hours: "Every day, 9:00 am to 9:00 pm",
    mapsQuery: "STOPWASH CAR WASH - KATUBEDDA, 239 Model Town Rd, Moratuwa 10400",
    coordinates: { lat: 6.8025221, lng: 79.8883531 },
    mapsLink: "https://maps.app.goo.gl/Yn8p6YJWb5a6z3a1A",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.7311768681325!2d79.8883531!3d6.802522100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2453c7e48ff37%3A0xb742b34ac68090e8!2sSTOPWASH%20CAR%20WASH%20-%20KATUBEDDA!5e0!3m2!1sen!2slk!4v1794753834506!5m2!1sen!2slk",
    image: heroBay,
    alt: alts.heroBay,
  },
];


export const journey = [
  { n: "01", title: "Pull in", text: "Arrive at STOPWASH." },
  { n: "02", title: "Choose your stop", text: "Select the level of care your vehicle needs." },
  { n: "03", title: "Let the clean squad take over", text: "Our team follows a defined process built for speed, care and consistency." },
  { n: "04", title: "Check the finish", text: "The job is reviewed before the vehicle is handed back." },
  { n: "05", title: "Pull out", text: "Cleaner car. Clearer head. Still on schedule." },
];

export const standards = [
  { title: "Defined service steps", text: "Every service follows a set sequence, so nothing depends on luck." },
  { title: "Trained teams", text: "A clean squad trained to move with purpose and notice the details." },
  { title: "Approved products & equipment", text: "Only products and tools that meet the STOPWASH standard." },
  { title: "Quality checks", text: "The finish is reviewed before the vehicle is handed back." },
  { title: "Clear customer communication", text: "You know what is happening and what happens next." },
  { title: "Service recovery", text: "When something falls short, we make it right." },
  { title: "Continuous improvement", text: "Every stop teaches the network something." },
];

export const franchiseWhy = [
  { title: "A brand with a point of view", text: "Built around movement, time and a better vehicle-care experience, not generic claims about being the best." },
  { title: "A proposition people understand", text: "Less waiting. A better finish. Clearer service. A reason to return." },
  { title: "A repeat-demand category", text: "Vehicle care is not a one-time purchase. The opportunity is a regular customer habit." },
  { title: "A defined operating system", text: "Service formats, process design, training, quality control and reporting are built into the model." },
  { title: "A network effect", text: "Every outlet adds brand familiarity, customer insight and operating knowledge to the network." },
  { title: "A route to multi-unit growth", text: "Strong partners may develop more than one location, subject to performance and capability." },
];
export const franchiseBrings = [
  "Brand identity and brand standards", "Outlet format and customer-experience design", "Site and location assessment",
  "Service architecture", "Operating procedures", "Equipment and product guidance", "Training framework",
  "Pre-opening planning", "Launch support", "Marketing assets and local activation guidance", "Quality audits", "Performance reporting", "Ongoing network support",
];
export const partnerBrings = [
  "Capital and working capital", "Site development", "Team recruitment and leadership", "Day-to-day operations",
  "Customer relationships", "Local marketing execution", "Compliance with STOPWASH standards", "Performance and profitability",
];
export const franchiseJourney = [
  { title: "Raise your hand", text: "Tell us who you are, where you want to build and why you want to build with STOPWASH." },
  { title: "Test the fit", text: "We assess the partner, location, capital plan, market and operating capability." },
  { title: "Design the stop", text: "We agree the site, format, investment plan, timeline and operating requirements." },
  { title: "Build the outlet", text: "The location, equipment, team and launch plan come together." },
  { title: "Learn the system", text: "The partner and team complete the required training before opening." },
  { title: "Open with intent", text: "A launch planned to create awareness, trial and repeat visits." },
  { title: "Earn the next stop", text: "Strong performance can open the opportunity to develop additional locations." },
];

/** The operating engine behind every outlet (homepage). */
export const buildingEngine = [
  "Faster service design",
  "Better team training",
  "Clearer packages",
  "Stronger quality control",
  "Smarter location planning",
  "Easier repeat visits",
  "A network built to scale",
];


/** The questions behind the brand (Our Story). */
export const storyQuestions = [
  "How should the customer move through the experience?",
  "How do we remove uncertainty?",
  "How do we make quality repeatable?",
  "How do we build a location that respects time?",
  "How do we give an operator a system that can actually scale?",
];

/** What the national network connects (Our Story). */
export const networkParts = [
  "Locations where customers already move",
  "Services that match different needs and budgets",
  "Teams that understand the standard",
  "Technology that makes returning easier",
  "Fleet and dealer relationships",
  "Memberships that turn occasional care into a habit",
  "Franchise partners who can build the system locally",
];

/** The franchise partner profile. */
export const partnerTraits = [
  "Wants to lead a real business",
  "Understands that standards are operational, not decorative",
  "Can recruit and develop a frontline team",
  "Knows the local market, or is prepared to learn it deeply",
  "Has the financial capacity to build and sustain the outlet",
  "Can follow a system without losing entrepreneurial energy",
  "Wants to grow with the brand over time",
];

export const enquiryTypes = ["General enquiry", "Service enquiry", "Franchise enquiry", "Brand & dealer partnership", "Fleet partnership", "Other"] as const;
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

/**
 * Franchise FAQ. Answers only use confirmed positions; no fees, returns or timelines
 * are published until they are approved.
 */
export const franchiseFaqs = [
  {
    q: "How much does a STOPWASH franchise cost?",
    a: "The investment depends on the site, the outlet format and the location. STOPWASH does not publish investment amounts, fees, royalties or projected returns. These are discussed directly with qualified applicants once we understand your market and your plan.",
  },
  {
    q: "Do I need car-wash or vehicle-care experience?",
    a: "Not necessarily. We look for operators: people who can lead a team, run a disciplined business and protect a standard. STOPWASH provides a training framework, and the partner and team complete the required training before opening.",
  },
  {
    q: "What support does STOPWASH provide?",
    a: "Brand standards, outlet format and customer-experience design, site and location assessment, operating procedures, equipment and product guidance, training, pre-opening planning, launch support, marketing assets, quality audits, performance reporting and ongoing network support.",
  },
  {
    q: "Do I need to find my own site?",
    a: "Site development is the partner's responsibility, and STOPWASH supports it with site and location assessment. If you already have a potential site in mind, tell us about it in your application.",
  },
  {
    q: "Can I run a STOPWASH alongside another business?",
    a: "STOPWASH is an operating opportunity, not a passive investment. Partners are expected to lead the business actively and take responsibility for day-to-day operations, the team and performance. Tell us how you plan to do that in your application.",
  },
  {
    q: "Can I own more than one outlet?",
    a: "Yes, potentially. Strong partners may have the opportunity to develop additional locations, subject to performance and capability.",
  },
  {
    q: "How long does it take to open?",
    a: "It depends on the site, the build and the approvals involved. The timeline is agreed together during the \"Design the stop\" stage, before any work begins.",
  },
  {
    q: "What happens after I apply?",
    a: "We review every enquiry carefully. If the market, the partner and the opportunity are aligned, our team will contact you for the next conversation. Submitting an enquiry does not create any obligation for either party.",
  },
];
