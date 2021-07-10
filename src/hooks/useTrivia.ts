import { useContext } from "react";
import { UseTriviaType } from "../context/TriviaContext/trivia.types";
import { TriviaContext } from "../context/TriviaContext/TriviaContext";
import { useAxios } from "./useAxios";

export const useTrivia = (): UseTriviaType => {
  const { getCurrentTriviaResponse } = useAxios();
  const {
    triviaList,
    triviaLoading,
    currentTrivia,
    currentTriviaAnswer,
    triviaDispatch,
    setTriviaList,
    setTriviaLoading,
    triviaError,
    setTriviaError,
    setCurrentTrivia,
  } = useContext(TriviaContext);

  const getCurrentTriviaData = async (_id: string): Promise<void> => {
    setTriviaLoading(true);
    setTriviaError("");
    const response = await getCurrentTriviaResponse(
      `https://yoga-trivia-api.suyashpradhan.repl.co/trivia/${_id}`
    );
    console.log(response);
    if (response.success === true) {
      setCurrentTrivia(response.trivia);
    }
    !response.success && setTriviaError("Some error occured!");
    setTriviaLoading(false);
  };

  return {
    triviaList,
    triviaLoading,
    currentTrivia,
    currentTriviaAnswer,
    triviaDispatch,
    setTriviaList,
    setTriviaLoading,
    triviaError,
    setTriviaError,
    setCurrentTrivia,
    getCurrentTriviaData,
  };
};
