export function Section({ children }) {
  return (
    <div className="relative grid items-center gap-x-4 gap-y-5 @sm:grid-cols-2">{children}</div>
  );
}

export function SectionHeader({ sectionName }) {
  return (
    <div className="mb-4 flex items-center gap-2.5">
      <div className="size-5 rounded-sm bg-violet-500"></div>
      <span className="text-lg font-bold text-zinc-200 capitalize">{sectionName}</span>
    </div>
  );
}

export function SectionWrapper({ children }) {
  return <div className="@container p-6">{children}</div>;
}
