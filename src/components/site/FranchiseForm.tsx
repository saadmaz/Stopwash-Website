import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { franchiseSchema, type FranchiseInput } from "@/lib/enquiries.schema";
import { submitFranchise } from "@/lib/enquiries.functions";
import { Field, Honeypot, inputCls } from "./Field";
import { ctaVariants } from "./Cta";

const sel = inputCls;

export function FranchiseForm() {
  const send = useServerFn(submitFranchise);
  const [done, setDone] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FranchiseInput>({
    resolver: zodResolver(franchiseSchema),
    defaultValues: { startedAt: Date.now() },
  });

  const onSubmit = async (values: FranchiseInput) => {
    try {
      await send({ data: values });
      setDone(true);
      window.scrollTo({ top: document.getElementById("apply")?.offsetTop ?? 0, behavior: "smooth" });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    }
  };

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-snow p-8 md:p-12">
        <CheckCircle2 className="h-12 w-12 text-leaf" />
        <h3 className="text-h2 mt-5">Enquiry received.</h3>
        <p className="mt-5 max-w-2xl text-lg">Thank you for your interest in building with STOPWASH. We review every enquiry carefully. If the market, partner and opportunity are aligned, our team will contact you for the next conversation.</p>
      </div>
    );
  }

  const e = errors;
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative grid gap-10">
      <Honeypot register={() => register("website")} />
      <input type="hidden" {...register("startedAt", { valueAsNumber: true })} />
      <fieldset className="grid gap-5 md:grid-cols-2">
        <legend className="text-h3 mb-5">About you</legend>
        <Field label="Full name" htmlFor="f-name" error={e.fullName?.message}><input id="f-name" className={inputCls} autoComplete="name" {...register("fullName")} /></Field>
        <Field label="Email address" htmlFor="f-email" error={e.email?.message}><input id="f-email" type="email" className={inputCls} autoComplete="email" {...register("email")} /></Field>
        <Field label="Phone number" htmlFor="f-phone" error={e.phone?.message}><input id="f-phone" type="tel" className={inputCls} autoComplete="tel" {...register("phone")} /></Field>
        <Field label="Current business or occupation" htmlFor="f-occ" optional><input id="f-occ" className={inputCls} {...register("occupation")} /></Field>
      </fieldset>
      <fieldset className="grid gap-5 md:grid-cols-2">
        <legend className="text-h3 mb-5">The opportunity</legend>
        <Field label="Preferred city or territory" htmlFor="f-terr" error={e.territory?.message}><input id="f-terr" className={inputCls} {...register("territory")} /></Field>
        <Field label="Available investment range" htmlFor="f-inv" optional>
          <select id="f-inv" className={sel} {...register("investmentRange")}>
            <option value="">Prefer to discuss</option>
            <option>Under LKR 10M</option><option>LKR 10M – 25M</option><option>LKR 25M – 50M</option><option>Above LKR 50M</option>
          </select>
        </Field>
        <Field label="Single-unit or multi-unit interest" htmlFor="f-unit" optional>
          <select id="f-unit" className={sel} {...register("unitInterest")}>
            <option value="">Select</option><option>Single-unit</option><option>Multi-unit</option><option>Not sure yet</option>
          </select>
        </Field>
        <Field label="Potential site identified?" htmlFor="f-site" optional>
          <select id="f-site" className={sel} {...register("siteIdentified")}>
            <option value="">Select</option><option>Yes</option><option>In discussion</option><option>Not yet</option>
          </select>
        </Field>
      </fieldset>
      <fieldset className="grid gap-5">
        <legend className="text-h3 mb-5">Your plan</legend>
        <Field label="Relevant operating experience" htmlFor="f-exp" optional><textarea id="f-exp" rows={3} className={inputCls} {...register("experience")} /></Field>
        <Field label="Why STOPWASH?" htmlFor="f-why" error={e.whyStopwash?.message}><textarea id="f-why" rows={4} className={inputCls} {...register("whyStopwash")} /></Field>
        <Field label="What will you bring to the network?" htmlFor="f-bring" optional><textarea id="f-bring" rows={3} className={inputCls} {...register("contribution")} /></Field>
        <Field label="Preferred time to speak" htmlFor="f-time" optional><input id="f-time" placeholder="e.g. Weekday mornings" className={inputCls} {...register("preferredTime")} /></Field>
      </fieldset>
      <button type="submit" disabled={isSubmitting} className={ctaVariants({ variant: "ink", className: "w-full md:w-auto md:justify-self-start" })}>
        {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : "Start the franchise conversation"}
      </button>
      <p className="text-sm text-muted-foreground">Your details are stored securely and only seen by the STOPWASH franchise team.</p>
    </form>
  );
}
