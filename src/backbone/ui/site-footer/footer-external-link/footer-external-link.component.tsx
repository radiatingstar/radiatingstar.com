import styled from "styled-components"
import { ExternalLink } from "../../external-link/external-link.component"

export const FooterExternalLink = styled(ExternalLink)`
  padding: 2px;
  margin: -2px;
  color: white;
  text-decoration: none;
  &:hover {
    color: #ffa500;
  }
  // TODO: Likely move it to some global style.
  &:focus,
  &:active {
    outline: none;
    border-radius: 3px;
    box-shadow: 0 0 0 3px #ffa500;
  }
`
