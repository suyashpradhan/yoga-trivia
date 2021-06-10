import { Question } from "../../../context/game-context.types";

export type State = {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  numberOfCorrectAnswers: number;
  numberOfWrongAnswers: number;
};

export type ACTIONTYPE =
  | { type: "SET_GAME"; payload: Question[] }
  | { type: "INCREMENT_QUESTION_NUMBER" }
  | { type: "INCREMENT_SCORE"; payload: { points: number } }
  | { type: "INCREMENT_CORRECT_ANSWER_COUNT" }
  | { type: "INCREMENT_WRONG_ANSWER_COUNT" };
