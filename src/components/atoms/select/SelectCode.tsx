import React from "react";
import { useCodeContext } from "../../../providers/CodeProvider";
import { ValueSetterPair } from "../../../types/types";

const SelectCode: React.FC<{
  disabled: boolean;
  valueSetter: ValueSetterPair<string>;
}> = (props) => {
  const { codes } = useCodeContext();

  return (
    <select
      style={{ width: "300px" }}
      disabled={props.disabled}
      title="チャージコード選択"
      value={props.valueSetter.value}
      onChange={(e) => props.valueSetter.setValue(e.target.value)}
    >
      <option value="">選択してください</option>
      {codes.map((code) => (
        <option value={code} key={code}>
          {code}
        </option>
      ))}
    </select>
  );
};

export default SelectCode;
