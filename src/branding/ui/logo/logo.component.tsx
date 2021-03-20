import React, { VoidFunctionComponent } from "react"
import styled from "styled-components"

export const Image = styled.div`
  --logo-size: 4rem;
  width: var(--logo-size);
  height: var(--logo-size);

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background-image: repeating-conic-gradient(
    from 0deg,
    #ffa500 0deg 30deg,
    #268bd2 30deg 60deg,
    #ffa500 60deg 90deg,
    #268bd2 90deg 120deg
  );
`

export const Glyph = styled.span.attrs({ role: "img" })`
  color: white;
  font-size: calc(var(--logo-size) - 1.5rem);
  text-shadow: 0 0 10px rgb(255 255 255), 0 0 10px rgb(255 255 255);
  opacity: 0.8;
`

export const Logo: VoidFunctionComponent = () => {
  return (
    <Image>
      <Glyph>★</Glyph>
    </Image>
  )
}
