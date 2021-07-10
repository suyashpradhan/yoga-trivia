import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { HashRouter as Router } from "react-router-dom";
import { TriviaProvider, UserDataProvider } from "./context";
import "./assets/css/main.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserDataProvider>
        <TriviaProvider>
          <App />
        </TriviaProvider>
      </UserDataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
