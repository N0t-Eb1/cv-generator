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
        "w-full rounded-xs border border-zinc-800 bg-zinc-900 px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 hover:border-zinc-700 focus:border-indigo-500",
        className,
      )}
      {...props}
    />
  );
}
