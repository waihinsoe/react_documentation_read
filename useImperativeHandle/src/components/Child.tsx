import React, { forwardRef, useImperativeHandle, useRef } from "react";

export const Child = forwardRef((props, ref: any) => {
  const inputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focusAndChangeText() {
          inputRef.current.focus();
          inputRef.current.value = "hoho";
        },
      };
    },
    []
  );
  return <input type="text" ref={inputRef} defaultValue={"hello"} />;
});
