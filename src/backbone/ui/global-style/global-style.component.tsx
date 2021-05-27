import { createGlobalStyle } from "styled-components"
import bodyBackground from "../core-layout/assets/body-background.svg"

export const GlobalStyle = createGlobalStyle`
  /* TODO: definitely need to organise variables better. */
  :root {
    --red-100: #BA1726;
    --red-200: #51161e;
    --red-300: #a31b2d;
    --yellow-300: #e2d3ae;
    --yellow-400: #c98036;
    --yellow-500: #ebb74b;
    --yellow-600: #d7b769;
    --yellow-700: #ffa500;
    --black-300: rgb(30, 30, 30);
    --blue-300: #268bd2;
    --gray-100: rgba(0, 0, 0, 0.05);
    --gray-200: gray;
  }

  body {
    background-color: var(--red-100);
    background-image: url(${bodyBackground});
    background-position: center;
    color: var(--black-300);
    font-family: 'Lato', sans-serif;
  }

  @media (prefers-color-scheme: dark) {
    body {
      background-color: var(--black-300);
    }
  }

  h1,
  h2 {
    font-family: 'Ubuntu', sans-serif;
  }
`
