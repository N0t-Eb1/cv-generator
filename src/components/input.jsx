import { cn } from "../utils/cn";

export function Input({ as: Component = "input", className, ...props }) {
  return (
    <Component
      className={cn(
        "w-full rounded-xs border border-zinc-800 bg-zinc-900 px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 hover:border-zinc-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none",
        className,
      )}
      {...props}
    />
  );
}
