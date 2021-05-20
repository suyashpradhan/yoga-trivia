import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import { Quiz } from "./Pages/Quiz";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
};
