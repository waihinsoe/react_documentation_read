import { useInsertionEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(1);
  useInsertionEffect(() => {
    console.log("hello");
  }, []);
  return (
    <div>
      hello
      <button onClick={() => setValue((prev) => prev + 1)}>changeValue</button>
    </div>
  );
}

export default App;
