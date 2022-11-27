import { useTimer } from '../hook/useTimer';

import { CountDownBox } from './CountDownBox.component';
import { Section } from '../assets/styles/CountDown.style';

export type CountDownProps = {
  deadLine: number;
  Days: number;
  Hours: number;
  Minutes: number;
  Seconds: number;
  setIsStarted: any;
  isStarted: boolean;
  reset: any;
};

const CountDown = ({ deadLine }: CountDownProps) => {
  const {
    timeIsUp,
    Days,
    Hours,
    Minutes,
    Seconds,
    setIsStarted,
    isStarted,
    reset,
  } = useTimer(deadLine);

  return (
    <Section>
      {timeIsUp ? (
        <h1>time is up!</h1>
      ) : (
        <>
          <h1>we're launching soon</h1>
          <CountDownBox
            deadLine={0}
            Days={Days}
            Hours={Hours}
            Minutes={Minutes}
            Seconds={Seconds}
            setIsStarted={setIsStarted}
            isStarted={isStarted}
            reset={reset}
          />
        </>
      )}
    </Section>
  );
};

export default CountDown;
