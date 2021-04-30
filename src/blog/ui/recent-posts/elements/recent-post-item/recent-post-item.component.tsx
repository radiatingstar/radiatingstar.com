import { Link } from "gatsby"
import React, { FunctionComponent } from "react"
import styled from "styled-components"

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
      <ItemLink to={slug}>
        <PostTitle as={"h3"}>{title}</PostTitle>
      </ItemLink>
    </Item>
  )
}

const Item = styled.div<{ last?: boolean }>`
  margin-bottom: ${({ last }) => !last && "1rem"};
`

const PostTitle = styled.h1`
  margin: 0;
`

const ItemLink = styled(Link)`
  &:hover {
    color: var(--red-100);
  }
`
