import { ScoreType } from "../../Pages/Analysis/Analysis.types";

export const Score = ({
  score,
  numberOfCorrectAnswers,
  numberOfWrongAnswers,
}: ScoreType) => {
  return (
    <div className="flex items-center justify-center">
      <div className="border m-8 p-5 card-shadow-lg">
        <div className="text-center font-bold text-3xl text-primary-color">
          Score - {score}
        </div>
        <div className="text-gray-700">
          Number of Correct Answers - {numberOfCorrectAnswers}
        </div>
        <div className="text-gray-700">
          Number of Wrong Answers - {numberOfWrongAnswers}
        </div>
      </div>
    </div>
  );
};
