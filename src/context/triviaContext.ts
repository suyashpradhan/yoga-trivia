import { createContext, useReducer, useState } from "react";
import { triviaReducer } from "../reducers/triviaReducer";
import {
  AttemptedTrivia,
  Trivia,
  TriviaContextType,
  TriviaData,
  TriviaProviderProp,
} from "./triviaContext.types";

export const initialState: AttemptedTrivia = {
  triviaId: "",
  totalScore: 0,
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
  const [state, triviaDispatch] = useReducer(triviaReducer, initialState);
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
