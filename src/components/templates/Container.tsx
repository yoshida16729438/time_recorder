import { FC, ReactNode } from "react";
import "./Container.css";

const Container: FC<{ children: ReactNode }> = (props) => {
  return <div className="container">{props.children}</div>;
};

export default Container;
