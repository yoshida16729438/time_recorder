import React, { RefObject, useState } from "react";
import SelectCode from "../atoms/select/SelectCode";

const CodeCtl: React.FC<{
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  newCodeElement: RefObject<HTMLInputElement>;
}> = (props) => {
  const [useNewCode, setUseNewCode] = useState(false);
  return (
    <div>
      <div>
        <SelectCode
          value={props.value}
          setValue={props.setValue}
          disabled={useNewCode}
        />
      </div>
      <label>
        <input
          type="checkbox"
          onChange={(e) => setUseNewCode(e.target.checked)}
        />
        新しいチャージコードを使用&nbsp;&nbsp;&nbsp;
      </label>
      <input
        type="text"
        minLength={1}
        title="新規チャージコード"
        disabled={!useNewCode}
        ref={props.newCodeElement}
      />
    </div>
  );
};

export default CodeCtl;
