import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { MailCheck } from "lucide-react";
import { contact } from "@/data/site";
import { franchiseSchema, looksLikeBot, type FranchiseInput } from "@/lib/enquiries.schema";
import { franchiseEmailLink } from "@/lib/enquiries.email";
import { Field, Honeypot, inputCls } from "./Field";
import { ctaVariants } from "./Cta";
import { ThemedSelect } from "./ThemedSelect";

const investmentOptions = [
  "Prefer to discuss",
  "Under LKR 10M",
  "LKR 10M to 25M",
  "LKR 25M to 50M",
  "Above LKR 50M",
] as const;
const unitOptions = ["Single-unit", "Multi-unit", "Not sure yet"] as const;
const siteOptions = ["Yes", "In discussion", "Not yet"] as const;

export function FranchiseForm() {
  const [link, setLink] = useState<string | null>(null);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FranchiseInput>({
    resolver: zodResolver(franchiseSchema),
    defaultValues: { startedAt: Date.now() },
  });

  // No backend: the application opens in the visitor's email app, addressed to the franchise team and ready to send.
  const onSubmit = (values: FranchiseInput) => {
    if (looksLikeBot(values)) {
      setLink("");
      return;
    }
    const href = franchiseEmailLink(values);
    setLink(href);
    window.location.href = href;
    window.scrollTo({ top: document.getElementById("apply")?.offsetTop ?? 0, behavior: "smooth" });
  };

  if (link !== null) {
    return (
      <div className="rounded-2xl border border-border bg-snow p-8 md:p-12">
        <MailCheck className="h-12 w-12 text-leaf" aria-hidden />
        <h3 className="text-h2 mt-5">One last step.</h3>
        <p className="mt-5 max-w-2xl text-lg">
          Your email app has opened with your application written out. Press <strong>Send</strong>{" "}
          and it goes straight to the STOPWASH franchise team. We review every application carefully
          and will contact you if the market, partner and opportunity are aligned.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Nothing opened?{" "}
          {link ? (
            <a className="font-medium text-foreground underline underline-offset-4" href={link}>
              Open it again
            </a>
          ) : null}
          {link ? " or email " : "Email "}
          <a
            className="font-medium text-foreground underline underline-offset-4"
            href={`mailto:${contact.franchiseEmail}`}
          >
            {contact.franchiseEmail}
          </a>
          .
        </p>
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
        <Field label="Full name" htmlFor="f-name" error={e.fullName?.message}>
          <input id="f-name" className={inputCls} autoComplete="name" {...register("fullName")} />
        </Field>
        <Field label="Email address" htmlFor="f-email" error={e.email?.message}>
          <input
            id="f-email"
            type="email"
            className={inputCls}
            autoComplete="email"
            {...register("email")}
          />
        </Field>
        <Field label="Phone number" htmlFor="f-phone" error={e.phone?.message}>
          <input
            id="f-phone"
            type="tel"
            className={inputCls}
            autoComplete="tel"
            {...register("phone")}
          />
        </Field>
        <Field label="Current business or occupation" htmlFor="f-occ" optional>
          <input id="f-occ" className={inputCls} {...register("occupation")} />
        </Field>
      </fieldset>
      <fieldset className="grid gap-5 md:grid-cols-2">
        <legend className="text-h3 mb-5">The opportunity</legend>
        <Field label="Preferred city or territory" htmlFor="f-terr" error={e.territory?.message}>
          <input id="f-terr" className={inputCls} {...register("territory")} />
        </Field>
        <Field label="Available investment range" htmlFor="f-inv" optional>
          <Controller
            control={control}
            name="investmentRange"
            render={({ field }) => (
              <ThemedSelect
                id="f-inv"
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                options={investmentOptions}
                placeholder="Prefer to discuss"
              />
            )}
          />
        </Field>
        <Field label="Single-unit or multi-unit interest" htmlFor="f-unit" optional>
          <Controller
            control={control}
            name="unitInterest"
            render={({ field }) => (
              <ThemedSelect
                id="f-unit"
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                options={unitOptions}
                placeholder="Select an option"
              />
            )}
          />
        </Field>
        <Field label="Potential site identified?" htmlFor="f-site" optional>
          <Controller
            control={control}
            name="siteIdentified"
            render={({ field }) => (
              <ThemedSelect
                id="f-site"
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                options={siteOptions}
                placeholder="Select an option"
              />
            )}
          />
        </Field>
      </fieldset>
      <fieldset className="grid gap-5">
        <legend className="text-h3 mb-5">Your plan</legend>
        <Field label="Relevant operating experience" htmlFor="f-exp" optional>
          <textarea id="f-exp" rows={3} className={inputCls} {...register("experience")} />
        </Field>
        <Field label="Why STOPWASH?" htmlFor="f-why" error={e.whyStopwash?.message}>
          <textarea id="f-why" rows={4} className={inputCls} {...register("whyStopwash")} />
        </Field>
        <Field label="What will you bring to the network?" htmlFor="f-bring" optional>
          <textarea id="f-bring" rows={3} className={inputCls} {...register("contribution")} />
        </Field>
        <Field label="Preferred time to speak" htmlFor="f-time" optional>
          <input
            id="f-time"
            placeholder="e.g. Weekday mornings"
            className={inputCls}
            {...register("preferredTime")}
          />
        </Field>
      </fieldset>
      <div className="grid gap-2 md:justify-items-start">
        <button
          type="submit"
          className={ctaVariants({ variant: "lime", className: "w-full md:w-auto" })}
        >
          Start the franchise conversation
        </button>
        <p className="text-sm text-muted-foreground">
          Opens your email app with your application ready to send.
        </p>
      </div>
      <p className="text-sm text-muted-foreground">
        Your details are stored securely and only seen by the STOPWASH franchise team.
      </p>
    </form>
  );
}
