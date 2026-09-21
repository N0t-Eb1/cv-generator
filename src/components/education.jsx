import { Fragment } from "react";

import { Checkbox } from "./checkbox";
import { addNewSection, deleteSection, updateSpecificObject, useCvStore } from "./cv";
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
      <AddSectionBtn sectionName={"education"} onClick={() => addNewSection("education")} />
    </SectionWrapper>
  );
}

function EducationItem({ id, isMoreThanOneItem }) {
  const education = useCvStore(s => s.education[id]);
  const updater = (field, value) => updateSpecificObject("education", id, field, value);

  return (
    <>
      {isMoreThanOneItem && <DeleteBtn onClick={() => deleteSection("education", id)} />}
      <Section>
        <InputField>
          <InputFieldLabel htmlFor={id + "schoolName"}>school name</InputFieldLabel>
          <Input
            id={id + "schoolName"}
            placeholder="Amir Kabir"
            onChange={e => updater("name", e.target.value)}
            value={education.name}
          ></Input>
        </InputField>
        <InputField>
          <InputFieldLabel htmlFor={id + "location"}>location</InputFieldLabel>
          <Input
            id={id + "location"}
            placeholder="Tehran"
            onChange={e => updater("location", e.target.value)}
            value={education.location}
          ></Input>
        </InputField>
        <InputField fullSpan>
          <InputFieldLabel htmlFor={id + "degree"}>degree</InputFieldLabel>
          <Input
            id={id + "degree"}
            placeholder="Bachelor of Computer science"
            onChange={e => updater("degree", e.target.value)}
            value={education.degree}
          ></Input>
        </InputField>
        <InputField>
          <InputFieldLabel htmlFor={id + "start"}>start date</InputFieldLabel>
          <Input
            id={id + "start"}
            placeholder="08/2018"
            onChange={e => updater("start", e.target.value)}
            value={education.start}
          ></Input>
        </InputField>
        <InputField>
          <InputFieldLabel htmlFor={id + "end"}>end date</InputFieldLabel>
          <Input
            id={id + "end"}
            placeholder="05/2022"
            onChange={e => updater("end", e.target.value)}
            value={education.end}
            disabled={education.ongoing}
          ></Input>
        </InputField>
        <Checkbox
          label="Currently studying"
          onChange={e => updater("ongoing", e.target.checked)}
          checked={education.ongoing}
        />
      </Section>
    </>
  );
}
