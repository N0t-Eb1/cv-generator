import { updateGeneral, useCvStore } from "./cv";
import { Input, InputField, InputFieldLabel } from "./input-field";
import { Section, SectionHeader, SectionWrapper } from "./section";

const formConfig = [
  { name: "firstName", label: "first name", placeHolder: "Arash" },
  { name: "lastName", label: "last name", placeHolder: "Nazari" },
  { name: "phone", label: "phone number", placeHolder: "+98 919.." },
  { name: "email", label: "email", placeHolder: "example@gmail.com" },
  { name: "website", label: "website", placeHolder: "example-address.com" },
];

export function PersonalInfo() {
  const personalInfo = useCvStore(s => s.personalInfo);

  return (
    <SectionWrapper>
      <SectionHeader>personal details</SectionHeader>
      <Section>
        {formConfig.map(({ name, label, placeHolder }) => (
          <InputField key={name}>
            <InputFieldLabel htmlFor={name}>{label}</InputFieldLabel>
            <Input
              id={name}
              placeholder={placeHolder}
              onChange={e => updateGeneral("personalInfo", name, e.target.value)}
              value={personalInfo[name]}
            />
          </InputField>
        ))}
      </Section>
    </SectionWrapper>
  );
}
