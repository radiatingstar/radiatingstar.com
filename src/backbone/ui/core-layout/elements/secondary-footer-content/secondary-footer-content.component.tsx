import React, { FunctionComponent } from "react"
import styled from "styled-components"

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  @media (min-width: 32rem) {
    align-items: flex-end;
    flex-direction: column;
  }
`

export const SecondaryFooterContent: FunctionComponent = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>
}
