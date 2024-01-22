import { FC, useState } from "react";
import { useCodeContext } from "../../providers/CodeProvider";
import { time } from "../../utils/timeUtil";
import "./gridstyle.css";
import CodeCtl, { validate } from "../molecules/CodeCtl";
import NormalButton from "../atoms/button/NormalButton";
import { useEditingContext } from "../../providers/EditStatusProvider";

const AddTimeRecordOrgan: FC<{
  lastRecordedTime: time;
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
    <div className="grid grid-3cols">
      <div className="grid-item">時間帯</div>
      <div className="grid-item">実施内容</div>
      <div className="grid-item"></div>
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
    </div>
  );
};

export default AddTimeRecordOrgan;
