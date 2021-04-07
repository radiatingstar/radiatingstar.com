import { Link } from "gatsby"
import React, { FunctionComponent } from "react"
import styled from "styled-components"

const PostTitle = styled.h1`
  margin-bottom: 0;
`

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
      <PostTitle as={"h3"}>{title}</PostTitle>
    </Link>
  )
}
