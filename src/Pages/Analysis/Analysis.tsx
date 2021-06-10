import { ScoreType } from "./Analysis.types";
import { useLocation, useParams } from "react-router";
import { Score } from "../../Components/Analysis/Score";
import { Review } from "../../Components/Analysis/Review";

export const Analysis = (): JSX.Element => {
  const location = useLocation();
  const result = location.state as ScoreType;

  return (
    <div className="flex items-center justify-center  mt-8">
      <div className="max-w-3xl p-10">
        <div>
          <Score
            score={result.score}
            numberOfCorrectAnswers={result.numberOfCorrectAnswers}
            numberOfWrongAnswers={result.numberOfWrongAnswers}
          />
          <div className="text-2xl text-primary-color font-semibold">
            Result Analysis
          </div>
          <Review />
        </div>
      </div>
    </div>
  );
};
