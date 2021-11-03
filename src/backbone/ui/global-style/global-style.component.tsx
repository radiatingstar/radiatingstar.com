import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: white;
    --attention-color: red;
    --font-color: black;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background-color: rgb(30, 30, 30);
      --attention-color: rgb(247 53 53);
      --font-color: rgb(220, 220, 220);
    }
  }

  body {
    color: var(--font-color);
    background-color: var(--background-color);
    font-family: 'Lato', sans-serif;
  }

  h1,
  h2 {
    font-family: 'Ubuntu', sans-serif;
  }
`
