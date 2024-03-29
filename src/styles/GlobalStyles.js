import { createGlobalStyle } from "styled-components";
import variables from "./theme";
import { bp } from "./breakpoints";

const GlobalStyles = createGlobalStyle`
  ${variables};

  html {
    font-size: 62.5%; // If default font size is 16px, then 1rem = 10px
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  ::selection{
    background: var(--darkest-gray);
    color: var(--white);
  }
  
  body {
    margin: 0;
    padding: 0;
    color: var(--white);
    font-family: var(--font-family);
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    margin: 0 0 4.5rem;
    color: var(--foreground);
    font-size: 4.6rem;
    text-align: center;

    @media (max-width: ${bp.md}) {
      font-size: 3.8rem;
    }

    @media (max-width: ${bp.sm}) {
      font-size: 3.3rem;
    }
  }

  h2 {
    margin: 0;
    color: var(--gray);
    font-size: 2.6rem;
    font-weight: 600;
  }

  a {
    text-decoration: none;
  }

  p {
    margin: 0;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: var(--font-sans);
    outline: none;
  }

  table {
    color: var(--gray);
    border-spacing: 0;
    font-size: 1.8rem;

    @media (max-width: ${bp.md}) {
      font-size: 1.6rem;
    }
  }

  th, td {
    padding: 0.8rem 3rem 0.8rem 1rem;

    &:last-child {
      padding-right: 1.5rem;
    }

    @media (max-width: ${bp.md}) {
      padding-right: 1.5rem;
    }
  }

  th {
    font-weight: 600;
  }

  td {
    border-top: 1px solid var(--dark-gray);

    &:first-child {
      font-weight: 600;
    }
  }

  // Targets all tooltips (React Tippy) 
  div[id^="tippy"] {
    p {
      font-size: 1.4rem;
    }
  }

`;

export default GlobalStyles;
