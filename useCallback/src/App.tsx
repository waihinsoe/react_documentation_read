import { useRef, useState } from "react";
import "./App.css";
import { Todo } from "./components/Todo";

function App() {
  const nameCount = useRef(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setName("hello");
        }}
      >
        changeName
      </button>
      <button
        onClick={() => {
          setAge((prev) => prev + 1);
        }}
      >
        changeAge
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        changeAge
      </button>
      <Todo name={name} age={age} count={count} />
    </div>
  );
}

export default App;
