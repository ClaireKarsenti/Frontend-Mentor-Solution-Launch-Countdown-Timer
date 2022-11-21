import { useEffect, useMemo, useState } from 'react';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const useTimer = (
  interval = SECOND,
  timeToDays = 8 * DAY + 23 * HOUR + 55 * MINUTE + 41 * SECOND
) => {
  const deadLine = useMemo<number>(() => timeToDays, [timeToDays]);
  const [time, setTime] = useState<number>(deadLine);
  const countDownDate = new Date().getTime() + deadLine;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(countDownDate - Date.now());
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [deadLine, interval]);

  return {
    Days: time / DAY,
    Hours: (time / HOUR) % 24,
    Minutes: (time / MINUTE) % 60,
    Seconds: (time / SECOND) % 60,
  };
};