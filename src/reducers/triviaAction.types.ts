export type TriviaActionType =
  | {
      type: "RESET";
      payload: { triviaId: string };
    }
  | {
      type: "SET_SCORE";
      payload: { score: number };
    }
  | {
      type: "SAVE_ANSWER";
      payload: {
        answer: {
          questionId: string;
          selectedOptionId: string;
          isCorrect: boolean;
        };
      };
    };
