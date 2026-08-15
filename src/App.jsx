import { Checkbox } from "./components/checkbox";
import { InputField, InputFieldLabel, Input } from "./components/input-field";
import { Section, SectionHeader } from "./components/section";

const mockData = {
  personalInfo: {
    name: "",
    phone: "",
    email: "",
    website: "",
  },
  summary: {
    summary: "",
  },
  education: [
    {
      schoolName: "",
      location: "",
      degree: "",
      startDate: "",
      endDate: "",
      ongoing: false,
    },
  ],
  workExperience: [
    {
      companyName: "",
      location: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      ongoing: "",
      responsibilities: [],
    },
  ],
};

function App() {
  return (
    <div className="h-dvh bg-zinc-950 p-6">
      <SectionHeader sectionName={"Personal Info"} />
      <Section>
        <InputField>
          <InputFieldLabel>name</InputFieldLabel>
          <Input placeholder="Sal Khan" />
        </InputField>
        <Checkbox label={"parent"} />
      </Section>
    </div>
  );
}

export default App;
