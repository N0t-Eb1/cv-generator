import { cn } from "../utils/cn";

export function InputField({ children, fullSpan = false }) {
  return <div className={cn("grid gap-y-1.5", fullSpan && "col-span-full")}>{children}</div>;
}

export function InputFieldLabel({ children, className, ...props }) {
  return (
    <label className={cn("font-medium text-zinc-300 capitalize", className)} {...props}>
      {children}
    </label>
  );
}

export function Input({ as: Component = "input", className, ...props }) {
  return (
    <Component
      className={cn(
        "field-sizing-content w-full resize-none rounded-sm border border-zinc-400 bg-zinc-950 px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 focus-visible:border-indigo-500 focus-visible:outline focus-visible:outline-indigo-500 disabled:cursor-not-allowed disabled:brightness-50 [&:hover:not(:disabled)]:border-zinc-300",
        Component === "textarea" && "leading-6",
        className,
      )}
      {...props}
    />
  );
}
