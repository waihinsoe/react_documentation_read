import React, { useEffect } from "react";

export const MyComponent = () => {
  useEffect(() => {
    console.log("setup run");
    return () => {
      console.log("clean up run");
    };
  }, []);
  return <div>MyComponent</div>;
};
