import React from "react";
import "./buttonTemplate.css";
import { ButtonType } from "../../../types/types";

const ButtonBase: React.FC<ButtonType & { backgroundColor: string }> = (
  props
) => {
  return (
    <button
      onClick={props.onClick}
      className="buttonTemplate"
      style={{ backgroundColor: props.backgroundColor }}
    >
      {props.children}
    </button>
  );
};

export default ButtonBase;
