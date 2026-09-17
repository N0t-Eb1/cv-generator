import { Logo } from "./logo";

export function Header() {
  return (
    <div className="sticky top-0 z-999 border-b border-zinc-300 bg-zinc-950 p-2 md:px-8">
      <div className="flex items-center gap-2">
        <Logo />
        <span className="text-base font-semibold md:text-lg">Flux Resume</span>
      </div>
    </div>
  );
}
