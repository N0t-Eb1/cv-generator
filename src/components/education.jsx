import { Fragment } from "react";

import { Checkbox } from "./checkbox";
import { useCvStore } from "./cv";
import { Input, InputField, InputFieldLabel } from "./input-field";
import {
  AddSectionBtn,
  DeleteBtn,
  Section,
  SectionHeader,
  SectionSep,
  SectionWrapper,
} from "./section";

export function Education() {
  const educations = useCvStore(s => s.education);

  return (
    <SectionWrapper>
      <SectionHeader>education</SectionHeader>
      {Object.keys(educations).map((id, i, arr) => (
        <Fragment key={id}>
          {i > 0 && <SectionSep />}
          <EducationItem id={id} isMoreThanOneItem={arr.length > 1} />
        </Fragment>
      ))}
      <AddSectionBtn sectionName={"education"} />
    </SectionWrapper>
  );
}

function EducationItem({ id, isMoreThanOneItem }) {
  const education = useCvStore(s => s.education[id]);

  return (
    <>
      {isMoreThanOneItem && <DeleteBtn />}
      <Section>
        <InputField>
          <InputFieldLabel htmlFor={id + "schoolName"}>school name</InputFieldLabel>
          <Input id={id + "schoolName"} placeholder="Amir Kabir" value={education.name}></Input>
        </InputField>
        <InputField>
          <InputFieldLabel htmlFor={id + "location"}>location</InputFieldLabel>
          <Input id={id + "location"} placeholder="Tehran" value={education.location}></Input>
        </InputField>
        <InputField fullSpan>
          <InputFieldLabel htmlFor={id + "degree"}>degree</InputFieldLabel>
          <Input
            id={id + "degree"}
            placeholder="Bachelor of Computer science"
            value={education.degree}
          ></Input>
        </InputField>
        <InputField>
          <InputFieldLabel htmlFor={id + "start"}>start date</InputFieldLabel>
          <Input id={id + "start"} placeholder="08/2018" value={education.start}></Input>
        </InputField>
        <InputField>
          <InputFieldLabel htmlFor={id + "end"}>end date</InputFieldLabel>
          <Input id={id + "end"} placeholder="05/2022" value={education.end}></Input>
        </InputField>
        <Checkbox label="Currently studying" checked={education.ongoing} />
      </Section>
    </>
  );
}
