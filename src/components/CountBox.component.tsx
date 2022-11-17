import { CountDown } from '../assets/styles/CountBox.style';

interface timeProps {
  data: number | string;
}

const CountBox = ({ data }: timeProps) => {
  return (
    <CountDown>
      <section className="card">
        <div className="card-number-wrapper">
          <span className="card-divider"></span>
          <p className="card-number">{data < 10 ? '0' + data : data}</p>
        </div>
        <h2>days</h2>
      </section>
    </CountDown>
  );
};

export default CountBox;
