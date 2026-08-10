import { List } from "lucide-react";

import { cn } from "../utils/cn";
import { Tooltip } from "./tooltip";

export function InputField({ children }) {
  return (
    <div className="group grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-1.5 [&_input]:col-span-full">
      {children}
    </div>
  );
}

export function InputFieldLabel({ children, ...props }) {
  return (
    <label className="font-medium text-zinc-300 capitalize" {...props}>
      {children}
    </label>
  );
}

export function BulletToggle({ checked }) {
  return (
    <Tooltip side="right" text={checked ? "Hide bullet points" : "Show bullet points"}>
      <label
        className={cn(
          "block cursor-pointer justify-self-start rounded-full hover:bg-zinc-800 has-focus-visible:bg-zinc-800 has-focus-visible:outline-2 has-focus-visible:outline-indigo-500",
          checked && "bg-violet-600 hover:bg-violet-800 has-focus-visible:bg-violet-800",
        )}
      >
        <input className="sr-only" type="checkbox" checked={checked} />
        <div className="p-1.5">
          <List className={cn("text-zinc-400", checked && "text-zinc-100")} size={16} />
        </div>
      </label>
    </Tooltip>
  );
}
