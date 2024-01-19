import React from "react";
import { useCodeContext } from "../../../providers/CodeProvider";

const SelectCode: React.FC<{
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  disabled: boolean;
}> = (props) => {
  const { codes } = useCodeContext();

  return (
    <select
      style={{ width: "300px" }}
      onChange={(e) => props.setValue(e.target.value)}
      value={props.value}
      disabled={props.disabled}
      title="チャージコード選択"
    >
      <option value="">選択してください</option>
      {codes.map((code) => (
        <option value={code} key={code}>{code}</option>
      ))}
    </select>
  );
};

export default SelectCode;
