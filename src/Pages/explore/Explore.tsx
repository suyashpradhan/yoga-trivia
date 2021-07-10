import { Header } from "../../Components/Header";
import { useTrivia, useUserResponseData } from "../../hooks";
import { TriviaDisplayCard } from "../../Components/TriviaDisplayCard";
import { useAxios } from "../../hooks/useAxios";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { BASE_URL } from "../../api/api-url";

export const Explore = (): JSX.Element => {
  const { triviaList, triviaLoading, triviaError } = useTrivia();

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

  return (
    <div className="h-screen bg-brand-background">
      <Header />

      {triviaLoading && <h2>Loading....</h2>}
      {triviaError !== "" && <h2>{triviaError}</h2>}
      <div className="py-12 max-w-7xl mx-auto px-2 ">
        <h1 className="text-5xl leading-normal tracking-tight font-headline font-bold text-black">
          Let's Play
        </h1>
        <p className="text-2xl tracking-tight font-headline font-semibold text-brand-secondaryText">
          Choose a trivia of your choice and start playing...
        </p>

        <div className="mt-16 grid grid-cols-3 gap-8">
          {triviaList.map((trivia) => {
            return (
              <TriviaDisplayCard
                key={trivia._id}
                id={trivia._id}
                triviaName={trivia.triviaName}
                triviaDescription={trivia.triviaDescription}
                triviaTotalPoints={trivia.triviaTotalPoints}
                triviaTotalTime={trivia.triviaTotalTime}
                triviaImage={trivia.triviaImage}
                triviaDifficulty={trivia.triviaDifficulty}
                triviaTotalQuestions={trivia.triviaTotalQuestions}
                triviaNegativePoints={trivia.triviaNegativePoints}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
