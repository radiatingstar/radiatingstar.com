import React, { FunctionComponent } from "react"
import styled from "styled-components"

const Section = styled.section`
  border-bottom: 2px solid var(--red-200);
  padding: 2rem calc(60px + 2rem) 2rem 2rem;

  background-color: var(--yellow-500);
  background-image: linear-gradient(
    to left,
    transparent 10px,
    var(--black-300) 10px,
    var(--black-300) 30px,
    transparent 30px,
    transparent 40px,
    var(--black-300) 40px,
    var(--black-300) 60px,
    transparent 60px
  );
  border-radius: 4px;

  color: var(--black-300);

  a {
    color: var(--red-200);
    text-decoration: none;
  }
`

export const RecentSection: FunctionComponent = ({ children }) => {
  return <Section>{children}</Section>
}
