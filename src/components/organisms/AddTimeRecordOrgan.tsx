import { FC } from "react";
import { Time } from "../../utils/timeUtil";
import "../molecules/grid/gridstyle.css";
import AddTimeRecordGridHeader from "../molecules/grid/add/AddTimeRecordGridHeader";
import AddTimeRecordGridRow from "../molecules/grid/add/AddTimeRecordGridRow";
import Grid from "../molecules/grid/container/Grid";

const AddTimeRecordOrgan: FC<{
  lastRecordedTime: Time;
  onAddRecord: (code: string) => void;
}> = ({ lastRecordedTime, onAddRecord }) => {
  return (
    <Grid columnCount={3}>
      <AddTimeRecordGridHeader />
      <AddTimeRecordGridRow
        lastRecordedTime={lastRecordedTime}
        onAddRecord={onAddRecord}
      />
    </Grid>
  );
};

export default AddTimeRecordOrgan;
