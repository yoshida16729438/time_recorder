import React, { Dispatch, SetStateAction } from "react";
import { Time } from "../utils/timeUtil";

export type ButtonType = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
};

export type ValueSetterPair<T> = {
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
};

export type TimeRecord = {
  endTime: Time;
  code: string;
};
