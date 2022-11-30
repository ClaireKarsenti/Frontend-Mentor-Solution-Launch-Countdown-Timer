import { useState, useEffect } from 'react';

const SECOND: number = 1000;
const MINUTE: number = SECOND * 60;
const HOUR: number = MINUTE * 60;
const DAY: number = HOUR * 24;

export const useTimer = (
  interval: number = SECOND,
  deadLine: number = 8 * DAY + 23 * HOUR + 55 * MINUTE + 41 * SECOND
) => {
  const [timeSpan, setTimeSpan] = useState<number>(deadLine);
  const [timeIsUp, setTimeIsUp] = useState<boolean>(false);
  const [isStarted, setIsStarted] = useState<boolean>(false);

  // Start and pause buttons:
  useEffect(() => {
    const initialInterval: any = setInterval(() => {
      setTimeSpan((prevCount) => prevCount - SECOND);
    }, SECOND);

    if (!isStarted) {
      clearInterval(initialInterval);
    }

    //Just a simple handler to make sure that the counter doesn't go to infinity negative:
    if (timeSpan === 0) {
      setTimeIsUp(true);
      clearInterval(initialInterval);
      return;
    }

    return () => clearInterval(initialInterval);
  }, [timeSpan, isStarted, interval]);

  // Reset button:
  const reset: () => void = () => setTimeSpan(deadLine);

  return {
    Days: Math.floor(timeSpan / DAY),
    Hours: Math.floor((timeSpan / HOUR) % 24),
    Minutes: Math.floor((timeSpan / MINUTE) % 60),
    Seconds: Math.floor((timeSpan / SECOND) % 60),
    timeIsUp,
    reset,
    isStarted,
    setIsStarted,
    timeSpan,
    setTimeIsUp,
  };
};
