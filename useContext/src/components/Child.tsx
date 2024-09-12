import { useContext } from "react";
import { TestContext } from "../context/TestContext";

export const Child = () => {
  const value = useContext(TestContext);

  console.log("child render with App value :", value);
  return <div>Child</div>;
};
