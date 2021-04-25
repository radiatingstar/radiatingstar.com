import React, { VoidFunctionComponent } from "react"
import styled from "styled-components"
import { ExternalLink } from "../../../../../backbone"

const Item = styled.div<{ last?: boolean }>`
  margin-bottom: ${({ last }) => !last && "1rem"};
`

const ProjectTitle = styled.h1`
  margin: 0;
`

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
      <ExternalLink
        href={link}
        nofollow={false}
        noopener={false}
        noreferrer={false}
      >
        <ProjectTitle as={"h3"}>{title}</ProjectTitle>
      </ExternalLink>
    </Item>
  )
}
