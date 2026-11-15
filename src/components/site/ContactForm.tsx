import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { MailCheck } from "lucide-react";
import { contactSchema, looksLikeBot, type ContactInput } from "@/lib/enquiries.schema";
import { contactEmailLink } from "@/lib/enquiries.email";
import { contact, enquiryTypes, type EnquiryType } from "@/data/site";
import { Field, Honeypot, inputCls } from "./Field";
import { ctaVariants } from "./Cta";
import { ThemedSelect } from "./ThemedSelect";

export function ContactForm({ defaultType = "General enquiry" }: { defaultType?: EnquiryType }) {
  const [link, setLink] = useState<string | null>(null);
  const { register, control, handleSubmit, reset, formState: { errors } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { startedAt: Date.now(), enquiryType: defaultType },
  });

  // No backend: the message opens in the visitor's email app, addressed to STOPWASH and ready to send.
  const onSubmit = (values: ContactInput) => {
    if (looksLikeBot(values)) { setLink(""); return; }
    const href = contactEmailLink(values);
    setLink(href);
    window.location.href = href;
    reset({ startedAt: Date.now(), enquiryType: defaultType });
  };

  if (link !== null) {
    return (
      <div className="rounded-2xl border border-border bg-paper p-8 md:p-10">
        <MailCheck className="h-10 w-10 text-leaf" aria-hidden />
        <h3 className="text-h2 mt-5">Almost there.</h3>
        <p className="mt-4 text-muted-foreground">Your email app has opened with your message ready. Press <strong className="text-foreground">Send</strong> and it comes straight to our team.</p>
        <p className="mt-4 text-sm text-muted-foreground">
          Nothing opened?{" "}
          {link ? <a className="font-medium text-foreground underline underline-offset-4" href={link}>Open it again</a> : null}
          {link ? " or email " : "Email "}
          <a className="font-medium text-foreground underline underline-offset-4" href={`mailto:${contact.customerEmail}`}>{contact.customerEmail}</a>.
        </p>
        <button className="mt-8 text-sm underline underline-offset-4" onClick={() => setLink(null)}>Write another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="relative grid gap-5">
      <Honeypot register={() => register("website")} />
      <input type="hidden" {...register("startedAt", { valueAsNumber: true })} />
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" htmlFor="c-name" error={errors.name?.message}><input id="c-name" className={inputCls} autoComplete="name" {...register("name")} /></Field>
        <Field label="Email" htmlFor="c-email" error={errors.email?.message}><input id="c-email" type="email" className={inputCls} autoComplete="email" {...register("email")} /></Field>
        <Field label="Phone" htmlFor="c-phone" optional error={errors.phone?.message}><input id="c-phone" type="tel" className={inputCls} autoComplete="tel" {...register("phone")} /></Field>
        <Field label="Enquiry type" htmlFor="c-type" error={errors.enquiryType?.message}>
          <Controller control={control} name="enquiryType" render={({ field }) => (
            <ThemedSelect id="c-type" name={field.name} value={field.value} onChange={field.onChange} onBlur={field.onBlur} options={enquiryTypes} invalid={!!errors.enquiryType} />
          )} />
        </Field>
      </div>
      <Field label="Message" htmlFor="c-msg" error={errors.message?.message}><textarea id="c-msg" rows={5} className={inputCls} {...register("message")} /></Field>
      <div className="grid gap-2 md:justify-items-start">
        <button type="submit" className={ctaVariants({ variant: "lime", className: "w-full md:w-auto" })}>Send message</button>
        <p className="text-sm text-muted-foreground">Opens your email app with your message ready to send.</p>
      </div>
    </form>
  );
}
