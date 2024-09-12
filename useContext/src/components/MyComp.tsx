import { ReactNode, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

export const MyComp = ({ children }: Props) => {
  const [hello, setHello] = useState(1);
  return (
    <div>
      MyComponent
      {children}
      <button onClick={() => setHello((prev) => prev + 1)}>helloChange</button>
    </div>
  );
};
