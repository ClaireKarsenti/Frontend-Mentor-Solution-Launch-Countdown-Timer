import { GlobalStyle } from './assets/styles/Global.style';

import CountDown from './components/CountDown.component';
import Footer from './components/Footer.component';

function App() {
 
  return (
    <>
      <GlobalStyle />
      <CountDown deadLine={0} />
      <Footer />
    </>
  );
}

export default App;
