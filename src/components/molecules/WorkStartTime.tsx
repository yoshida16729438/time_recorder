import React, { useState } from "react";
import { Time } from "../../utils/timeUtil";
import "./workStartTimeStyle.css";
import NormalButton from "../atoms/button/NormalButton";
import SecondaryButton from "../atoms/button/SecondaryButton";
import TimeViewSetting from "./TimeViewSetting";
import { useEditingContext } from "../../providers/EditStatusProvider";

const WorkStartTime: React.FC<{
  value: Time;
  onSetValue: (newTime: Time) => void;
}> = (props) => {
  const [editing, setEditing] = useState(false);
  const { setEditing: setWholeEditing } = useEditingContext();
  const [time, setTime] = useState(props.value);

  const onEditStateChange = (newState: boolean) => {
    setWholeEditing(newState);
    setEditing(newState);
    if (!newState) props.onSetValue(time);
  };

  return (
    <div className="workStartContainer">
      <div className="workStartLeftItem workStartTime">
        <TimeViewSetting
          value={time}
          setValue={setTime}
          editing={editing}
          min={Time.fromString("06:00")}
          max={Time.fromString("15:00")}
        />
      </div>
      <div className="workStartRightItem">
        {editing ? (
          <SecondaryButton onClick={() => onEditStateChange(false)}>
            save
          </SecondaryButton>
        ) : (
          <NormalButton onClick={() => onEditStateChange(true)}>
            edit
          </NormalButton>
        )}
      </div>
    </div>
  );
};

export default WorkStartTime;
