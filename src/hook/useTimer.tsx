import { useEffect, useState } from 'react';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const useTimer = (
  interval = SECOND,
  deadLine = 8 * DAY + 23 * HOUR + 55 * MINUTE + 41 * SECOND
) => {
  const [timeSpan, setTimeSpan] = useState<number>(deadLine);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeSpan((timeSpan) => timeSpan - 1);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [timeSpan, interval]);

  return {
    Days: Math.floor(timeSpan / DAY),
    Hours: Math.floor((timeSpan / HOUR) % 24),
    Minutes: Math.floor((timeSpan / MINUTE) % 60),
    Seconds: Math.floor((timeSpan / SECOND) % 60),
  };
};