import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Modal } from "./components/Modal";
import { Counter } from "./components/Counter";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Modal open={open} setOpen={setOpen} />
      <Counter />
      {!open && <Button open={open} setOpen={setOpen} />}
    </div>
  );
}

export default App;
