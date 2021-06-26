export default function Total({ parts }) {
  const getTotalExercises = () => {
    let total = 0;
    parts.forEach((part) => {
      total += part.exercises;
    });
    return total;
  };

  const totalExercises = getTotalExercises();

  return (
    <p>
      <strong>{`total of ${totalExercises} exercises`}</strong>
    </p>
  );
}
