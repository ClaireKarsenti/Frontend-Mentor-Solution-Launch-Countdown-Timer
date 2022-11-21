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
  const countDownDate = new Date().getTime() + deadLine;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeSpan(countDownDate - Date.now());
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [deadLine, interval]);

  return {
    Days: Math.floor(timeSpan / DAY),
    Hours: Math.floor((timeSpan / HOUR) % 24),
    Minutes: Math.floor((timeSpan / MINUTE) % 60),
    Seconds: Math.floor((timeSpan / SECOND) % 60),
  };
};