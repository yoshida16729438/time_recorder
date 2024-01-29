import { FC, ReactNode, createContext, useContext, useState } from "react";

type CodeContextType = {
  codes: string[];
  addNewCode: (newCode: string) => void;
};

const CodeContext = createContext({} as CodeContextType);

declare const defaultCodes: string[];

export const CodeContextProvider: FC<{ children: ReactNode }> = (props) => {
  const [codes, setCodes] = useState(defaultCodes);
  const addNewCode = (newCode: string) => {
    setCodes((prev) => {
      const newCodeList = [...prev];
      newCodeList.push(newCode);
      return newCodeList;
    });
  };

  return (
    <CodeContext.Provider value={{ codes, addNewCode }}>
      {props.children}
    </CodeContext.Provider>
  );
};

export const useCodeContext = () => useContext(CodeContext);
