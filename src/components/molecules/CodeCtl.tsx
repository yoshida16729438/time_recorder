import React, { useState } from "react";
import SelectCode from "../atoms/select/SelectCode";

const CodeCtl: React.FC<{
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}> = (props) => {
  const [useNewCode, setDisabled] = useState(false);
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
          onChange={(e) => setDisabled(e.target.checked)}
        />
        新しいチャージコードを使用&nbsp;&nbsp;&nbsp;
      </label>
      <input
        type="text"
        minLength={1}
        title="新規チャージコード"
        disabled={!useNewCode}
      />
    </div>
  );
};

export default CodeCtl;