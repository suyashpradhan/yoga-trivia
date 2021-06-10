import React from "react";
import { State, ACTIONTYPE } from "./Reducer/GameReducer.types";
import { Question } from "../../context/game-context.types";

export type Trivia = {
  trivia: {
    questions: Question[];
    totalScore: Number;
  };
};

export type ErrorMessage = {
  success: Boolean;
  errorMessage: String;
};

export type OptionItemProps = {
  text: String;
  isRight: Boolean;
  isSelected: Boolean;
  index: number;
  currentQuestionIndex: number;
  dispatch: React.Dispatch<ACTIONTYPE>;
  swipeToNextQuestion: () => void;
};

export type OptionsProps = {
  state: State;
  dispatch: React.Dispatch<ACTIONTYPE>;
  swipeToNextQuestion: () => void;
};

export type HeaderProps = {
  score: number;
  currentQuestionIndex: number;
};

export type SkipButtonProps = {
  swipeToNextQuestion: () => void;
  navigateToScorePage: () => void;
  currentQuestionIndex: number;
};

export type QuestionProps = {
  currentQuestionIndex: number;
};
