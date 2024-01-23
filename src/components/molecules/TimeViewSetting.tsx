import React from "react";
import { Time } from "../../utils/timeUtil";
import TimeCtl from "../atoms/time/TimeCtl";

const TimeViewSetting: React.FC<{
  value: Time;
  setValue: React.Dispatch<React.SetStateAction<Time>>;
  editing: boolean;
}> = (props) => {
  return props.editing ? (
    <TimeCtl
      min={Time.fromString("06:00")}
      max={Time.fromString("15:00")}
      value={props.value}
      onChange={props.setValue}
    />
  ) : (
    <span>{props.value.getTimeString()}</span>
  );
};

export default TimeViewSetting;
