import React, { memo, useEffect } from "react";

interface TodoItemProps {
  testFun: () => any;
}

export const TodoItem = memo(({ testFun }: TodoItemProps) => {
  console.log("[ARTIFICIALLY SLOW] Rendering <ShippingForm />");
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }
  useEffect(() => {
    testFun();
  }, []);
  return <div>TodoItem</div>;
});
