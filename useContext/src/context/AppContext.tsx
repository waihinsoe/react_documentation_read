import { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

interface AppContextType {
  value: number;
  setValue: (value: any) => void;
}

const defaultContext: AppContextType = {
  value: 0,
  setValue: () => {},
};
export const AppContext = createContext<AppContextType>(defaultContext);

export const AppProvider = ({ children }: Props) => {
  const [value, setValue] = useState(1);
  const data = { value, setValue };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
