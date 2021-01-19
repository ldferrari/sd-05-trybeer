import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }`

  // https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/
  // à partir da linha 14 é escolha nossa, apenas modelo copiado do tutorial
