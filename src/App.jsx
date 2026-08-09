import { Input } from "./components/input";
import { BulletToggle, InputField, InputFieldLabel } from "./components/input-field";

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
