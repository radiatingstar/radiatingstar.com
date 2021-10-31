import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --attention-color: red;
    --font-color: black;
  }

  body {
    color: var(--font-color);
    font-family: 'Lato', sans-serif;
  }

  h1,
  h2 {
    font-family: 'Ubuntu', sans-serif;
  }
`
