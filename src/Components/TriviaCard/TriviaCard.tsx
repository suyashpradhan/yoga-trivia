import { QuestionPropType } from "../../context/TriviaContext/trivia.types";
import { Option } from "./Option";
import { useQuestionHelper } from "./useQuestionHelper";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo.svg";

export const QuestionCard = ({
  question,
  loadNextQuestion,
  loading,
  setLoading,
}: QuestionPropType): JSX.Element => {
  const { selectOptionOnClick } = useQuestionHelper({
    question,
    loadNextQuestion,
    loading,
    setLoading,
  });

  return (
    <>
      <header className="pt-1">
        <div className="max-w-7xl mx-auto px-2 flex justify-between ">
          <div>
            <Link to="/">
              <img
                src="https://yoga-trivia-assets.s3.ap-south-1.amazonaws.com/logo.svg"
                className="h-24 w-24 flex-1"
                alt="logo"
              ></img>
            </Link>
          </div>
          <ul className="flex justify-center items-center">
            <li>
              <Link to="/explore" className="font-headline">
                <button
                  className="py-2 px-5 rounded-md
                border-brand-danger bg-brand-danger text-white text-lg hover:bg-white hover:text-brand-danger
                hover:border-brand-danger border focus:outline-none focus:ring-2 focus:ring-brand-danger focus:ring-opacity-50"
                >
                  End Trivia
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {console.log(question)}

      <main className="max-w-7xl mx-auto px-2 my-8">
        <h2 className="text-4xl mb-8 leading-normal tracking-tight font-headline font-semibold text-gray-900 text-center">
          <span className="text-2xl text-gray-400 mr-3">Q:</span>
          {question.question}
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {question.options.map((option) => {
            return (
              <Option
                key={option._id}
                option={option}
                callback={selectOptionOnClick}
                loading={loading}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};
