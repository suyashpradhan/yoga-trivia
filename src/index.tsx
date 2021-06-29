import React from "react";
import ReactDOM from "react-dom";
import "./Assets/css/main.css";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { TriviaProvider } from "./context/triviaContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TriviaProvider>
        <App />
      </TriviaProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
