import React, { FunctionComponent } from "react"
import styled from "styled-components"

const PrimaryFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  text-align: center;
  @media (min-width: 32rem) {
    flex-direction: column;
    text-align: left;
  }
`

export const PrimaryFooterContent: FunctionComponent = ({ children }) => {
  return <PrimaryFooterContainer>{children}</PrimaryFooterContainer>
}
