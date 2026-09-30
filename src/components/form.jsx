import { Education } from "./education";
import { PersonalInfo } from "./personal-info";
import { Settings } from "./settings";
import { Summary } from "./summary";
import { WorkExperience } from "./work-experience";

export function Form() {
  return (
    <div className="overflow-y-auto">
      <PersonalInfo />
      <Summary />
      <Education />
      <WorkExperience />
      <Settings />
    </div>
  );
}
