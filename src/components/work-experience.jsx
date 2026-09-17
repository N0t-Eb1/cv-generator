import { Children, Fragment } from "react";

import { Checkbox } from "./checkbox";
import { useCvStore } from "./cv";
import { Input, InputField, InputFieldLabel } from "./input-field";
import {
  SectionHeader,
  SectionWrapper,
  SectionSep,
  AddSectionBtn,
  DeleteBtn,
  Section,
} from "./section";

export function WorkExperience() {
  const workExp = useCvStore(s => s.workExperience);

  return (
    <SectionWrapper>
      <SectionHeader>work experience</SectionHeader>
      {Object.keys(workExp).map((id, i, arr) => (
        <Fragment key={id}>
          {i > 0 && <SectionSep />}
          <WorkExperienceItem id={id} isMoreThanOneItem={arr.length > 1} />
        </Fragment>
      ))}
      <AddSectionBtn sectionName={"work experience"} />
    </SectionWrapper>
  );
}

function WorkExperienceItem({ id, isMoreThanOneItem }) {
  const workExp = useCvStore(s => s.workExperience[id]);

  return (
    <>
      {isMoreThanOneItem && <DeleteBtn />}
      <Section>
        <InputField>
          <InputFieldLabel htmlFor={id + "name"}>company name</InputFieldLabel>
          <Input id={id + "name"} placeholder="Digikala" value={workExp.name}></Input>
        </InputField>
        <InputField>
          <InputFieldLabel htmlFor={id + "location"}>location</InputFieldLabel>
          <Input id={id + "location"} placeholder="Tehran" value={workExp.location}></Input>
        </InputField>
        <InputField fullSpan>
          <InputFieldLabel htmlFor={id + "title"}>job title</InputFieldLabel>
          <Input id={id + "title"} placeholder="Software Engineer" value={workExp.jobTitle}></Input>
        </InputField>
        <InputField>
          <InputFieldLabel htmlFor={id + "start"}>start date</InputFieldLabel>
          <Input id={id + "start"} placeholder="06/2022" value={workExp.start}></Input>
        </InputField>
        <InputField>
          <InputFieldLabel htmlFor={id + "end"}>end date</InputFieldLabel>
          <Input id={id + "end"} placeholder="08/2025" value={workExp.end}></Input>
        </InputField>
        <Checkbox label="I currently work here" checked={workExp.ongoing} />
        <InputFieldLabel className="col-span-full mt-3">responsibilities</InputFieldLabel>
        {workExp.responsibilities.map((resp, i) => (
          <Resp key={i}>
            <Input as="textarea" value={resp}></Input>
            <DeleteBtn />
          </Resp>
        ))}
        <AddSectionBtn
          sectionName="responsibility"
          className="hocus:bg-green-700 hocus:border-green-700 col-span-full mt-0 border-solid border-zinc-400"
        ></AddSectionBtn>
      </Section>
    </>
  );
}

function Resp({ children }) {
  return <div className="col-span-full grid grid-cols-[1fr_auto] gap-2">{children}</div>;
}
