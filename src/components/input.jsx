import { cn } from "../utils/cn";

export function Input({ as: Component = "input", className, ...props }) {
  return (
    <Component
      className={cn(
        "block field-sizing-content w-full resize-none border border-zinc-300 px-3 py-2 outline-0 focus-within:border-purple-600",
        className,
      )}
      {...props}
    />
  );
}
