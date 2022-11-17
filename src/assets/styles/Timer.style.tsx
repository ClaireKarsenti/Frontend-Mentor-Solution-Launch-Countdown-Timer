import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  header {
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    line-height: 2rem;
    font-size: 1rem;
    color: var(--white);
    font-weight: var(--fw);
    width: 100%;
    margin-block: -10em 2.5em;
    @media screen and (min-width: 50em) {
      margin-block: -10em 0.4em;
      font-size: 1rem;
    }
    h1 {
      padding-inline: 1em;
      @media screen and (min-width: 30em) {
        padding-inline: 2em;
      }
      @media screen and (min-width: 50em) {
        padding-inline: 0;
      }
    }
  }
`;

export const CountBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
