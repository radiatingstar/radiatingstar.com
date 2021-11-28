import styled from "styled-components"

export const FooterLink = styled.a`
  background: var(--font-color);
  font-family: "Nunito", sans-serif;
  text-decoration: none;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
    background: var(--text-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
