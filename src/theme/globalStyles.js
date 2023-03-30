import { createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
    margin: 0;
    font-family: "Questrial", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    -ms-overflow-style: none;
    scrollbar-width: none;
  
    &::-webkit-scrollbar {
      display: none;
    }
  }
`
