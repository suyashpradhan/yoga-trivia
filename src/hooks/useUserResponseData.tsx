import { useContext } from "react";
import { useNavigate } from "react-router";
import { UserDataContext } from "../context";
import {
  RegisterUserArgumentsType,
  useUserResponseDataType,
} from "../context/UserDataContext/userData.types";
import { useAxios } from "./useAxios";

export const useUserResponseData = (): useUserResponseDataType => {
  const {
    getUserDataResponse,
    getUserDataAfterLogin,
    setAxiosAuthHeader,
    registerUserResponse,
  } = useAxios();
  const {
    isUserLoggedIn,
    userData,
    userDispatch,
    userLoading,
    setIsUserLoggedIn,
    setUserLoading,
  } = useContext(UserDataContext);
  const navigate = useNavigate();

  const getUserData = async (path: string): Promise<void> => {
    const response = await getUserDataResponse(path);
    if (response.success) {
      userDispatch({
        type: "INITIALIZE_USER",
        payload: { userData: response.user },
      });
    }
  };

  const loginUser = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    setUserLoading(true);
    const response = await getUserDataAfterLogin(
      email,
      password,
      "https://yoga-trivia-api.suyashpradhan.repl.co/login"
    );
    if (response.success) {
      setIsUserLoggedIn(true);
      console.log(response);
      setAxiosAuthHeader(response.user.token);
      // eslint-disable-next-line
      const { token, ...userData } = response.user;
      userDispatch({
        type: "INITIALIZE_USER",
        payload: { userData },
      });
      try {
        localStorage.setItem(
          "login",
          JSON.stringify({ isUserLoggedIn: true, token: response.user.token })
        );
      } catch (err) {
        console.error(err);
      }
    }
    setUserLoading(false);
    return response.success;
  };

  const logOutUser = (): void => {
    setUserLoading(true);
    setIsUserLoggedIn(false);
    setAxiosAuthHeader(null);
    userDispatch({ type: "CLEAR_DATA" });
    try {
      localStorage.removeItem("login");
    } catch (err) {
      console.error(err);
    }
    setUserLoading(false);
    navigate("/");
    return;
  };

  const signUpUser = async ({
    name,
    email,
    password,
    path,
  }: RegisterUserArgumentsType): Promise<boolean> => {
    setUserLoading(true);
    const response = await registerUserResponse({
      name,
      email,
      password,
      path,
    });
    if (response.success) {
      setIsUserLoggedIn(true);
      setAxiosAuthHeader(response.user.token);
      // eslint-disable-next-line
      const { token, ...userData } = response.user;
      userDispatch({
        type: "INITIALIZE_USER",
        payload: { userData },
      });
      try {
        localStorage.setItem(
          "login",
          JSON.stringify({ isUserLoggedIn: true, token: response.user.token })
        );
      } catch (err) {
        console.error(err);
      }
    }
    setUserLoading(false);
    return response.success;
  };

  return {
    isUserLoggedIn,
    userData,
    userDispatch,
    userLoading,
    setIsUserLoggedIn,
    setUserLoading,
    getUserData,
    loginUser,
    logOutUser,
    signUpUser,
  };
};
