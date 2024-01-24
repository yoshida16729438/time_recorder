import React from "react";
import { Time } from "../../../utils/timeUtil";

const TimeCtl: React.FC<{
  min: Time;
  max?: Time;
  value: Time;
  onChange: React.Dispatch<React.SetStateAction<Time>>;
}> = (props) => {
  return (
    <input
      type="time"
      min={props.min.getTimeString()}
      max={props.max?.getTimeString()}
      value={props.value.getTimeString()}
      onChange={(e) => props.onChange(Time.fromString(e.target.value))}
    />
  );
};

export default TimeCtl;
