import { FC } from "react";
import { TimeSpan } from "../../../../utils/timeUtil";
import "../gridstyle.css";

const TotalTimeGridRow: FC<{ span: TimeSpan; code: string }> = ({ span, code }) => {
  return (
    <>
      <div className="grid-item">{`${span.hours
        .toString()
        .padStart(2, "0")}:${span.minutes.toString().padStart(2, "0")}`}</div>
      <div className="grid-item">{code}</div>
    </>
  );
};

export default TotalTimeGridRow;
