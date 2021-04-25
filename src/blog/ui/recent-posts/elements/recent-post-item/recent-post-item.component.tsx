import { Link } from "gatsby"
import React, { FunctionComponent } from "react"
import styled from "styled-components"

const Item = styled.div<{ last?: boolean }>`
  margin-bottom: ${({ last }) => !last && "1rem"};
`

const PostTitle = styled.h1`
  margin: 0;
`

interface Properties {
  title: string
  slug: string
  last?: boolean
}

export const RecentPostItem: FunctionComponent<Properties> = ({
  title,
  slug,
  last,
}) => {
  return (
    <Item last={last}>
      <Link to={slug}>
        <PostTitle as={"h3"}>{title}</PostTitle>
      </Link>
    </Item>
  )
}
