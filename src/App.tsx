import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import { ExploreQuiz } from "./Pages/ExploreQuiz";
import { Quizz } from "./Pages/Quizz";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/quiz" element={<ExploreQuiz />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/yoga-quiz" element={<Quizz />}></Route>
      </Routes>
    </>
  );
};
