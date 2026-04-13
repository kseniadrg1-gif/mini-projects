import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Modal } from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Modal open={open} setOpen={setOpen} />
      {!open && <Button open={open} setOpen={setOpen} />}
    </div>
  );
}

export default App;
