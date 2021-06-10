import { Question } from "../game-context.types";
export type State = {
  questions: Question[];
};

export type ACTIONTYPE =
  | { type: "SET_DATA"; payload: Question[] }
  | {
      type: "UPDATE_OPTION_STATE";
      payload: { optionIndex: number; questionIndex: number };
    };
