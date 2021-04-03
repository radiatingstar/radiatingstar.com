import React, { FunctionComponent } from "react"
import styled from "styled-components"

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  @media (min-width: 32rem) {
    justify-content: flex-end;
  }
`

export const SecondaryFooterContent: FunctionComponent = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>
}
