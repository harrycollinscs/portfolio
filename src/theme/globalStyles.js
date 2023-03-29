import { createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
    transition: all 0.50s linear;
    margin: 0;
    font-family: "Arial", serif;
    font-size: 18px;
    font-family: "Questrial", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
