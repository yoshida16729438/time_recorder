import React, { Dispatch, SetStateAction, useState } from "react";
import { Time } from "../utils/timeUtil";

export type ButtonType = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

export type ValueSetterPair<T> = {
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
};

export type TimeRecord = {
  endTime: Time;
  code: string;
};
