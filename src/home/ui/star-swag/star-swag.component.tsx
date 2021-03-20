import React, { VoidFunctionComponent } from "react"
import styled from "styled-components"

export const Swag = styled.div`
  position: relative;

  margin: 0 auto;
  width: 500px;
  padding-top: 56.25%;

  border-radius: 5px;
  background-image: repeating-conic-gradient(
    from 0deg,
    #ffa500 0deg 30deg,
    #268bd2 30deg 60deg,
    #ffa500 60deg 90deg,
    #268bd2 90deg 120deg
  );
`
export const Star = styled.span.attrs({ role: "img" })`
  color: white;
  font-size: 7rem;

  // Aspect ratio shenanigans.
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const StarSwag: VoidFunctionComponent = () => {
  return (
    <Swag>
      <Star>★</Star>
    </Swag>
  )
}
