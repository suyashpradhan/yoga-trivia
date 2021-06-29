import { AttemptedTrivia } from "../context/triviaContext.types";
import { TriviaActionType } from "./triviaAction.types";

export const triviaReducer = (
  state: AttemptedTrivia,
  action: TriviaActionType
) => {
  switch (action.type) {
    case "RESET":
      return {
        totalScore: 0,
        answerList: [],
        triviaId: action.payload.triviaId,
      };
    case "SET_SCORE":
      return {
        ...state,
        totalScore: action.payload.score,
      };
    case "SAVE_ANSWER":
      return {
        ...state,
        answerList: state.answerList.concat(action.payload.answer),
      };
    default:
      return state;
  }
};
