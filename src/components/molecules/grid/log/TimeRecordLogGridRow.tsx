import { FC, useState } from "react";
import { Time } from "../../../../utils/timeUtil";
import { TimeRecord } from "../../../../types/types";
import "../gridstyle.css";
import TimeViewSetting, { validateTime } from "../../TimeViewSetting";
import CodeCtl, { validateCode } from "../../CodeCtl";
import NormalButton from "../../../atoms/button/NormalButton";
import { useCodeContext } from "../../../../providers/CodeProvider";
import SecondaryButton from "../../../atoms/button/SecondaryButton";

const TimeRecordLogGridRow: FC<{
  startTime: Time;
  record: TimeRecord;
  onEditRecord: (newTime: Time, newCode: string) => void;
  editTimeLimitMax?: Time;
  idSuffix: string;
}> = ({ startTime, record, onEditRecord, editTimeLimitMax, idSuffix }) => {
  const { codes, addNewCode } = useCodeContext();
  const [editing, setEditing] = useState(false);
  const [newTime, setNewTime] = useState(record.endTime);
  const [code, setCode] = useState(record.code);
  const [useNewCode, setUseNewCode] = useState(false);
  const [newCode, setNewCode] = useState("");

  const onStartEdit = () => {
    setEditing(true);
  };

  const onEndEdit = () => {
    if (!validateTime(newTime, startTime, editTimeLimitMax)) return;
    if (!validateCode(code, useNewCode, newCode)) return;

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
  };

  return (
    <>
      <div className="grid-item">
        {`${startTime.getTimeString()} ～ `}
        <TimeViewSetting
          value={newTime}
          setValue={setNewTime}
          editing={editing}
          min={startTime}
          max={editTimeLimitMax}
        />
      </div>
      <div className="grid-item">
        {editing ? (
          <CodeCtl
            selectCodeSetter={{ value: code, setValue: setCode }}
            useNewCodeSetter={{ value: useNewCode, setValue: setUseNewCode }}
            newCodeSetter={{ value: newCode, setValue: setNewCode }}
            idSuffix={idSuffix}
          />
        ) : (
          code
        )}
      </div>
      <div className="grid-item">
        {editing ? (
          <SecondaryButton onClick={onEndEdit}>save</SecondaryButton>
        ) : (
          <NormalButton onClick={onStartEdit}>edit</NormalButton>
        )}
      </div>
    </>
  );
};

export default TimeRecordLogGridRow;
