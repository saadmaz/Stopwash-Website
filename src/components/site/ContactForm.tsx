import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { contactSchema, type ContactInput } from "@/lib/enquiries.schema";
import { submitContact } from "@/lib/enquiries.functions";
import { enquiryTypes, type EnquiryType } from "@/data/site";
import { Field, Honeypot, inputCls } from "./Field";
import { ctaVariants } from "./Cta";
import { ThemedSelect } from "./ThemedSelect";

export function ContactForm({ defaultType = "General enquiry" }: { defaultType?: EnquiryType }) {
  const send = useServerFn(submitContact);
  const [done, setDone] = useState(false);
  const { register, control, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { startedAt: Date.now(), enquiryType: defaultType },
  });

  const onSubmit = async (values: ContactInput) => {
    try {
      await send({ data: values });
      setDone(true);
      reset({ startedAt: Date.now(), enquiryType: defaultType });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    }
  };

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-paper p-8 md:p-10">
        <CheckCircle2 className="h-10 w-10 text-leaf" />
        <h3 className="text-h2 mt-5">Message received.</h3>
        <p className="mt-4 text-muted-foreground">Thanks for reaching out. Our team will get back to you shortly.</p>
        <button className="mt-8 text-sm underline underline-offset-4" onClick={() => setDone(false)}>Send another message</button>
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
      <button type="submit" disabled={isSubmitting} className={ctaVariants({ variant: "lime", className: "w-full md:w-auto md:justify-self-start" })}>
        {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : "Send message"}
      </button>
    </form>
  );
}
