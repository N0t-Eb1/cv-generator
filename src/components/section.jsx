import { Plus, Trash } from "lucide-react";

import { cn } from "../utils/cn";

export function Section({ children }) {
  return (
    <div className="relative grid items-center gap-x-4 gap-y-5 @sm:grid-cols-2">{children}</div>
  );
}

export function SectionHeader({ children }) {
  return (
    <div className="mb-6 flex items-center gap-2.5">
      <div className="size-5 rounded-sm bg-violet-500"></div>
      <span className="text-lg font-bold text-zinc-200 capitalize">{children}</span>
    </div>
  );
}

export function SectionWrapper({ children }) {
  return (
    <div className="@container border-zinc-300 px-4 py-6 lg:px-8 [&+&]:border-t">{children}</div>
  );
}

export function DeleteBtn({ ...props }) {
  return (
    <button
      className="hocus:bg-red-600 hocus:border-red-600 ml-auto block cursor-pointer rounded border border-zinc-500 p-2.5 outline-none"
      {...props}
    >
      <Trash />
    </button>
  );
}

export function AddSectionBtn({ sectionName, className, ...props }) {
  return (
    <button
      className={cn(
        "hocus:bg-purple-900 hocus:border-purple-900 mt-8 flex w-full cursor-pointer items-center justify-center gap-2 rounded-sm border border-dashed border-zinc-200 py-2 outline-none",
        className,
      )}
      {...props}
    >
      <Plus size={18} /> <span className="capitalize">add {sectionName}</span>
    </button>
  );
}

export function SectionSep() {
  return <div className="my-5 border-t-2 border-dashed border-zinc-400"></div>;
}
