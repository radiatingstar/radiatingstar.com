import React, { FunctionComponent } from "react"
import styled from "styled-components"

interface Properties {
  toRight?: boolean
}

export const BasicFooterContent: FunctionComponent<Properties> = ({
  children,
  toRight,
}) => {
  return <ContentContainer toRight={toRight}>{children}</ContentContainer>
}

const ContentContainer = styled.div<Properties>`
  display: flex;
  justify-content: center;
  gap: 2rem;
  @media (min-width: 32rem) {
    justify-content: ${({ toRight }) => (toRight ? "flex-end" : "flex-start")};
  }
`
