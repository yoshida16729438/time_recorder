import React from "react";
import { ButtonType } from "../../../types/types";
import ButtonBase from "./ButtonBase";

const SecondaryButton: React.FC<ButtonType> = (props) => {
  return (
    <ButtonBase onClick={props.onClick} backgroundColor="blue">
      {props.children}
    </ButtonBase>
  );
};

export default SecondaryButton;
