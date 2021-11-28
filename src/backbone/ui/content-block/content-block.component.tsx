import styled from "styled-components"

export const ContentBlock = styled.section<{ attentionGrabbing?: boolean }>`
  position: relative;
  overflow: hidden;
  padding: 2rem;
  background: var(--background-color);
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`
