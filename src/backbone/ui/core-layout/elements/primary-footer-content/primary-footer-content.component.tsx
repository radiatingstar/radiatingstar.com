import React, { FunctionComponent } from "react"
import styled from "styled-components"

const PrimaryFooterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  text-align: center;
  justify-content: center;
  @media (min-width: 32rem) {
    text-align: left;
    flex-direction: column;
  }
`

export const PrimaryFooterContent: FunctionComponent = ({ children }) => {
  return <PrimaryFooterContainer>{children}</PrimaryFooterContainer>
}
