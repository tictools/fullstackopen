import { useState, useEffect } from "react";

const useStatistics = function ({ good, neutral, bad }) {
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    const getTotal = () => good + neutral + bad;
    const getPositive = () => good / getTotal() || 0;
    const getAverage = () => (good + bad * -1) / getTotal() || 0;

    setTotal(getTotal());
    setPositive(getPositive());
    setAverage(getAverage());
  }, [good, neutral, bad]);

  return {
    total,
    positive,
    average,
  };
};

export default useStatistics;
