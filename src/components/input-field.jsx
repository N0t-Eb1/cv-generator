import { cn } from "../utils/cn";

export function InputField({ children }) {
  return <div className="grid gap-y-1.5">{children}</div>;
}

export function InputFieldLabel({ children, ...props }) {
  return (
    <label className="font-medium text-zinc-300 capitalize" {...props}>
      {children}
    </label>
  );
}

export function Input({ as: Component = "input", className, ...props }) {
  return (
    <Component
      className={cn(
        "bg-bg-zinc-950 w-full rounded-xs border border-zinc-400 px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 hover:border-zinc-300 focus-visible:border-indigo-500 focus-visible:outline focus-visible:outline-indigo-500",
        className,
      )}
      {...props}
    />
  );
}
