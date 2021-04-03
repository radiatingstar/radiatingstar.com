import styled from "styled-components"
import { FooterExternalLink } from "../footer-external-link/footer-external-link.component"

export const FooterExternalLinkPill = styled(FooterExternalLink)`
  padding: 1rem;
  border: 1px solid rgb(30, 30, 30);

  display: block;

  background: #ffa500;
  background-clip: padding-box;
  border-radius: 4px;
  line-height: 1;
  color: rgb(30, 30, 30);

  &:hover {
    color: white;
  }
`
