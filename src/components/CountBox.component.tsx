import { CountDown } from '../assets/styles/CountBox.style';

interface timeProps {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

const CountBox = ({ days, hours, minutes, seconds }: timeProps) => {
  return (
    <CountDown>
      <section className="card">
        <div className="card-number-wrapper">
          <span className="card-divider"></span>
          <p className="card-number">
            {days < 10 ? (days = '0' + days) : days}
          </p>
        </div>
        <h2>days</h2>
      </section>
      <section className="card">
        <div className="card-number-wrapper">
          <span className="card-divider"></span>
          <p className="card-number">
            {hours < 10 ? (hours = '0' + hours) : hours}
          </p>
        </div>
        <h2>hours</h2>
      </section>
      <section className="card">
        <div className="card-number-wrapper">
          <span className="card-divider"></span>
          <p className="card-number">
            {minutes < 10 ? (minutes = '0' + minutes) : minutes}
          </p>
        </div>
        <h2>minutes</h2>
      </section>
      <section className="card">
        <div className="card-number-wrapper">
          <span className="card-divider"></span>
          <p className="card-number">
            {seconds < 10 ? (seconds = '0' + seconds) : seconds}
          </p>
        </div>
        <h2>seconds</h2>
      </section>
    </CountDown>
  );
};

export default CountBox;
