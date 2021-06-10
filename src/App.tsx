import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import { ExploreQuiz } from "./Pages/ExploreQuiz";
import { TriviaRules } from "./Pages/TriviaRules/TriviaRules";
import { GameArea } from "./Pages/GameArea/GameArea";
import { useEffect } from "react";
import axios from "axios";
import { Trivia } from "./Pages/GameArea/GameArea.types";
import { useGameContext } from "./context/game-context";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/quiz" element={<ExploreQuiz />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/rules" element={<TriviaRules />}></Route>
        <Route path="/yoga-quiz" element={<GameArea />}></Route>
      </Routes>
    </>
  );
};
