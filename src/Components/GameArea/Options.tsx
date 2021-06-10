import { useGameContext } from "../../context/game-context";
import { OptionItem } from "./OptionItem";
import { OptionsProps } from "../../Pages/GameArea/GameArea.types";

export const Options = ({
  state,
  dispatch,
  swipeToNextQuestion,
}: OptionsProps): JSX.Element => {
  const {
    dataState: { questions },
  } = useGameContext();

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-5">
      {questions.length > 0 &&
        questions[state.currentQuestionIndex].options.map((item, index) => (
          <OptionItem
            isRight={item.isRight}
            isSelected={item.isSelected}
            text={item.text}
            index={index}
            currentQuestionIndex={state.currentQuestionIndex}
            dispatch={dispatch}
            swipeToNextQuestion={swipeToNextQuestion}
          />
        ))}
    </div>
  );
};
