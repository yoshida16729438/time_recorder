import { useState } from "react";
import "./App.css";
import TimeCtl from "./components/atoms/time/TimeCtl";
import NormalButton from "./components/atoms/button/NormalButton";
import SecondaryButton from "./components/atoms/button/SecondaryButton";
import { time } from "./utils/timeUtil";

function App() {
  const [curtime, setCurTime] = useState(time.getCurrent());
  const min = time.fromString("06:00");
  const max = time.fromString("15:00");

  return (
    <div className="App">
      <NormalButton onClick={() => alert("click")}>wei</NormalButton>
      <SecondaryButton onClick={() => alert("secondary")}>
        soiya
      </SecondaryButton>
      <TimeCtl min={min} max={max} value={curtime} onChange={setCurTime} />
    </div>
  );
}

export default App;
