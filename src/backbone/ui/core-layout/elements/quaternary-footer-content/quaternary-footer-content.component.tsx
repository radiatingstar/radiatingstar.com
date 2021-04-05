import React, { VoidFunctionComponent } from "react"
import styled from "styled-components"

const BlockQuote = styled.blockquote`
  color: rgba(255, 255, 255, 0.9);

  @media (min-width: 32rem) {
    margin: 0 0 0 auto;
    max-width: 80%;

    text-align: right;

    // Doesn't fit on some screens due to the badges count, so just hide it there.
    display: none;
  }

  @media (min-width: 64rem) {
    display: block;
  }
`

const Content = styled.p`
  margin: 0;
`

export const QuaternaryFooterContent: VoidFunctionComponent = () => {
  return (
    <BlockQuote>
      <Content>Art lives from constraints and dies from freedom.</Content>
      <cite>—Leonardo da Vinci</cite>
    </BlockQuote>
  )
}
