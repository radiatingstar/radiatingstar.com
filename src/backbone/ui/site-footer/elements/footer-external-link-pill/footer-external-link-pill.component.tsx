import styled from "styled-components"
import { FooterExternalLink } from "../footer-external-link/footer-external-link.component"

export const FooterExternalLinkPill = styled(FooterExternalLink)`
  display: block;
  padding: 1rem;
  border: 1px solid rgb(30, 30, 30);

  background: #ffa500;
  background-clip: padding-box;
  border-radius: 4px;
  color: rgb(30, 30, 30);
  line-height: 1;

  &:hover {
    color: white;
  }
`
