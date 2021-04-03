import React, { FunctionComponent } from "react"
import styled from "styled-components"

const TertiaryFooterContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  @media (min-width: 32rem) {
    flex-direction: row;
    gap: 0.5rem;
  }
`

export const TertiaryFooterContent: FunctionComponent = ({ children }) => {
  return <TertiaryFooterContainer>{children}</TertiaryFooterContainer>
}
