import React, { useRef } from "react";
import { Child } from "./Child";

export const Parent = () => {
  const inputRef = useRef(null);
  //@ts-ignore
  console.log(inputRef.current);
  return (
    <div>
      Parent
      <Child ref={inputRef} />
      <button onClick={() => inputRef.current.focusAndChangeText()}>
        focus
      </button>
    </div>
  );
};
