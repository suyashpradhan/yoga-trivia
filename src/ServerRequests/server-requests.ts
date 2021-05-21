import axios from "axios";
import { Quiz } from "../Types/quiz-types";
import { yogaQuiz } from "../Api/index";

export const getData = async () => {
  const response = await axios.get<Quiz>(yogaQuiz);
  return response.data;
};
