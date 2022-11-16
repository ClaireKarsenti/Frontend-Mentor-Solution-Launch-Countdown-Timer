import styled from 'styled-components';

export const Container = styled.footer`
  place-items: center;
  position: relative;
  bottom: 5em;
  left: 0;
  right: 0;
  font-size: 0.8rem;
  text-align: center;
  @media screen and (min-width: 50em) {
    bottom: 8em;
  }
  .socials a {
    margin-block-end: 1em;
    margin-inline: 1.5em;
    @media screen and (min-width: 50em) {
      margin-block-end: 4em;
    }
    img {
      transition: filter 0.3s ease;
      @media (hover: hover) {
        &:hover {
          filter: invert(52%) sepia(86%) saturate(542%) hue-rotate(302deg)
            brightness(97%) contrast(94%);
        }
      }
    }
  }
  .attribution {
    transition: filter 0.5s ease;
    p span {
      filter: invert(52%) sepia(10%) saturate(927%) hue-rotate(199deg)
        brightness(101%) contrast(88%);
    }
  }
  .attribution,
  p,
  a {
    color: var(--grayish-blue);
    transition: color 0.5s ease-in-out;
  }
  a {
    display: inline-block;
    font-weight: var(--fw);
    @media (hover: hover) {
      &:hover {
        color: var(--soft-red);
        text-decoration: none;
      }
    }
    &:link {
      text-decoration: none;
    }
    &:visited {
      text-decoration: none;
    }
    &:active {
      text-decoration: none;
    }
  }
`;
