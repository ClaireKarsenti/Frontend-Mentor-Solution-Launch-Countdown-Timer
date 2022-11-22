import { useTimer } from '../hook/useTimer';

import { CountDownBox, CountDownProps } from './CountDownBox.component';
import { Section } from '../assets/styles/CountDown.style';

const CountDown = ({ deadLine }: CountDownProps) => {
  const { timeIsUp } = useTimer(deadLine);

  return (
    <Section>
      {timeIsUp ? (
        <h1>time is up!</h1>
      ) : (
        <>
          <h1>We're launching soon</h1>
          <CountDownBox deadLine={0} />
        </>
      )}
    </Section>
  );
};

export default CountDown;
