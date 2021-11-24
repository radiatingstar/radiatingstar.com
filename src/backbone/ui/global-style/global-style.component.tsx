import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --red-10: rgb(247 53 53);
    --red-20: red;
    --red-30: rgb(246, 0, 39);

    --pink-10: #f92672;
    --pink-20: #d53a9d;

    --purple-10: #743ad5;

    --white-10: white;
    --white-20: rgb(220, 220, 220);

    --black-10: black;
    --black-20: rgb(30, 30, 30);

    --background-color: var(--white-10);
    --attention-color: var(--red-20);
    --supplementary-attention-color: var(--pink-10);
    --font-color: var(--black-10);

    --text-gradient: linear-gradient(90deg, var(--red-30), var(--pink-10));
    --line-gradient: linear-gradient(var(--red-30), var(--pink-10));
    --underline-gradient: linear-gradient(var(--purple-10), var(--pink-20));
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background-color: var(--black-20);
      --attention-color: var(--red-30);
      --font-color: var(--white-20);
    }
  }

  body {
    background-color: var(--background-color);
    color: var(--font-color);
    font-family: 'Lato', sans-serif;
  }

  h1,
  h2 {
    font-family: 'Ubuntu', sans-serif;
  }
`
