import React, { VoidFunctionComponent } from "react"

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
    <a href={href} rel="noopener nofollow noreferrer">
      <img alt={`${label} Badge`} src={src} />
    </a>
  )
}
