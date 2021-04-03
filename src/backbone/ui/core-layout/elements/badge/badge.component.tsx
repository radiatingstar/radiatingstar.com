import React, { VoidFunctionComponent } from "react"
import { ExternalLink } from "../../../external-link/external-link.component"

interface Properties {
  href: string
  src: string
  label: string
}

export const Badge: VoidFunctionComponent<Properties> = ({
  href,
  src,
  label,
}) => {
  return (
    <ExternalLink href={href} nofollow>
      <img alt={`${label} Badge`} src={src} />
    </ExternalLink>
  )
}
