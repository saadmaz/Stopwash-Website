import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { contactSchema, franchiseSchema, looksLikeBot } from "./enquiries.schema";

function publicClient() {
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
  return createClient<Database>(process.env["SUPABASE_URL"]!, key, {
    auth: { persistSession: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    if (looksLikeBot(data)) return { ok: true };
    const { error } = await publicClient().from("contact_enquiries").insert({
      name: data.name, email: data.email, phone: data.phone || null, enquiry_type: data.enquiryType, message: data.message,
    });
    if (error) { console.error(error); throw new Error("We couldn't send your message. Please try again."); }
    return { ok: true };
  });

export const submitFranchise = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => franchiseSchema.parse(input))
  .handler(async ({ data }) => {
    if (looksLikeBot(data)) return { ok: true };
    const { error } = await publicClient().from("franchise_enquiries").insert({
      full_name: data.fullName, email: data.email, phone: data.phone, territory: data.territory,
      occupation: data.occupation || null, experience: data.experience || null, investment_range: data.investmentRange || null,
      unit_interest: data.unitInterest || null, site_identified: data.siteIdentified || null, why_stopwash: data.whyStopwash,
      contribution: data.contribution || null, preferred_time: data.preferredTime || null,
    });
    if (error) { console.error(error); throw new Error("We couldn't send your enquiry. Please try again."); }
    return { ok: true };
  });
