import { FC, useState } from "react";
import { Time } from "../../../../utils/timeUtil";
import { TimeRecord } from "../../../../types/types";
import { useEditingContext } from "../../../../providers/EditStatusProvider";
import "../gridstyle.css";
import TimeViewSetting from "../../TimeViewSetting";
import CodeCtl, { validate } from "../../CodeCtl";
import NormalButton from "../../../atoms/button/NormalButton";
import { useCodeContext } from "../../../../providers/CodeProvider";

const TimeRecordGridItem: FC<{
  startTime: Time;
  record: TimeRecord;
  onEditRecord: (newTime: Time, newCode: string) => void;
}> = ({ startTime, record, onEditRecord }) => {
  const { codes, addNewCode } = useCodeContext();
  const [editing, setEditing] = useState(false);
  const { editing: wholeEditing, setEditing: setWholeEditing } =
    useEditingContext();
  const [newTime, setNewTime] = useState(record.endTime);
  const [code, setCode] = useState("");
  const [useNewCode, setUseNewCode] = useState(false);
  const [newCode, setNewCode] = useState("");

  const onStartEdit = () => {
    if (wholeEditing) {
      alert("他の項目が編集中のため追加できません");
    } else {
      setEditing(true);
      setWholeEditing(true);
    }
  };

  const onEndEdit = () => {
    if (validate(code, useNewCode, newCode)) {
      if (useNewCode) {
        if (codes.indexOf(newCode) === -1) {
          addNewCode(newCode);
          setUseNewCode(false);
          setNewCode("");
          setCode(newCode);
        }
        onEditRecord(newTime, newCode);
      } else {
        onEditRecord(newTime, code);
      }
      setEditing(false);
      setWholeEditing(false);
    }
  };

  return (
    <>
      <div className="grid-item">
        {startTime.getTimeString()} ～ {""}
        <TimeViewSetting
          value={newTime}
          setValue={setNewTime}
          editing={editing}
        />
      </div>
      <div className="grid-item">
        <CodeCtl
          selectCodeSetter={{ value: code, setValue: setCode }}
          useNewCodeSetter={{ value: useNewCode, setValue: setUseNewCode }}
          newCodeSetter={{ value: newCode, setValue: setNewCode }}
        />
      </div>
      <div className="grid-item">
        <NormalButton onClick={editing ? onEndEdit : onStartEdit}>
          {editing ? "save" : "edit"}
        </NormalButton>
      </div>
    </>
  );
};

export default TimeRecordGridItem;
