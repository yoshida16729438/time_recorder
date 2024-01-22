import { Dispatch, FC, SetStateAction } from "react";
import { time } from "../../utils/timeUtil";
import WorkStartTime from "../molecules/WorkStartTime";

const WorkStartTimeOrgan: FC<{
  workStartTime: time;
  setWorkStartTime: Dispatch<SetStateAction<time>>;
}> = (props) => {
  return (
    <div>
      <WorkStartTime
        value={props.workStartTime}
        setValue={props.setWorkStartTime}
      />
    </div>
  );
};

export default WorkStartTimeOrgan;
