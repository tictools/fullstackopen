import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { anecdotes } from "./anecdotes";

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
  document.getElementById("root")
);
