import axios, { AxiosError } from "axios";
import { ErrorMessage, Trivia } from "../../Pages/GameArea/GameArea.types";

export const getGameQuestions = async () => {
  try {
    const { data } = await axios.get<Trivia>(
      `https://v1-yoga-quiz-api.suyashpradhan.repl.co/yoga-quiz`
    );
    console.log(data.trivia);
    return data.trivia;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ErrorMessage>;
      if (serverError && serverError.response) {
        return serverError.response.data;
      }
    }
    return { success: false, errorMessage: error.message as String };
  }
};
