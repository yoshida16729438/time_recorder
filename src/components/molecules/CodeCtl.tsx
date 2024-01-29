import React from "react";
import SelectCode from "../atoms/select/SelectCode";
import { ValueSetterPair } from "../../types/types";

const CodeCtl: React.FC<{
  selectCodeSetter: ValueSetterPair<string>;
  useNewCodeSetter: ValueSetterPair<boolean>;
  newCodeSetter: ValueSetterPair<string>;
  idSuffix: string;
}> = (props) => {
  return (
    <div>
      <div>
        <SelectCode
          disabled={props.useNewCodeSetter.value}
          valueSetter={props.selectCodeSetter}
          id={`SelectCode-${props.idSuffix}`}
        />
      </div>
      <label>
        <input
          type="checkbox"
          checked={props.useNewCodeSetter.value}
          onChange={(e) => props.useNewCodeSetter.setValue(e.target.checked)}
          id={`chk-${props.idSuffix}`}
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
        id={`txt-${props.idSuffix}`}
      />
    </div>
  );
};

export default CodeCtl;

export const validateCode = (
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
