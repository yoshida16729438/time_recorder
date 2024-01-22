import { FC, useState } from "react";

import { CodeContextProvider } from "../../providers/CodeProvider";
import { EditingProvider } from "../../providers/EditStatusProvider";
import { time } from "../../utils/timeUtil";
import Header from "../templates/Header";
import WorkStartTimeOrgan from "../organisms/WorkStartTimeOrgan";
import Container from "../templates/Container";
import AddTimeRecordOrgan from "../organisms/AddTimeRecordOrgan";

const Main: FC = () => {
  const [startTime, setStartTime] = useState(time.getCurrent());
  const [lastRecordedTime, setLastRecordedTime] = useState(startTime);

  const onAddRecord = (code: string) => {
    const currentTime = time.getCurrent();
    setLastRecordedTime(currentTime);
  };

  return (
    <CodeContextProvider>
      <EditingProvider>
        <Header />
        <Container>
          <h1>勤務開始時刻</h1>
          <WorkStartTimeOrgan
            workStartTime={startTime}
            setWorkStartTime={setStartTime}
          />
          <hr />
          <h1>業務切替ログ</h1>
          <h2>ラップタイム追加</h2>
          <AddTimeRecordOrgan
            lastRecordedTime={lastRecordedTime}
            onAddRecord={onAddRecord}
          />
        </Container>
      </EditingProvider>
    </CodeContextProvider>
  );
};

export default Main;
