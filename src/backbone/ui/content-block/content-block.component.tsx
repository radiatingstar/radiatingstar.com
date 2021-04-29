import styled from "styled-components"

export const ContentBlock = styled.section`
  position: relative;
  overflow: hidden;
  padding: 2rem;
  background: white;
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:after {
    position: absolute;
    top: calc(100% - 4rem);
    right: -3rem;
    color: var(--gray-100);
    content: "★";
    font-size: 13rem;
    line-height: 0;
    transform: rotate(-25deg);
  }
`
