import { FC } from "react";
import { Time } from "../../utils/timeUtil";
import WorkStartTime from "../molecules/WorkStartTime";

const WorkStartTimeOrgan: FC<{
  workStartTime: Time;
  onSetWorkStartTime: (newTime: Time) => void;
}> = (props) => {
  return (
    <div>
      <WorkStartTime
        value={props.workStartTime}
        onSetValue={props.onSetWorkStartTime}
      />
    </div>
  );
};

export default WorkStartTimeOrgan;
