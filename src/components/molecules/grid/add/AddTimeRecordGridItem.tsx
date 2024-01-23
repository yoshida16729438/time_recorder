import { FC, useState } from "react";
import { Time } from "../../../../utils/timeUtil";
import { useCodeContext } from "../../../../providers/CodeProvider";
import { useEditingContext } from "../../../../providers/EditStatusProvider";
import CodeCtl, { validate } from "../../CodeCtl";
import NormalButton from "../../../atoms/button/NormalButton";

const AddTimeRecordGridItem: FC<{
  lastRecordedTime: Time;
  onAddRecord: (code: string) => void;
}> = (props) => {
  const { codes, addNewCode } = useCodeContext();
  const { editing } = useEditingContext();
  const [code, setCode] = useState("");
  const [useNewCode, setUseNewCode] = useState(false);
  const [newCode, setNewCode] = useState("");

  const onClickAdd = () => {
    if (editing) {
      alert("他の項目が編集中のため追加できません");
    } else {
      if (validate(code, useNewCode, newCode)) {
        if (useNewCode) {
          if (codes.indexOf(newCode) === -1) {
            addNewCode(newCode);
            setUseNewCode(false);
            setNewCode("");
            setCode(newCode);
          }
          props.onAddRecord(newCode);
        } else {
          props.onAddRecord(code);
        }
      }
    }
  };

  return (
    <>
      <div className="grid-item">
        {props.lastRecordedTime.getTimeString()} ～ <br />
        現在時刻
      </div>
      <div className="grid-item">
        <CodeCtl
          selectCodeSetter={{ value: code, setValue: setCode }}
          useNewCodeSetter={{ value: useNewCode, setValue: setUseNewCode }}
          newCodeSetter={{ value: newCode, setValue: setNewCode }}
        />
      </div>
      <div className="grid-item">
        <NormalButton onClick={onClickAdd}>add</NormalButton>
      </div>
    </>
  );
};

export default AddTimeRecordGridItem;
