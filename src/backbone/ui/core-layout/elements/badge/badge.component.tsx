import React, { VoidFunctionComponent } from "react"
import styled from "styled-components"
import { ExternalLink } from "../../../external-link/external-link.component"

interface Properties {
  href: string
  src: string
  label: string
}

const BadgeLink = styled(ExternalLink)`
  // This centres the links vertically.
  line-height: 0;
`

export const Badge: VoidFunctionComponent<Properties> = ({
  href,
  src,
  label,
}) => {
  return (
    <BadgeLink href={href} nofollow>
      <img alt={`${label} Badge`} src={src} />
    </BadgeLink>
  )
}
