export function TextInput({ as: Component = "input", label, ...props }) {
  return (
    <label className="capitalize">
      {label}
      <Component
        type="text"
        className="mt-1.5 block field-sizing-content w-full resize-none border border-zinc-300 px-3 py-2"
        {...props}
      />
    </label>
  );
}
