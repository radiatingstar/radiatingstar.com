import React, { VoidFunctionComponent } from "react"
import styled from "styled-components"

export const Image = styled.div.attrs({ role: "img", "aria-hidden": true })`
  color: transparent;
  -webkit-text-stroke: 1px var(--attention-color);
  font-size: 3rem;
`

export const Logo: VoidFunctionComponent = () => {
  return <Image>★</Image>
}
