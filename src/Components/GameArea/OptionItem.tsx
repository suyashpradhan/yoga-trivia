import { useGameContext } from "../../context/game-context";
import { OptionItemProps } from "../../Pages/GameArea/GameArea.types";

export const OptionItem = ({
  isRight,
  isSelected,
  text,
  index,
  currentQuestionIndex,
  dispatch,
  swipeToNextQuestion,
}: OptionItemProps): JSX.Element => {
  const {
    dataState: { questions },
    dataDispatch,
  } = useGameContext();

  const setOptionStyle = (
    isOptionSelected: Boolean,
    isOptionRight: Boolean
  ): string => {
    if (isOptionSelected && isOptionRight) {
      return "option-btn option-correct";
    } else if (isOptionSelected && !isOptionRight) {
      return "option-btn option-wrong";
    }
    return "option-btn option-unselected";
  };

  const updateScore = (isOptionRight: Boolean) => {
    if (isOptionRight) {
      dispatch({
        type: "INCREMENT_SCORE",
        payload: {
          points: questions[currentQuestionIndex].correctPoints,
        },
      });
      dispatch({
        type: "INCREMENT_CORRECT_ANSWER_COUNT",
      });
    } else {
      dispatch({
        type: "INCREMENT_WRONG_ANSWER_COUNT",
      });
    }
  };

  function updateOptionStateAndScore(isRight: Boolean) {
    dataDispatch({
      type: "UPDATE_OPTION_STATE",
      payload: {
        optionIndex: index,
        questionIndex: currentQuestionIndex,
      },
    });

    updateScore(isRight);
  }
  return (
    <div>
      <button
        disabled={questions[currentQuestionIndex]?.isAttempted}
        className={setOptionStyle(isSelected, isRight)}
        onClick={() => {
          updateOptionStateAndScore(isRight);
          currentQuestionIndex < questions.length - 1 && swipeToNextQuestion();
        }}
      >
        {text}
      </button>
    </div>
  );
};
