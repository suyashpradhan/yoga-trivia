import React, { Dispatch } from "react";
import { TriviaActionType } from "../reducers/triviaAction.types";

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
  timeInSeconds: number;
  options: Option[];
};

export type TriviaData = {
  _id: string;
  triviaName: string;
  triviaDescription: string;
  triviaTotalQuestions: number;
  triviaTotalTime: number;
  triviaDifficulty: string;
  triviaTotalPoints: number;
  triviaImage: string;
  questions: Question[];
};

export type Trivia = {
  _id: string;
  triviaName: string;
  triviaDescription: string;
  triviaTotalPoints: number;
  triviaTotalQuestions: number;
  triviaTotalTime: number;
  triviaDifficulty: string;
  triviaImage: string;
};

export type TriviaAnswer = {
  questionId: string;
  selectedOptionId: string;
  isCorrect: boolean;
};

export type AttemptedTrivia = {
  triviaId: string;
  totalScore: number;
  answerList: TriviaAnswer[];
};

export type UserType = {
  _id: string;
  fullName: string;
  email: string;
  password: string;
  previouslyAttemptedTrivias: AttemptedTrivia[];
};

export type TriviaProviderProp = {
  children: JSX.Element;
};

export type TriviaCardProps = {
  _id: string;
  triviaName: string;
  triviaTotalPoints: number;
  triviaTotalTime: number;
  triviaImage: string;
  triviaDescription: string;
  triviaDifficulty: string;
  isAttempted: false;
};

export type TriviaRulesProps = {
  _id: string;
  triviaName: string;
  triviaTotalPoints: number;
  triviaNegativePoints: number;
  triviaTotalTime: number;
  triviaDescription: string;
  triviaDifficulty: string;
};

export type QuestionPropsType = {
  question: Question;
  nextQuestion: () => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export type OptionPropsType = {
  option: Option;
  callback: (id: string, isCorrect: boolean) => void;
  loading: boolean;
};

export type TriviaResponse = {
  success: boolean;
  trivias: Trivia[];
};

export type ServerError = {
  success: false;
  message: string;
};

export type TriviaContextType = {
  triviaList: Trivia[];
  triviaLoading: boolean;
  currentTrivia: TriviaData | null;
  currentTriviaAnswer: AttemptedTrivia;
  triviaError: string;
  triviaDispatch: Dispatch<TriviaActionType>;
  setTriviaList: React.Dispatch<React.SetStateAction<Trivia[]>>;
  setTriviaLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setTriviaError: React.Dispatch<React.SetStateAction<string>>;
  setCurrentTrivia: React.Dispatch<React.SetStateAction<TriviaData | null>>;
};

export type useTriviaType = {
  triviaList: Trivia[];
  triviaLoading: boolean;
  currentTrivia: TriviaData | null;
  triviaError: string;
  currentTriviaAnswer: AttemptedTrivia;
  getCurrentTriviaData: (_id: string) => Promise<void>;
  triviaDispatch: Dispatch<TriviaActionType>;
  setTriviaList: React.Dispatch<React.SetStateAction<Trivia[]>>;
  setTriviaLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setTriviaError: React.Dispatch<React.SetStateAction<string>>;
  setCurrentTrivia: React.Dispatch<React.SetStateAction<TriviaData | null>>;
};

export type CurrentTriviaResponse = {
  success: boolean;
  quiz: TriviaData;
};
