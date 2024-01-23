import { FC } from "react";
import { Time } from "../../utils/timeUtil";
import "../molecules/grid/gridstyle.css";
import AddTimeRecordGridHeader from "../molecules/grid/add/AddTimeRecordGridHeader";
import AddTimeRecordGridItem from "../molecules/grid/add/AddTimeRecordGridItem";

const AddTimeRecordOrgan: FC<{
  lastRecordedTime: Time;
  onAddRecord: (code: string) => void;
}> = ({ lastRecordedTime, onAddRecord }) => {
  return (
    <div className="grid grid-3cols">
      <AddTimeRecordGridHeader />
      <AddTimeRecordGridItem
        lastRecordedTime={lastRecordedTime}
        onAddRecord={onAddRecord}
      />
    </div>
  );
};

export default AddTimeRecordOrgan;
