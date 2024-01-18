import React, { useState } from "react";
import { time } from "../../utils/timeUtil";
import "./workStartTimeStyle.css";
import NormalButton from "../atoms/button/NormalButton";
import SecondaryButton from "../atoms/button/SecondaryButton";
import TimeViewSetting from "./TimeViewSetting";

const WorkStartTime: React.FC<{
  value: time;
  setValue: React.Dispatch<React.SetStateAction<time>>;
}> = (props) => {
  const [editing, setEditing] = useState(false);

  return (
    <div className="workStartContainer">
      <div className="workStartLeftItem workStartTime">
        <TimeViewSetting
          value={props.value}
          setValue={props.setValue}
          editing={editing}
        />
      </div>
      <div className="workStartRightItem">
        {editing ? (
          <SecondaryButton onClick={() => setEditing(false)}>
            save
          </SecondaryButton>
        ) : (
          <NormalButton onClick={() => setEditing(true)}>edit</NormalButton>
        )}
      </div>
    </div>
  );
};

export default WorkStartTime;
