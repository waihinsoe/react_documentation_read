import { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

export const TestContext = createContext(1);

export const TestProvider = ({ children }: Props) => {
  const [value, setValue] = useState(1);
  return (
    <TestContext.Provider value={value}>
      {children}
      <button onClick={() => setValue((prev) => prev + 1)}>
        Change test context value
      </button>
    </TestContext.Provider>
  );
};
