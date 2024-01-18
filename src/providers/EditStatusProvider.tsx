import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type EditingContextType = {
  editing: boolean;
  setEditing: Dispatch<SetStateAction<boolean>>;
};
const EditingContext = createContext({} as EditingContextType);

export const EditingProvider: FC<{ children: ReactNode }> = (props) => {
  const [editing, setEditing] = useState(false);
  return (
    <EditingContext.Provider value={{ editing, setEditing }}>
      {props.children}
    </EditingContext.Provider>
  );
};

export const useEditingContext = () => useContext(EditingContext);
