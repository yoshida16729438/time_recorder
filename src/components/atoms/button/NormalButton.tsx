import React from "react";
import { ButtonType } from "../../../types/types";
import ButtonBase from "./ButtonBase";

const NormalButton: React.FC<ButtonType> = (props) => {
  return (
    <ButtonBase onClick={props.onClick} backgroundColor="green">
      {props.children}
    </ButtonBase>
  );
};

export default NormalButton;
