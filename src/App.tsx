import { GlobalStyle } from './assets/styles/Global.style';

import CountDown from './components/CountDown.component';
import Footer from './components/Footer.component';

function App() {
  return (
    <>
      <GlobalStyle />
      <CountDown
        deadLine={0}
        Days={0}
        Hours={0}
        Minutes={0}
        Seconds={0}
        setIsStarted={undefined}
        isStarted={false}
        reset={undefined}
      />
      <Footer />
    </>
  );
}

export default App;
