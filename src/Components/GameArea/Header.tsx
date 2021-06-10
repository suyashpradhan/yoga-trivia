import { HeaderProps } from "../../Pages/GameArea/GameArea.types";

export const Header = ({
  score,
  currentQuestionIndex,
}: HeaderProps): JSX.Element => {
  return (
    <div className="flex justify-between">
      <div className="text-lg">Question {currentQuestionIndex + 1}</div>
      <div className="text-lg font-medium text-primary-color">
        Score : {score}
      </div>
    </div>
  );
};
