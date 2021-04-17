import React, { VoidFunctionComponent } from "react"
import styled from "styled-components"
import { ExternalLink } from "../../../../../backbone"

const ProjectTitle = styled.h1`
  margin-bottom: 0;
`

interface Properties {
  title: string
  link: string
}

export const RecentProjectItem: VoidFunctionComponent<Properties> = ({
  link,
  title,
}) => {
  return (
    <ExternalLink
      href={link}
      nofollow={false}
      noopener={false}
      noreferrer={false}
    >
      <ProjectTitle as={"h3"}>{title}</ProjectTitle>
    </ExternalLink>
  )
}
