import { QuestionPropType } from "../../context/TriviaContext/trivia.types";
import { useTrivia } from "../../hooks";

export type UseQuestionHelperType = {
  selectOptionOnClick: (_id: string, isCorrect: boolean) => void;
};

export const useQuestionHelper = ({
  loading,
  setLoading,
  question,
  loadNextQuestion,
}: QuestionPropType): UseQuestionHelperType => {
  const { currentTriviaAnswer, triviaDispatch } = useTrivia();

  const isAlreadyAnswered = (questionId: string): boolean =>
    currentTriviaAnswer.answerList.some(
      (question) => question.questionId === questionId
    );

  const selectOptionOnClick = (_id: string, isCorrect: boolean): void => {
    !loading &&
      !isAlreadyAnswered(question._id) &&
      triviaDispatch({
        type: "SET_SCORE",
        payload: {
          score: isCorrect
            ? currentTriviaAnswer.score + question.correctPoints
            : currentTriviaAnswer.score - question.negativePoints,
        },
      });

    !loading &&
      !isAlreadyAnswered(question._id) &&
      triviaDispatch({
        type: "SAVE_ANSWER",
        payload: {
          answer: {
            questionId: question._id,
            selectedOptionId: _id,
            isCorrect: isCorrect,
          },
        },
      });
    setLoading(true);
    setTimeout(() => {
      loadNextQuestion();
      setLoading(false);
    }, 1000);
  };

  return { selectOptionOnClick };
};
