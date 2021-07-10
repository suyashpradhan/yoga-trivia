import "./TriviaModal.css";
import { TriviaRules } from "../../context/TriviaContext/trivia.types";
import { useNavigate } from "react-router";

export const TriviaModal = ({
  id,
  triviaName,
  triviaTotalQuestions,
  triviaTotalTime,
  triviaNegativePoints,
  triviaTotalPoints,
  triviaDifficulty,
  setModal,
  modal,
}: TriviaRules): JSX.Element => {
  const navigate = useNavigate();

  const closeModal = (): void => {
    setModal(false);
  };

  const redirect = (): void => {
    navigate(`/trivia/${id}`);
  };

  return (
    <>
      <div className="modal" style={{ display: modal ? "flex" : "none" }}>
        <div className="modalDialog modalDialogCentered">
          <button className="button button-transparent" onClick={closeModal}>
            Close
          </button>
          <div className="font-headline flex flex-col justify-center items-center">
            <div className="max-w-lg bg-white shadow-md rounded-lg overflow-hidden mx-auto">
              <div className="py-4 px-8 mt-3">
                <div className="flex flex-col mb-8">
                  <h2 className="text-gray-700 font-semibold text-2xl tracking-wide mb-2">
                    {triviaName}
                  </h2>
                  <p className="text-gray-500 text-base">
                    With your donation we can reach great lenghts! We can
                    achieve amazing things. We're a small team.
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg">
                  <div className="py-4 px-4">
                    <div className="flex flex-col">
                      <h4 className="text-lg font-semibold mb-3">
                        Here are some rules before you start playing
                      </h4>
                      <div className="flex flex-col text-base text-gray-700">
                        <span className="mb-1">
                          <span className="font-bold">Total time:</span>{" "}
                          {triviaTotalTime} minutes
                        </span>
                        <span className="mb-1">
                          <span className="font-bold">Total questions: </span>
                          {triviaTotalQuestions}
                        </span>
                        <span className="mb-1">
                          {" "}
                          <span className="font-bold">Negative Points: </span>
                          {triviaNegativePoints}
                        </span>
                        <span className="mb-1">
                          {" "}
                          <span className="font-bold">Total Points: </span>{" "}
                          {triviaTotalPoints}
                        </span>
                        <span className="mb-1">
                          {" "}
                          <span className="font-bold">
                            Trivia Difficulty:
                          </span>{" "}
                          {triviaDifficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-4">
                  <button
                    onClick={redirect}
                    className="block m-auto mt-4 px-6 py-4 tracking-wide uppercase text-center shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-sm rounded"
                  >
                    Start A New Game
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
