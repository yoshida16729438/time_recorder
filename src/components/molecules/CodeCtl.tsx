import React from "react";
import SelectCode from "../atoms/select/SelectCode";
import { ValueSetterPair } from "../../types/types";

const CodeCtl: React.FC<{
  selectCodeSetter: ValueSetterPair<string>;
  useNewCodeSetter: ValueSetterPair<boolean>;
  newCodeSetter: ValueSetterPair<string>;
}> = (props) => {
  return (
    <div>
      <div>
        <SelectCode
          disabled={props.useNewCodeSetter.value}
          valueSetter={props.selectCodeSetter}
        />
      </div>
      <label>
        <input
          type="checkbox"
          checked={props.useNewCodeSetter.value}
          onChange={(e) => props.useNewCodeSetter.setValue(e.target.checked)}
        />
        新しいチャージコードを使用&nbsp;&nbsp;&nbsp;
      </label>
      <input
        type="text"
        minLength={1}
        title="新規チャージコード"
        disabled={!props.useNewCodeSetter.value}
        value={props.newCodeSetter.value}
        onChange={(e) => props.newCodeSetter.setValue(e.target.value)}
      />
    </div>
  );
};

export default CodeCtl;

export const validate = (
  code: string,
  useNewCode: boolean,
  newCode: string
) => {
  if (useNewCode) {
    if (newCode === "") {
      alert("コードが入力されていません");
      return false;
    }
  } else {
    if (code === "") {
      alert("コードが選択されていません");
      return false;
    }
  }
  return true;
};
