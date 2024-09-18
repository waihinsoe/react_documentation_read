import { useId } from "react";
import "./App.css";

function App() {
  const passwordHintId = useId();
  console.log(passwordHintId);
  return <div>{passwordHintId}</div>;
}

export default App;
