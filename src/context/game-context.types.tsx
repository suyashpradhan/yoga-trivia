import React, { ReactNode } from "react";

export type ContextType = {
  dataState: State;
  dataDispatch: React.Dispatch<ACTIONTYPE>;
};

export type State = {
  questions: Question[];
};

export type ChildrenProps = {
  children: ReactNode;
};

export type Question = {
  id: string;
  question: String;
  correctPoints: number;
  negativePoints: number;
  isAttempted: boolean;
  options: Option[];
};

export type Option = {
  text: String;
  isRight: Boolean;
  isSelected: Boolean;
};

export type ACTIONTYPE =
  | { type: "SET_DATA"; payload: Question[] }
  | {
      type: "UPDATE_OPTION_STATE";
      payload: { optionIndex: number; questionIndex: number };
    };
