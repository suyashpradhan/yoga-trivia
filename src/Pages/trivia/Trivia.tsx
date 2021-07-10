import "./trivia.css";
import { useState } from "react";
import { useParams } from "react-router";
import { useTrivia, useUserResponseData } from "../../hooks";
import { QuestionCard } from "../../Components/TriviaCard/TriviaCard";
import { useQuizHelper } from "./trivia-helper";

export const Trivia = (): JSX.Element => {
  const { id } = useParams();
  const { loadNextQuestion, questionNumber } = useQuizHelper(id);
  const { triviaLoading, currentTrivia, triviaError } = useTrivia();
  const { userLoading } = useUserResponseData();
  const [loading, setLoading] = useState<boolean>(false);

  const isLastQuestion =
    currentTrivia && questionNumber === currentTrivia.triviaTotalQuestions - 1;

  const showSkipAndNextBtns = !isLastQuestion && currentTrivia;
  const currentQuestion = currentTrivia?.triviaQuestions[questionNumber];

  return (
    <div className="max-w-7xl mx-auto px-2">
      {triviaLoading && <h2>Loading....</h2>}
      {triviaError !== "" && <h2>{triviaError}</h2>}

      {currentTrivia && (
        <QuestionCard
          question={currentQuestion!}
          loadNextQuestion={loadNextQuestion}
          loading={loading}
          setLoading={setLoading}
        />
      )}

      {showSkipAndNextBtns && (
        <div className="flex justify-between px-2">
          <button
            className="py-2 px-5 font-headline rounded-md
                border-black bg-black text-white text-lg hover:bg-white hover:text-brand-primaryText
                hover:border-black border focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
            disabled={loading}
            onClick={loadNextQuestion}
          >
            Skip Question
          </button>
          <button
            className="py-2 px-5 font-headline rounded-md
                border-brand bg-brand-dark text-white text-lg hover:bg-white hover:text-brand-dark
                hover:border-brand-dark border focus:outline-none focus:ring-2 focus:ring-offset-brand-dark focus:ring-opacity-50"
            disabled={loading}
            onClick={loadNextQuestion}
          >
            Next Question
          </button>
        </div>
      )}

      {isLastQuestion && (
        <button
          disabled={loading}
          className="py-2 px-5 font-headline rounded-md
                border-brand bg-brand-dark text-white text-lg hover:bg-white hover:text-brand-dark
                hover:border-brand-dark border focus:outline-none focus:ring-2 focus:ring-offset-brand-dark focus:ring-opacity-50 mx-auto block"
        >
          {userLoading ? "Submitting.." : "Submit Your Trivia"}
        </button>
      )}
    </div>
  );
};
