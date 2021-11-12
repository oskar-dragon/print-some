import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import { ContextProvider } from "./context/useContext";

ReactDOM.render(
  <Router>
    <ContextProvider value="" >
      <App />
    </ContextProvider>
  </Router>,
  document.getElementById("root")
);
