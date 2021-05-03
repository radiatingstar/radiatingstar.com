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
  gap: 2rem;
  text-align: center;
  @media (min-width: 32rem) {
    text-align: ${({ toRight }) => (toRight ? "right" : "left")};
  }
`
