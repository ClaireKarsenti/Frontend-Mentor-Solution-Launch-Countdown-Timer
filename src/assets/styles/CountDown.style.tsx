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
    font-size: 1.5rem;
    color: var(--white);
    font-weight: var(--fw);
    width: 100%;
    margin-block: -1em 1em;
    padding-inline: 1em;
    @media screen and (min-width: 50em) {
      padding-inline: 0;
      margin-block: -2em 0;
      font-size: 1.5rem;
    }
  }
`;

export const CountDownBoxContainer = styled.div`
  display: flex;
  transform: scale(0.4);
  gap: 2em;
  @media screen and (min-width: 30em) {
    padding-block-start: 5em;
    transform: scale(0.5);
  }
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
        font-size: 5rem;
      }
    }
    h2 {
      font-size: var(--fs);
      text-transform: uppercase;
      letter-spacing: 0.45rem;
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
      border-bottom: 1px solid rgba(0, 0, 0, 0.25);
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

export const CountDownControl = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-block: 1em;
  gap: 1em;
  @media screen and (min-width: 40em) {
    flex-direction: row;
    margin-block: 3em;
    gap: 2em;
  }
  button {
    cursor: pointer;
    background: var(--soft-red);
    color: var(--white);
    border: none;
    border-radius: 1.5em;
    padding: 0.5em 1em;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 0.1em;
    transition: transform 0.3s ease-in-out, box-shadow 0.4s ease-in-out;
    @media screen and (min-width: 40em) {
      font-size: 1rem;
    }
    @media (hover: hover) {
      &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 2em 0.5em var(--soft-red);
      }
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 0.4;
      @media (hover: hover) {
        &:hover {
          transform: none;
          box-shadow: none;
        }
      }
    }
  }
`;
