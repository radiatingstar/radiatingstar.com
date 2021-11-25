import React, { VoidFunctionComponent } from "react"
import styled from "styled-components"

const Container = styled.div.attrs({ role: "img", "aria-hidden": true })`
  --size: 4rem;
  position: relative;
  width: var(--size);
  height: var(--size);

  svg {
    transition: transform 150ms;
  }

  &:hover svg {
    transform: scale(1.05) rotate(5deg);
  }

  &:active svg {
    transform: scale(0.95);
  }
`

export const Image = styled.div`
  position: absolute;
  color: transparent;
  font-size: calc(var(--size) / 2);
  inset: 0.8rem 0 0 1rem;
  -webkit-text-stroke: 5px var(--white-10);
`

export const Logo: VoidFunctionComponent = () => {
  return (
    <Container>
      <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="background" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="rgb(246,0,39)" />
            <stop offset="100%" stopColor="#f92672" />
          </linearGradient>
        </defs>
        <path
          d="
      M 0, 75
      C 0, 6.749999999999997 6.749999999999997, 0 75, 0
      S 150, 6.749999999999997 150, 75
        143.25, 150 75, 150
        0, 143.25 0, 75"
          fill="url('#background')"
        />
      </svg>
      <Image>★</Image>
    </Container>
  )
}
