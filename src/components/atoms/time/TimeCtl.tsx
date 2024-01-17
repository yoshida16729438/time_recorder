import React from "react";
import { time } from "../../../utils/timeUtil";

const TimeCtl: React.FC<{
  min: time;
  max: time;
  value: time;
  onChange: React.Dispatch<React.SetStateAction<time>>;
}> = (props) => {
  return (
    <input
      type="time"
      min={props.min.getTimeString()}
      max={props.max.getTimeString()}
      value={props.value.getTimeString()}
      onChange={(e) => props.onChange(time.fromString(e.target.value))}
    />
  );
};

export default TimeCtl;
