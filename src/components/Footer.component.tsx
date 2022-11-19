import facebook from '../assets/images/icon-facebook.svg';
import instagram from '../assets/images/icon-instagram.svg';
import pInterest from '../assets/images/icon-pinterest.svg';

import { Container } from '../assets/styles/Footer.style';

const Footer = () => {
  return (
    <Container>
      <div className="socials">
        <a href="https://www.facebook.com/" aria-label="facebook">
          <img src={facebook} alt="Facebook Logo" />
        </a>
        <a href="https://pinterest.com/" aria-label="pInterest">
          <img src={pInterest} alt="pInterest Logo" />
        </a>
        <a href="https://instagram.com/" aria-label="instagram">
          <img src={instagram} alt="Instagram Logo" />
        </a>
      </div>
      <div className="attribution">
        <p>
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded with <span className="heart">🤍</span> by{' '}
          <a href="https://www.linkedin.com/in/claire-karsenti/">
            Claire Karsenti
          </a>
          .
        </p>
      </div>
    </Container>
  );
};

export default Footer;
