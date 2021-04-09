import React, { FunctionComponent } from "react"
import { Stylable } from "../../types/stylable.type"

interface Properties {
  nofollow?: boolean
  noopener?: boolean
  noreferrer?: boolean
  href: string
}

/**
 * Component to render a safe external link. Will handle the noopener, noreferrer
 * and nofollow stuff for you.
 *
 * By default, noopener and noreferrer are set on the link.
 *
 * @example
 * <ExternalLink href="https://nasa.gov" nofollow>Go to space!</ExternalLink>
 *
 * @param href The target of the link.
 * @param children Link's content.
 * @param noopener Should the link be noopener? Yes by default.
 * @param noreferrer Should the link be noreferrer? Yes by default.
 * @param nofollow Should the link be nofollow? No by default.
 */
export const ExternalLink: FunctionComponent<Stylable<Properties>> = ({
  href,
  children,
  noopener = true,
  nofollow = false,
  noreferrer = true,
  className,
}) => {
  const relationValues = Object.entries({ noopener, noreferrer, nofollow })
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(" ")
  return (
    <a href={href} rel={relationValues} className={className}>
      {children}
    </a>
  )
}
