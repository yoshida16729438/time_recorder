import React from "react";
import { Time } from "../../utils/timeUtil";
import TimeCtl from "../atoms/time/TimeCtl";

const TimeViewSetting: React.FC<{
  value: Time;
  setValue: React.Dispatch<React.SetStateAction<Time>>;
  editing: boolean;
  min: Time;
  max?: Time;
}> = (props) => {
  return props.editing ? (
    <TimeCtl
      min={props.min}
      max={props.max}
      value={props.value}
      onChange={props.setValue}
    />
  ) : (
    <span>{props.value.getTimeString()}</span>
  );
};

export default TimeViewSetting;

export const validateTime = (value: Time, min: Time, max?: Time) => {
  if (!value.orMore(min)) {
    alert(`時刻は${min.getTimeString()}以上に設定してください`);
    return false;
  }

  const max2 = max || Time.getCurrent();
  if (!max2.orMore(value)) {
    alert(`時刻は${max2.getTimeString()}以内に設定してください`);
    return false;
  }
  return true;
};
