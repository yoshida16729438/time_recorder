import React, { Dispatch, SetStateAction, useState } from "react";

export type ButtonType = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

export type ValueSetterPair<T> = {
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
};
