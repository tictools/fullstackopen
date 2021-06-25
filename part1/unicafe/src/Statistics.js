import useStatistics from "./hooks/use-statistics";
import Statistic from "./Statistic";

const Statistics = ({ good, neutral, bad }) => {
  const { total, positive, average } = useStatistics({ good, neutral, bad });

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <Statistic label="good" value={good} />
          </td>
        </tr>
        <tr>
          <td>
            <Statistic label="neutral" value={neutral} />
          </td>
        </tr>
        <tr>
          <td>
            <Statistic label="bad" value={bad} />
          </td>
        </tr>
        <tr>
          <td>All {total}</td>
        </tr>
        <tr>
          <td>Average {average}</td>
        </tr>
        <tr>
          <td>Positive {positive}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Statistics;
