import useStatistics from "./hooks/use-statistics";
import Statistic from "./Statistic";

const Statistics = ({ good, neutral, bad }) => {
  const { total, positive, average } = useStatistics({ good, neutral, bad });

  return (
    <div>
      <Statistic label="good" value={good} />
      <Statistic label="neutral" value={neutral} />
      <Statistic label="bad" value={bad} />
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </div>
  );
};

export default Statistics;
