import React, { useState } from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import Statistics from "./Statistics";

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
