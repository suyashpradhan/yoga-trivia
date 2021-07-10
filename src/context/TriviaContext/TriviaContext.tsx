import { createContext, useReducer, useState } from "react";
import {
  Trivia,
  TriviaData,
  TriviaProviderProp,
  AttemptedTrivia,
  TriviaContextType,
} from "./trivia.types";
import { quizReducer } from "../../reducers/quizReducer";

export const initialState: AttemptedTrivia = {
  triviaId: "",
  score: 0,
  answerList: [],
};

export const TriviaContext = createContext<TriviaContextType>(
  {} as TriviaContextType
);

export const TriviaProvider = ({
  children,
}: TriviaProviderProp): JSX.Element => {
  const [triviaLoading, setTriviaLoading] = useState<boolean>(true);
  const [triviaList, setTriviaList] = useState<Trivia[]>([]);
  const [currentTrivia, setCurrentTrivia] = useState<TriviaData | null>(null);
  const [state, triviaDispatch] = useReducer(quizReducer, initialState);
  const [triviaError, setTriviaError] = useState<string>("");

  return (
    <TriviaContext.Provider
      value={{
        triviaList,
        triviaLoading,
        currentTrivia,
        currentTriviaAnswer: state,
        triviaDispatch,
        setTriviaList,
        setTriviaLoading,
        triviaError,
        setTriviaError,
        setCurrentTrivia,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
};
