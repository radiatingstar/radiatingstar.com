import React, { FunctionComponent } from "react"
import styled from "styled-components"

const Section = styled.section`
  overflow: hidden;
  background-color: var(--yellow-500);
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
