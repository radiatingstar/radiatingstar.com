import { Link } from "gatsby"
import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { ItemLink } from "../../../../../backbone"

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
      <ItemLink as={Link} to={slug}>
        {title}
      </ItemLink>
    </Item>
  )
}

const Item = styled.div<{ last?: boolean }>`
  margin-bottom: ${({ last }) => !last && "1rem"};
`
