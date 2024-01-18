import { FC, ReactNode, createContext, useContext, useState } from "react";

type CodeContextType = {
  codes: string[];
  addNewCode: (newCode: string) => void;
};

const CodeContext = createContext({} as CodeContextType);

const defaultCodes = [
  "研修関連活動(参加)",
  "社内コミュニケーション",
  "自己成長",
  "従業員必須対応事項",
  "暫定チャージコード",
  "部内コミュニケーション",
  "休憩",
];

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
