import React, { FunctionComponent } from "react"
import styled from "styled-components"

const Section = styled.section`
  padding: 2rem;
  background: white;
`

export const RecentSection: FunctionComponent = ({ children }) => {
  return <Section>{children}</Section>
}
