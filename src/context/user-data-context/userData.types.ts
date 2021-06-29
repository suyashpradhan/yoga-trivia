import { Dispatch } from "react";
import { AttemptedTrivia } from "../triviaContext.types";

export type UserDataProviderProp = {
  children: JSX.Element;
};

export type UserDataType = {
  _id: string | null;
  name: string;
  email: string;
  takenQuizList: AttemptedTrivia[];
};

export type UserActionType =
  | {
      type: "RESET_TAKEN_QUIZ";
      payload: {
        takenQuizList: AttemptedTrivia[];
      };
    }
  | {
      type: "INITIALIZE_USER";
      payload: {
        userData: UserDataType;
      };
    }
  | {
      type: "FLUSH_DATA";
    }
  | {
      type: "SAVE_QUIZ_ANSWER";
      payload: {
        takenQuiz: AttemptedTrivia;
      };
    };

export type UserDataContextType = {
  isUserLoggedIn: boolean;
  userData: UserDataType;
  userLoading: boolean;
  userDispatch: Dispatch<UserActionType>;
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUserLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export type UseUserDataType = {
  isUserLoggedIn: boolean;
  userData: UserDataType;
  userLoading: boolean;
  loginUser: (email: string, password: string) => Promise<boolean>;
  logOutUser: () => void;
  userDispatch: Dispatch<UserActionType>;
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUserLoading: React.Dispatch<React.SetStateAction<boolean>>;
  getUserData: (path: string) => Promise<void>;
  signUpUser: ({
    name,
    email,
    password,
    path,
  }: SignUpArgsType) => Promise<boolean>;
  resetQuizData: (path: string) => Promise<boolean>;
};

export type UserDataResponse = {
  success: boolean;
  user: {
    _id: string | null;
    name: string;
    email: string;
    takenQuizList: AttemptedTrivia[];
  };
};

export type LoginUserDataResponse = {
  success: boolean;
  user: {
    _id: string | null;
    name: string;
    email: string;
    takenQuizList: AttemptedTrivia[];
    token: string;
  };
};

export type ServerError = {
  success: false;
  message: string;
};

export type SubmitUserDataResponse = {
  success: boolean;
};

export type SignUpArgsType = {
  name: string;
  email: string;
  password: string;
  path: string;
};

export type QuizResetResponseType = {
  success: boolean;
  takenQuizList: AttemptedTrivia[];
};
