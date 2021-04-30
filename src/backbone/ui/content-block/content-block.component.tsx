import styled from "styled-components"

export const ContentBlock = styled.section`
  position: relative;
  overflow: hidden;
  padding: 2rem;
  background: white;
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  @media (prefers-color-scheme: dark) {
    background: var(--black-300);
    color: rgb(200, 200, 200);
  }

  &:after {
    position: absolute;
    top: calc(100% - 4rem);
    right: -3rem;
    color: var(--gray-100);
    content: "★";
    font-size: 13rem;
    line-height: 0;
    pointer-events: none;
    transform: rotate(-25deg);
  }
`
