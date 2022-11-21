import { CountDownContainer } from '../assets/styles/CountDown.style';
import { useTimer } from '../hook/useTimer';

type CountDownProps = {
  deadLine: number;
};

const CountDown = ({ deadLine }: CountDownProps) => {
  const { Days, Hours, Minutes, Seconds } = useTimer(deadLine);

  return (
    <CountDownContainer>
      {Object.entries({
        Days,
        Hours,
        Minutes,
        Seconds,
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
