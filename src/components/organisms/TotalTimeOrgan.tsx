import { FC } from "react";
import Grid from "../molecules/grid/container/Grid";
import TotalTimeGridHeader from "../molecules/grid/total/TotalTimeGridHeader";
import { TimeRecord } from "../../types/types";
import { Time, TimeSpan } from "../../utils/timeUtil";
import TotalTimeGridRow from "../molecules/grid/total/TotalTimeGridRow";

const TotalTimeOrgan: FC<{ records: TimeRecord[]; workStartTime: Time }> = ({
  records,
  workStartTime,
}) => {
  const dic = new Map<string, TimeSpan>();
  let prev = workStartTime;
  records.forEach((record) => {
    if (dic.has(record.code)) {
      dic.set(
        record.code,
        record.endTime.timeSpanFrom(prev).plus(dic.get(record.code)!)
      );
    } else {
      dic.set(record.code, record.endTime.timeSpanFrom(prev));
    }
    prev = record.endTime;
  });

  const keys: string[] = [];
  dic.forEach((_, key) => keys.push(key));

  return (
    <Grid columnCount={2}>
      <TotalTimeGridHeader />
      {keys.map((key) => (
        <TotalTimeGridRow code={key} span={dic.get(key)!} key={key} />
      ))}
    </Grid>
  );
};

export default TotalTimeOrgan;
