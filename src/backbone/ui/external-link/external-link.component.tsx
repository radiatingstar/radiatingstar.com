import React, { FunctionComponent } from "react"
import { Styllable } from "../../types/styllable.type"

interface Properties {
  nofollow?: boolean
  noopener?: boolean
  noreferrer?: boolean
  href: string
}

export const ExternalLink: FunctionComponent<Styllable<Properties>> = ({
  href,
  children,
  noopener = true,
  nofollow = false,
  noreferrer = true,
  className,
}) => {
  const relationValues = Object.entries({ noopener, noreferrer, nofollow })
    .filter(([key, value]) => value)
    .map(([key]) => key)
    .join(" ")
  return (
    <a href={href} rel={relationValues} className={className}>
      {children}
    </a>
  )
}
