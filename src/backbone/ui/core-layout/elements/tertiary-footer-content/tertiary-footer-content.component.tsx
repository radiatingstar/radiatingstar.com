import React, { FunctionComponent } from "react"
import styled from "styled-components"

const TertiaryFooterContainer = styled.aside`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 0.2rem;
  justify-items: center;
  @media (min-width: 32rem) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const TertiaryFooterContent: FunctionComponent = ({ children }) => {
  return <TertiaryFooterContainer>{children}</TertiaryFooterContainer>
}
