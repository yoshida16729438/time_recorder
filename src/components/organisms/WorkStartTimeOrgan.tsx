import { Dispatch, FC, SetStateAction } from "react";
import { time } from "../../utils/timeUtil";
import WorkStartTime from "../molecules/WorkStartTime";

const WorkStartTimeOrgan: FC<{
  workStartTime: time;
  setWorkStartTime: Dispatch<SetStateAction<time>>;
}> = (props) => {
  return (
    <>
      <h1>勤務開始時刻</h1>
      <div>
        <WorkStartTime
          value={props.workStartTime}
          setValue={props.setWorkStartTime}
        />
      </div>
    </>
  );
};

export default WorkStartTimeOrgan;