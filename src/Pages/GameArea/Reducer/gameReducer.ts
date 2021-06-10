import { State } from "./GameReducer.types";
import { ACTIONTYPE } from "./GameReducer.types";

export function gameReducer(state: State, action: ACTIONTYPE): State {
  switch (action.type) {
    case "SET_GAME":
      return {
        ...state,
        questions: action.payload,
      };
    case "INCREMENT_QUESTION_NUMBER":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    case "INCREMENT_SCORE":
      return {
        ...state,
        score: state.score + action.payload.points,
      };
    case "INCREMENT_CORRECT_ANSWER_COUNT":
      return {
        ...state,
        numberOfCorrectAnswers: state.numberOfCorrectAnswers + 1,
      };
    case "INCREMENT_WRONG_ANSWER_COUNT":
      return {
        ...state,
        numberOfWrongAnswers: state.numberOfWrongAnswers + 1,
      };
    default:
      return state;
  }
}
