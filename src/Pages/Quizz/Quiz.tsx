import { useEffect } from "react";
import { QuestionCard } from "../../Components/QuestionCard";
export const Quizz = () => {
  /* useEffect(() => {
    try {
      (async () => {
        const quizData = await getData();
        setDetails(quizData);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []); */

  return (
    <div>
      <h1>Inside quiz</h1>
      <QuestionCard />
      <br />
    </div>
  );
};
