import { CountDownBoxContainer } from '../assets/styles/CountDown.style';

import { CountDownProps } from './CountDown.component';

export const CountDownBox = ({
  Days,
  Hours,
  Minutes,
  Seconds,
  setIsStarted,
  isStarted,
  reset,
}: CountDownProps) => {
  return (
    <>
      <CountDownBoxContainer>
        {Object.entries({
          Days,
          Hours,
          Minutes,
          Seconds,
        }).map(([timeUnit, value]) => (
          <div key={timeUnit} className="card">
            <div className="card-number-wrapper">
              <span className="card-divider"></span>
              <p>{`${value}`.padStart(2, '0')}</p>
            </div>
            <h2>{timeUnit}</h2>
          </div>
        ))}
      </CountDownBoxContainer>
      <div>
        <button onClick={() => setIsStarted(!isStarted)}>
          {isStarted ? 'pause' : 'start'}
        </button>
        <button onClick={reset} disabled={!isStarted}>
          reset
        </button>
      </div>
    </>
  );
};
