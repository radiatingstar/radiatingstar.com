import React, { VoidFunctionComponent } from "react"
import styled from "styled-components"

export const Image = styled.div.attrs({ role: "img", "aria-hidden": true })`
  --logo-size: 4rem;
  --primary-logo-color: var(--red-100);
  --secondary-logo-color: var(--yellow-700);

  display: flex;
  width: var(--logo-size);
  height: var(--logo-size);
  align-items: center;
  justify-content: center;

  background-image: repeating-conic-gradient(
    from 0deg,
    var(--secondary-logo-color) 0deg 30deg,
    var(--primary-logo-color) 30deg 60deg,
    var(--secondary-logo-color) 60deg 90deg,
    var(--primary-logo-color) 90deg 120deg
  );
  border-radius: 10px;
  box-shadow: 5px 5px 0 var(--secondary-logo-color),
    -5px 5px 0 var(--secondary-logo-color),
    -5px -5px var(--secondary-logo-color), 5px -5px var(--secondary-logo-color);
`

export const Glyph = styled.span`
  color: white;
  font-size: calc(var(--logo-size) - 1.5rem);
  opacity: 0.9;
  text-shadow: 0 0 10px rgb(255 255 255), 0 0 10px rgb(255 255 255);
`

export const Logo: VoidFunctionComponent = () => {
  return (
    <Image>
      <Glyph>★</Glyph>
    </Image>
  )
}
