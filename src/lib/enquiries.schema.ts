import { z } from "zod";
import { enquiryTypes } from "@/data/site";

const phone = z.string().trim().max(40).regex(/^[+\d\s()-]*$/, "Use digits, spaces, + or -");

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: phone.optional().or(z.literal("")),
  enquiryType: z.enum(enquiryTypes, { message: "Choose an enquiry type" }),
  message: z.string().trim().min(10, "Tell us a little more (10+ characters)").max(3000),
  website: z.string().max(0).optional(), // honeypot
  startedAt: z.number(),
});
export type ContactInput = z.infer<typeof contactSchema>;

const long = z.string().trim().max(3000).optional().or(z.literal(""));
export const franchiseSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: phone.min(7, "Enter a phone number"),
  territory: z.string().trim().min(2, "Tell us the city or territory").max(120),
  occupation: z.string().trim().max(200).optional().or(z.literal("")),
  experience: long,
  investmentRange: z.string().max(60).optional().or(z.literal("")),
  unitInterest: z.string().max(30).optional().or(z.literal("")),
  siteIdentified: z.string().max(30).optional().or(z.literal("")),
  whyStopwash: z.string().trim().min(20, "Give us at least a couple of sentences").max(3000),
  contribution: long,
  preferredTime: z.string().trim().max(120).optional().or(z.literal("")),
  website: z.string().max(0).optional(),
  startedAt: z.number(),
});
export type FranchiseInput = z.infer<typeof franchiseSchema>;

/** Submissions faster than this are treated as bots. */
export const MIN_FILL_MS = 3000;
export function looksLikeBot(input: { website?: string | undefined; startedAt: number }, now = Date.now()) {
  return Boolean(input.website) || now - input.startedAt < MIN_FILL_MS;
}
