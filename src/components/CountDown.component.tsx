import { useEffect, useMemo, useState } from 'react';

import { CountDownContainer } from '../assets/styles/CountDown.style';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const CountDown = ({ timeToDays = 9 * DAY }) => {
  const deadLine = useMemo(() => timeToDays, [timeToDays]);
  const [time, setTime] = useState<number>(deadLine);

  const countDownDate = new Date().getTime() + deadLine;

  useEffect(() => {
    const interval = setInterval(
      () => setTime(countDownDate - Date.now()),
      1000
    );

    return () => clearInterval(interval);
  }, [deadLine]);

  return (
    <CountDownContainer>
      {Object.entries({
        Days: time / DAY,
        Hours: (time / HOUR) % 24,
        Minutes: (time / MINUTE) % 60,
        Seconds: (time / SECOND) % 60,
      }).map(([timeUnit, value]) => (
        <div key={timeUnit} className="card">
          <div className="card-number-wrapper">
            <span className="card-divider"></span>
            <p>{`${Math.floor(value)}`.padStart(2, '0')}</p>
          </div>
          <h2>{timeUnit}</h2>
        </div>
      ))}
    </CountDownContainer>
  );
};

export default CountDown;
