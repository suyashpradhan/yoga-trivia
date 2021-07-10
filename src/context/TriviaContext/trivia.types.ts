import React, { Dispatch } from "react";

export type Option = {
  _id: string;
  option: string;
  isCorrect: boolean;
};

export type Question = {
  _id: string;
  question: string;
  correctPoints: number;
  negativePoints: number;
  timeInSeconds: string;
  questionImage: string;
  options: Option[];
};

export type TriviaData = {
  _id: string;
  title: string;
  totalTimeInMinutes: string;
  totalScore: number;
  triviaTotalQuestions: number;
  triviaImage: string;
  triviaQuestions: Question[];
};

export type Trivia = {
  _id: string;
  triviaName: string;
  triviaDescription: string;
  triviaDifficulty: string;
  triviaImage: string;
  triviaTotalTime: string;
  triviaTotalPoints: number;
  triviaNegativePoints: number;
  triviaTotalQuestions: number;
};

export type TriviaAnswer = {
  questionId: string;
  selectedOptionId: string;
  isCorrect: boolean;
};

export type AttemptedTrivia = {
  triviaId: string;
  score: number;
  answerList: TriviaAnswer[];
};

export type UserType = {
  _id: string;
  name: string;
  email: string;
  token: string;
};

export type TriviaProviderProp = {
  children: JSX.Element;
};

export type TriviaCardProps = {
  id: string;
  triviaName: string;
  triviaDescription: string;
  triviaTotalTime: string;
  triviaTotalPoints: number;
  triviaDifficulty: string;
  triviaNegativePoints: number;
  triviaTotalQuestions: number;
  triviaImage: string;
};

export type TriviaRules = {
  id: string;
  triviaName: string;
  triviaTotalTime: string;
  triviaTotalPoints: number;
  triviaTotalQuestions: number;
  triviaDifficulty: string;
  triviaNegativePoints: number;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
};

export type QuestionPropType = {
  question: Question;
  loadNextQuestion: () => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export type OptionPropType = {
  option: Option;
  callback: (id: string, isCorrect: boolean) => void;
  loading: boolean;
};

export type TriviaListResponse = {
  success: boolean;
  trivia: Trivia[];
};

export type ServerError = {
  success: false;
  message: string;
};

export type TriviaActionType =
  | {
      type: "RESET_AND_SET_NEW_QUIZ_ID";
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

export type TriviaContextType = {
  triviaList: Trivia[];
  triviaLoading: boolean;
  currentTrivia: TriviaData | null;
  currentTriviaAnswer: AttemptedTrivia;
  triviaDispatch: Dispatch<TriviaActionType>;
  setTriviaList: React.Dispatch<React.SetStateAction<Trivia[]>>;
  setTriviaLoading: React.Dispatch<React.SetStateAction<boolean>>;
  triviaError: string;
  setTriviaError: React.Dispatch<React.SetStateAction<string>>;
  setCurrentTrivia: React.Dispatch<React.SetStateAction<TriviaData | null>>;
};

export type UseTriviaType = {
  triviaList: Trivia[];
  triviaLoading: boolean;
  currentTrivia: TriviaData | null;
  currentTriviaAnswer: AttemptedTrivia;
  getCurrentTriviaData: (_id: string) => Promise<void>;
  triviaDispatch: Dispatch<TriviaActionType>;
  setTriviaList: React.Dispatch<React.SetStateAction<Trivia[]>>;
  setTriviaLoading: React.Dispatch<React.SetStateAction<boolean>>;
  triviaError: string;
  setTriviaError: React.Dispatch<React.SetStateAction<string>>;
  setCurrentTrivia: React.Dispatch<React.SetStateAction<TriviaData | null>>;
};

export type CurrentTriviaResponse = {
  success: boolean;
  trivia: TriviaData;
};
