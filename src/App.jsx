import { InputField, InputFieldLabel, Input } from "./components/input-field";
import { Section } from "./components/section";

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
    <div className="h-dvh bg-zinc-950 p-6 text-zinc-100">
      <Section>
        <InputField>
          <InputFieldLabel>name</InputFieldLabel>
          <Input placeholder="Sal Khan" />
        </InputField>
      </Section>
    </div>
  );
}

export default App;
