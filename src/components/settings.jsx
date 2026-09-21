import { reset } from "./cv";
import { Section, SectionHeader, SectionWrapper } from "./section";

export function Settings() {
  return (
    <SectionWrapper>
      <SectionHeader>settings</SectionHeader>
      <Section>
        <button
          className="hocus:bg-red-600 hocus:border-red-600 col-span-full cursor-pointer rounded-sm border border-zinc-500 py-2 outline-none"
          onClick={() => reset()}
        >
          Reset Data
        </button>
      </Section>
    </SectionWrapper>
  );
}
