export function Checkbox({ label, ...props }) {
  return (
    <label className="col-span-full flex items-center gap-3">
      <input
        className="form-checkbox size-4.5 rounded-xs border-zinc-400 bg-zinc-950 hover:border-zinc-300 focus:ring-0 focus:ring-offset-0 focus-visible:border-indigo-500"
        type="checkbox"
        {...props}
      />
      <span className="font-medium text-zinc-300">{label}</span>
    </label>
  );
}
