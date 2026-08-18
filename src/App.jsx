import { Header } from "./components/header";

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
    <div className="h-dvh bg-zinc-950 text-zinc-100">
      <Header />
    </div>
  );
}

export default App;
