import styled from "styled-components"
import { ExternalLink } from "../../../external-link/external-link.component"

export const FooterExternalLink = styled(ExternalLink)`
  margin: -2px;
  color: var(--yellow-700);
  text-decoration: none;

  &:hover {
    color: white;
  }

  /* TODO: Likely move it to some global style. */
  &:focus,
  &:active {
    border-radius: 3px;
    box-shadow: 0 0 0 3px #ffa500;
    outline: none;
  }
`
