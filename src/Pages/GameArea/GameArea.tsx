import { useEffect, useReducer } from "react";
import { gameReducer } from "./Reducer/gameReducer";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../../context/game-context";
import { Options } from "../../Components/GameArea/Options";
import { Header } from "../../Components/GameArea/Header";
import { ActionButton } from "../../Components/GameArea/ActionButton";
import { Question } from "../../Components/GameArea/Question";
import { getGameQuestions } from "../../services/GameArea/GameArea";

export const GameArea = (): JSX.Element => {
  const navigate = useNavigate();
  const { dataDispatch } = useGameContext();
  const [state, dispatch] = useReducer(gameReducer, {
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    numberOfCorrectAnswers: 0,
    numberOfWrongAnswers: 0,
  });

  useEffect(() => {
    (async function () {
      const response = await getGameQuestions();
      if ("questions" in response) {
        return dataDispatch({
          type: "SET_DATA",
          payload: response.questions,
        });
      }
      console.log(response);
    })();
  }, []);

  const swipeToNextQuestion = () => {
    setTimeout(() => {
      dispatch({ type: "INCREMENT_QUESTION_NUMBER" });
    }, 500);
  };

  const navigateToScorePage = () => {
    setTimeout(
      () =>
        navigate(`/score`, {
          state: {
            score: state.score,
            numberOfCorrectAnswers: state.numberOfCorrectAnswers,
            numberOfWrongAnswers: state.numberOfWrongAnswers,
          },
        }),
      1000
    );
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen ">
        <div className="max-w-3xl border p-10 shadow-lg">
          <Header
            score={state.score}
            currentQuestionIndex={state.currentQuestionIndex}
          />
          <Question currentQuestionIndex={state.currentQuestionIndex} />
          <Options
            state={state}
            dispatch={dispatch}
            swipeToNextQuestion={swipeToNextQuestion}
          />
          <ActionButton
            swipeToNextQuestion={swipeToNextQuestion}
            navigateToScorePage={navigateToScorePage}
            currentQuestionIndex={state.currentQuestionIndex}
          />
        </div>
      </div>
    </>
  );
};
