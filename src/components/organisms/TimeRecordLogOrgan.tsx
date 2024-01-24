import { FC } from "react";
import Grid from "../molecules/grid/container/Grid";
import TimeRecordLogGridHeader from "../molecules/grid/log/TimeRecordLogGridHeader";
import { Time } from "../../utils/timeUtil";
import { TimeRecord } from "../../types/types";
import TimeRecordLogGridRow from "../molecules/grid/log/TimeRecordLogGridRow";

const TimeRecordLogOrgan: FC<{
  workStartTime: Time;
  records: TimeRecord[];
  onEditRecord: (index: number, newCode: string, newTime: Time) => void;
}> = ({ workStartTime, records, onEditRecord }) => {
  const slicedRecords = records.slice(0, -1);
  
  const startTimes = [
    workStartTime,
    ...records.map((record) => record.endTime),
  ];
  const lastIndex = records.length - 1;
  const lastStartTime =
    lastIndex > 0 ? records[lastIndex - 1].endTime : workStartTime;

  const onEditRecordGenerator =
    (index: number) => (newTime: Time, newCode: string) =>
      onEditRecord(index, newCode, newTime);

  return (
    <Grid columnCount={3}>
      <TimeRecordLogGridHeader />
      {slicedRecords.map((record, index) => {
        return (
          <TimeRecordLogGridRow
            startTime={startTimes[index]}
            record={record}
            onEditRecord={onEditRecordGenerator(index)}
            editTimeLimitMax={records[index + 1].endTime}
            key={index}
          />
        );
      })}
      {lastIndex >= 0 && (
        <TimeRecordLogGridRow
          startTime={lastStartTime}
          record={records[lastIndex]}
          onEditRecord={onEditRecordGenerator(lastIndex)}
          key={lastIndex}
        />
      )}
    </Grid>
  );
};

export default TimeRecordLogOrgan;
