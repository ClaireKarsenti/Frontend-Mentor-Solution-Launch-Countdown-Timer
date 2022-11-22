import { useTimer } from '../hook/useTimer';
import { CountDownBoxContainer } from '../assets/styles/CountDown.style';

export type CountDownProps = {
  deadLine: number;
};

export const CountDownBox = ({ deadLine }: CountDownProps) => {
  const { Days, Hours, Minutes, Seconds } = useTimer(deadLine);

  return (
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
  );
};

