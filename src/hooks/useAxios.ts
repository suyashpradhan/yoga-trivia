import axios, { AxiosError } from "axios";
import {
  LoginUserDataResponse,
  ServerError,
  UserDataResponse,
  RegisterUserArgumentsType,
} from "../context/UserDataContext/userData.types";

import {
  CurrentTriviaResponse,
  TriviaListResponse,
} from "../context/TriviaContext/trivia.types";

export type UseAxiosReturnType = {
  setAxiosBaseURL: (BASE_URL: string) => void;
  setAxiosAuthHeader: (token: string | null) => void;
  getUserDataAfterLogin: (
    email: string,
    password: string,
    path: string
  ) => Promise<LoginUserDataResponse | ServerError>;
  getUserDataResponse: (
    path: string
  ) => Promise<UserDataResponse | ServerError>;

  registerUserResponse: ({
    name,
    email,
    password,
    path,
  }: RegisterUserArgumentsType) => Promise<LoginUserDataResponse | ServerError>;
  getCurrentTriviaResponse: (
    path: string
  ) => Promise<CurrentTriviaResponse | ServerError>;
  getTriviaList: (path: string) => Promise<TriviaListResponse | ServerError>;
};

export const useAxios = (): UseAxiosReturnType => {
  const setAxiosBaseURL = (BASE_URL: string): void => {
    axios.defaults.baseURL = BASE_URL;
  };

  const setAxiosAuthHeader = (token: string | null): void => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
      return;
    }
    delete axios.defaults.headers.common["Authorization"];
  };

  const getUserDataAfterLogin = async (
    email: string,
    password: string,
    path: string
  ): Promise<LoginUserDataResponse | ServerError> => {
    try {
      const response = await axios.post<LoginUserDataResponse>(path, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<ServerError>;
        if (serverError && serverError.response) {
          return serverError.response.data;
        }
      }
      console.error(error);
      return {
        success: false,
        message: "Something went wrong! No axios error detected.",
      };
    }
  };

  const getUserDataResponse = async (
    path: string
  ): Promise<UserDataResponse | ServerError> => {
    try {
      const response = await axios.get<UserDataResponse>(path);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<ServerError>;
        if (serverError && serverError.response) {
          return serverError.response.data;
        }
      }
      console.error(error);
      return {
        success: false,
        message: "Something went wrong! No axios error detected.",
      };
    }
  };

  const registerUserResponse = async ({
    name,
    email,
    password,
    path,
  }: RegisterUserArgumentsType): Promise<
    LoginUserDataResponse | ServerError
  > => {
    try {
      const response = await axios.post<LoginUserDataResponse>(path, {
        name,
        email,
        password,
      });
      console.log(response);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<ServerError>;
        if (serverError && serverError.response) {
          return serverError.response.data;
        }
      }
      console.error(error);
      return {
        success: false,
        message: "Something went wrong! No axios error detected.",
      };
    }
  };

  const getCurrentTriviaResponse = async (
    path: string
  ): Promise<CurrentTriviaResponse | ServerError> => {
    try {
      const response = await axios.get<CurrentTriviaResponse>(path);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<ServerError>;
        if (serverError && serverError.response) {
          return serverError.response.data;
        }
      }
      console.error(error);
      return {
        success: false,
        message: "Something went wrong! No axios error detected.",
      };
    }
  };

  const getTriviaList = async (
    path: string
  ): Promise<TriviaListResponse | ServerError> => {
    try {
      const response = await axios.get<TriviaListResponse>(path);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<ServerError>;
        if (serverError && serverError.response) {
          return serverError.response.data;
        }
      }
      console.error(error);
      return {
        success: false,
        message: "Something went wrong! No axios error detected.",
      };
    }
  };

  return {
    setAxiosBaseURL,
    setAxiosAuthHeader,
    getUserDataAfterLogin,
    getUserDataResponse,
    registerUserResponse,
    getCurrentTriviaResponse,
    getTriviaList,
  };
};
