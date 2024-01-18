import { FC, useState } from "react";

import TimeCtl from "../atoms/time/TimeCtl";
import NormalButton from "../atoms/button/NormalButton";
import SecondaryButton from "../atoms/button/SecondaryButton";
import { time } from "../../utils/timeUtil";
import CodeCtl from "../molecules/CodeCtl";
import WorkStartTime from "../molecules/WorkStartTime";

const Main: FC = () => {
  const [curtime, setCurTime] = useState(time.getCurrent());
  const min = time.fromString("06:00");
  const max = time.fromString("15:00");
  const [code, setCode] = useState("");

  return (
    <div className="App">
      <NormalButton onClick={() => alert("click")}>wei</NormalButton>
      <SecondaryButton onClick={() => alert("secondary")}>
        soiya
      </SecondaryButton>
      <TimeCtl min={min} max={max} value={curtime} onChange={setCurTime} />
      <CodeCtl value={code} setValue={setCode} />
      <WorkStartTime value={curtime} setValue={setCurTime} />
    </div>
  );
};

export default Main;
