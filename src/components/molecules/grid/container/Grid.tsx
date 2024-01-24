import { FC, ReactNode } from "react";
import "../gridstyle.css";

const Grid: FC<{ children: ReactNode; columnCount: 2 | 3 }> = ({
  children,
  columnCount,
}) => {
  return <div className={`grid grid-${columnCount}cols`}>{children}</div>;
};

export default Grid;
