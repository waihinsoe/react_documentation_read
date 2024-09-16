import { useEffect, useState } from "react";
import "./App.css";
import { MyComponent } from "./components/MyComponent";

function App() {
  const [value, setValue] = useState(true);

  useEffect(() => {
    console.log("hello");
    return () => {
      console.log("haha");
    };
  }, [value]);

  console.log([value]);

  return (
    <div>
      hello
      <button onClick={() => setValue(!value)}>change value</button>
      {value}
      {value && <MyComponent />}
    </div>
  );
}

export default App;
