import { FC, useState } from "react";

import { CodeContextProvider } from "../../providers/CodeProvider";
import { EditingProvider } from "../../providers/EditStatusProvider";
import { Time } from "../../utils/timeUtil";
import Header from "../templates/Header";
import WorkStartTimeOrgan from "../organisms/WorkStartTimeOrgan";
import Container from "../templates/Container";
import AddTimeRecordOrgan from "../organisms/AddTimeRecordOrgan";
import { TimeRecord } from "../../types/types";

const Main: FC = () => {
  const [startTime, setStartTime] = useState(Time.getCurrent());
  const [lastRecordedTime, setLastRecordedTime] = useState(startTime);
  const [timeRecords, setTimeRecords] = useState<TimeRecord[]>([]);

  const onAddRecord = (code: string) => {
    const currentTime = Time.getCurrent();
    setLastRecordedTime(currentTime);
    setTimeRecords((prev) => [...prev, { endTime: currentTime, code }]);
  };

  const onEditRecord = (index: number, newTime: Time, newCode: string) => {
    setTimeRecords((prev) => {
      const newRecords = [...prev];
      newRecords[index].endTime = newTime;
      newRecords[index].code = newCode;
      return newRecords;
    });
  };

  return (
    <CodeContextProvider>
      <EditingProvider>
        <Header />
        <Container>
          <h1>勤務開始時刻</h1>
          <WorkStartTimeOrgan
            workStartTime={startTime}
            onSetWorkStartTime={setStartTime}
          />
          <hr />
          <h1>業務切替ログ</h1>
          <h2>レコード追加</h2>
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
