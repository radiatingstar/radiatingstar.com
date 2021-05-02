import React, { FunctionComponent } from "react"
import styled from "styled-components"

const Section = styled.section`
  overflow: hidden;
`

export const RecentSection: FunctionComponent = ({ children }) => {
  return <Section>{children}</Section>
}
