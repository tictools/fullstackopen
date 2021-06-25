import useStatistics from "./hooks/use-statistics";

const Statistics = ({ good, neutral, bad }) => {
  const { total, positive, average } = useStatistics({ good, neutral, bad });

  return (
    <section>
      <h2>statistics</h2>
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>average {average}</p>
        <p>positive {positive}</p>
      </div>
    </section>
  );
};

export default Statistics;
