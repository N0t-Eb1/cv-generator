import { Fragment } from "react";

import { useCvStore } from "./cv";

export function Resume() {
  return (
    <div className="@container aspect-[1/1.414] bg-white text-zinc-800">
      <div className="h-[1.25cqw] bg-violet-600"></div>
      <div className="p-[7cqw] text-[2cqw]">
        <PersonalInfo />
        <Summary />
        <Education />
        <WorkExperience />
      </div>
    </div>
  );
}

function Link({ children, ...props }) {
  return (
    <a className="font-medium text-indigo-800" {...props}>
      {children}
    </a>
  );
}

function LinkSep() {
  return <div className="size-[0.75cqw] rotate-45 bg-fuchsia-600"></div>;
}

function PersonalInfo() {
  const { firstName, lastName, phone, email, website } = useCvStore(s => s.personalInfo);

  const links = [
    { val: phone, hrefPref: "tel:" },
    { val: email, hrefPref: "mailto:" },
    { val: website, hrefPref: "" },
  ]
    .filter(({ val }) => val)
    .map(({ val, hrefPref }, i, arr) => (
      <Fragment key={i}>
        <Link href={hrefPref + val}>{val}</Link>
        {i < arr.length - 1 && <LinkSep />}
      </Fragment>
    ));

  return (
    <>
      <p className="text-center text-[4.75cqw] font-semibold text-zinc-950 capitalize">
        {firstName} {lastName}
      </p>
      <div className="mt-[1.5cqw] mb-[5cqw] flex flex-wrap items-center justify-center gap-x-[2cqw] gap-y-[0.5cqw] text-[1.8cqw] break-all">
        {links}
      </div>
    </>
  );
}

function SectionHeader({ children }) {
  return (
    <>
      <div className="mt-[4cqw] text-[2.15cqw] font-semibold tracking-[0.15cqw] text-zinc-950 uppercase">
        {children}
      </div>
      <div className="relative mt-[0.8cqw] mb-[1.5cqw] h-[0.35cqw] bg-zinc-200">
        <div className="absolute h-[0.35cqw] w-[8cqw] bg-violet-600"></div>
      </div>
    </>
  );
}

function Summary() {
  const { summary } = useCvStore(s => s.summary);
  return (
    <>
      <SectionHeader>summary</SectionHeader>
      <p>{summary}</p>
    </>
  );
}

function EducationItem({ id }) {
  const { name, location, degree, start, end, ongoing } = useCvStore(s => s.education[id]);
  const date = `${start} - ${ongoing ? "Present" : end}`;

  return (
    <div className="grid grid-cols-[1fr_auto] gap-x-[3cqw] [&+&]:mt-[2.5cqw]">
      <div>
        <div className="text-[2.1cqw] font-bold">{name}</div>
        <div className="mt-[0.25cqw]">{degree}</div>
      </div>
      <div className="text-right">
        <div className="text-[2.1cqw] font-semibold text-violet-600">{date}</div>
        <div className="mt-[0.25cqw]">{location}</div>
      </div>
    </div>
  );
}

function Education() {
  const educations = useCvStore(s => s.education);

  return (
    <>
      <SectionHeader>education</SectionHeader>
      {Object.keys(educations).map(id => (
        <EducationItem key={id} id={id} />
      ))}
    </>
  );
}

function WorkExperienceItem({ id }) {
  const { name, location, jobTitle, start, end, ongoing } = useCvStore(s => s.workExperience[id]);
  const date = `${start} - ${ongoing ? "Present" : end}`;

  return (
    <>
      <div className="grid grid-cols-[1fr_auto] gap-x-[3cqw] not-first:mt-[5cqw]">
        <div>
          <div className="text-[2.1cqw] font-bold">{name}</div>
          <div className="mt-[0.25cqw]">{jobTitle}</div>
        </div>
        <div className="text-right">
          <div className="text-[2.1cqw] font-semibold text-violet-600">{date}</div>
          <div className="mt-[0.25cqw]">{location}</div>
        </div>
      </div>
      <Responsibilities id={id} />
    </>
  );
}

function Responsibilities({ id }) {
  const responsibilities = useCvStore(s => s.workExperience[id].responsibilities);

  return (
    <ul className="mt-[2cqw]">
      {responsibilities.map((responsibility, i) => (
        <li key={i} className="flex items-start gap-[1.25cqw] [&+&]:mt-[1cqw]">
          <div className="flex h-lh items-center">
            <div className="size-[0.75cqw] rounded-full bg-violet-600"></div>
          </div>
          <span>{responsibility}</span>
        </li>
      ))}
    </ul>
  );
}

function WorkExperience() {
  const workExperiences = useCvStore(s => s.workExperience);

  return (
    <>
      <SectionHeader>work experience</SectionHeader>
      <div>
        {Object.keys(workExperiences).map(id => (
          <WorkExperienceItem key={id} id={id} />
        ))}
      </div>
    </>
  );
}
