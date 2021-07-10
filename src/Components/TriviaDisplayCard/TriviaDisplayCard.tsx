import { TriviaCardProps } from "../../context/TriviaContext/trivia.types";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { useState } from "react";
import { TriviaModal } from "../Modal/TriviaModal";

export const TriviaDisplayCard = (props: TriviaCardProps): JSX.Element => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      <div className="border border-brand-border shadow-sm p-4 relative">
        <img src={props.triviaImage} className="h-auto w-auto" alt="quiz-one" />
        <div className="absolute h-auto w-auto top-4 left-4">
          <h1 className="bg-brand-dark w-100% inline-block h-8 px-2 py-1  font-headline text-white  text-center rounded-md">
            {props.triviaDifficulty}
          </h1>
        </div>
        <div className="absolute h-auto w-auto top-4 right-4">
          <BsClockHistory className="inline mr-1 text-brand-dark align-baseline " />
          <h1 className="inline align-text-bottom font-headline text-brand-secondaryText font-semibold">
            {props.triviaTotalTime} Min
          </h1>
        </div>
        <div className="mt-8">
          <h1 className=" mb-2 text-3xl font-headline font-semibold text-brand-primaryText">
            {props.triviaName}
          </h1>
          <p className="text-md font-headline font-medium text-brand-secondaryText leading-snug mb-6">
            {props.triviaDescription}
          </p>
          <button
            onClick={() => setModal(true)}
            className="font-headline bg-brand-dark w-full px-4 py-4 rounded-md inline text-lg align-baseline text-white"
          >
            <AiFillPlayCircle className="text-white inline mr-1 h-6 w-6" />
            Enter Trivia
          </button>
        </div>
      </div>
      {modal && (
        <TriviaModal
          id={props.id}
          modal={modal}
          setModal={setModal}
          triviaName={props.triviaName}
          triviaTotalTime={props.triviaTotalTime}
          triviaTotalPoints={props.triviaTotalPoints}
          triviaNegativePoints={props.triviaNegativePoints}
          triviaTotalQuestions={props.triviaTotalQuestions}
          triviaDifficulty={props.triviaDifficulty}
        />
      )}
    </>
  );
};
