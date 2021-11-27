import styled from "styled-components"

export const PageTitle = styled.h1`
  display: inline-block; /* This makes the gradient end when the text ends. */
  margin: 0;
  background: var(--text-gradient);
  -webkit-background-clip: text;
  color: var(--attention-color);
  font-size: 2rem;
  -webkit-text-fill-color: transparent;

  @media (min-width: 48rem) {
    font-size: 3rem;
  }
`
