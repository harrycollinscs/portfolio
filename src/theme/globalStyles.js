import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
    margin: 0;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    // remove scrollbar

    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
  }

  body::-webkit-scrollbar {
    display: none !important;
    width: 0 !important;
  }
`
