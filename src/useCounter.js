import React, { useEffect, useState } from "react";

const useCounter = (val, reset, pause) => {
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    return Math.max(0, val - now);
  };
  const [count, setCount] = useState(calculateTimeRemaining());

  useEffect(() => {
    let interval;

    if (!pause) {
      setCount(calculateTimeRemaining());
      interval = setInterval(() => {
        setCount(calculateTimeRemaining());
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [val, reset, pause]);

  return fun(count);
};

const fun = (count) => {
  const hours = Math.floor((count % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  const minutes = Math.floor((count % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((count % (60 * 1000)) / 1000);

  const format = (value) => (value < 10 ? `0${value}` : value);

  return [format(hours), format(minutes), format(seconds)];
};

export default useCounter;
