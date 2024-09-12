import { useContext } from "react";
import { Child } from "./components/Child";
import { AppContext } from "./context/AppContext";

function App() {
  const { value, setValue } = useContext(AppContext);
  console.log("App :", value);
  return (
    <>
      <Child />
      <button onClick={() => setValue(value + 1)}>AppValueChange</button>
    </>
  );
}

export default App;
