import React, { useState } from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import Statistics from "./Statistics";
import Statistic from "./Statistic";

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

  const checkStatisticsStatus = () => !!good || !!neutral || !!bad;
  const shouldRenderStatistics = checkStatisticsStatus();

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
        {shouldRenderStatistics ? (
          <Statistics good={good} neutral={neutral} bad={bad} />
        ) : (
          "No feedback given"
        )}
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
