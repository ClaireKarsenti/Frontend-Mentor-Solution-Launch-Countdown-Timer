import { CountDown } from '../assets/styles/CountBox.style';

interface timeProps {
  data: number | string;
  unit: string;
}

const CountBox = ({ data, unit }: timeProps) => {
  return (
    <CountDown>
      <section className="card">
        <div className="card-number-wrapper">
          <span className="card-divider"></span>
          <p className="card-number">{data < 10 ? '0' + data : data}</p>
        </div>
        <h2>{unit}</h2>
      </section>
    </CountDown>
  );
};

export default CountBox;
