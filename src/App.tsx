import { GlobalStyle } from './assets/styles/Global.style';
import { Section } from './assets/styles/CountDown.style';

import CountDown from './components/CountDown.component';
import Footer from './components/Footer.component';

function App() {
 
  return (
    <>
      <GlobalStyle />
      <Section>
        <h1>We're launching soon</h1>
        <CountDown timeToDays={0} />
      </Section>
      <Footer />
    </>
  );
}

export default App;
