import { FC, useState } from "react";

import { CodeContextProvider } from "../../providers/CodeProvider";
import { Time } from "../../utils/timeUtil";
import Header from "../templates/Header";
import WorkStartTimeOrgan from "../organisms/WorkStartTimeOrgan";
import Container from "../templates/Container";
import AddTimeRecordOrgan from "../organisms/AddTimeRecordOrgan";
import { TimeRecord } from "../../types/types";
import TimeRecordLogOrgan from "../organisms/TimeRecordLogOrgan";
import TotalTimeOrgan from "../organisms/TotalTimeOrgan";

const Main: FC = () => {
  const [startTime, setStartTime] = useState(Time.getCurrent());
  const [timeRecords, setTimeRecords] = useState<TimeRecord[]>([]);

  const onAddRecord = (code: string) => {
    setTimeRecords((prev) => [...prev, { endTime: Time.getCurrent(), code }]);
  };

  const onEditRecord = (index: number, newCode: string, newTime: Time) => {
    setTimeRecords((prev) => {
      const newRecords = [...prev];
      newRecords[index].endTime = newTime;
      newRecords[index].code = newCode;
      return newRecords;
    });
  };

  //画面を閉じて/更新してログが消えるのを防止
  window.addEventListener("beforeunload", (e) => {
    //実際はメッセージ表示されず
    e.returnValue = "現在の記録内容が削除されますが、続行しますか？";
  });

  return (
    <CodeContextProvider>
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
          lastRecordedTime={
            timeRecords.length === 0
              ? startTime
              : timeRecords[timeRecords.length - 1].endTime
          }
          onAddRecord={onAddRecord}
        />
        <h2>ログ</h2>
        <TimeRecordLogOrgan
          workStartTime={startTime}
          records={timeRecords}
          onEditRecord={onEditRecord}
        />
        <hr />
        <h1>工数集計</h1>
        <TotalTimeOrgan records={timeRecords} workStartTime={startTime} />
      </Container>
    </CodeContextProvider>
  );
};

export default Main;
