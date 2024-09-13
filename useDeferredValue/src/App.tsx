import { useDeferredValue, useState } from "react";
import "./App.css";
import { SlowList } from "./components/SlowList";

function App() {
  const [text, setText] = useState("");

  const deferredValue = useDeferredValue(text);
  console.log("deferredValue: ", deferredValue);
  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <SlowList text={deferredValue} />
    </div>
  );
}

export default App;
