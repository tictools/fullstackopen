import React, { useState } from "react";
import ReactDOM from "react-dom";

import Button from "./Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncreaseGood = () => {
    setGood((prev) => prev + 1);
  };

  const handleIncreaseNeutral = () => {
    setNeutral((prev) => prev + 1);
  };

  const handleIncreaseBad = () => {
    setBad((prev) => prev + 1);
  };

  const total = () => good + neutral + bad;

  const positive = () => good / total() || 0;

  const average = () => {
    return (good + bad * -1) / total() || 0;
  };

  return (
    <div>
      <section>
        <h2>give feedback</h2>
        <div>
          <Button handleClick={handleIncreaseGood} label="good"></Button>
          <Button handleClick={handleIncreaseNeutral} label="neutral"></Button>
          <Button handleClick={handleIncreaseBad} label="bad"></Button>
        </div>
      </section>
      <section>
        <h2>statistics</h2>
        <div>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {total()}</p>
          <p>average {average()}</p>
          <p>positive {positive()}</p>
        </div>
      </section>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
