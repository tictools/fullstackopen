export const Total = ({ exercises }) => {
  const { EXERCISES1, EXERCISES2, EXERCISES3 } = exercises;
  return <p>{`Number of exercises ${EXERCISES1 + EXERCISES2 + EXERCISES3}`}</p>;
};
