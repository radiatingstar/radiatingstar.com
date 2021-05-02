import React, { FunctionComponent } from "react"
import styled from "styled-components"

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  @media (min-width: 32rem) {
    justify-content: flex-end;
    gap: 1.5rem;
  }
`

export const SecondaryFooterContent: FunctionComponent = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>
}
