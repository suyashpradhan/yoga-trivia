import React from "react";
import ReactDOM from "react-dom";
import "./Assets/css/main.css";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { TriviaProvider, UserDataProvider } from "./context";

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
