import { useTrivia, useUserResponseData } from "../../hooks";
import { useEffect, useState } from "react";

export type UseTriviaHelperType = {
  loadNextQuestion: () => void;
  questionNumber: number;
};

export const useQuizHelper = (id: string): UseTriviaHelperType => {
  const { userLoading } = useUserResponseData();
  const {
    setCurrentTrivia,
    triviaDispatch,
    getCurrentTriviaData,
    currentTrivia,
  } = useTrivia();
  const [questionNumber, setQuestionNumber] = useState<number>(0);

  console.log(
    currentTrivia,
    questionNumber,
    currentTrivia?.triviaTotalQuestions
  );

  useEffect(() => {
    setCurrentTrivia(null);
    triviaDispatch({
      type: "RESET_AND_SET_NEW_QUIZ_ID",
      payload: { triviaId: id },
    });
  }, []);

  useEffect(() => {
    !userLoading && getCurrentTriviaData(id);
  }, [userLoading]);

  const loadNextQuestion = (): void => {
    if (
      currentTrivia &&
      questionNumber < currentTrivia.triviaTotalQuestions - 1
    ) {
      setQuestionNumber((questionNumber) => questionNumber + 1);
    }
  };

  return { loadNextQuestion, questionNumber };
};
