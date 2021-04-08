import React, { FunctionComponent } from "react"
import styled from "styled-components"

const Section = styled.section`
  border-bottom: 2px solid var(--red-200);
  padding: 2rem;

  // FIXME: Doesn't look well.
  background-color: white;
  background-image: radial-gradient(var(--yellow-400) 10px, transparent 0),
    radial-gradient(var(--yellow-400) 10px, transparent 0);
  background-size: 60px 60px;
  background-position: 0 0, 30px 30px;
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
