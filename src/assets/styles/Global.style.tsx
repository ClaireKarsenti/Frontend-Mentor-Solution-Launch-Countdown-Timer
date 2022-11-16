import { createGlobalStyle } from 'styled-components';
import StarsBG from '../images/bg-stars.svg';
import BG from '../images/pattern-hills.svg';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&display=swap');    
:root {
  --grayish-blue: hsl(237, 18%, 59%);
  --soft-red: hsl(345, 95%, 68%);
  --white: hsl(0, 0%, 100%);
  --dark-desaturated-blue: hsl(236, 21%, 26%);
  --dark-blue-purple:  hsl(240, 17%, 14%);
  --very-dark-blue: hsl(235, 16%, 14%);
  --very-dark-mostly-black-blue: hsl(234, 17%, 12%);
  --fw: 700;
  --fs: 14px
    }
    * {        
      padding: 0;
      margin: 0;
      box-sizing: border-box;        
      
    }

/* Box sizing rules */
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }
  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  /* Set core root defaults */
  html {
    scroll-behavior: smooth;
  }
  /* Set core body defaults */
  body {
    max-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }
  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }
  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

 /* Change the white to any color */
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  
  body {
    background: url(${StarsBG}) no-repeat, url(${BG}) no-repeat, linear-gradient(#1D1E28 0%, #261C2D 97%, #261A2D 100%) no-repeat ;
    background-color: var(--very-dark-blue);
    background-position: center 8%, bottom right 18%;
    font-family: 'Red Hat Text', sans-serif;
    -webkit-font-smoothing: antialised;
    text-rendering: optimizeLegibility;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    overflow: hidden ;
    color: var(--white);
      @media screen and (min-width: 50em) {
      background-size: 100%, 100%;
    }
  }
    `;
