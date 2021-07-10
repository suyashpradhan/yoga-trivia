import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { BASE_URL } from "../api/api-url";
import { useTrivia } from "./useTrivia";
import { useAxios } from "./useAxios";
import { useUserResponseData } from "./useUserResponseData";

export const useData = (): void => {
  const { logOutUser, setIsUserLoggedIn, setUserLoading, getUserData } =
    useUserResponseData();
  const { setTriviaList, setTriviaLoading, setTriviaError } = useTrivia();
  const navigate = useNavigate();
  const { setAxiosBaseURL, setAxiosAuthHeader, getTriviaList } = useAxios();

  const setAxiosIntercept = (): void => {
    const UNAUTHORIZED = 401;
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error?.response?.status === UNAUTHORIZED) {
          logOutUser();
          navigate("/login", { replace: true });
        }
        return Promise.reject(error);
      }
    );
  };

  useEffect(() => {
    (async () => {
      try {
        setAxiosBaseURL(BASE_URL);
        setAxiosIntercept();
        const localLoginData = localStorage.getItem("login");
        if (localLoginData) {
          const loginData: { isUserLoggedIn: boolean; token: string } =
            JSON.parse(localLoginData);
          loginData.isUserLoggedIn && setIsUserLoggedIn(true);
          setAxiosAuthHeader(loginData.token);
          await getUserData("/user");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setUserLoading(false);
        setTriviaError("");
        const response = await getTriviaList("/trivia");
        if (response.success) {
          setTriviaList(response.trivia);
        }
        !response.success && setTriviaError("Some error occured!");
        setTriviaLoading(false);
      }
    })();
  }, []);
};
