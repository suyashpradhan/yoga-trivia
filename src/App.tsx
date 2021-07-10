import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import { Explore } from "./Pages/explore";
import { Register } from "./Pages/Register";
import { Error } from "./Components/Error";
import { Login } from "./Pages/Login";
import { PrivateRoute } from "./Components";
import { Trivia } from "./Pages/trivia";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <PrivateRoute path="/trivia/:id" element={<Trivia />} />
        {/* <PrivateRoute path="/trivia/:id/result" element={<Result />} /> */}
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
};
