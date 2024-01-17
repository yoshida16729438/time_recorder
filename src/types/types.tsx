import React from "react";

export type ButtonType = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};
