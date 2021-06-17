import React from "react";
import ReactDOM from "react-dom";

import { Header } from "./Header";
import { Content } from "./Content";
import { Total } from "./Total";

const App = () => {
  const course = "Half Stack application development";
  const CONTENT = {
    PARTS: {
      PART1: "Fundamentals of React",
      PART2: "Using props to pass data",
      PART3: "State of a component",
    },
    EXERCISES: {
      EXERCISES1: 10,
      EXERCISES2: 7,
      EXERCISES3: 14,
    },
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={CONTENT.PARTS} exercises={CONTENT.EXERCISES} />
      <Total exercises={CONTENT.EXERCISES} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
