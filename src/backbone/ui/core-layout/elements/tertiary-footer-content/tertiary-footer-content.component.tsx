import React, { FunctionComponent } from "react"
import styled from "styled-components"

const TertiaryFooterContainer = styled.aside`
  margin-top: 3rem;
  padding: 0.5rem;
  border: 1px solid black;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  background: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);

  @media (min-width: 32rem) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const TertiaryFooterContent: FunctionComponent = ({ children }) => {
  return <TertiaryFooterContainer>{children}</TertiaryFooterContainer>
}
