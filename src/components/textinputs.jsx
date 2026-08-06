export function TextInput({ label, ...props }) {
  return (
    <label className="capitalize">
      {label}
      <input
        type="text"
        className="mt-1.5 block w-full border border-zinc-300 px-3 py-2"
        {...props}
      />
    </label>
  );
}
