import {
  AttemptedTrivia,
  TriviaActionType,
} from "../context/TriviaContext/trivia.types";

export const quizReducer = (
  state: AttemptedTrivia,
  action: TriviaActionType
): AttemptedTrivia => {
  switch (action.type) {
    case "SET_SCORE":
      return {
        ...state,
        score: action.payload.score,
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
