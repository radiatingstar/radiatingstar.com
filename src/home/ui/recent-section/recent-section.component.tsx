import React, { FunctionComponent } from "react"
import styled from "styled-components"

const Section = styled.section`
  padding: 2rem calc(60px + 2rem) 2rem 2rem;

  background-color: var(--yellow-500);
  background-image: linear-gradient(
    to left,
    transparent 10px,
    var(--yellow-400) 10px,
    var(--yellow-400) 30px,
    transparent 30px,
    transparent 40px,
    var(--yellow-400) 40px,
    var(--yellow-400) 60px,
    transparent 60px
  );
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  color: var(--black-300);

  a {
    color: var(--red-200);
    text-decoration: none;
  }
`

export const RecentSection: FunctionComponent = ({ children }) => {
  return <Section>{children}</Section>
}
