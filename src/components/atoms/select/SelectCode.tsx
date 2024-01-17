import React from "react";

const SelectCode: React.FC<{
  codes: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  disabled: boolean;
}> = (props) => {
  return (
    <select
      style={{ width: "300px" }}
      onChange={(e) => props.setValue(e.target.value)}
      value={props.value}
      disabled={props.disabled}
    >
      <option value="">選択してください</option>
      {props.codes.map((code) => (
        <option value={code}>{code}</option>
      ))}
    </select>
  );
};

export default SelectCode;
