import { useId } from "react";

import { useCvStore } from "./cv";
import { Input, InputField, InputFieldLabel } from "./input-field";
import { Section, SectionHeader, SectionWrapper } from "./section";

export function Summary() {
  const id = useId();
  const summary = useCvStore(s => s.summary.summary);

  return (
    <SectionWrapper>
      <SectionHeader>summary</SectionHeader>
      <Section>
        <InputField fullSpan>
          <InputFieldLabel htmlFor={id}>professional summary</InputFieldLabel>
          <Input
            id={id}
            value={summary}
            as="textarea"
            placeholder="e.g., Detail-oriented Graphic Designer with over 4 years of experience in branding and web design. Proficient in Adobe Creative Suite and Figma. Passionate about creating accessible, user-centric visual identities"
          />
        </InputField>
      </Section>
    </SectionWrapper>
  );
}
