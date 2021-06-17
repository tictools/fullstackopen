export const Content = function ({ parts, exercises }) {
  return (
    <>
      <p>
        {parts.PART1} {exercises.EXERCISES1}
      </p>
      <p>
        {parts.PART2} {exercises.EXERCISES2}
      </p>
      <p>
        {parts.PART3} {exercises.EXERCISES3}
      </p>
    </>
  );
};
