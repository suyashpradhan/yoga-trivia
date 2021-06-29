import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import { ExploreQuiz } from "./Pages/ExploreQuiz";
import { TriviaRules } from "./Pages/TriviaRules/TriviaRules";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/quiz" element={<ExploreQuiz />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/rules" element={<TriviaRules />}></Route>
      </Routes>
    </>
  );
};
