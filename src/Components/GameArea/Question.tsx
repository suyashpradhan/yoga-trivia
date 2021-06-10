import { useGameContext } from "../../context/game-context";
import { QuestionProps } from "../../Pages/GameArea/GameArea.types";

export const Question = ({
  currentQuestionIndex,
}: QuestionProps): JSX.Element => {
  const {
    dataState: { questions },
  } = useGameContext();
  return (
    <div className="question">
      {questions.length > 0 && questions[currentQuestionIndex].question}
    </div>
  );
};
