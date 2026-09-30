import { Form } from "./components/form";
import { Header } from "./components/header";
import { Resume } from "./components/resume";

function App() {
  return (
    <div className="bg-zinc-950 text-zinc-100 lg:grid lg:h-screen lg:grid-rows-[auto_1fr] lg:overflow-y-hidden">
      <Header />
      <div className="grid min-h-0 gap-y-8 lg:grid-cols-[2fr_3fr]">
        <Form />
        <div className="overflow-y-auto p-4 lg:p-0">
          <Resume />
        </div>
      </div>
    </div>
  );
}

export default App;
