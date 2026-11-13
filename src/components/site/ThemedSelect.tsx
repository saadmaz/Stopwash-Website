import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  id: string;
  value: string | undefined;
  onChange: (value: string) => void;
  onBlur?: () => void;
  options: readonly string[];
  placeholder?: string;
  invalid?: boolean;
  name?: string;
};

/**
 * Brand-styled dropdown (replaces the native <select>, whose menu is drawn by the OS).
 * Keyboard and screen-reader accessible via Radix.
 */
export function ThemedSelect({ id, value, onChange, onBlur, options, placeholder = "Select", invalid, name }: Props) {
  return (
    <SelectPrimitive.Root value={value ?? ""} onValueChange={onChange} {...(name ? { name } : {})} onOpenChange={(open) => !open && onBlur?.()}>
      <SelectPrimitive.Trigger
        id={id}
        aria-invalid={invalid || undefined}
        className={cn(
          "group flex w-full items-center justify-between gap-3 rounded-xl border border-input bg-snow px-4 py-3 text-left text-base text-ink transition-colors",
          "hover:border-ink/30 focus:border-navy focus:outline-none focus:ring-4 focus:ring-navy/10 data-[state=open]:border-navy data-[state=open]:ring-4 data-[state=open]:ring-navy/10",
          "data-[placeholder]:text-ink/45",
          invalid && "border-destructive",
        )}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon asChild>
          <ChevronDown className="h-4 w-4 shrink-0 text-ink/50 transition-transform duration-200 group-data-[state=open]:rotate-180" aria-hidden />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position="popper"
          sideOffset={6}
          className={cn(
            "z-[60] max-h-[min(22rem,var(--radix-select-content-available-height))] w-[var(--radix-select-trigger-width)] overflow-hidden rounded-2xl border border-border bg-snow p-1.5 text-ink shadow-xl shadow-ink/10",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          )}
        >
          <SelectPrimitive.Viewport>
            {options.map((o) => (
              <SelectPrimitive.Item
                key={o}
                value={o}
                className={cn(
                  "relative flex cursor-pointer select-none items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-[0.9375rem] outline-none transition-colors",
                  "data-[highlighted]:bg-paper data-[state=checked]:font-semibold",
                )}
              >
                <SelectPrimitive.ItemText>{o}</SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator>
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-lime">
                    <Check className="h-3.5 w-3.5 text-ink" aria-hidden />
                  </span>
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
