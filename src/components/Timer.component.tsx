import { useState, useEffect } from 'react';
import CountBox from './CountBox.component';

import { Section, CountBoxContainer } from '../assets/styles/Timer.style';

function Timer() {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [days, setDays] = useState<number>(0);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const timeToDays = 9 * day;
  const countDownDate = new Date().getTime() + timeToDays;

  useEffect(() => {
    const updateTime = setInterval(() => {
      const now = new Date().getTime();
      const difference = countDownDate - now;

      const newSeconds = Math.floor((difference % minute) / second);
      const newMinutes = Math.floor((difference % hour) / minute);
      const newHours = Math.floor((difference % day) / hour);
      const newDays = Math.floor(difference / day);

      setSeconds(newSeconds);
      setMinutes(newMinutes);
      setHours(newHours);
      setDays(newDays);

      if (difference <= 0) {
        clearInterval(updateTime);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        setDays(0);
      }
    });

    return () => {
      clearInterval(updateTime);
    };
  }, []);

  return (
    <Section>
      <header>
        <h1>We're launching soon</h1>
      </header>
      <CountBoxContainer>
        <CountBox data={days} unit={'days'} />
        <CountBox data={hours} unit={'hours'} />
        <CountBox data={minutes} unit={'minutes'} />
        <CountBox data={seconds} unit={'secondes'} />
      </CountBoxContainer>
    </Section>
  );
}

export default Timer;
