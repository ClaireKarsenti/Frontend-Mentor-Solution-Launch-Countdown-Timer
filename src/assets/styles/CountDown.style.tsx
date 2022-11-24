import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  h1 {
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    line-height: 2rem;
    font-size: 1rem;
    color: var(--white);
    font-weight: var(--fw);
    width: 100%;
    margin-block: -10em 2.5em;
    padding-inline: 1em;
    @media screen and (min-width: 30em) {
      padding-inline: 2em;
    }
    @media screen and (min-width: 50em) {
      padding-inline: 0;
      margin-block: -10em 0.4em;
      font-size: 1rem;
    }
  }
`;

export const CountDownBoxContainer = styled.div`
  display: flex;
  transform: scale(0.5);
  gap: 2em;
  @media screen and (min-width: 40em) {
    padding-block-start: 5em;
    transform: scale(0.7);
  }
  @media screen and (min-width: 50em) {
    padding-block-start: 6em;
    transform: scale(0.8);
  }
  @media screen and (min-width: 60em) {
    padding-block-start: 7em;
    transform: scale(0.9);
  }
  @media screen and (min-width: 80em) {
    padding-block-start: 7em;
    transform: scale(1);
  }
  .card {
    .card-number-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 10em;
      height: 8.75em;
      position: relative;
      background-color: var(--dark-desaturated-blue);
      border-radius: 0.5rem;
      box-shadow: 0px 10px var(--very-dark-mostly-black-blue);
      &::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        background-color: var(--very-dark-mostly-black-blue);
        opacity: 0.4;
        width: 100%;
        height: 50%;
      }
      p {
        color: var(--soft-red);
        font-weight: var(--fw);
        font-size: 6rem;
      }
    }
    h2 {
      font-size: var(--fs);
      text-transform: uppercase;
      letter-spacing: 0.3rem;
      color: var(--grayish-blue);
      margin-block-start: 2em;
    }
    .card-divider {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      transform: translate(0, -70px);
      border-radius: 0;
      width: 100%;
      border-bottom: 1px solid var(--very-dark-blue);
      &::before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        transform: translate(0%, -50%);
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        width: 6px;
        height: 12px;
        background-color: var(--very-dark-blue);
      }
      &::after {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        transform: translate(0%, -50%);
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        width: 6px;
        height: 12px;
        background-color: var(--very-dark-blue);
      }
    }
  }
`;