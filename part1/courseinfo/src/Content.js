import { Part } from "./Part";

export const Content = function ({ parts, exercises }) {
  return (
    <>
      <Part part={parts.PART1} exercises={exercises.EXERCISES1} />
      <Part part={parts.PART2} exercises={exercises.EXERCISES2} />
      <Part part={parts.PART3} exercises={exercises.EXERCISES3} />
    </>
  );
};
