import { Link } from "react-router-dom";
import { Header } from "../../Components/Header";
import easy from "../../Assets/images/easy.svg";
import medium from "../../Assets/images/medium.svg";
import hard from "../../Assets/images/hard.svg";
import { BsClockHistory } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";

const startTrivia = () => {
  console.log("started");
};

export const ExploreQuiz = () => {
  return (
    <div className="h-screen bg-brand-background">
      <Header />
      <div className="py-12 max-w-7xl mx-auto px-2 ">
        <h1 className="text-5xl leading-normal tracking-tight font-headline font-bold text-black">
          Let's Play
        </h1>
        <p className="text-2xl tracking-tight font-headline font-semibold text-brand-secondaryText">
          Choose a trivia of your choice and start playing...
        </p>
        <div className="mt-16 grid grid-cols-3 gap-8">
          <div className="border border-brand-border shadow-sm p-4 relative">
            <img src={easy} className="h-auto w-auto" alt="quiz-one" />
            <div className="absolute h-auto w-auto top-4 left-4">
              <h1 className="bg-brand-dark w-100% inline-block h-8 px-2 py-1  font-headline text-white  text-center rounded-md">
                Easy
              </h1>
            </div>
            <div className="absolute h-auto w-auto top-4 right-4">
              <BsClockHistory className="inline mr-1 text-brand-dark align-baseline " />
              <h1 className="inline align-text-bottom font-headline text-brand-secondaryText font-semibold">
                5 Mins
              </h1>
            </div>
            <div className="mt-8">
              <h1 className=" mb-2 text-3xl font-headline font-semibold text-brand-primaryText">
                Yoga Trivia
              </h1>
              <p className="text-md font-headline font-medium text-brand-secondaryText leading-snug mb-6">
                Trivia base on your basic knowledge of Yoga.
              </p>
              <Link to="/rules">
                <button className="font-headline bg-brand-dark w-full px-4 py-4 rounded-md inline text-lg align-baseline text-white">
                  <AiFillPlayCircle className="text-white inline mr-1 h-6 w-6" />
                  Enter Trivia
                </button>
              </Link>
            </div>
          </div>
          <div className="border border-brand-border shadow-sm p-4 relative">
            <img src={medium} className="h-auto w-auto" alt="quiz-two" />
            <div className="absolute inset-4">
              <h1 className="bg-brand-dark w-100% inline-block h-8 px-2 py-1 font-headline text-white  text-center rounded-md">
                Medium
              </h1>
            </div>
            <div className="absolute w-auto top-4 right-4">
              <BsClockHistory className="inline mr-1 text-brand-dark align-baseline " />
              <h1 className="inline align-text-bottom font-headline text-brand-secondaryText font-semibold">
                5 Mins
              </h1>
            </div>
          </div>
          <div className="border border-brand-border shadow-sm p-4 relative">
            <img src={hard} className="h-auto w-auto" alt="quiz-three" />
            <div className="absolute inset-4">
              <h1 className="bg-brand-dark w-100% inline-block h-8 px-2 py-1 font-headline text-white  text-center rounded-md">
                Hard
              </h1>
            </div>
            <div className="absolute w-auto top-4 right-4">
              <BsClockHistory className="inline mr-1 text-brand-dark align-baseline " />
              <h1 className="inline align-text-bottom font-headline text-brand-secondaryText font-semibold">
                5 Mins
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
