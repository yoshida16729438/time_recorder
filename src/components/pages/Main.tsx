import { FC, useRef, useState } from "react";

import { CodeContextProvider } from "../../providers/CodeProvider";
import { EditingProvider } from "../../providers/EditStatusProvider";
import { time } from "../../utils/timeUtil";
import CodeCtl from "../molecules/CodeCtl";
import Header from "../templates/Header";
import WorkStartTimeOrgan from "../organisms/WorkStartTimeOrgan";
import Container from "../templates/Container";

const Main: FC = () => {
  const [startTime, setStartTime] = useState(time.getCurrent());
  const [code, setCode] = useState("");
  const newCodeElement = useRef<HTMLInputElement>(null);

  return (
    <CodeContextProvider>
      <EditingProvider>
        <Header />
        <Container>
          <WorkStartTimeOrgan
            workStartTime={startTime}
            setWorkStartTime={setStartTime}
          />
          <hr />
          <CodeCtl
            value={code}
            setValue={setCode}
            newCodeElement={newCodeElement}
          />
        </Container>
      </EditingProvider>
    </CodeContextProvider>
  );
};

export default Main;
