import { FC, useState } from "react";

import { CodeContextProvider } from "../../providers/CodeProvider";
import { EditingProvider } from "../../providers/EditStatusProvider";
import { Time } from "../../utils/timeUtil";
import Header from "../templates/Header";
import WorkStartTimeOrgan from "../organisms/WorkStartTimeOrgan";
import Container from "../templates/Container";
import AddTimeRecordOrgan from "../organisms/AddTimeRecordOrgan";
import { TimeRecord } from "../../types/types";
import TimeRecordLogOrgan from "../organisms/TimeRecordLogOrgan";

const Main: FC = () => {
  const [startTime, setStartTime] = useState(Time.getCurrent());
  const [lastRecordedTime, setLastRecordedTime] = useState(startTime);
  const [timeRecords, setTimeRecords] = useState<TimeRecord[]>([]);

  const onSetWorkStartTime = (newTime: Time) => {
    setStartTime(newTime);
    if (timeRecords.length === 0) setLastRecordedTime(newTime);
  };

  const onAddRecord = (code: string) => {
    const currentTime = Time.getCurrent();
    setLastRecordedTime(currentTime);
    setTimeRecords((prev) => [...prev, { endTime: currentTime, code }]);
  };

  const onEditRecord = (index: number, newCode: string, newTime: Time) => {
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
            onSetWorkStartTime={onSetWorkStartTime}
          />
          <hr />
          <h1>業務切替ログ</h1>
          <h2>レコード追加</h2>
          <AddTimeRecordOrgan
            lastRecordedTime={lastRecordedTime}
            onAddRecord={onAddRecord}
          />
          <h2>ログ</h2>
          <TimeRecordLogOrgan
            workStartTime={startTime}
            records={timeRecords}
            onEditRecord={onEditRecord}
          />
        </Container>
      </EditingProvider>
    </CodeContextProvider>
  );
};

export default Main;
