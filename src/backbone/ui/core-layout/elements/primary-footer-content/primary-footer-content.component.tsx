import React, { FunctionComponent } from "react"
import styled from "styled-components"

const PrimaryFooterContainer = styled.div`
  text-align: center;
  @media (min-width: 32rem) {
    text-align: left;
  }
`

export const PrimaryFooterContent: FunctionComponent = ({ children }) => {
  return <PrimaryFooterContainer>{children}</PrimaryFooterContainer>
}
