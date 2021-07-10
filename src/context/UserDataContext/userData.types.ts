import { Dispatch } from "react";

export type UserDataProviderProp = {
  children: JSX.Element;
};

export type UserDataType = {
  _id: string | null;
  name: string;
  email: string;
};

export type UserActionType =
  | {
      type: "INITIALIZE_USER";
      payload: {
        userData: UserDataType;
      };
    }
  | {
      type: "CLEAR_DATA";
    };

export type UserDataContextType = {
  isUserLoggedIn: boolean;
  userData: UserDataType;
  userLoading: boolean;
  userDispatch: Dispatch<UserActionType>;
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUserLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export type useUserResponseDataType = {
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
  }: RegisterUserArgumentsType) => Promise<boolean>;
};

export type UserDataResponse = {
  success: boolean;
  user: {
    _id: string | null;
    name: string;
    email: string;
  };
};

export type LoginUserDataResponse = {
  success: boolean;
  user: {
    _id: string | null;
    name: string;
    email: string;
    token: string;
  };
};

export type ServerError = {
  success: false;
  message: string;
};

export type RegisterUserArgumentsType = {
  name: string;
  email: string;
  password: string;
  path: string;
};
