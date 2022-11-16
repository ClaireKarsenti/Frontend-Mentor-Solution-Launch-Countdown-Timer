import styled from 'styled-components';

export const CountDown = styled.div`
  display: flex;
  gap: 2.3em;
  transform: scale(0.5);
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
