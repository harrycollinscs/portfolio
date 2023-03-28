import { createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
    // font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`
