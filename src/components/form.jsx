import { Education } from "./education";
import { PersonalInfo } from "./personal-info";
import { Summary } from "./summary";
import { WorkExperience } from "./work-experience";

export function Form() {
  return (
    <>
      <PersonalInfo />
      <Summary />
      <Education />
      <WorkExperience />
    </>
  );
}
