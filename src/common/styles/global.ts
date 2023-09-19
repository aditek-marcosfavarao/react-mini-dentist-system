import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${(props) => props.theme['gray-100']};
    color:${(props) => props.theme.dark};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  a {
    color: unset;
    text-decoration: none;
  }

  ::-moz-selection, ::selection {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['green-500']};
  }

  [focus] {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }

  [disabled] {
    opacity: 0.6;
    color:${(props) => props.theme['gray-400']};
    cursor: not-allowed;
  };
`
