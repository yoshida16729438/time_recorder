import React, { useState } from "react";
import { Time } from "../../utils/timeUtil";
import "./workStartTimeStyle.css";
import NormalButton from "../atoms/button/NormalButton";
import SecondaryButton from "../atoms/button/SecondaryButton";
import TimeViewSetting, { validateTime } from "./TimeViewSetting";

const WorkStartTime: React.FC<{
  value: Time;
  onSetValue: (newTime: Time) => void;
}> = (props) => {
  const [editing, setEditing] = useState(false);
  const [time, setTime] = useState(props.value);

  const minTime = Time.fromString("06:00");
  const maxTime = Time.fromString("15:00");

  const onEditStateChange = (newState: boolean) => {
    if (editing && !validateTime(time, minTime, maxTime)) return;
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
          min={minTime}
          max={maxTime}
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
