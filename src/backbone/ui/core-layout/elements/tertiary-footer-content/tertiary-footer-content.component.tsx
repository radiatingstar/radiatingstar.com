import React, { FunctionComponent } from "react"
import styled from "styled-components"

const TertiaryFooterContainer = styled.div`
  display: grid;
  padding: 0.5rem;
  margin-top: 3rem;

  background: var(--black-300);
  border-radius: 4px;

  gap: 0.5rem;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 32rem) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const TertiaryFooterContent: FunctionComponent = ({ children }) => {
  return <TertiaryFooterContainer>{children}</TertiaryFooterContainer>
}
