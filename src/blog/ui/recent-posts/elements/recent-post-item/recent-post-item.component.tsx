import { Link } from "gatsby"
import React, { FunctionComponent } from "react"

interface Properties {
  title: string
  slug: string
}

export const RecentPostItem: FunctionComponent<Properties> = ({
  title,
  slug,
}) => {
  return (
    <Link to={slug}>
      <h3>{title}</h3>
    </Link>
  )
}
