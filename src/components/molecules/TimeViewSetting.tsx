import React from "react";
import { time } from "../../utils/timeUtil";
import TimeCtl from "../atoms/time/TimeCtl";

const TimeViewSetting: React.FC<{
  value: time;
  setValue: React.Dispatch<React.SetStateAction<time>>;
  editing: boolean;
}> = (props) => {
  return props.editing ? (
    <TimeCtl
      min={time.fromString("06:00")}
      max={time.fromString("15:00")}
      value={props.value}
      onChange={props.setValue}
    />
  ) : (
    <span>{props.value.getTimeString()}</span>
  );
};

export default TimeViewSetting;
