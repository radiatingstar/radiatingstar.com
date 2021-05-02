import React, { VoidFunctionComponent } from "react"
import styled, { keyframes } from "styled-components"

const logoAnimation = keyframes`
  from {
    --rotation: 0deg;
  }
  to {
    --rotation: 60deg;
  }
`

export const Image = styled.div.attrs({ role: "img", "aria-hidden": true })`
  @property --rotation {
    /* noinspection Stylelint */
    inherits: false;
    initial-value: 0deg;
    syntax: "<angle>";
  }
  --logo-size: 4rem;
  --primary-logo-color: var(--red-100);
  --secondary-logo-color: var(--yellow-700);
  --glyph-size: calc(var(--logo-size) - 1.5rem);
  --glyph-opacity: 0.9;

  display: flex;
  width: var(--logo-size);
  height: var(--logo-size);
  align-items: center;
  justify-content: center;

  animation: ${logoAnimation} 1s linear infinite paused;
  background-image: repeating-conic-gradient(
    from var(--rotation),
    var(--secondary-logo-color) 0deg 30deg,
    var(--primary-logo-color) 30deg 60deg,
    var(--secondary-logo-color) 60deg 90deg,
    var(--primary-logo-color) 90deg 120deg
  );
  border-radius: 10px;
  box-shadow: 5px 5px 0 var(--outline-color, var(--secondary-logo-color)),
    -5px 5px 0 var(--outline-color, var(--secondary-logo-color)),
    -5px -5px var(--outline-color, var(--secondary-logo-color)),
    5px -5px var(--outline-color, var(--secondary-logo-color));
  transition: box-shadow 250ms;

  &:hover,
  &:focus {
    animation-play-state: running;
    --outline-color: white;
    --glyph-size: calc(var(--logo-size) - 0.8rem);
    --glyph-opacity: 1;
  }

  &:active {
    --glyph-size: calc(var(--logo-size) - 1.5rem);
  }
`

const Glyph = styled.span`
  color: white;
  font-size: var(--glyph-size);
  opacity: var(--glyph-opacity);
  text-shadow: 0 0 10px currentColor, 0 0 10px currentColor;
  transition: all 250ms;
`

export const Logo: VoidFunctionComponent = () => {
  return (
    <Image>
      <Glyph>★</Glyph>
    </Image>
  )
}
