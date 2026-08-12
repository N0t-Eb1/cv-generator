import { Input } from "./components/input";
import { BulletToggle, InputField, InputFieldLabel } from "./components/input-field";

const mockData = {
  personalInfo: {
    name: "",
    objective: "",
    email: "",
    phone: "",
    website: "",
    location: "",
  },
  workExperience: {
    sectionName: "Work Experience",
    items: [
      {
        id: "1",
        company: "",
        jobTitle: "",
        date: "",
        description: "",
      },
    ],
  },
  education: {
    sectionName: "Education",
    bulletPoints: false,
    items: [
      {
        id: "1",
        school: "",
        date: "",
        degreeMajor: "",
        gpa: "",
        additionalInformation: "",
      },
    ],
  },
  project: {
    sectionName: "Project",
    items: [
      {
        id: "1",
        projectName: "",
        date: "",
        description: "",
      },
    ],
  },
  skills: {
    sectionName: "Skills",
    bulletPoints: false,
    skillsList: "",
    featuredSkills: Array.from({ length: 6 }, () => ({ skill: "", score: "5" })),
  },
  customSection: {
    sectionName: "Custom Section",
    bulletPoints: false,
    customText: "",
  },
  settings: {
    themeColor: "",
    fontFamily: "",
    fontSize: "",
  },
  sectionOrder: ["workExperience", "education", "project", "skills", "customSection"],
};

function App() {
  return (
    <div className="h-dvh bg-zinc-950 p-6 text-zinc-100">
      <InputField>
        <InputFieldLabel>name</InputFieldLabel>
        <BulletToggle />
        <Input placeholder="Sal Khan" />
      </InputField>
    </div>
  );
}

export default App;
