import React, { VoidFunctionComponent } from "react"
import styled from "styled-components"
import { ExternalLink, ItemLink } from "../../../../../backbone"

interface Properties {
  title: string
  link: string
  last?: boolean
}

export const RecentProjectItem: VoidFunctionComponent<Properties> = ({
  link,
  title,
  last,
}) => {
  return (
    <Item last={last}>
      <ItemLink
        as={ExternalLink}
        href={link}
        nofollow={false}
        noopener={false}
        noreferrer={false}
      >
        {title}
      </ItemLink>
    </Item>
  )
}

const Item = styled.div<{ last?: boolean }>`
  margin-bottom: ${({ last }) => !last && "1rem"};
`
